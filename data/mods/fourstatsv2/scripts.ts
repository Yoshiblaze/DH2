export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	actions: {
		inherit: true,
		getDamage(
			source: Pokemon, target: Pokemon, move: string | number | ActiveMove,
			suppressMessages = false
		): number | undefined | null | false {
			if (typeof move === 'string') move = this.dex.getActiveMove(move);
			if (typeof move === 'number') {
				const basePower = move;
				move = new Dex.Move({
					basePower,
					type: '???',
					category: 'Physical',
					willCrit: false,
				}) as ActiveMove;
				move.hit = 0;
			}
			if (!move.ignoreImmunity || (move.ignoreImmunity !== true && !move.ignoreImmunity[move.type])) {
				if (!target.runImmunity(move.type, !suppressMessages)) {
					return false;
				}
			}
			if (move.ohko) return target.maxhp;
			if (move.damageCallback) return move.damageCallback.call(this.battle, source, target);
			if (move.damage === 'level') {
				return source.level;
			} else if (move.damage) {
				return move.damage;
			}
			const category = this.battle.getCategory(move);
			let basePower: number | false | null = move.basePower;
			if (move.basePowerCallback) {
				basePower = move.basePowerCallback.call(this.battle, source, target, move);
			}
			if (!basePower) return basePower === 0 ? undefined : basePower;
			basePower = this.battle.clampIntRange(basePower, 1);
			let critMult;
			let critRatio = this.battle.runEvent('ModifyCritRatio', source, target, move, move.critRatio || 0);
			if (this.battle.gen <= 5) {
				critRatio = this.battle.clampIntRange(critRatio, 0, 5);
				critMult = [0, 16, 8, 4, 3, 2];
			} else {
				critRatio = this.battle.clampIntRange(critRatio, 0, 4);
				if (this.battle.gen === 6) {
					critMult = [0, 16, 8, 2, 1];
				} else {
					critMult = [0, 24, 8, 2, 1];
				}
			}
			const moveHit = target.getMoveHitData(move);
			moveHit.crit = move.willCrit || false;
			if (move.willCrit === undefined) {
				if (critRatio) {
					moveHit.crit = this.battle.randomChance(1, critMult[critRatio]);
				}
			}
			if (moveHit.crit) {
				moveHit.crit = this.battle.runEvent('CriticalHit', target, null, move);
			}
			// happens after crit calculation
			basePower = this.battle.runEvent('BasePower', source, target, move, basePower, true);
			if (!basePower) return 0;
			basePower = this.battle.clampIntRange(basePower, 1);
			// Hacked Max Moves have 0 base power, even if you Dynamax
			if ((!source.volatiles['dynamax'] && move.isMax) || (move.isMax && this.dex.moves.get(move.baseMove).isMax)) {
				basePower = 0;
			}
			if (
				basePower < 60 && source.getTypes(true).includes(move.type) && source.terastallized && move.priority <= 0 &&
				// Hard move.basePower check for moves like Dragon Energy that have variable BP
				!move.multihit && !((move.basePower === 0 || move.basePower === 150) && move.basePowerCallback)
			) {
				basePower = 60;
			}
			const level = source.level;
			const attacker = move.overrideOffensivePokemon === 'target' ? target : source;
			const defender = move.overrideDefensivePokemon === 'source' ? source : target;
			const isPhysical = move.category === 'Physical';
			let attackStat: StatIDExceptHP = move.overrideOffensiveStat || (isPhysical ? 'def' : 'spd'); // make it use def and spd for everything
			const defenseStat: StatIDExceptHP = move.overrideDefensiveStat || (isPhysical ? 'def' : 'spd');
			const statTable = {atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe'};
			let atkBoosts = attacker.boosts[attackStat];
			let defBoosts = defender.boosts[defenseStat];
			let ignoreNegativeOffensive = !!move.ignoreNegativeOffensive;
			let ignorePositiveDefensive = !!move.ignorePositiveDefensive;
			if (moveHit.crit) {
				ignoreNegativeOffensive = true;
				ignorePositiveDefensive = true;
			}
			const ignoreOffensive = !!(move.ignoreOffensive || (ignoreNegativeOffensive && atkBoosts < 0));
			const ignoreDefensive = !!(move.ignoreDefensive || (ignorePositiveDefensive && defBoosts > 0));
			if (ignoreOffensive) {
				this.battle.debug('Negating (sp)atk boost/penalty.');
				atkBoosts = 0;
			}
			if (ignoreDefensive) {
				this.battle.debug('Negating (sp)def boost/penalty.');
				defBoosts = 0;
			}
			let attack = attacker.calculateStat(attackStat, atkBoosts, 1, source);
			let defense = defender.calculateStat(defenseStat, defBoosts, 1, target);
	
			attackStat = (category === 'Physical' ? 'def' : 'spd');
			// Apply Stat Modifiers
			attack = this.battle.runEvent('Modify' + statTable[attackStat], source, target, move, attack);
			defense = this.battle.runEvent('Modify' + statTable[defenseStat], target, source, move, defense);
			if (this.battle.gen <= 4 && ['explosion', 'selfdestruct'].includes(move.id) && defenseStat === 'def') {
				defense = this.battle.clampIntRange(Math.floor(defense / 2), 1);
			}
			const tr = this.battle.trunc;
			// int(int(int(2 * L / 5 + 2) * A * P / D) / 50);
			const baseDamage = tr(tr(tr(tr(2 * level / 5 + 2) * basePower * attack) / defense) / 50);
			// Calculate damage modifiers separately (order differs between generations)
			return this.modifyDamage(baseDamage, source, target, move, suppressMessages);
		},
		getConfusionDamage(pokemon: Pokemon, basePower: number) {
			const tr = this.battle.trunc;
			const attack = pokemon.calculateStat('def', pokemon.boosts['def']);
			const defense = pokemon.calculateStat('def', pokemon.boosts['def']);
			const level = pokemon.level;
			const baseDamage = tr(tr(tr(tr(2 * level / 5 + 2) * basePower * attack) / defense) / 50) + 2;
			// Damage is 16-bit context in self-hit confusion damage
			let damage = tr(baseDamage, 16);
			damage = this.battle.randomizer(damage);
			return Math.max(1, damage);
		},
	},
	pokemon: {
		inherit: true,
		/* calculateStat(statName: StatIDExceptHP, boost: number, modifier?: number, statUser?: Pokemon) {
			statName = toID(statName) as StatIDExceptHP;
			if (statName === 'hp') throw new Error("Please read `maxhp` directly");
			// base stat
			let stat = this.storedStats[statName];
			// Wonder Room swaps defenses before calculating anything else
			if ('wonderroom' in this.battle.field.pseudoWeather) {
				if (statName === 'def') {
					stat = this.storedStats['spd'];
				} else if (statName === 'spd') {
					stat = this.storedStats['def'];
				} else if (statName === 'atk') {
					stat = this.storedStats['spa'];
				} else if (statName === 'spa') {
					stat = this.storedStats['atk'];
				}
			}
			// stat boosts
			let boosts: SparseBoostsTable = {};
			const boostName = statName as BoostID;
			boosts[boostName] = boost;
			boosts = this.battle.runEvent('ModifyBoost', statUser || this, null, null, boosts);
			boost = boosts[boostName]!;
			const boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
			if (boost > 6) boost = 6;
			if (boost < -6) boost = -6;
			if (boost >= 0) {
				stat = Math.floor(stat * boostTable[boost]);
			} else {
				stat = Math.floor(stat / boostTable[-boost]);
			}
			// stat modifier
			return this.battle.modify(stat, (modifier || 1));
		},
		getStat(statName: StatIDExceptHP, unboosted?: boolean, unmodified?: boolean) {
			statName = toID(statName) as StatIDExceptHP;
			if (statName === 'hp') throw new Error("Please read `maxhp` directly");
			// base stat
			let stat = this.storedStats[statName];
			// Download ignores Wonder Room's effect, but this results in
			// stat stages being calculated on the opposite defensive stat
			if (unmodified && 'wonderroom' in this.battle.field.pseudoWeather) {
				if (statName === 'def') {
					statName = 'spd';
				} else if (statName === 'spd') {
					statName = 'def';
				} else if (statName === 'atk') {
					statName = 'spa';
				} else if (statName === 'spa') {
					statName = 'atk';
				}
			}
			// stat boosts
			if (!unboosted) {
				const boosts = this.battle.runEvent('ModifyBoost', this, null, null, {...this.boosts});
				let boost = boosts[statName];
				const boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
				if (boost > 6) boost = 6;
				if (boost < -6) boost = -6;
				if (boost >= 0) {
					stat = Math.floor(stat * boostTable[boost]);
				} else {
					stat = Math.floor(stat / boostTable[-boost]);
				}
			}
			// stat modifier effects
			if (!unmodified) {
				const statTable: {[s in StatIDExceptHP]: string} = {atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe'};
				stat = this.battle.runEvent('Modify' + statTable[statName], this, null, null, stat);
			}
			if (statName === 'spe' && stat > 10000 && !this.battle.format.battle?.trunc) stat = 10000;
			return stat;
		}, */
	},
};
