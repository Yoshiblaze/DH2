export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
  // Changed Moves
	wonderroom: {
      inherit: true,
      shortDesc: "For 5 turns, all Physical and Special stats switch.",
	},
	powertrick: {
      inherit: true,
      shortDesc: "No competitive use.",
	},
	powershift: {
      inherit: true,
      shortDesc: "No competitive use.",
	},
	spicyextract: {
      inherit: true,
      shortDesc: "Raises target's Phys by 2 and lowers its Phys by 2..",
	},
	guardsplit: {
		num: 470,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Guard Split",
		pp: 10,
		priority: 0,
		flags: {protect: 1, allyanim: 1, metronome: 1},
		onHit(target, source) {
			const newatk = Math.floor((target.storedStats.atk + source.storedStats.atk) / 2);
			target.storedStats.atk = newatk;
			source.storedStats.atk = newatk;
			const newspa = Math.floor((target.storedStats.spa + source.storedStats.spa) / 2);
			target.storedStats.spa = newspa;
			source.storedStats.spa = newspa;
			const newdef = Math.floor((target.storedStats.def + source.storedStats.def) / 2);
			target.storedStats.def = newdef;
			source.storedStats.def = newdef;
			const newspd = Math.floor((target.storedStats.spd + source.storedStats.spd) / 2);
			target.storedStats.spd = newspd;
			source.storedStats.spd = newspd;
			this.add('-activate', source, 'move: Guard Split', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
      shortDesc: "Averages Physical and Special stats with target.",
	},
	guardswap: {
		num: 385,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Guard Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1, metronome: 1},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

      	const atkSpa: BoostID[] = ['atk', 'spa'];
			for (const stat of atkSpa) {
				targetBoosts[stat] = target.boosts[stat];
				sourceBoosts[stat] = source.boosts[stat];
			}

			const defSpd: BoostID[] = ['def', 'spd'];
			for (const stat of defSpd) {
				targetBoosts[stat] = target.boosts[stat];
				sourceBoosts[stat] = source.boosts[stat];
			}

			source.setBoost(targetBoosts);
			target.setBoost(sourceBoosts);

			this.add('-swapboost', source, target, 'atk, spa', '[from] move: Guard Swap');
			this.add('-swapboost', source, target, 'def, spd', '[from] move: Guard Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
      shortDesc: "Swaps Physical and Special stat stages with target.",
	},
	powersplit: {
		num: 471,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Split",
		pp: 10,
		priority: 0,
		flags: {protect: 1, allyanim: 1, metronome: 1},
		onHit(target, source) {
			const newatk = Math.floor((target.storedStats.atk + source.storedStats.atk) / 2);
			target.storedStats.atk = newatk;
			source.storedStats.atk = newatk;
			const newspa = Math.floor((target.storedStats.spa + source.storedStats.spa) / 2);
			target.storedStats.spa = newspa;
			source.storedStats.spa = newspa;
			const newdef = Math.floor((target.storedStats.def + source.storedStats.def) / 2);
			target.storedStats.def = newdef;
			source.storedStats.def = newdef;
			const newspd = Math.floor((target.storedStats.spd + source.storedStats.spd) / 2);
			target.storedStats.spd = newspd;
			source.storedStats.spd = newspd;
			this.add('-activate', source, 'move: Power Split', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
      shortDesc: "Averages Physical and Special stats with target.",
	},
	powerswap: {
		num: 384,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1, metronome: 1},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			const atkSpa: BoostID[] = ['atk', 'spa'];
			for (const stat of atkSpa) {
				targetBoosts[stat] = target.boosts[stat];
				sourceBoosts[stat] = source.boosts[stat];
			}

      	const defSpd: BoostID[] = ['def', 'spd'];
			for (const stat of defSpd) {
				targetBoosts[stat] = target.boosts[stat];
				sourceBoosts[stat] = source.boosts[stat];
			}

			source.setBoost(targetBoosts);
			target.setBoost(sourceBoosts);

			this.add('-swapboost', source, target, 'atk, spa', '[from] move: Power Swap');
  		this.add('-swapboost', source, target, 'def, spd', '[from] move: Power Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
      shortDesc: "Swaps Physical and Special stat stages with target.",
	},

  // Changed Descriptions
	acid: {
		inherit: true,
      shortDesc: "10% chance to lower the foe(s) Special by 1.",
	},
	acidarmor: {
		inherit: true,
      shortDesc: "Raises the user's Physical by 2.",
	},
	irondefense: {
		inherit: true,
      shortDesc: "Raises the user's Physical by 2.",
	},
	acidspray: {
		inherit: true,
      shortDesc: "100% chance to lower the target's Sp. Def by 2.",
	},
	barrier: {
		inherit: true,
      shortDesc: "Raises the user's Physical by 2.",
	},
	shelter: {
		inherit: true,
      shortDesc: "Raises the user's Physical by 2.",
	},
	swordsdance: {
		inherit: true,
		boosts: {
			def: 2,
		},
      shortDesc: "Raises the user's Physical by 2.",
	},
	cottonguard: {
		inherit: true,
      shortDesc: "Raises the user's Physical by 3.",
	},
	tailglow: {
		inherit: true,
		boosts: {
			spd: 3,
		},
      shortDesc: "Raises the user's Special by 3.",
	},
	amnesia: {
		inherit: true,
      shortDesc: "Raises the user's Special by 2.",
	},
	nastyplot: {
		inherit: true,
		boosts: {
			spd: 2,
		},
      shortDesc: "Raises the user's Special by 2.",
	},
	meditate: {
		inherit: true,
		boosts: {
			atk: 1,
		},
      shortDesc: "Raises the user's Physical by 1.",
	},
	howl: {
		inherit: true,
		boosts: {
			def: 1,
		},
      shortDesc: "Raises the user and ally's Physical by 1.",
	},
	defensecurl: {
		inherit: true,
      shortDesc: "Raises the user's Physical by 1.",
	},
	withdraw: {
		inherit: true,
      shortDesc: "Raises the user's Physical by 1.",
	},
	harden: {
		inherit: true,
      shortDesc: "Raises the user's Physical by 1.",
	},
	sharpen: {
		inherit: true,
		boosts: {
			def: 1,
		},
      shortDesc: "Raises the user's Physical by 1.",
	},
	bulkup: {
		inherit: true,
		boosts: {
			// atk: 1,
			def: 1,
		},
      shortDesc: "Raises the user's Physical by 1.",
	},
	calmmind: {
		inherit: true,
		boosts: {
			spd: 1,
			// spa: 1, commented out so the boost mod doesn't boost you twice
		},
      shortDesc: "Raises the user's Special by 1.",
	},
	takeheart: {
		inherit: true,
		boosts: {
			spd: 1,
			// spa: 1, commented out so the boost mod doesn't boost you twice
		},
      shortDesc: "Cures user's status, raises Special by 1.",
	},
	workup: {
		inherit: true,
		boosts: {
			spd: 1,
			def: 1,
		},
      shortDesc: "Raises the user's Physical and Special by 1.",
	},
	cosmicpower: {
		inherit: true,
      shortDesc: "Raises the user's Physical and Special by 1.",
	},
	stockpile: {
		inherit: true,
      shortDesc: "Raises the user's Physical and Special by 1. Max 3 uses.",
	},
	defendorder: {
		inherit: true,
      shortDesc: "Raises the user's Physical and Special by 1.",
	},
	quiverdance: {
		inherit: true,
		boosts: {
			spd: 1,
      	spe: 1,
		},
      shortDesc: "Raises the user's Special and Speed by 1.",
	},
	victorydance: {
		inherit: true,
		boosts: {
			def: 1,
   		spe: 1,
		},
      shortDesc: "Raises the user's Physical and Speed by 1.",
	},
	dragondance: {
		inherit: true,
		boosts: {
			def: 1,
   		spe: 1,
		},
      shortDesc: "Raises the user's Physical and Speed by 1.",
	},
	tidyup: {
		inherit: true,
		onHit(pokemon) {
			let success = false;
			for (const active of this.getAllActive()) {
				if (active.removeVolatile('substitute')) success = true;
			}
			const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
			const sides = [pokemon.side, ...pokemon.side.foeSidesWithConditions()];
			for (const side of sides) {
				for (const sideCondition of removeAll) {
					if (side.removeSideCondition(sideCondition)) {
						this.add('-sideend', side, this.dex.conditions.get(sideCondition).name);
						success = true;
					}
				}
			}
			if (success) this.add('-activate', pokemon, 'move: Tidy Up');
			return !!this.boost({def: 1, spe: 1}, pokemon, pokemon, null, false, true) || success;
		},
      shortDesc: "User +1 Phys, Spe. Clears all substitutes/hazards.",
	},
	ancientpower: {
		inherit: true,
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
					// atk: 1,
					spd: 1,
					// def: 1,
					spe: 1,
				},
			},
		},
	},
	ominouswind: {
		inherit: true,
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
					// atk: 1,
					spd: 1,
					// def: 1,
					spe: 1,
				},
			},
		},
	},
	silverwind: {
		inherit: true,
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
					// atk: 1,
					spd: 1,
					// def: 1,
					spe: 1,
				},
			},
		},
	},
	clangoroussoul: {
		inherit: true,
		boosts: {
			def: 1,
			// atk: 1,
			spd: 1,
			// def: 1,
			spe: 1,
		},
	},
	noretreat: {
		inherit: true,
		boosts: {
			def: 1,
			// atk: 1,
			spd: 1,
			// def: 1,
			spe: 1,
		},
	},
	clangoroussoulblaze: {
		inherit: true,
		selfBoost: {
			boosts: {
				def: 1,
				// atk: 1,
				spd: 1,
				// def: 1,
				spe: 1,
			},
		},
	},
	extremeevoboost: {
		inherit: true,
		boosts: {
			def: 2,
			// atk: 2,
			spd: 2,
			// spa: 2,
			spe: 2,
		},
	},
	shellsmash: {
		inherit: true,
		boosts: {
			def: 1,
			spd: 1,
			spe: 2,
		},
      shortDesc: "Raises Physical & Special by 1, and Speed by 2.",
	},
	appleacid: {
		inherit: true,
      shortDesc: "100% chance to lower the foe(s) Special by 1.",
	},
	luminacrash: {
		inherit: true,
      shortDesc: "100% chance to lower the foe(s) Special by 2.",
	},
	seedflare: {
		inherit: true,
      shortDesc: "40% chance to lower the foe(s) Special by 2.",
	},
	gravapple: {
		inherit: true,
      shortDesc: "100% chance to lower the foe(s) Physical by 1.",
	},
	firelash: {
		inherit: true,
      shortDesc: "100% chance to lower the foe(s) Physical by 1.",
	},
	bittermalice: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
      shortDesc: "100% chance to lower the foe(s) Physical by 1.",
	},
	armorcannon: {
		inherit: true,
      shortDesc: "Lowers the user's Physical and Special by 1.",
	},
	closecombat: {
		inherit: true,
      shortDesc: "Lowers the user's Physical and Special by 1.",
	},
	dragonascent: {
		inherit: true,
      shortDesc: "Lowers the user's Physical and Special by 1.",
	},
	headlongrush: {
		inherit: true,
      shortDesc: "Lowers the user's Physical and Special by 1.",
	},
	superpower: {
		inherit: true,
		self: {
			boosts: {
				def: -1,
			},
		},
      shortDesc: "Lowers the user's Physical by 1.",
	},
	clangingscales: {
		inherit: true,
      shortDesc: "Lowers the user's Physical by 1.",
	},
	aromaticmist: {
		inherit: true,
      shortDesc: "Raises an ally's Special by 1.",
	},
	aurorabeam: {
		inherit: true,
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
      shortDesc: "10% chance to lower the target's Physical by 1.",
	},
	babydolleyes: {
		inherit: true,
		boosts: {
			def: -1,
		},
      shortDesc: "Lowers the target's Physical by 1.",
	},
	bellydrum: {
		inherit: true,
		onHit(target) {
			if (target.hp <= target.maxhp / 2 || target.boosts.def >= 6 || target.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(target.maxhp / 2);
			this.boost({def: 12}, target);
		},
      shortDesc: "User loses 50% max HP. Maximizes Physical.",
	},
	playrough: {
		inherit: true,
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
      shortDesc: "10% chance to lower the target's Physical by 1.",
	},
	moonblast: {
		inherit: true,
		secondary: {
			chance: 30,
			boosts: {
				spdd: -1,
			},
		},
      shortDesc: "30% chance to lower the target's Special by 1.",
	},
	springtidestorm: {
		inherit: true,
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
      shortDesc: "30% chance to lower the foe(s)'s Physical by 1.",
	},
	psychic: {
		inherit: true,
      shortDesc: "10% chance to lower the target's Special by 1.",
	},
	focusblast: {
		inherit: true,
      shortDesc: "10% chance to lower the target's Special by 1.",
	},
	energyball: {
		inherit: true,
      shortDesc: "10% chance to lower the target's Special by 1.",
	},
	shadowball: {
		inherit: true,
      shortDesc: "20% chance to lower the target's Special by 1.",
	},
	earthpower: {
		inherit: true,
      shortDesc: "10% chance to lower the target's Special by 1.",
	},
	bugbuzz: {
		inherit: true,
      shortDesc: "10% chance to lower the target's Special by 1.",
	},
	flashcannon: {
		inherit: true,
      shortDesc: "10% chance to lower the target's Special by 1.",
	},
	crunch: {
		inherit: true,
      shortDesc: "20% chance to lower the target's Physical by 1.",
	},
	liquidation: {
		inherit: true,
      shortDesc: "20% chance to lower the target's Physical by 1.",
	},
	shadowbone: {
		inherit: true,
      shortDesc: "20% chance to lower the target's Physical by 1.",
	},
	irontail: {
		inherit: true,
      shortDesc: "30% chance to lower the target's Physical by 1.",
	},
	spiritbreak: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
      shortDesc: "100% chance to lower the target's Special by 1.",
	},
	mysticalfire: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
      shortDesc: "100% chance to lower the target's Special by 1.",
	},
	lunge: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
      shortDesc: "100% chance to lower the target's Physical by 1.",
	},
	thunderouskick: {
		inherit: true,
      shortDesc: "100% chance to lower the target's Physical by 1.",
	},
	tropkick: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
      shortDesc: "100% chance to lower the target's Physical by 1.",
	},
	skittersmack: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
      shortDesc: "100% chance to lower the target's Special by 1.",
	},
	snarl: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
      shortDesc: "100% chance to lower the foe(s)'s Special by 1.",
	},
	strugglebug: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
      shortDesc: "100% chance to lower the foe(s)'s Special by 1.",
	},
	breakingswipe: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
      shortDesc: "100% chance to lower the foe(s)'s Physical by 1.",
	},
	chillingwater: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
      shortDesc: "100% chance to lower the foe's Physical by 1.",
	},
	rocksmash: {
		inherit: true,
      shortDesc: "50% chance to lower the target's Physical by 1.",
	},
	razorshell: {
		inherit: true,
      shortDesc: "50% chance to lower the target's Physical by 1.",
	},
	lusterpurge: {
		inherit: true,
      shortDesc: "50% chance to lower the target's Special by 1.",
	},
	mistball: {
		inherit: true,
		secondary: {
			chance: 50,
			boosts: {
				spd: -1,
			},
		},
      shortDesc: "50% chance to lower the target's Special by 1.",
	},
	crushclaw: {
		inherit: true,
      shortDesc: "50% chance to lower the target's Physical by 1.",
	},
	poweruppunch: {
		inherit: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
      shortDesc: "100% chance to raise the user's Physical by 1.",
	},
	psyshieldbash: {
		inherit: true,
      shortDesc: "100% chance to raise the user's Physical by 1.",
	},
	steelwing: {
		inherit: true,
      shortDesc: "10% chance to raise the user's Physical by 1.",
	},
	meteormash: {
		inherit: true,
		secondary: {
			chance: 20,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
      shortDesc: "20% chance to raise the user's Physical by 1.",
	},
	chargebeam: {
		inherit: true,
		secondary: {
			chance: 70,
			self: {
				boosts: {
					spd: 1,
				},
			},
		},
      shortDesc: "70% chance to raise the user's Special by 1.",
	},
	torchsong: {
		inherit: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spd: 1,
				},
			},
		},
      shortDesc: "100% chance to raise the user's Special by 1.",
	},
	mysticalpower: {
		inherit: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spd: 1,
				},
			},
		},
      shortDesc: "100% chance to raise the user's Special by 1.",
	},
	fierydance: {
		inherit: true,
		secondary: {
			chance: 50,
			self: {
				boosts: {
					spd: 1,
				},
			},
		},
      shortDesc: "50% chance to raise the user's Special by 1.",
	},
	diamondstorm: {
		inherit: true,
      shortDesc: "50% chance to raise the user's Physical by 2.",
	},
	bodypress: {
		inherit: true,
      shortDesc: "No additional effect.",
	},
	captivate: {
		inherit: true,
		boosts: {
			spd: -2,
		},
      shortDesc: "Lowers the foe(s)'s Special by 2 if opposite gender.",
	},
	eerieimpulse: {
		inherit: true,
		boosts: {
			spd: -2,
		},
      shortDesc: "Lowers the foe's Special by 2.",
	},
	metalsound: {
		inherit: true,
      shortDesc: "Lowers the foe's Special by 2.",
	},
	faketears: {
		inherit: true,
      shortDesc: "Lowers the foe's Special by 2.",
	},
	screech: {
		inherit: true,
      shortDesc: "Lowers the foe's Physical by 2.",
	},
	charm: {
		inherit: true,
		boosts: {
			atk: -2,
		},
      shortDesc: "Lowers the foe's Physical by 2.",
	},
	tickle: {
		inherit: true,
		boosts: {
			def: -1,
		},
      shortDesc: "Lowers the foe's Physical by 1.",
	},
	featherdance: {
		inherit: true,
		boosts: {
			def: -2,
		},
      shortDesc: "Lowers the foe's Physical by 2.",
	},
	playnice: {
		inherit: true,
		boosts: {
			def: -1,
		},
      shortDesc: "Lowers the foe's Physical by 1.",
	},
	confide: {
		inherit: true,
		boosts: {
			spd: -1,
		},
      shortDesc: "Lowers the foe's Special by 1.",
	},
	growl: {
		inherit: true,
		boosts: {
			def: -1,
		},
      shortDesc: "Lowers the foe(s)'s Physical by 1.",
	},
	leer: {
		inherit: true,
      shortDesc: "Lowers the foe(s)'s Physical by 1.",
	},
	tailwhip: {
		inherit: true,
      shortDesc: "Lowers the foe(s)'s Physical by 1.",
	},
	coil: {
		inherit: true,
		boosts: {
			def: 1,
      	accuracy: 1,
		},
      shortDesc: "Raises the user's Physical and Accuracy by 1.",
	},
	honeclaws: {
		inherit: true,
		boosts: {
			def: 1,
      	accuracy: 1,
		},
      shortDesc: "Raises the user's Physical and Accuracy by 1.",
	},
	coaching: {
		inherit: true,
		boosts: {
			def: 1,
		},
      shortDesc: "Raises an ally's Physical by 1.",
	},
	curse: {
		num: 174,
		accuracy: true,
		basePower: 0,
		category: "Status",
      shortDesc: "Curses if Ghost, else -1 Spe, +1 Physical.",
		name: "Curse",
		pp: 10,
		priority: 0,
		flags: {bypasssub: 1, metronome: 1},
		volatileStatus: 'curse',
		onModifyMove(move, source, target) {
			if (!source.hasType('Ghost')) {
				move.target = move.nonGhostTarget as MoveTarget;
			} else if (source.isAlly(target)) {
				move.target = 'randomNormal';
			}
		},
		onTryHit(target, source, move) {
			if (!source.hasType('Ghost')) {
				delete move.volatileStatus;
				delete move.onHit;
				move.self = {boosts: {spe: -1, def: 1, /*atk: 1*/}};
			} else if (move.volatileStatus && target.volatiles['curse']) {
				return false;
			}
		},
		onHit(target, source) {
			this.directDamage(source.maxhp / 2, source, source);
		},
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'Curse', '[of] ' + source);
			},
			onResidualOrder: 12,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
		secondary: null,
		target: "normal",
		nonGhostTarget: "self",
		type: "Ghost",
		zMove: {effect: 'curse'},
		contestType: "Tough",
	},
	decorate: {
		inherit: true,
		boosts: {
			def: 2,
			spd: 2,
		},
      shortDesc: "Raises an ally's Physical and Special by 2.",
	},
	electroshot: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({spd: 1}, attacker, attacker, move);
			if (['raindance', 'primordialsea'].includes(attacker.effectiveWeather())) {
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
      shortDesc: "Raises Special by 1, hits turn 2. Rain: no charge.",
	},
	meteorbeam: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({spd: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
      shortDesc: "Raises Special by 1, hits turn 2.",
	},
	skullbash: {
		inherit: true,
      shortDesc: "Raises Physical by 1, hits turn 2.",
	},
	fellstinger: {
		inherit: true,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({def: 3}, pokemon, pokemon, move);
		},
      shortDesc: "Raises user's Physical by 3 if this KOes the target.",
	},
	filletaway: {
		inherit: true,
		boosts: {
			def: 2,
			spd: 2,
			spe: 2,
		},
      shortDesc: "+2 Physical, Special, Speed for 1/2 user's max HP.",
	},
	flatter: {
		inherit: true,
		boosts: {
			spd: 1,
		},
      shortDesc: "Raises the target's Special by 1 and confuses it.",
	},
	swagger: {
		inherit: true,
		boosts: {
			def: 2,
		},
      shortDesc: "Raises the target's Physical by 2 and confuses it.",
	},
	fleurcannon: {
		inherit: true,
		self: {
			boosts: {
				spd: -2,
			},
		},
      shortDesc: "Lowers the user's Special by 2.",
	},
	overheat: {
		inherit: true,
		self: {
			boosts: {
				spd: -2,
			},
		},
      shortDesc: "Lowers the user's Special by 2.",
	},
	psychoboost: {
		inherit: true,
		self: {
			boosts: {
				spd: -2,
			},
		},
      shortDesc: "Lowers the user's Special by 2.",
	},
	leafstorm: {
		inherit: true,
		self: {
			boosts: {
				spd: -2,
			},
		},
      shortDesc: "Lowers the user's Special by 2.",
	},
	dracometeor: {
		inherit: true,
		self: {
			boosts: {
				spd: -2,
			},
		},
      shortDesc: "Lowers the user's Special by 2.",
	},
	makeitrain: {
		inherit: true,
		self: {
			boosts: {
				spd: -1,
			},
		},
      shortDesc: "Lowers the user's Sp. Atk by 1. Hits foe(s).",
	},
	hyperspacefury: {
		inherit: true,
      shortDesc: "Hoopa-U: Lowers user's Phys by 1; breaks protect.",
	},
	flowershield: {
		inherit: true,
      shortDesc: "Raises Defense by 1 of all active Grass types.",
	},
	rototiller: {
		inherit: true,
		onHitField(target, source) {
			const targets: Pokemon[] = [];
			let anyAirborne = false;
			for (const pokemon of this.getAllActive()) {
				if (!pokemon.runImmunity('Ground')) {
					this.add('-immune', pokemon);
					anyAirborne = true;
					continue;
				}
				if (pokemon.hasType('Grass')) {
					// This move affects every grounded Grass-type Pokemon in play.
					targets.push(pokemon);
				}
			}
			if (!targets.length && !anyAirborne) return false; // Fails when there are no grounded Grass types or airborne Pokemon
			for (const pokemon of targets) {
				this.boost({def: 1, spd: 1}, pokemon, source);
			}
		},
      shortDesc: "Raises Phys/Spc of grounded Grass types by 1.",
	},
	gearup: {
		inherit: true,
		onHitSide(side, source, move) {
			const targets = side.allies().filter(target => (
				target.hasAbility(['plus', 'minus']) &&
				(!target.volatiles['maxguard'] || this.runEvent('TryHit', target, source, move))
			));
			if (!targets.length) return false;
			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({def: 1, spd: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
      shortDesc: "Raises Phys, Spc of allies with Plus/Minus by 1.",
	},
	magneticflux: {
		inherit: true,
      shortDesc: "Raises Phys, Spc of allies with Plus/Minus by 1.",
	},
	geomancy: {
		inherit: true,
		boosts: {
			spd: 2,
			spe: 2,
		},
      shortDesc: "Charges, then raises Special & Speed by 2 turn 2.",
	},
	growth: {
		inherit: true,
		boosts: {
			def: 1,
			spd: 1,
		},
      shortDesc: "Raises the user's Physical and Special by 1; 2 in Sun.",
	},
	kingsshield: {
		inherit: true,
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
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
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: -1}, source, target, this.dex.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: -1}, source, target, this.dex.getActiveMove("King's Shield"));
				}
			},
		},
      shortDesc: "Protects from damaging attacks. Contact: -1 Physical.",
	},
	obstruct: {
		inherit: true,
      shortDesc: "Protects from damaging attacks. Contact: -2 Physical.",
	},
	memento: {
		inherit: true,
		boosts: {
			def: -2,
			spd: -2,
		},
      shortDesc: "Lowers target's Physical, Special by 2. User faints.",
	},
	partingshot: {
		inherit: true,
		boosts: {
			def: -1,
			spd: -1,
		},
      shortDesc: "Lowers target's Physical, Special by 1. User switches.",
	},
	nobleroar: {
		inherit: true,
		boosts: {
			def: -1,
			spd: -1,
		},
      shortDesc: "Lowers target's Physical, Special by 1.",
	},
	tearfullook: {
		inherit: true,
		boosts: {
			def: -1,
			spd: -1,
		},
      shortDesc: "Lowers target's Physical, Special by 1.",
	},
	octolock: {
		inherit: true,
      shortDesc: "Traps target, lowers Phys and Spc by 1 each turn.",
	},
	orderup: {
		inherit: true,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!pokemon.volatiles['commanded']) return;
			const tatsugiri = pokemon.volatiles['commanded'].source;
			if (tatsugiri.baseSpecies.baseSpecies !== 'Tatsugiri') return; // Should never happen
			switch (tatsugiri.baseSpecies.forme) {
			case 'Droopy':
				this.boost({def: 1}, pokemon, pokemon);
				break;
			case 'Stretchy':
				this.boost({spe: 1}, pokemon, pokemon);
				break;
			default:
				this.boost({def: 1}, pokemon, pokemon);
				break;
			}
		},
      shortDesc: "Curly|Droopy|Stretchy eaten: +1 Phys|Phys|Spe.",
	},
	photongeyser: {
		inherit: true,
      shortDesc: "Physical if user's Phys > Spc. Ignores Abilities.",
	},
	psyshock: {
		inherit: true,
      shortDesc: "Damages target based on Physical, not Special.",
	},
	psystrike: {
		inherit: true,
      shortDesc: "Damages target based on Physical, not Special.",
	},
	secretsword: {
		inherit: true,
      shortDesc: "Damages target based on Physical, not Special.",
	},
	rage: {
		inherit: true,
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Rage');
			},
			onHit(target, source, move) {
				if (target !== source && move.category !== 'Status') {
					this.boost({def: 1});
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Rage before attack');
				pokemon.removeVolatile('rage');
			},
		},
      shortDesc: "Raises the user's Physical by 1 if hit during use.",
	},
	sandstorm: {
		inherit: true,
      shortDesc: "For 5 turns, a sandstorm rages. Rock: 1.5x Spc.",
	},
	snowscape: {
		inherit: true,
      shortDesc: "For 5 turns, a snow falls. Ice: 1.5x Phys.",
	},
	scaleshot: {
		inherit: true,
      shortDesc: "Hits 2-5 times. User: -1 Phys, +1 Spe after last hit.",
	},
	shiftgear: {
		inherit: true,
		boosts: {
			spe: 2,
			def: 1,
		},
      shortDesc: "Raises the user's Speed by 2 and Physical by 1.",
	},
	strengthsap: {
		inherit: true,
		onHit(target, source) {
			if (target.boosts.atk === -6) return false;
			const atk = target.getStat('atk', false, true);
			const success = this.boost({def: -1}, target, source, null, false, true);
			return !!(this.heal(atk, source, target) || success);
		},
      shortDesc: "User heals HP=target's Phys stat. Lowers Phys by 1.",
	},
	stuffcheeks: {
		inherit: true,
      shortDesc: "Must hold Berry to use. User eats Berry, Phys +2.",
	},
	terablast: {
		inherit: true,
      shortDesc: "If Terastallized: Phys. if Phys > Spc, type = Tera.",
	},
	triplearrows: {
		inherit: true,
      shortDesc: "High crit. Target: 50% -1 Physical, 30% flinch.",
	},
	venomdrench: {
		inherit: true,
		onHit(target, source, move) {
			if (target.status === 'psn' || target.status === 'tox') {
				return !!this.boost({def: -1, spd: -1, spe: -1}, target, source, move);
			}
			return false;
		},
      shortDesc: "Lowers Phys/Spc/Speed of poisoned foes by 1.",
	},
	foulplay: {
		inherit: true,
      shortDesc: "Uses target's Physical stat in damage calculation.",
	},
	charge: {
		inherit: true,
      shortDesc: "+1 Special, user's next Electric move 2x power.",
	},
};
