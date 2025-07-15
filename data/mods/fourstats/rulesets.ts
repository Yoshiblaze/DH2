export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	sameboostsmod: {
		effectType: 'Rule',
		name: 'Same Boosts Mod',
		desc: "Stat changes to Atk or SpA also effect Def or SpD respectively, and vice verse",
		onBegin() {
			this.add('rule', 'Same Boosts Mod: Changes to Atk/SpA are also applied to Def/SpD');
		},
		onSwap(pokemon) {
			pokemon.addVolatile('sameboost');
		},
		onStart(pokemon) {
      	const newatk = pokemon.storedStats.def;
      	const newdef = pokemon.storedStats.atk;
      	const newspa = pokemon.storedStats.spd;
      	const newspd = pokemon.storedStats.spa;
			if (pokemon.getStat('spd', false, true) > pokemon.getStat('spa', false, true)) {
        		pokemon.storedStats.spa = newspa;
      	} else if (pokemon.getStat('spa', false, true) > pokemon.getStat('spd', false, true)) {
        		pokemon.storedStats.spd = newspd;
      	}
			if (pokemon.getStat('def', false, true) > pokemon.getStat('atk', false, true)) {
        		pokemon.storedStats.atk = newatk;
      	} else if (pokemon.getStat('atk', false, true) > pokemon.getStat('atk', false, true)) {
        		pokemon.storedStats.def = newdef;
      	}
		},
	},
};
