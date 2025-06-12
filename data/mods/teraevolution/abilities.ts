export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	powerleak: {
		onModifyDamage(damage, source, target, move) {
			return this.chainModify([5324, 4096]);
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
				this.damage(source.baseMaxhp / 10, source, source);
			}
		},
		flags: {},
		name: "Power Leak",
		rating: 4.5,
		shortDesc: "This Pokemon's attacks do 1.3x damage, and it loses 1/10 its max HP after the attack.",
	},
	housekeeping: {
		onStart(pokemon, target, source) {
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] ability: Housekeeping', '[of] ' + pokemon);
				}
			}
		},
		flags: {},
		name: "Housekeeping",
		rating: 5,
		shortDesc: "Removes hazards upon switch-in.",
	},
	paradigmshift: {
		onBeforeMovePriority: 0.5,
		onBeforeMove(target, source, move) {
			if (move.type === 'Fire') {
				this.field.clearTerrain('electricterrain');
				this.field.setWeather('sunnyday');
			} else if (move.type === 'Electric') {
				this.field.clearWeather('sunnyday');
			  this.field.setTerrain('electricterrain');
			}
		},
		flags: {},
		name: "Paradigm Shift",
		shortDesc: "Sets Sunny Day/Electric Terrain and removes Electric Terrain/Sunny Day before using a Fire/Electric-type move.",
		rating: 4,
	},
	recharge: {
		shortDesc: "This Pokemon's Electric moves heal it for 33% of the damage dealt.",
		onModifyMove(move, pokemon) {
			if (!move.drain && move.type === 'Electric') {
				move.drain = [1, 3];
			}
		},
		flags: {},
		name: "Recharge",
		rating: 3,
	},
	mossblanket: {
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			this.heal(pokemon.maxhp / 16);
		},
		onTryHit(pokemon, target, move) {
			if (move.type === 'Water') {
				this.add('-immune', pokemon, '[from] ability: Moss Blanket');
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Moss Blanket",
		shortDesc: "Heals 6.25% of user's max HP at the end of each turn; Water immunity.",
		rating: 3.5,
	},
	coldcutter: {
		onSourceDamagingHit(damage, target, source, move) {
			// Despite not being a secondary, Shield Dust / Covert Cloak block Cold Cutter's effect
			if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;
			if (move.flags['slicing']) {
				if (this.randomChance(3, 10)) {
					target.trySetStatus('frz', source);
				}
			}
		},
		flags: {},
		name: "Cold Cutter",
		shortDesc: "This Pokemon's slicing moves have a 30% chance of freezing.",
		rating: 2,
	},
	dacapo: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.multihit || move.flags['noparentalbond'] || move.flags['charge'] ||
			move.flags['futuremove'] || move.isZ || move.isMax) return;
      if (move.flags['sound']) {
			  move.multihit = 2;
      }
		},
		flags: {},
		name: "Da Capo",
		shortDesc: "This Pokemon's sound moves hit twice.",
		rating: 4.5,
	},
	inversion: {
		onStart(source) {
			let activated = false;
			for (const pokemon of source.side.foe.active) {
				if (!activated) {
					this.add('-ability', source, 'Inversion');
				}
				activated = true;
				if (!pokemon.volatiles['inversion']) {
					pokemon.addVolatile('inversion');
				}
				if (!source.volatiles['inversion']) {
					source.addVolatile('inversion');
				}
			}
		},
		onAnySwitchIn(pokemon) {
			const source = this.effectState.target;
			if (pokemon === source) return;
			for (const target of source.side.foe.active) {
				if (!target.volatiles['inversion']) {
					target.addVolatile('inversion');
				}
			}
		},
		onEnd(pokemon) {
			const source = this.effectState.target;
			for (const target of source.side.foe.active) {
				target.removeVolatile('inversion');
			}
		},
		condition: {
  		onStart(pokemon) {
			  this.add('-start', pokemon, 'Inversion');
	      this.add('-message', `${pokemon.name}'s moves work off of their opposite offensive stat!`);
  		},
  		onModifyMove(move) {
        if (move.category === 'Physical') {
				  move.overrideOffensiveStat = 'spa';
        } else if (move.category === 'Special') {
				  move.overrideOffensiveStat = 'atk';
        }
  		},
		},
		flags: {},
		name: "Inversion",
		shortDesc: "While this Pokemon is active, all Pokemon's offensive moves work off of their opposite attacking stat.",
		rating: 2.5,
	},
};
