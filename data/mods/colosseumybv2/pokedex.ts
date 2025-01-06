export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	smeargle: {
		inherit: true,
		otherFormes: ["Pokestar Smeargle"],
		formeOrder: ["Smeargle", "Pokestar Smeargle"],
	},
	pokestarsmeargle: {
		num: 235,
		name: "Pokestar Smeargle",
		baseSpecies: "Smeargle",
		forme: "Pokestar",
		types: ["Normal"],
		baseStats: {hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75},
		abilities: {0: "Costar", 1: "Technician", H: "Moody"},
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		gen: 9,
	},
	lugia: {
		inherit: true,
		otherFormes: ["Shadow Lugia"],
		formeOrder: ["Lugia", "Shadow Lugia"],
	},
	shadowlugia: {
		num: 249,
		name: "Shadow Lugia",
		baseSpecies: "Lugia",
		forme: "Lugia",
		types: ["Shadow"],
		baseStats: {hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110},
		abilities: {0: "Shadow Scales"},
		heightm: 5.2,
		weightkg: 532,
		color: "Black",
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
		requiredItem: "Shadow Adapter",
		battleOnly: "Lugia",
		gen: 9,
	},
  celebi: {
		inherit: true,
		abilities: {0: "Natural Cure", H: "Pure Heart"},
  },
  jirachi: {
		inherit: true,
		abilities: {0: "Serene Grace", H: "Pure Heart"},
  },
  hooh: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Pure Heart", H: "Regenerator"},
  },
	eevee: {
		inherit: true,
		abilities: {0: "Adaptability", 1: "Pure Heart", H: "Anticipation"},
  },
	vaporeon: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Pure Heart", H: "Hydration"},
  },
	jolteon: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Pure Heart", H: "Quick Feet"},
  },
	flareon: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Pure Heart", H: "Guts"},
  },
	espeon: {
		inherit: true,
		abilities: {0: "Synchronize", 1: "Pure Heart", H: "Magic Bounce"},
  },
	umbreon: {
		inherit: true,
		abilities: {0: "Synchronize", 1: "Pure Heart", H: "Inner Focus"},
  },
	leafeon: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Pure Heart", H: "Chlorophyll"},
  },
	glaceon: {
		inherit: true,
		abilities: {0: "Snow Cloak", 1: "Pure Heart", H: "Ice Body"},
  },
	sylveon: {
		inherit: true,
		abilities: {0: "Cute Charm", 1: "Pure Heart", H: "Pixilate"},
  },
};
