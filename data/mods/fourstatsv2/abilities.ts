export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	beadsofruin: {
		inherit: true,
		onAnyModifySpA(spa, source, target, move) {
			const abilityHolder = this.effectState.target;
			if (source.hasAbility('Beads of Ruin')) return;
			if (!move.ruinedSpA) move.ruinedSpA = abilityHolder;
			if (move.ruinedSpA !== abilityHolder) return;
			this.debug('Beads of Ruin SpA drop');
			return this.chainModify(0.75);
		}, 
		shortDesc: "Active Pokemon without this Ability have their Special multiplied by 0.75.",
	},
	vesselofruin: {
		inherit: true,
		onAnyModifySpD(spd, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Vessel of Ruin')) return;
			if (!move.ruinedSpD?.hasAbility('Vessel of Ruin')) move.ruinedSpD = abilityHolder;
			if (move.ruinedSpD !== abilityHolder) return;
			this.debug('Vessel of Ruin SpD drop');
			return this.chainModify(0.75);
		},
		shortDesc: "Active Pokemon without this Ability have their Special multiplied by 0.75.",
	},
	bigpecks: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
		},
		flags: {breakable: 1},
		name: "Big Pecks",
		rating: 0.5,
		num: 145,
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Physical stat stage.",
	},
	hypercutter: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
		},
		flags: {breakable: 1},
		name: "Hyper Cutter",
		rating: 1.5,
		num: 52,
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Physical stat stage.",
	},
	defeatist: {
		inherit: true,
		onModifyDefPriority: 5,
		onModifyDef(def, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		onModifySpDPriority: 5,
		onModifySpD(def, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Physical and Special are halved.",
	},
	flowergift: {
 		inherit: true,
		onAllyModifyDefPriority: 4,
		onAllyModifyDef(def, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
  		onAllyModifySpAPriority: 3,
		onAllyModifySpA(spa, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Physical and Special are 1.5x.",
	},
	furcoat: {
 		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		shortDesc: "This Pokemon's Physical is doubled.",
	},
	hugepower: {
 		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		shortDesc: "This Pokemon's Physical is doubled.",
	},
	purepower: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		shortDesc: "This Pokemon's Physical is doubled.",
	},
	gorillatactics: {
    inherit: true,
  		onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Gorilla Tactics Atk Boost');
			return this.chainModify(1.5);
		},
		shortDesc: "This Pokemon's Physical is 1.5x, but it can only select the first move it executes.",
	},
	grasspelt: {
 		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return this.chainModify(1.5);
		},
		shortDesc: "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",
	},
	guts: {
 		inherit: true,
		onModifyAtkPriority: 6,
		onModifyDef(def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		shortDesc: "If this Pokemon is statused, its Physical is 1.5x; ignores burn halving physical damage.",
	},
	hadronengine: {
 		inherit: true,
		onModifySpDPriority: 6,
		onModifySpD(spd, attacker, defender, move) {
			if (this.field.isTerrain('electricterrain')) {
				this.debug('Hadron Engine boost');
				return this.chainModify([5461, 4096]);
			}
		},
		shortDesc: "On switch-in, summons Electric Terrain. During Electric Terrain, Special is 1.3333x.",
	},
	orichalcumpulse: {
 		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(spd, attacker, defender, move) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				this.debug('Orichalcum boost');
				return this.chainModify([5461, 4096]);
			}
		},
		shortDesc: "On switch-in, summons Sunny Day. During Sunny Day, Physical is 1.3333x.",
	},
	hustle: {
 		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.modify(def, 1.5);
		},
		shortDesc: "This Pokemon's Physical is 1.5x and accuracy of its physical attacks is 0.8x.",
	},
	marvelscale: {
 		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		shortDesc: "If this Pokemon has a non-volatile status condition, its Physical is multiplied by 1.5.",
	},
	minus: {
 		inherit: true,
		onModifySpDPriority: 6,
		onModifySpD(spd, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		shortDesc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Special is 1.5x.",
	},
	plus: {
 		inherit: true,
		onModifySpDPriority: 6,
		onModifySpD(spd, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		shortDesc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Special is 1.5x.",
	},
	protosynthesis: {
		inherit: true,
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				if (effect?.name === 'Booster Energy') {
					this.effectState.fromBooster = true;
					this.add('-activate', pokemon, 'ability: Protosynthesis', '[fromitem]');
				} else {
					this.add('-activate', pokemon, 'ability: Protosynthesis');
				}
				this.effectState.bestStat = pokemon.getBestStat(false, true);
				this.add('-start', pokemon, 'protosynthesis' + this.effectState.bestStat);
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				if (pokemon.ignoringAbility()) return;
				if (this.effectState.bestStat === 'atk' || this.effectState.bestStat === 'def') {
					this.debug('Protosynthesis atk boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onModifyDefPriority: 6,
			onModifyDef(def, pokemon) {
				if (pokemon.ignoringAbility()) return;
				if (this.effectState.bestStat === 'atk' || this.effectState.bestStat === 'def') {
					this.debug('Protosynthesis def boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(spa, pokemon) {
				if (pokemon.ignoringAbility()) return;
				if (this.effectState.bestStat === 'spa' || this.effectState.bestStat === 'spd') {
					this.debug('Protosynthesis spa boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onModifySpDPriority: 6,
			onModifySpD(spd, pokemon) {
				if (pokemon.ignoringAbility()) return;
				if (this.effectState.bestStat === 'spa' || this.effectState.bestStat === 'spd') {
					this.debug('Protosynthesis spd boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onModifySpe(spe, pokemon) {
				if (this.effectState.bestStat !== 'spe' || pokemon.ignoringAbility()) return;
				this.debug('Protosynthesis spe boost');
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Protosynthesis');
			},
		},
	},
	quarkdrive: {
		inherit: true,
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				if (effect?.name === 'Booster Energy') {
					this.effectState.fromBooster = true;
					this.add('-activate', pokemon, 'ability: Quark Drive', '[fromitem]');
				} else {
					this.add('-activate', pokemon, 'ability: Quark Drive');
				}
				this.effectState.bestStat = pokemon.getBestStat(false, true);
				this.add('-start', pokemon, 'quarkdrive' + this.effectState.bestStat);
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				if (pokemon.ignoringAbility()) return;
				if (this.effectState.bestStat === 'atk' || this.effectState.bestStat === 'def') {
					this.debug('Quark Drive atk boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onModifyDefPriority: 6,
			onModifyDef(def, pokemon) {
				if (pokemon.ignoringAbility()) return;
				if (this.effectState.bestStat === 'atk' || this.effectState.bestStat === 'def') {
					this.debug('Quark Drive def boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(spa, pokemon) {
				if (pokemon.ignoringAbility()) return;
				if (this.effectState.bestStat === 'spa' || this.effectState.bestStat === 'spd') {
					this.debug('Quark Drive spa boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onModifySpDPriority: 6,
			onModifySpD(spd, pokemon) {
				if (pokemon.ignoringAbility()) return;
				if (this.effectState.bestStat === 'spa' || this.effectState.bestStat === 'spd') {
					this.debug('Quark Drive spd boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onModifySpe(spe, pokemon) {
				if (this.effectState.bestStat !== 'spe' || pokemon.ignoringAbility()) return;
				this.debug('Quark Drive spe boost');
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Quark Drive');
			},
		},
	},
	slowstart: {
		inherit: true,
		condition: {
			duration: 5,
			onResidualOrder: 28,
			onResidualSubOrder: 2,
			onStart(target) {
				this.add('-start', target, 'ability: Slow Start');
			},
			onResidual(pokemon) {
				if (!pokemon.activeTurns) {
					this.effectState.duration += 1;
				}
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				return this.chainModify(0.5);
			},
			onModifyDefPriority: 6,
			onModifyDef(def, pokemon) {
				return this.chainModify(0.5);
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.5);
			},
			onEnd(target) {
				this.add('-end', target, 'Slow Start');
			},
		},
		shortDesc: "On switch-in, this Pokemon's Physical and Speed are halved for 5 turns.",
	},
	solarpower: {
		inherit: true,
		onModifySpDPriority: 6,
		onModifySpD(spd, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		shortDesc: "If Sunny Day is active, this Pokemon's Special is 1.5x; loses 1/8 max HP per turn.",
	},
	swordofruin: {
		inherit: true,
		onAnyModifyAtk(atk, source, target, move) {
			const abilityHolder = this.effectState.target;
			if (source.hasAbility('Sword of Ruin')) return;
			if (!move.ruinedAtk) move.ruinedAtk = abilityHolder;
			if (move.ruinedAtk !== abilityHolder) return;
			this.debug('Sword of Ruin Atk drop');
			return this.chainModify(0.75);
		},
		shortDesc: "Active Pokemon without this Ability have their Physical multiplied by 0.75.",
	},
	tabletsofruin: {
		inherit: true,
		onAnyModifyDef(def, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Tablets of Ruin')) return;
			if (!move.ruinedDef?.hasAbility('Tablets of Ruin')) move.ruinedDef = abilityHolder;
			if (move.ruinedDef !== abilityHolder) return;
			this.debug('Tablets of Ruin Def drop');
			return this.chainModify(0.75);
		},
		shortDesc: "Active Pokemon without this Ability have their Physical multiplied by 0.75.",
	},
	angerpoint: {
		inherit: true,
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				this.boost({def: 12}, target, target);
			}
		},
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Physical is raised 12 stages.",
	},
	angershell: {
		inherit: true,
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedAngerShell = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({spe: 1}, target, target);
			}
		},
		shortDesc: "At 1/2 or less of this Pokemon's max HP: +1 Speed.",
	},
	battlebond: {
		inherit: true,
		onSourceAfterFaint(length, target, source, effect) {
			if (effect?.effectType !== 'Move') return;
			if (source.abilityState.battleBondTriggered) return;
			if (source.species.id === 'greninjabond' && source.hp && !source.transformed && source.side.foePokemonLeft()) {
				this.boost({def: 1, spd: 1, spe: 1}, source, source, this.effect);
				this.add('-activate', source, 'ability: Battle Bond');
				source.abilityState.battleBondTriggered = true;
			}
		},
		shortDesc: "After KOing a Pokemon: raises Physical, Special, Speed by 1 stage. Once per battle.",
	},
	berserk: {
		inherit: true,
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit && !move.smartTarget ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({spd: 1}, target, target);
			}
		},
		shortDesc: "At 1/2 or less of this Pokemon's max HP: +1 Special.",
	},
	chillingneigh: {
		inherit: true,
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({def: length}, source);
			}
		},
		shortDesc: "This Pokemon's Physical is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	moxie: {
		inherit: true,
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({def: length}, source);
			}
		},
		shortDesc: "This Pokemon's Physical is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	grimneigh: {
		inherit: true,
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spd: length}, source);
			}
		},
		shortDesc: "This Pokemon's Special is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	competitive: {
		inherit: true,
		onAfterEachBoost(boost, target, source, effect) {
			if (!source || target.isAlly(source)) {
				return;
			}
			let statsLowered = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({spd: 2}, target, target, null, false, true);
			}
		},
		shortDesc: "This Pokemon's Special is raised by 2 for each of its stats that is lowered by a foe.",
	},
	defiant: {
		inherit: true,
		onAfterEachBoost(boost, target, source, effect) {
			if (!source || target.isAlly(source)) {
				return;
			}
			let statsLowered = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({def: 2}, target, target, null, false, true);
			}
		},
		shortDesc: "This Pokemon's Physical is raised by 2 for each of its stats that is lowered by a foe.",
	},
	guarddog: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.def) {
				delete boost.def;
				this.boost({def: 1}, target, target, null, false, true);
			}
		},
		shortDesc: "Immune to Intimidate. Intimidated: +1 Physical. Cannot be forced to switch out.",
	},
	innerfocus: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.def) {
				delete boost.def;
				this.add('-fail', target, 'unboost', 'Defense', '[from] ability: Inner Focus', '[of] ' + target);
			}
		},
	},
	oblivious: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.def) {
				delete boost.def;
				this.add('-fail', target, 'unboost', 'Defense', '[from] ability: Oblivious', '[of] ' + target);
			}
		},
	},
	owntempo: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.def) {
				delete boost.def;
				this.add('-fail', target, 'unboost', 'Defense', '[from] ability: Own Tempo', '[of] ' + target);
			}
		},
	},
	scrappy: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.def) {
				delete boost.def;
				this.add('-fail', target, 'unboost', 'Defense', '[from] ability: Scrappy', '[of] ' + target);
			}
		},
	},
	gulpmissile: {
		inherit: true,
		shortDesc: "When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Physical or paralysis.",
	},
	intimidate: {
		inherit: true,
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({def: -1}, target, pokemon, null, true);
				}
			}
		},
		shortDesc: "On switch-in, this Pokemon lowers the Physical of opponents by 1 stage.",
	},
	intrepidsword: {
		inherit: true,
		onStart(pokemon) {
			if (pokemon.swordBoost) return;
			pokemon.swordBoost = true;
			this.boost({def: 1}, pokemon);
		},
		shortDesc: "On switch-in, this Pokemon's Physical is raised by 1 stage. Once per battle.",
	},
	dauntlessshield: {
		inherit: true,
		shortDesc: "On switch-in, this Pokemon's Physical is raised by 1 stage. Once per battle.",
	},
	embodyaspectcornerstone: {
		inherit: true,
		shortDesc: "On switch-in, this Pokemon's Physical is raised by 1 stage.",
	},
	embodyaspecthearthflame: {
		inherit: true,
		onStart(pokemon) {
			if (pokemon.baseSpecies.name === 'Ogerpon-Hearthflame-Tera' && !this.effectState.embodied) {
				this.effectState.embodied = true;
				this.boost({def: 1}, pokemon);
			}
		},
		shortDesc: "On switch-in, this Pokemon's Physical is raised by 1 stage.",
	},
	embodyaspectwellspring: {
		inherit: true,
		shortDesc: "On switch-in, this Pokemon's Special is raised by 1 stage.",
	},
	justified: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Dark') {
				this.boost({def: 1});
			}
		},
		shortDesc: "This Pokemon's Physical is raised by 1 stage after it is damaged by a Dark-type move.",
	},
	lightningrod: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spd: 1})) {
					this.add('-immune', target, '[from] ability: Lightning Rod');
				}
				return null;
			}
		},
		shortDesc: "This Pokemon draws Electric moves to itself to raise Special by 1; Electric immunity.",
	},
	sapsipper: {
		inherit: true,
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Grass') {
				if (!this.boost({def: 1})) {
					this.add('-immune', target, '[from] ability: Sap Sipper');
				}
				return null;
			}
		},
		shortDesc: "This Pokemon's Physical is raised 1 stage if hit by a Grass move; Grass immunity.",
	},
	soulheart: {
		inherit: true,
		onAnyFaintPriority: 1,
		onAnyFaint() {
			this.boost({spd: 1}, this.effectState.target);
		},
		shortDesc: "This Pokemon's Special is raised by 1 stage when another Pokemon faints.",
	},
	stormdrain: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spd: 1})) {
					this.add('-immune', target, '[from] ability: Storm Drain');
				}
				return null;
			}
		},
		shortDesc: "This Pokemon draws Water moves to itself to raise Special by 1; Water immunity.",
	},
	thermalexchange: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire') {
				this.boost({def: 1});
			}
		},
		shortDesc: "This Pokemon's Physical is raised by 1 when damaged by Fire moves; can't be burned.",
	},
	watercompaction: {
		inherit: true,
		shortDesc: "This Pokemon's Physical is raised 2 stages after it is damaged by a Water-type move.",
	},
	weakarmor: {
		inherit: true,
		shortDesc: "If a physical attack hits this Pokemon, Physical is lowered by 1, Speed is raised by 2.",
	},
	wellbakedbody: {
		inherit: true,
		shortDesc: "This Pokemon's Physical is raised 2 stages if hit by a Fire move; Fire immunity.",
	},
	windrider: {
		inherit: true,
		onStart(pokemon) {
			if (pokemon.side.sideConditions['tailwind']) {
				this.boost({def: 1}, pokemon, pokemon);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.flags['wind']) {
				if (!this.boost({def: 1}, target, target)) {
					this.add('-immune', target, '[from] ability: Wind Rider');
				}
				return null;
			}
		},
		onAllySideConditionStart(target, source, sideCondition) {
			const pokemon = this.effectState.target;
			if (sideCondition.id === 'tailwind') {
				this.boost({def: 1}, pokemon, pokemon);
			}
		},
		shortDesc: "Physical raised by 1 if hit by a wind move or Tailwind begins. Wind move immunity.",
	},
	download: {
		inherit: true,
		onStart(pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.foes()) {
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spd: 1});
			} else if (totalspd) {
				this.boost({def: 1});
			}
		},
		shortDesc: "On switch-in, Physical or Special is raised 1 stage based on the foes' weaker stat.",
	},
	blaze: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
	},
	overgrow: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
	},
	swarm: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
	},
	torrent: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
	},
	thickfat: {
		inherit: true,
		onSourceModifyDefPriority: 6,
		onSourceModifyDef(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpDPriority: 5,
		onSourceModifySpD(spd, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
	},
	dragonsmaw: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
	},
	transistor: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify([5325, 4096]);
			}
		},
	},
	waterbubble: {
		inherit: true,
		onSourceModifyDefPriority: 5,
		onSourceModifyDef(def, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpDPriority: 5,
		onSourceModifySpD(spd, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onModifySpD(spd, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
	},
	flashfire: {
		inherit: true,
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Flash Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onModifyDefPriority: 5,
			onModifyDef(def, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpDPriority: 5,
			onModifySpD(spd, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			},
		},
	},
	heatproof: {
		inherit: true,
		onSourceModifyDefPriority: 6,
		onSourceModifyDef(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Heatproof weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpDPriority: 5,
		onSourceModifySpD(spd, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Heatproof weaken');
				return this.chainModify(0.5);
			}
		},
	},
	purifyingsalt: {
		inherit: true,
		onSourceModifyDefPriority: 6,
		onSourceModifyDef(atk, attacker, defender, move) {
			if (move.type === 'Ghost') {
				this.debug('Purifying Salt weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpDPriority: 5,
		onSourceModifySpD(spd, attacker, defender, move) {
			if (move.type === 'Ghost') {
				this.debug('Purifying Salt weaken');
				return this.chainModify(0.5);
			}
		},
	},
	rockypayload: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Rocky Payload boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Rocky Payload boost');
				return this.chainModify(1.5);
			}
		},
	},
	steelworker: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
	},
	stakeout: {
		inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def, attacker, defender, move) {
			if (!defender.activeTurns) {
				this.debug('Stakeout boost');
				return this.chainModify(2);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(def, attacker, defender, move) {
			if (!defender.activeTurns) {
				this.debug('Stakeout boost');
				return this.chainModify(2);
			}
		},
	},
};
