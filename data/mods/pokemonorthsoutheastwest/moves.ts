export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
monkeystaff: {
		num: 9999,
                       shortDesc: "Hits 9 times. No extra hits on Rain or Psychic Terrain.",
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		name: "Monkey Staff",
		pp: 16,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		multihit: [9],
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},

	trustedswine: {
		num: 8203,
                       shortDesc: "Has +1 Priority, + Poison on Grassy Terrain. Does not set up an healing-stealing energy field.",
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Trusted Swine",
		pp: 16,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onHit(target, source) {
			if (this.field.isTerrain('grassyterrain') && source.isGrounded()) {
				source.trySetStatus('psn', target);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	dropoff: {
		num: 8910,
                       shortDesc: "Discard’s the user’s item to increase their highest stat by 2.",
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Drop Off",
		pp: 40,
		priority: 0,
		flags: {metronome: 1},
		onHit(target, source) {
			const item = target.takeItem(source);
			if (item) {
				this.add('-enditem', target, item.name, '[from] move: Drop Off', '[of] ' + source);
				const bestStat = source.getBestStat(true, true);
				this.boost({[bestStat]: length}, source);

			} else {
				this.add('-fail', target, 'move: Drop Off');
			}
		},
		secondary: null,
		target: "self",
		type: "Dark",
	},
fireworkblazer: {
		num: 2259,
                       shortDesc: "Clears hazards. Power doubles on Nighttime.",
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Firework Blazer",
		pp: 16,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onAfterSubDamage(damage, target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
equestrianbolt: {
		num: 9055,
                       shortDesc: "Charges turn 1, hits turn 2 with 10% Par. +3 Speed: Fires instantly.",
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Equestrian Bolt",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, metronome: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (pokemon.boosts['spe'] > 2) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 10,
			status: 'par',
		},
		hasSheerForce: true,
		target: "normal",
		type: "Electric",
	},

horseserve: {
		num: 8023,
                       shortDesc: "Has +1 Priority + Never misses if target is weak to Grass.",
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Horse Serve",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onModifyPriority(priority, source, target, move) {
			if (source.getMoveHitData(move).typeMod > 0)  {
                                               move.accuracy = true;
				return priority + 1;
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},

	eastseawave: {
		num: 812,
                       shortDesc: "User switches out after use. Does not power up on Terrain.",
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "East Sea Wave",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Water",
	},


	nighttime: {
		num: 2421,
                       shortDesc: "For five turns: Dark +50%, Light-50%, Dark is immune to Priority.",
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nighttime",
		pp: 5,
		priority: 0,
		flags: {metronome: 1},
		weather: 'nighttime',
		secondary: null,
		target: "all",
		type: "Dark",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},

	ancientrecharge: {
		num: 1500,
                       shortDesc: "Increases the Ancient Gauge by 1. Currently not functional.",
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ancient Recharge",
		pp: 8,
		priority: 0,
		flags: {gravity: 1, metronome: 1},
		onTry(source, target, move) {
			// Additional Gravity check for Z-move variant
			if (this.field.getPseudoWeather('Gravity')) {
				this.add('cant', source, 'move: Gravity', move);
				return null;
			}
		},
		onTryHit(target, source) {
			this.add('-nothing');
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 3}},
		contestType: "Cute",
	},
		ironslash: {
		num: 1633,
			shortDesc: "High Critical Hit Ratio.",
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Iron Slash",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
		drilldown: {
		num: 4341,
						shortDesc: "Hits 1-5 times, each hit having 20% chance to lower defence by 1.",
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Drilldown",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		multihit: [1, 5],
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Rock",
		maxMove: {basePower: 100},
		contestType: "Cool",
	},
		feartheviper: {
			shortDesc: "20% chance to freeze the target by petrifying them.",
		num: 5238,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Fear The Viper",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, bite: 1},
		secondary: {
			chance: 20,
			status: 'frz',
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
	},
}
