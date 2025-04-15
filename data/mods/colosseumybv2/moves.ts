export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
// New Moves
	chemicalplant: {
		accuracy: 100,
		basePower: 55,
		category: "Special",
		shortDesc: "Removes the foe's item. Toxics the foe if they had a plant-based item.",
		viable: true,
		name: "Chemical Plant",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Magical Leaf", target);
		},
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				if (item) {
					if (item.isBerry || ['absorbbulb', 'berryjuice', 'bigroot', 'electricseed', 'galaricacuff', 'galaricawreath',
					  'grassyseed', 'leftovers', 'mentalherb', 'miracleseed', 'mirrorherb', 'mistyseed', 'powerherb', 'psychicseed',
					  'sweetapple', 'tartapple', 'whiteherb', 'syrupyapple', 'cloversweet', 'leek', 'lovesweet',
					  'ribbonsweet', 'starsweet', 'strawberrysweet', 'whippeddream', 'roomservice'].includes(item.id)) {
							target.trySetStatus('tox', source);
							this.add('-message', `${target.name}'s item rotted and poisoned it!`);
					}
					this.add('-enditem', target, item.name, '[from] move: Chemical Plant', '[of] ' + source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	silkblanket: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Protects user's side from hazards for 7 turns (10 with Destiny Knot).",
    	viable: true,
		name: "Silk Blanket",
		pp: 25,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sticky Web", target);
		},
		sideCondition: 'silkblanket',
		condition: {
			duration: 7,
			durationCallback(target, source, effect) {
				if (source?.hasItem('destinyknot')) {
					return 10;
				}
				return 7;
			},
			// Hazard immunity implemented in the hazard moves themselves
			onSideStart(side) {
				this.add('-sidestart', side, 'Silk Blanket');
				this.add('-message', `A soft blanket was laid across this side fo the field!`);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 1,
			onSideEnd(side) {
				this.add('-sideend', side, 'Silk Blanket');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Bug",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	starburst: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		shortDesc: "Usually moves first. Ignores redirection and makes the target the center of attention.",
		viable: true,
		name: "Starburst",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		volatileStatus: 'spotlight',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Meteor Mash", target);
		},
		tracksTarget: true,
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
	},
	tribocharge: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		shortDesc: "Changes the foe's ability to Plus or Minus.",
		viable: true,
		name: "Tribocharge",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Nuzzle", target);
		},
		onHit(target, source, move) {
			if (target.getAbility().flags['cantsuppress']) return;
			if (target.hasAbility('plus') || source.hasAbility('plus')) {
  			const oldAbility2 = target.setAbility('minus');
  			if (oldAbility2) {
  				this.add('-ability', target, 'Minus', '[from] move: Tribocharge');
  				return;
  			}
  			return oldAbility2 as false | null;
      } else {
  			const oldAbility = target.setAbility('plus');
  			if (oldAbility) {
  				this.add('-ability', target, 'Plus', '[from] move: Tribocharge');
  				return;
  			}
  			return oldAbility as false | null;
      	}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	cyclone: {
		accuracy: 100,
		basePower: 0,
		category: "Special",
		shortDesc: "Power varies based on a randomly selected 'magnitude', from F1 to F5",
		viable: true,
		name: "Cyclone",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Aeroblast", target);
		},
		onModifyMove(move, pokemon) {
			const i = this.random(100);
			if (i < 50) {
				move.magnitude = 1;
				move.basePower = 75;
			} else if (i < 75) {
				move.magnitude = 2;
				move.basePower = 95;
			} else if (i < 90) {
				move.magnitude = 3;
				move.basePower = 110;
			} else if (i < 99) {
				move.magnitude = 4;
				move.basePower = 130;
			} else {
				move.magnitude = 5;
				move.basePower = 150;
			}
		},
		onHit(target, source, move) {
			let bp = move.magnitude;
			this.add('-message', `Cyclone hit with a rating of F${bp}!`);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Flying",
		zMove: {basePower: 140},
		maxMove: {basePower: 140},
		contestType: "Tough",
	},
	toxicshock: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
    	shortDesc: "Fails if the foe wasn't using an offensive move. +1 Priority.",
		viable: true,
		name: "Toxic Shock",
		pp: 5,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Acid Spray", target);
		},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	wideslash: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		shortDesc: "High critical hit ratio. Hits all adjacent foes.",
		viable: true,
		name: "Wide Slash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1, metronome: 1},
		critRatio: 2,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sacred Sword", target);
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Steel",
		contestType: "Cool",
	},
	dustdevil: {
		accuracy: 90,
		basePower: 60,
		category: "Special",
    	shortDesc: "Switches the foe out. Sets Sand if it fails.",
		viable: true,
		name: "Dust Devil",
		pp: 10,
		priority: -6,
		flags: {protect: 1, mirror: 1, noassist: 1, failcopycat: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sandsear Storm", target);
		},
		onMoveFail(target, source, move) {
			this.field.setWeather('sandstorm');
		},
		forceSwitch: true,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	fortification: {
		accuracy: true,
		basePower: 0,
		category: "Status",
    	shortDesc: "Protects the user. Disables a foe that makes contact.",
		viable: true,
		name: "Fortification",
		pp: 10,
		priority: 4,
		flags: {noassist: 1, failcopycat: 1},
		stallingMove: true,
		volatileStatus: 'rockwall',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow', 'letssnuggleforever'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					source.addVolatile('disable');
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					source.addVolatile('disable');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	piledriver: {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		name: "Piledriver",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		ohko: true,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Seismic Toss", target);
			this.add('-anim', source, "Doom Desire", target);
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	dragonmark: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
    	shortDesc: "Adds Dragon to the target's type(s).",
		viable: true,
		name: "Dragon Mark",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Clanging Scales", target);
		},
		onHit(target) {
			if (target.hasType('Dragon')) return false;
			if (!target.addType('Dragon')) return false;
			this.add('-start', target, 'typeadd', 'Dragon', '[from] move: Dragon Mark');
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	healingcoals: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Heals one allies' status condition on switch-in.",
		viable: true,
		name: "Healing Coals",
		pp: 20,
		priority: 0,
		flags: {nonsky: 1},
		sideCondition: 'healingcoals',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Stealth Rock", target);
		},
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'Healing Coals');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 1) return false;
				this.add('-sidestart', side, 'Healing Coals');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots') || pokemon.side.sideConditions['silkblanket']) return;
				if (pokemon.status) {
					this.add('-anim', pokemon, "Morning Sun", pokemon);
					pokemon.cureStatus();
					pokemon.side.removeSideCondition('healingcoals');
				}
			},
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Healing Coals');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fire",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	phasethrough: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		shortDesc: "Switches the user out if it hits. 10% chance to lower the foe's SpD.",
		viable: true,
		name: "Phase Through",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		selfSwitch: true,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Phantom Force", target);
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Ghost",
	},
	coldcross: {
		accuracy: 80,
		basePower: 110,
		category: "Physical",
		shortDesc: "Can't miss in Snow or against Ice-types. Hits all adjacent foes.",
		viable: true,
		name: "Cold Cross",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, contact: 1, slicing: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Glacial Lance", target);
			this.add('-anim', source, "Smart Strike", target);
		},
		onModifyMove(move, source, target) {
			if (this.field.isWeather(['hail', 'snow']) || target.hasType('Ice')) move.accuracy = true;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	encouragement: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "One adjacent ally's takes 50% damage this turn.",
		viable: true,
		name: "Encouragement",
		pp: 20,
		priority: 5,
		flags: {bypasssub: 1, noassist: 1, failcopycat: 1},
		volatileStatus: 'encouragement',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Helping Hand", target);
		},
		onTryHit(target) {
			if (!target.newlySwitched && !this.queue.willMove(target)) return false;
		},
		condition: {
			duration: 1,
			onStart(target, source) {
				this.effectState.multiplier = 0.5;
				this.add('-singleturn', target, 'Encouragement', '[of] ' + source);
			},
			onRestart(target, source) {
				this.effectState.multiplier *= 0.5;
				this.add('-singleturn', target, 'Encouragement', '[of] ' + source);
			},
			onSourceModifyDamage(damage, source, target, move) {
				this.debug('Boosting from Encouragement: ' + this.effectState.multiplier);
				return this.chainModify(this.effectState.multiplier);
			},
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	breakdown: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "Torments the foe.",
		viable: true,
		name: "Breakdown",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sucker Punch", target);
			this.add('-anim', source, "Psyshock", target);
		},
		secondary: {
			chance: 100,
			volatileStatus: 'torment',
		},
		target: "normal",
		type: "Psychic",
	},
	fallingtide: {
		accuracy: 100,
		basePower: 130,
		basePowerCallback(pokemon, target, move) {
			return 130 - 20 * target.side.totalFainted;
		},
		category: "Physical",
		shortDesc: "-20 BP for every fainted Pokemon on the opponent's team.",
		viable: true,
		name: "Falling Tide",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			const foeFainted = target.side.totalFainted;
			this.add('-anim', source, "Bulk Up", source);
			if (foeFainted < 3) {
				this.add('-anim', source, "Surf", target);
			} else {
				this.add('-anim', source, "Water Pulse", target);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Water",
	},
	nightfall: {
		accuracy: 85,
		basePower: 110,
		category: "Special",
		shortDesc: "Clears weather if it hits.",
		name: "Nightfall",
		viable: true,
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Night Daze", target);
		},
		onHit() {
			this.field.clearWeather();
		},
		onAfterSubDamage() {
			this.field.clearWeather();
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Cool",
	},

// Old Moves
	facade: {
		num: 263,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		shortDesc: "Power doubles if user is statused.",
		name: "Facade",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (pokemon.status || pokemon.hasAbility('comatose')) {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	terablast: {
		num: 851,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		name: "Tera Blast",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, mustpressure: 1},
		onPrepareHit(target, source, move) {
			if (source.terastallized) {
				this.attrLastMove('[anim] Tera Blast ' + source.teraType);
			}
		},
		onModifyType(move, pokemon, target) {
			if (pokemon.terastallized) {
				move.type = pokemon.teraType;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
				move.category = 'Physical';
			}
			if (pokemon.terastallized === 'Stellar') {
				move.self = {boosts: {atk: -1, spa: -1}};
			}
		},
		secondary: null,
		target: "normal",
		type: "Stellar",
	},
	spikes: {
		num: 191,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1, metronome: 1, mustpressure: 1},
		sideCondition: 'spikes',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots') || pokemon.side.sideConditions['silkblanket']) return;
				const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Ground",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	stealthrock: {
		num: 446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stealth Rock",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, metronome: 1, mustpressure: 1},
		sideCondition: 'stealthrock',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots') || pokemon.side.sideConditions['silkblanket']) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	stickyweb: {
		num: 564,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sticky Web",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, metronome: 1},
		sideCondition: 'stickyweb',
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots') || pokemon.side.sideConditions['silkblanket']) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, this.effectState.source, this.dex.getActiveMove('stickyweb'));
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Bug",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	toxicspikes: {
		num: 390,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Toxic Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1, metronome: 1, mustpressure: 1},
		sideCondition: 'toxicspikes',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots') || pokemon.side.sideConditions['silkblanket']) {
					return;
				} else if (this.effectState.layers >= 2) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	defog: {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, metronome: 1, wind: 1},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'silkblanket', 'healingcoals', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'silkblanket', 'healingcoals',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	rapidspin: {
		num: 229,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Rapid Spin",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'silkblanket', 'healingcoals'];
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
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'silkblanket', 'healingcoals'];
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
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	disable: {
		num: 50,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Disable",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'disable',
		onTryHit(target) {
			if (!target.lastMove || target.lastMove.isZ || target.lastMove.isMax || target.lastMove.id === 'struggle') {
				return false;
			}
		},
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (effect && effect.id === 'rockwall') {
					return 3;
				}
				return 5;
			},
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				// The target hasn't taken its turn, or Cursed Body activated and the move was not used through Dancer or Instruct
				if (
					this.queue.willMove(pokemon) ||
					(pokemon === this.activePokemon && this.activeMove && !this.activeMove.isExternal)
				) {
					this.effectState.duration--;
				}
				if (!pokemon.lastMove) {
					this.debug(`Pokemon hasn't moved yet`);
					return false;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === pokemon.lastMove.id) {
						if (!moveSlot.pp) {
							this.debug('Move out of PP');
							return false;
						}
					}
				}
				if (effect.effectType === 'Ability') {
					this.add('-start', pokemon, 'Disable', pokemon.lastMove.name, '[from] ability: Cursed Body', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Disable', pokemon.lastMove.name);
				}
				this.effectState.move = pokemon.lastMove.id;
			},
			onResidualOrder: 17,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Disable');
			},
			onBeforeMovePriority: 7,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && move.id === this.effectState.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	weatherball: {
		num: 311,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Weather Ball",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, bullet: 1},
		onModifyType(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Fire';
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'shadowsky':
				move.type = 'Shadow';
				break;
			case 'hail':
			case 'snow':
				move.type = 'Ice';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.basePower *= 2;
				break;
			case 'raindance':
			case 'primordialsea':
				move.basePower *= 2;
				break;
			case 'sandstorm':
				move.basePower *= 2;
				break;
			case 'shadowsky':
				move.basePower *= 2;
				break;
			case 'hail':
			case 'snow':
				move.basePower *= 2;
				break;
			}
			this.debug('BP: ' + move.basePower);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	refresh: {
		inherit: true,
		isNonstandard: null,
	},
	shadowbone: {
		inherit: true,
		isNonstandard: null,
	},
	boneclub: {
		inherit: true,
		isNonstandard: null,
	},
	bonemerang: {
		inherit: true,
		isNonstandard: null,
	},
	meteorassault: {
		inherit: true,
		isNonstandard: null,
	},
  
// Shadow Moves
	shadowaura: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Protects from moves. Non-Shadow moves: loses 1/8 max HP.",
		viable: true,
		name: "Shadow Aura",
		pp: 10,
		priority: 4,
		flags: {noassist: 1, failcopycat: 1},
		stallingMove: true,
		volatileStatus: 'shadowaura',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.type !== 'Shadow') {
					this.damage(source.baseMaxhp / 8, source, target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && move.type !== 'Shadow') {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Shadow",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	shadowblitz: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		shortDesc: "Usually moves first.",
		viable: true,
		name: "Shadow Blitz",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Quick Attack", target);
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowbreak: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "Breaks the foe's Reflect/Light Screen/Aurora Veil.",
		viable: true,
		name: "Shadow Break",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Brick Break", target);
		},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowcharge: {
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		shortDesc: "Deals 1.5x damage to a switching in opponent.",
		viable: true,
		name: "Shadow Charge",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Tackle", target);
		},
		onBasePower(basePower, attacker, defender) {
			if (!defender.activeTurns) {
				return this.chainModify(1.5);
			}
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowcrusher: {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		shortDesc: "Hits twice. Lowers the target's Def after each hit.",
		isViable: true,
		name: "Shadow Crusher",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Crush Claw", target);
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowdance: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Raises the user's SpA and Speed by 1.",
		isViable: true,
		name: "Shadow Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Dragon Dance", target);
		},
		boosts: {
			spa: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Shadow",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	shadowdarts: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		shortDesc: "Hits twice. Doubles: Tries to hit each foe once.",
		isViable: true,
		name: "Shadow Darts",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, noparentalbond: 1},
		multihit: 2,
		smartTarget: true,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Dragon Darts", target);
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		maxMove: {basePower: 130},
	},
	shadowdown: {
		num: 103,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		shortDesc: "Lowers the foe(s)'s Defense by 2 stages.",
		isViable: true,
		name: "Shadow Down",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Snarl", target);
		},
		boosts: {
			def: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	shadowechoes: {
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles['shadowechoes'] || move.hit === 1) {
				pokemon.addVolatile('shadowechoes');
			}
			const bp = this.clampIntRange(move.basePower * pokemon.volatiles['shadowechoes'].multiplier, 1, 160);
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		shortDesc: "BP doubles on consecutive uses.",
		isViable: true,
		name: "Shadow Echoes",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Hyper Voice", target);
		},
		condition: {
			duration: 2,
			onStart() {
				this.effectState.multiplier = 1;
			},
			onRestart() {
				if (this.effectState.multiplier < 4) {
					this.effectState.multiplier <<= 1;
				}
				this.effectState.duration = 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Beautiful",
	},
	shadowend: {
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		shortDesc: "User loses 50% max HP.",
		isViable: true,
		name: "Shadow End",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Poltergeist", target);
		},
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Shadow End'), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent('EmergencyExit', pokemon, pokemon);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
	},
	shadowhalf: {
		accuracy: true,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.getUndynamaxedHP() / 2), 1);
		},
		category: "Special",
		shortDesc: "All Pokemon on the field lose 50% of their current HP.",
		isViable: true,
		name: "Shadow Half",
		pp: 5,
		priority: 0,
		flags: {bypasssub: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.actions.useMove("Shadow Half Self", source);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Shadow",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	shadowhalfself: {
		accuracy: true,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.getUndynamaxedHP() / 2), 1);
		},
		category: "Special",
		shortDesc: "All Pokemon on the field lose 50% of their current HP.",
		isViable: true,
		name: "Shadow Half Self",
		pp: 5,
		priority: 0,
		flags: {bypasssub: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Minimize", source);
		},
		secondary: null,
		target: "self",
		type: "Shadow",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	shadowhold: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Traps the foe(s).",
		isViable: true,
		name: "Shadow Hold",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Block", target);
		},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	shadowjuggle: {
		accuracy: 100,
		basePower: 0,
		damage: 35,
		category: "Physical",
		shortDesc: "Deals 35 damage. Hits 3 times.",
		isViable: true,
		name: "Shadow Juggle",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Seismic Toss", target);
		},/*
		onModifyMove(move, pokemon) {
			if (this.gameType !== 'doubles') {
				move.damage = 20;
			}
		},*/
		secondary: null,
		target: "normal",
		type: "Shadow",
		maxMove: {basePower: 75},
		contestType: "Tough",
	},
	shadowleech: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		shortDesc: "Heals the user by 50% of the damage dealt.",
		isViable: true,
		name: "Shadow Leech",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1, bite: 1},
		drain: [1, 2],
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Leech Life", target);
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Clever",
	},
	shadowlove: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Swaps all stat changes with target.",
		isViable: true,
		name: "Shadow Love",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Heart Swap", target);
		},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			let i: BoostID;
			for (i in target.boosts) {
				targetBoosts[i] = target.boosts[i];
				sourceBoosts[i] = source.boosts[i];
			}

			target.setBoost(sourceBoosts);
			source.setBoost(targetBoosts);

			this.add('-swapboost', source, target, '[from] move: Shadow Love');
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		zMove: {effect: 'crit2'},
		contestType: "Clever",
	},
	shadowmist: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		shortDesc: "Sets Mist and lowers the foe(s) evasion by 2 stages.",
		isViable: true,
		name: "Shadow Mist",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Haze", target);
		},
		boosts: {
			evasion: -2,
		},
		self: {
			sideCondition: 'mist',
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	shadowpanic: {
		accuracy: 90,
		basePower: 0,
		category: "Status",
		shortDesc: "Confuses the foe(s).",
		isViable: true,
		name: "Shadow Panic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1},
		volatileStatus: 'confusion',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Confide", target);
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	shadowpounce: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		shortDesc: "2x damage on Shadow Pokemon.",
		isViable: true,
		name: "Shadow Pounce",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Lunge", target);
		},
		onBasePower(basePower, source, target, move) {
			if (target.hasItem('shadowadapter')) {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Beautiful",
	},
	shadowchaser: {
		accuracy: true,
		basePower: 90,
		category: "Physical",
		shortDesc: "2x damage on Shadow Pokemon.",
		isViable: true,
		name: "Shadow Chaser",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Extreme Speed", target);
		},
		onBasePower(basePower, source, target, move) {
			if (source.baseSpecies.baseSpecies === 'Zangoose' && target.baseSpecies.baseSpecies === 'Seviper' || 
				source.baseSpecies.baseSpecies === 'Seviper' && target.baseSpecies.baseSpecies === 'Zangoose' ||
				target.hasItem('shadowadapter')) {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Beautiful",
	},
	shadowpress: {
		accuracy: 100,
		basePower: 75,
		category: "Special",
		shortDesc: "Uses user's SpD stat as SpA in damage calculation.",
		isViable: true,
		name: "Shadow Press",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		overrideOffensiveStat: 'spd',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Night Shade", target);
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
	},
	shadowrage: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
		isViable: true,
		name: "Shadow Rage",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, failinstruct: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Outrage", target);
		},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowrave: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		shortDesc: "Hits all adjacent foes.",
		isViable: true,
		name: "Shadow Rave",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Fiery Wrath", target);
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowrush: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		shortDesc: "No additional effect.",
		isViable: true,
		name: "Shadow Rush",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Double-Edge", target);
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Tough",
	},
	shadowsights: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "User's attacks ignore abilities and immunities.",
		isViable: true,
		name: "Shadow Sights",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'shadowsights',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Laser Focus", target);
		},
		condition: {
			onStart(target, source, effect) {
				this.add('-start', target, 'move: Shadow Sights');
				this.add('-message', `${target.name} is hyperfocusing on the foe's shadows!`);
			},			
			onModifyMovePriority: -5,
			onModifyMove(move) {
				if (!move.ignoreImmunity) move.ignoreImmunity = {};
				if (move.ignoreImmunity !== true) {
					move.ignoreImmunity = true;
				}
				move.ignoreAbility = true;
			},
		},
		secondary: null,
		target: "self",
		type: "Shadow",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	shadowshards: {
		accuracy: 100,
		basePower: 15,
		category: "Physical",
	  shortDesc: "Hits 2-5 times. High crit ratio.",
		viable: true,
		name: "Shadow Shards",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		critRatio: 2,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Spike Cannon", target);
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	shadowshatter: {
		accuracy: 90,
		basePower: 120,
		category: "Special",
	  shortDesc: "Lowers the user's Sp. Atk by 2.",
		viable: true,
		name: "Shadow Shatter",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Diamond Storm", target);
		},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Beautiful",
	},
	shadowshed: {
		accuracy: true,
		basePower: 0,
		category: "Status",
	  shortDesc: "User: +1 Acc. Clears all screens/hazards/terrains.",
		viable: true,
		name: "Shadow Shed",
		pp: 15,
		priority: 0,
		flags: {},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Minimize", target);
		},
		onHit(pokemon) {
			let success = false;
			const removeAll = ['reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'silkblanket', 'healingcoals',
									 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
			const sides = [pokemon.side, ...pokemon.side.foeSidesWithConditions()];
			for (const side of sides) {
				for (const sideCondition of removeAll) {
					if (side.removeSideCondition(sideCondition)) {
						this.add('-sideend', side, this.dex.conditions.get(sideCondition).name);
						success = true;
					}
				}
			}
			this.field.clearTerrain();
			if (success) this.add('-activate', pokemon, 'move: Shadow Shed');
			return !!this.boost({accuracy: 1}, pokemon, pokemon, null, false, true) || success;
		},
		secondary: null,
		target: "self",
		type: "Shadow",
	},
	shadowsky: {
		accuracy: true,
		basePower: 0,
		category: "Status",
	  	shortDesc: "Damages non-Shadows for 1/8 of their max HP for 5 turns.",
		viable: true,
		name: "Shadow Sky",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'shadowsky',
		secondary: null,
		target: "all",
		type: "Shadow",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	shadowspores: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
	  	shortDesc: "Applies the Powder effect for the rest of the turn.",
		viable: true,
		name: "Shadow Spores",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, powder: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Stun Spore", target);
		},
		secondary: {
			chance: 100,
			volatileStatus: 'powder',
		},
		target: "normal",
		type: "Shadow",
	},
	shadowstorm: {
		accuracy: 80,
		basePower: 100,
		category: "Special",
	  	shortDesc: "30% chance to lower foe(s) SpA by 1 stage. Can't miss in Shadow Sky.",
		viable: true,
		name: "Shadow Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Hurricane", target);
		},
		onModifyMove(move) {
			if (this.field.isWeather(['shadowsky'])) move.accuracy = true;
		},
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Shadow",
	},
	shadowwave: {
		accuracy: true,
		basePower: 55,
		category: "Special",
	  	shortDesc: "Lowers the foe(s)'s Speed by 1. Can't miss.",
		viable: true,
		name: "Shadow Wave",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Shock Wave", target);
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Shadow",
		contestType: "Beautiful",
	},
	shadowblast: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
	  	shortDesc: "High critical hit ratio.",
		viable: true,
		name: "Shadow Blast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, wind: 1},
		critRatio: 2,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Acid Downpour", target);
			this.add('-anim', source, "Aeroblast", target);
		},
		secondary: null,
		target: "any",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowbolt: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
	  	shortDesc: "20% chance to paralyze the foe.",
		viable: true,
		name: "Shadow Bolt",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Thunder", target);
		},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "normal",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowchill: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
	  	shortDesc: "20% chance to freeze the foe.",
		viable: true,
		name: "Shadow Chill",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Sheer Cold", target);
		},
		secondary: {
			chance: 20,
			status: 'frz',
		},
		target: "normal",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowfire: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
	  	shortDesc: "20% chance to burn the foe.",
		viable: true,
		name: "Shadow Fire",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Fire Blast", target);
		},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
		type: "Shadow",
		contestType: "Cool",
	},
	shadowdrop: {
		accuracy: 100,
		basePower: 150,
		category: "Physical",
	  	shortDesc: "Cannot be selected the turn after it's used.",
		viable: true,
		name: "Shadow Drop",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, cantusetwice: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Body Slam", target);
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
	},
	shadoweclipse: {
		accuracy: true,
		basePower: 0,
		category: "Status",
	  	shortDesc: "User: +2 Atk/SpA/Spe, can't use Shadow moves.",
		viable: true,
		name: "Shadow Eclipse",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'shadoweclipse',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Blood Moon", target);
		},
		boosts: {
			atk: 2,
			spa: 2,
			spe: 2,
		},
		condition: {
			noCopy: true,
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).type['Shadow']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Shadow",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	shadowflood: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
	  	shortDesc: "Sets a swamp on the foe's side of the field.",
		viable: true,
		name: "Shadow Flood",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Mortal Spin", target);
		},
		onHit(target, source, move) {
			for (const side of source.side.foeSidesWithConditions()) {
				side.addSideCondition('grasspledge');
			}
		},
		secondary: {},
		target: "allAdjacentFoes",
		type: "Shadow",
	},
	shadowjuice: {
		accuracy: true,
		basePower: 0,
		category: "Status",
	  	shortDesc: "Heals the user by 33% of its max HP, sets Aqua Ring.",
		viable: true,
		name: "Shadow Juice",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 3],
		volatileStatus: 'aquaring',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Life Dew", target);
		},
		secondary: null,
		target: "self",
		type: "Shadow",
	},
	shadowtwirl: {
		accuracy: true,
		basePower: 0,
		category: "Status",
	  	shortDesc: "Uses a random Shadow move.",
		viable: true,
		name: "Shadow Twirl",
		pp: 10,
		priority: 0,
		flags: {failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failmimic: 1, failinstruct: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", source);
			this.add('-anim', source, "Metronome", target);
		},
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				move.type === 'Shadow'
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Shadow",
		contestType: "Cute",
	},
	shadowomenattack: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		shortDesc: "Attack portion of Shadow Omen.",
		viable: true,
		name: "Shadow Omen Attack",
		pp: 5,
		priority: 0,
		flags: {allyanim: 1, futuremove: 1},
		ignoreImmunity: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'shadowomenattack',
				source: source,
				moveData: {
					id: 'shadowomenattack',
					name: "Shadow Omen Attack",
					accuracy: 100,
					basePower: 120,
					category: "Physical",
					priority: 0,
					flags: {allyanim: 1, metronome: 1, futuremove: 1},
  					onPrepareHit(target, source, move) {
						this.attrLastMove('[still]');
						this.add('-anim', source, "Psyshock", target);
						this.add('-anim', source, "Hex", target);
					},
					ignoreImmunity: false,
					effectType: 'Move',
					type: 'Shadow',
				},
			});
			this.add('-start', source, 'move: Shadow Omen Attack');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		contestType: "Clever",
	},
	shadowomen: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Switches the user out. Foe is hit by a 120 BP Shadow-type attack 2 turns later.",
		name: "Shadow Omen",
		pp: 5,
		priority: 0,
		flags: {},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hex", target);
			this.add('-anim', source, "Laser Focus", target);
		},
		onTry(source) {
			return !!this.canSwitch(source.side);
		},
		onHit(pokemon) {
			this.actions.useMove("Shadow Omen Attack", pokemon);
		},
		selfSwitch: true,
		secondary: null,
		target: "self",
		type: "Shadow",
		zMove: {effect: 'heal'},
		contestType: "Cool",
	},
	shadowadd: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shadow Add",
		pp: 1,
		priority: 0,
		flags: {nosketch: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dark Void", target);
		},
		onHit(target) {
			if (target.hasType('Shadow')) return false;
			if (!target.addType('Shadow')) return false;
			this.add('-start', target, 'typeadd', 'Shadow', '[from] move: Shadow Add');
		},
		secondary: null,
		target: "self",
		type: "Shadow",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Clever",
	},
};
