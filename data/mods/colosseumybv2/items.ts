export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	shadowadapter: {
		name: "Shadow Adapter",
		spritenum: 761,
		onTakeItem: false,
		onSwitchIn(pokemon) {
			this.add('-item', pokemon, 'Shadow Adapter');
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Lugia') {
				pokemon.formeChange('Shadow Lugia', this.effect, true);
				this.add('-anim', pokemon, "Hex", pokemon);
  				this.add('-message', `${pokemon.name}'s dark energy is overflowing!`);
			} else if (pokemon.baseSpecies.num !== 249) {
				this.actions.useMove("Shadow Add", pokemon, pokemon);
				this.add('-message', `${pokemon.name}'s Shadow Adapter temporarily closed its heart!`);
			}
		},/*
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Shadow') {
				if (user.hasAbility('adaptability')) {
					return this.chainModify(2);
				} else {
					return this.chainModify(1.5);
				}
			}
		},*/
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.volatiles['confusion']) {
				return this.chainModify(1.5);
			} else {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.volatiles['confusion']) {
				return this.chainModify(1.5);
			} else {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},/*
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Shadow') {
				return this.chainModify(0.5);
			}
		},*/
		num: -1007,
		gen: 9,
		desc: "Turns the holder into a Shadow Pokemon.",
		rating: 3,
	},
	hacaiberry: {
		name: "Hacai Berry",
		spritenum: 124,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Shadow",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (
				move.type === 'Shadow' &&
				(!target.volatiles['substitute'] || move.flags['bypasssub'] || (move.infiltrates && this.gen >= 6))
			) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
   	num: -1004,
		gen: 9,
		desc: "Halves damage taken from a Shadow-type attack. Single use.",
		rating: 3,
	},
	heartnecklace: {
		name: "Heart Necklace",
		spritenum: 747,
		fling: {
			basePower: 30,
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (source.hasItem('shadowadapter')) {
				return this.chainModify(0.75);
			}
		},
		num: -1005,
		gen: 9,
		desc: "Holder takes 3/4 damage from Shadow Pokemon.",
		rating: 3,
	},
	sinisterrock: {
		name: "Sinister Rock",
		spritenum: 116,
		fling: {
			basePower: 40,
		},
		num: -1008,
		gen: 9,
		desc: "Holder's use of Shadow Sky lasts 8 turns instead of 5.",
		rating: 3,
	},
	shadowcontract: {
		name: "Shadow Contract",
		spritenum: 609,
		fling: {
			basePower: 80,
		},
		onDamagingHit(damage, target, source, move) {
			if (!move.damage && !move.damageCallback && move.type === 'Shadow') {
				target.useItem();
			}
		},
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
		},
		num: -1009,
		gen: 9,
		desc: "If holder is hit by a Shadow move, raises Atk, Def, SpA, & SpD by 1 stage. Single use.",
		rating: 3,
	},
};
