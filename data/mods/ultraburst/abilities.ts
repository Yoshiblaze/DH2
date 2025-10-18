export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	soulfulnoise: {
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.flags['sound']) {
				this.heal(pokemon.baseMaxhp / 8, pokemon);
			}
		},
		flags: {},
		name: "Soulful Noise",
		rating: 3.5,
		shortDesc: "Every time this Pokemon successfully uses a sound move, it heals 12.5% of its max HP.",
	},
	thunderarmor: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Thunder Armor');
				}
				return null;
			}
		},
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		onModifySpDPriority: 6,
		onModifySpD(spd) {
			return this.chainModify(2);
		},
		flags: {breakable: 1},
		name: "Thunder Armor",
		rating: 5,
		shortDesc: "Effects of Volt Absorb + This Pokemon's Def & SpD is doubled.",
	},
	powerofthesunne: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Power of the Sunne boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Power of the Sunne boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Power of the Sunne",
		rating: 3.5,
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Fire-type attack.",
	},
	powerofthemoone: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				this.debug('Power of the Moone boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				this.debug('Power of the Moone boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Power of the Moone",
		rating: 3.5,
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Fairy-type attack.",
	},
};
