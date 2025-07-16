export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	/* sameboostsmod: {
		effectType: 'Rule',
		name: 'Same Boosts Mod',
		desc: "Stat changes to Atk or SpA also effect Def or SpD respectively, and vice versa",
		onBegin() {
			this.add('rule', 'Same Boosts Mod: Changes to Atk/SpA are also applied to Def/SpD');
		},
		onSwap(pokemon) {
			pokemon.addVolatile('sameboost');
		},
	},
	naturemod: {
		effectType: 'Rule',
		name: 'Nature Mod',
		desc: "Hardcodes natures to boost or lower multiple stats at once",
		onBegin() {
			this.add('rule', 'Nature Mod: Allows Natures to boost/lower multiple stats at once');
		},
		onModifyAtkPriority: 11,
		onModifyAtk(atk, pokemon) {
			if (['Adamant', 'Brave', 'Naughty', 'Impish', 'Lax', 'Relaxed'].includes(pokemon.set.nature)) {
				return this.chainModify([4505, 4096]);
			} else if (['Modest', 'Timid', 'Calm', 'Mild', 'Gentle', 'Hasty'].includes(pokemon.set.nature)) {
				return this.chainModify([3686, 4096]);
			}
		},
		onModifyDefPriority: 11,
		onModifyDef(def, pokemon) {
			if (['Adamant', 'Brave', 'Naughty', 'Impish', 'Lax', 'Relaxed'].includes(pokemon.set.nature)) {
				return this.chainModify([4505, 4096]);
			} else if (['Modest', 'Timid', 'Calm', 'Mild', 'Gentle', 'Hasty'].includes(pokemon.set.nature)) {
				return this.chainModify([3686, 4096]);
			}
		},
		onModifySpAPriority: 11,
		onModifySpA(spa, pokemon) {
			if (['Modest', 'Mild', 'Quiet', 'Calm', 'Gentle', 'Sassy'].includes(pokemon.set.nature)) {
				return this.chainModify([4505, 4096]);
			} else if (['Adamant', 'Jolly', 'Naughty', 'Impish', 'Lax', 'Naive'].includes(pokemon.set.nature)) {
				return this.chainModify([3686, 4096]);
			}
		},
		onModifySpDPriority: 11,
		onModifySpD(spd, pokemon) {
			if (['Modest', 'Mild', 'Quiet', 'Calm', 'Gentle', 'Sassy'].includes(pokemon.set.nature)) {
				return this.chainModify([4505, 4096]);
			} else if (['Adamant', 'Jolly', 'Naughty', 'Impish', 'Lax', 'Naive'].includes(pokemon.set.nature)) {
				return this.chainModify([3686, 4096]);
			}
		},
	}, */
};
