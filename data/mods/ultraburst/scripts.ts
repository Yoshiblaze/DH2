export const Scripts: ModdedBattleScriptsData = {
	teambuilderConfig: {
		// only to specify the order of custom tiers
		customTiers: ['Ultra'],
	},
	init() {
		this.modData("Learnsets", "decidueye").learnset.powerwhip = ["9L1"];
		delete this.modData('Learnsets', 'necrozma').learnset.dragondance;
		delete this.modData('Learnsets', 'necrozmaduskmane').learnset.dragondance;
		delete this.modData('Learnsets', 'necrozmadawnwings').learnset.dragondance;
		this.modData("Learnsets", "snorlax").learnset.drainpunch = ["9L1"];
		this.modData("Learnsets", "lycanroc").learnset.morningsun = ["9L1"];
		this.modData("Learnsets", "lycanrocdusk").learnset.morningsun = ["9L1"];
		this.modData("Learnsets", "lycanrocdusk").learnset.moonlight = ["9L1"];
		this.modData("Learnsets", "lycanrocmidnight").learnset.moonlight = ["9L1"];
		this.modData("Learnsets", "mimikyu").learnset.moonblast = ["9L1"];
	},
	actions: {
		inherit: true,
	  	canUltraBurst(pokemon: Pokemon) {
	  		if (['Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane'].includes(pokemon.baseSpecies.name) &&
	  			pokemon.getItem().id === 'ultranecroziumz') {
	  			return "Necrozma-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Pikachu' &&
	  			pokemon.getItem().id === 'pikaniumz') {
	  			return "Pikachu-Ultra";
	  		}
	  		if ([
	          'Pikachu-Original', 'Pikachu-Hoenn', 'Pikachu-Sinnoh',
	          'Pikachu-Unova', 'Pikachu-Kalos', 'Pikachu-Alola', 'Pikachu-Partner'
	        ].includes(pokemon.baseSpecies.name) &&
	  			pokemon.getItem().id === 'pikashuniumz') {
	  			return "Pikachu-Cap-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Raichu-Alola' &&
	  			pokemon.getItem().id === 'aloraichiumz') {
	  			return "Raichu-Alola-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Eevee' &&
	  			pokemon.getItem().id === 'eeviumz') {
	  			return "Eevee-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Snorlax' &&
	  			pokemon.getItem().id === 'snorliumz') {
	  			return "Snorlax-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Mew' &&
	  			pokemon.getItem().id === 'mewniumz') {
	  			return "Mew-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Decidueye' &&
	  			pokemon.getItem().id === 'decidiumz') {
	  			return "Decidueye-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Incineroar' &&
	  			pokemon.getItem().id === 'inciniumz') {
	  			return "Incineroar-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Primarina' &&
	  			pokemon.getItem().id === 'primariumz') {
	  			return "Primarina-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Lycanroc' &&
	  			pokemon.getItem().id === 'lycaniumz') {
	  			return "Lycanroc-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Lycanroc-Midnight' &&
	  			pokemon.getItem().id === 'lycaniumz') {
	  			return "Lycanroc-Midnight-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Lycanroc-Dusk' &&
	  			pokemon.getItem().id === 'lycaniumz') {
	  			return "Lycanroc-Dusk-Ultra";
	  		}
	  		if (['Mimikyu', 'Mimikyu-Totem'].includes(pokemon.baseSpecies.name) &&
	  			pokemon.getItem().id === 'mimikiumz') {
	  			return "Mimikyu-Ultra";
	  		}
	  		if (['Mimikyu-Busted', 'Mimikyu-Busted-Totem'].includes(pokemon.baseSpecies.name) &&
	  			pokemon.getItem().id === 'mimikiumz') {
	  			return "Mimikyu-Busted-Ultra";
	  		}
	  		if (['Kommo-o', 'Kommo-o-Totem'].includes(pokemon.baseSpecies.name) &&
	  			pokemon.getItem().id === 'kommoniumz') {
	  			return "Kommo-o-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Tapu Koko' &&
	  			pokemon.getItem().id === 'tapuniumz') {
	  			return "Tapu Koko-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Tapu Lele' &&
	  			pokemon.getItem().id === 'tapuniumz') {
	  			return "Tapu Lele-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Tapu Bulu' &&
	  			pokemon.getItem().id === 'tapuniumz') {
	  			return "Tapu Bulu-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Tapu Fini' &&
	  			pokemon.getItem().id === 'tapuniumz') {
	  			return "Tapu Fini-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Marshadow' &&
	  			pokemon.getItem().id === 'marshadiumz') {
	  			return "Marshadow-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Solgaleo' &&
	  			pokemon.getItem().id === 'solganiumz') {
	  			return "Solgaleo-Ultra";
	  		}
	  		if (pokemon.species.baseSpecies.name === 'Lunala' &&
	  			pokemon.getItem().id === 'lunaliumz') {
	  			return "Lunala-Ultra";
	  		}
	  		return null;
	  	},
	},
};
