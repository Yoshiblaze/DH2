export const Rulesets: {[k: string]: ModdedFormatData} = {
	speciesclause: {
		inherit: true,
		onBegin() {
			this.add('rule', 'Species Clause: Limit one of each Pokémon');
			for (const side of this.sides) {
				for (const pokemon of side.pokemon) {
					if (pokemon.set.ability === 'M I L F') side.addFishingTokens(2);
				}
			}
		},
		onSwitchIn(pokemon) {
			if (pokemon.big) {
				pokemon.addVolatile('bigbutton');
			}
			if (pokemon.baseSpecies.baseSpecies === 'Ohmyrod') {
				this.add('-message', 'it is ohmyrod time :D');
			}
			if (pokemon.set.nature === 'Serious') {
				if (pokemon.addType('Serious')) this.add('-start', pokemon, 'typeadd', 'Serious');
			}
		},
	},
};