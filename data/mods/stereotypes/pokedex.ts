export const Pokedex: {[speciesid: string]: SpeciesData} = {
	//Slate 1: Grass, Fire, Water
	prairret: {
		num: 1,
		name: "Prairret",
		types: ["Grass"],
		baseStats: {hp: 85, atk: 105, def: 100, spa: 65, spd: 75, spe: 100},
		abilities: {0: "Overgrow", H: "Poison Heal"},
		heightm: 1.9,
		weightkg: 35.5,
	},
	fluxtape: {
		num: 2,
		name: "Fluxtape",
		types: ["Fire"],
		baseStats: {hp: 60, atk: 89, def: 50, spa: 115, spd: 60, spe: 126},
		abilities: {0: "Flame Body", 1: "Competitive", H: "Flash Fire"},
		heightm: 1.7,
		weightkg: 0.2,
	},
	cetaidon: {
		num: 3,
		name: "Cetaidon",
		types: ["Water"],
		baseStats: {hp: 110, atk: 125, def: 85, spa: 80, spd: 80, spe: 50},
		abilities: {0: "Torrent", H: "Water Veil"},
		heightm: 3.3,
		weightkg: 371.1,
	},
	//Slate 2: Dragon, Fairy, Steel
	drakotomy: {
		num: 4,
		name: "Drakotomy",
		types: ["Dragon"],
		baseStats: {hp: 95, atk: 100, def: 105, spa: 90, spd: 80, spe: 40},
		abilities: {0: "Regenerator", H: "Hustle"},
		heightm: 4.1,
		weightkg: 462.3,
	},
	gencook: {
		num: 5,
		name: "Gencook",
		types: ["Fairy"],
		baseStats: {hp: 80, atk: 70, def: 110, spa: 90, spd: 120, spe: 60},
		abilities: {0: "Ripen", 1: "Gluttony", H: "Oblivious"},
		heightm: 1.2,
		weightkg: 115.3,
	},
	heraleo: {
		num: 6,
		name: "Heraleo",
		types: ["Steel"],
		baseStats: {hp: 65, atk: 100, def: 125, spa: 75, spd: 85, spe: 75},
		abilities: {0: "Dauntless Shield", 1: "Intimidate", H: "Tough Claws"},
		heightm: 1.0,
		weightkg: 205.0,
	},
	//Slate 3: Dark, Fighting, Psychic
	fenaftmos: {
		num: 9,
		name: "Fenaftmos",
		types: ["Dark"],
		baseStats: {hp: 90, atk: 110, def: 70, spa: 80, spd: 70, spe: 110},
		abilities: {0: "Tough Claws", 1: "Unnerve", H: "Mega Launcher"},
		heightm: 1.0,
		weightkg: 78,
	},
	dojodo: {
		num: 8,
		name: "Dojodo",
		types: ["Fighting"],
		baseStats: {hp: 90, atk: 115, def: 80, spa: 60, spd: 100, spe: 80},
		abilities: {0: "Justified", 1: "Iron Fist", H: "Stamina"},
		heightm: 1.0,
		weightkg: 34.8,
	},
	harzodia: {
		num: 7,
		name: "Harzodia",
		types: ["Psychic"],
		baseStats: {hp: 75, atk: 55, def: 65, spa: 130, spd: 125, spe: 90},
		abilities: {0: "Magician", 1: "Victory Star", H: "Telepathy"},
		heightm: 1.0,
		weightkg: 26.1,
	},
	//Slate 4: Flying, Ground, Rock
};