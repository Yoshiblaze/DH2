export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
  // I'll do Gem effects later
	lightball: {
		name: "Light Ball",
		spritenum: 251,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Emolga') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Emolga') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Emolga"],
		num: 236,
		gen: 2,
		shortDesc: "If held by an Emolga, its Attack and Sp. Atk are doubled.",
	},
	snowball: {
		name: "Snowball",
		spritenum: 606,
		fling: {
			basePower: 30,
  		status: 'frz',
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Ice') {
				target.useItem();
			}
		},
		boosts: {
			atk: 1,
		},
		num: 649,
		gen: 5,
    isNonstandard: null,
	},
};
