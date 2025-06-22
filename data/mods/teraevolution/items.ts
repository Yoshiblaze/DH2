export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
  cornerstonemask: {
		name: "Cornerstone Mask",
		spritenum: 758,
		fling: {
			basePower: 60,
		},
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Ogerpon') {
	  			if (pokemon.side.sideConditions['teraused']) {
	  				pokemon.canTerastallize = null;
	  			} else {
	        		pokemon.canTerastallize = this.actions.canTerastallize(pokemon);
	  			}
      	}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ogerpon') return false;
			return true;
		},
		forcedForme: "Ogerpon-Cornerstone",
		itemUser: ["Ogerpon-Cornerstone"],
		num: 2406,
		gen: 9,
		desc: "Ogerpon-Cornerstone: Tera Evolve to gain Embody Aspect.",
	},
	hearthflamemask: {
		name: "Hearthflame Mask",
		spritenum: 760,
		fling: {
			basePower: 60,
		},
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Ogerpon') {
	  			if (pokemon.side.sideConditions['teraused']) {
	  				pokemon.canTerastallize = null;
	  			} else {
	        		pokemon.canTerastallize = this.actions.canTerastallize(pokemon);
	  			}
      	}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ogerpon') return false;
			return true;
		},
		forcedForme: "Ogerpon-Hearthflame",
		itemUser: ["Ogerpon-Hearthflame"],
		num: 2408,
		gen: 9,
		desc: "Ogerpon-Hearthflame: Tera Evolve to gain Embody Aspect.",
	},
	wellspringmask: {
		name: "Wellspring Mask",
		spritenum: 759,
		fling: {
			basePower: 60,
		},
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Ogerpon') {
	  			if (pokemon.side.sideConditions['teraused']) {
	  				pokemon.canTerastallize = null;
	  			} else {
	        		pokemon.canTerastallize = this.actions.canTerastallize(pokemon);
	  			}
      	}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ogerpon') return false;
			return true;
		},
		forcedForme: "Ogerpon-Wellspring",
		itemUser: ["Ogerpon-Wellspring"],
		num: 2407,
		gen: 9,
		desc: "Ogerpon-Wellspring: Tera Evolve to gain Embody Aspect.",
	},
	tealmask: {
		name: "Teal Mask",
		spritenum: 2,
		fling: {
			basePower: 60,
		},
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Ogerpon') {
	  			if (pokemon.side.sideConditions['teraused']) {
	  				pokemon.canTerastallize = null;
	  			} else {
	        		pokemon.canTerastallize = this.actions.canTerastallize(pokemon);
	  			}
      	}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ogerpon') return false;
			return true;
		},
		itemUser: ["Ogerpon"],
		num: -1000,
		gen: 9,
		desc: "Ogerpon-Teal: Tera Evolve to gain Embody Aspect.",
	},
	terashard: {
		name: "Tera Shard",
		spritenum: 658,
		onTakeItem: false,
		onStart(pokemon) {
			if ([
					'Meowscarada', 'Skeledirge', 'Quaquaval', 'Pawmot', 'Mabosstiff', 'Glimmora', 'Ursaluna', 'Sudowoodo', 'Mismagius',
					'Crabominable', 'Toxtricity', 'Florges', 'Altaria', 'Clodsire', 'Tinkaton', 'Flamigo', 'Hydrapple', 'Dragonite', 'Cinccino',
					'Grafaiai', 'Serperior', 'Emboar', 'Samurott', 'Cyclizar', 'Breloom', 'Mamoswine', 'Dewgong', 'Malamar', 'Toxicroak',
					'Kricketune', 'Granbull', 'Spiritomb', 'Clawitzer', 'Dragalge', 'Dusknoir', 'Volcanion', 'Greedent', 'Honchkrow', 'Zoroark',
					'Armarouge', 'Ceruledge', 'Baxcalibur', 'Koraidon', 'Miraidon', 'Terapagos'
				].includes(pokemon.baseSpecies.baseSpecies)) {
	  			if (pokemon.side.sideConditions['teraused']) {
	  				pokemon.canTerastallize = null;
	  			} else {
	        		pokemon.canTerastallize = this.actions.canTerastallize(pokemon);
	  			}
      	}
		},
		itemUser: [
			'Meowscarada', 'Skeledirge', 'Quaquaval', 'Pawmot', 'Mabosstiff', 'Glimmora', 'Ursaluna', 'Sudowoodo', 'Mismagius',
			'Crabominable', 'Toxtricity', 'Florges', 'Altaria', 'Clodsire', 'Tinkaton', 'Flamigo', 'Hydrapple', 'Dragonite', 'Cinccino',
			'Grafaiai', 'Serperior', 'Emboar', 'Samurott', 'Cyclizar', 'Breloom', 'Mamoswine', 'Dewgong', 'Malamar', 'Toxicroak',
			'Kricketune', 'Granbull', 'Spiritomb', 'Clawitzer', 'Dragalge', 'Dusknoir', 'Volcanion', 'Greedent', 'Honchkrow', 'Zoroark',
			'Armarouge', 'Ceruledge', 'Baxcalibur', 'Koraidon', 'Miraidon', 'Terapagos', 'Samurott-Hisui', 'Zoroark-Hisui', 'Toxtricity-Low-Key' 
		],
		num: -1001,
		gen: 9,
		desc: "Allows certain Pokemon to Tera Evolve.",
	},
};
