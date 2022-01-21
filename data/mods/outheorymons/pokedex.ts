export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
   starmie: {
      inherit: true,
      baseStats: {hp: 60, atk: 75, def: 85, spa: 115, spd: 85, spe: 115},
   },
	raikou: {
      inherit: true,
      abilities: {0: "Pressure", 1: "Competitive", H: "Inner Focus"},
   },
	golisopod: {
		inherit: true,
		baseStats: {hp: 75, atk: 125, def: 140, spa: 60, spd: 110, spe: 40},
	}, 
	zarude: {
      inherit: true,
		baseStats: {hp: 105, atk: 110, def: 105, spa: 80, spd: 95, spe: 105},
      abilities: {0: "Leaf Guard", H: "Tough Claws"},
   },
	zarudedada: {
      inherit: true,
		baseStats: {hp: 105, atk: 110, def: 105, spa: 80, spd: 95, spe: 105},
      abilities: {0: "Leaf Guard", H: "Tough Claws"},
   },
};
