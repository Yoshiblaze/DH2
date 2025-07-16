export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	pokemon: {
		inherit: true,
		calculateStat(statName: StatIDExceptHP, boost: number, modifier?: number, statUser?: Pokemon) {
			statName = toID(statName) as StatIDExceptHP;
			// @ts-ignore - type checking prevents 'hp' from being passed, but we're paranoid
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
			// @ts-ignore - type checking prevents 'hp' from being passed, but we're paranoid
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
		},
	},
};
