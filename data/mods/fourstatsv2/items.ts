export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	assaultvest: {
		inherit: true,
		onModifySpAPriority: 1,
		onModifySpA(spa) {
			return this.chainModify(1.5);
		},
		shortDesc: "Holder's Special is 1.5x, but it can only select damaging moves.",
	},
	choiceband: {
		inherit: true,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		shortDesc: "Holder's Physical is 1.5x, but it can only select the first move it executes.",
	},
	choicespecs: {
		inherit: true,
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		shortDesc: "Holder's Special is 1.5x, but it can only select the first move it executes.",
	},
	deepseascale: {
		inherit: true,
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.name === 'Clamperl') {
				return this.chainModify(2);
			}
		},
		shortDesc: "If held by a Clamperl, its Special is doubled.",
	},
	deepseatooth: {
		inherit: true,
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.name === 'Clamperl') {
				return this.chainModify(2);
			}
		},
		shortDesc: "If held by a Clamperl, its Special is doubled.",
	},
	lightball: {
		inherit: true,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		shortDesc: "If held by a Pikachu, its Physical and Special are doubled.",
	},
	thickclub: {
		inherit: true,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Cubone' || pokemon.baseSpecies.baseSpecies === 'Marowak') {
				return this.chainModify(2);
			}
		},
		shortDesc: "If held by a Cubone or Marowak, its Physical is doubled.",
	},
	eviolite: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 2,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		shortDesc: "If holder's species can evolve, its Physical and Special are 1.5x.",
	},
	metalpowder: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.species.name === 'Ditto' && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
		shortDesc: "If held by a Ditto that hasn't Transformed, its Physical is doubled.",
	},
	absorbbulb: {
		inherit: true,
		boosts: {
			spd: 1,
		},
		shortDesc: "Raises holder's Special by 1 stage if hit by a Water-type attack. Single use.",
	},
	luminousmoss: {
		inherit: true,
		shortDesc: "Raises holder's Special by 1 stage if hit by a Water-type attack. Single use.",
	},
	cellbattery: {
		inherit: true,
		boosts: {
			def: 1,
		},
		shortDesc: "Raises holder's Physical by 1 stage if hit by an Electric-type attack. Single use.",
	},
	snowball: {
		inherit: true,
		boosts: {
			def: 1,
		},
		shortDesc: "Raises holder's Physical by 1 stage if hit by an Ice-type attack. Single use.",
	},
	apicotberry: {
		inherit: true,
		shortDesc: "Raises holder's Special by 1 stage when at 1/4 max HP or less. Single use.",
	},
	petayaberry: {
		inherit: true,
		onEat(pokemon) {
			this.boost({spd: 1});
		},
		shortDesc: "Raises holder's Special by 1 stage when at 1/4 max HP or less. Single use.",
	},
	liechiberry: {
		inherit: true,
			onEat(pokemon) {
			this.boost({def: 1});
		},
		shortDesc: "Raises holder's Physical by 1 stage when at 1/4 max HP or less. Single use.",
	},
	ganlonberry: {
		inherit: true,
		onEat(pokemon) {
			this.boost({def: 1});
		},
		shortDesc: "Raises holder's Physical by 1 stage when at 1/4 max HP or less. Single use.",
	},
	throatspray: {
		inherit: true,
		boosts: {
			spd: 1,
		},
		shortDesc: "Raises holder's Special by 1 stage after it uses a sound move. Single use.",
	},
	electricseed: {
		inherit: true,
		shortDesc: "If the terrain is Electric Terrain, raises holder's Physical by 1 stage. Single use.",
	},
	grassyseed: {
		inherit: true,
		shortDesc: "If the terrain is Grassy Terrain, raises holder's Physical by 1 stage. Single use.",
	},
	psychicseed: {
		inherit: true,
		shortDesc: "If the terrain is Psychic Terrain, raises holder's Special by 1 stage. Single use.",
	},
	mistyseed: {
		inherit: true,
		shortDesc: "If the terrain is Misty Terrain, raises holder's Special by 1 stage. Single use.",
	},
	keeberry: {
		inherit: true,
		shortDesc: "Raises holder's Physical by 1 stage after it is hit by a physical attack. Single use.",
	},
	marangaberry: {
		inherit: true,
		shortDesc: "Raises holder's Special by 1 stage after it is hit by a special attack. Single use.",
	},
	weaknesspolicy: {
		inherit: true,
		boosts: {
			def: 2,
			spd: 2,
		},
		shortDesc: "If holder is hit super effectively, raises Physical & Special by 2 stages. Single use.",
	},
	berserkgene: {
		inherit: true,
		boosts: {
			def: 2,
		},
		shortDesc: "(Gen 2) On switch-in, raises holder's Physical by 2 and confuses it. Single use.",
	},
};
