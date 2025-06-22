export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	pureheart: {
    shortDesc: "This Pokemon is immune to Shadow moves and deals 1.2x damage to Shadow Pokemon. Can't be a Shadow Pokemon.", 
		onTryHit(pokemon, target, move) {
			if (move.type === 'Shadow') {
				this.add('-immune', pokemon, '[from] ability: Pure Heart');
				return null;
			}
		},
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (defender.hasItem('shadowadapter')) {
  			this.debug('Pure Heart boost');
				return this.chainModify([4915, 4096]);
			}
		},
		flags: {noentrain: 1, failskillswap: 1, cantsuppress: 1},
		name: "Pure Heart",
		rating: 3,
  },
	rattled: {
		onDamagingHit(damage, target, source, move) {
			if (['Dark', 'Bug', 'Ghost', 'Shadow'].includes(move.type)) {
				this.boost({spe: 1});
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect?.name === 'Intimidate') {
				this.boost({spe: 1});
			}
		},
		flags: {},
		name: "Rattled",
		rating: 1,
		num: 155,
		shortDesc: "Speed is raised 1 stage if hit by a Bug-, Dark-, Ghost-, or Shadow-type attack, or Intimidated.",
	},
	shadowscales: {
    shortDesc: "On switch-in, this Pokemon summons Shadow Sky.", 
		onStart(source) {
			this.field.setWeather('shadowsky');
		},
		flags: {},
		name: "Shadow Scales",
		rating: 3,
  },
};
