export const Abilities: import('../sim/dex-abilities').AbilityDataTable = {
	direspikescales: {
		onEffectiveness(typeMod, target, type, move) {
			if (!target || target.species.name !== 'Dalamadur') return;
			if (this.effectState.resisted) return -1; // all hits of multi-hit move should be not very effective
			if (move.category === 'Status' || move.id === 'struggle') return;
			if (!target.runImmunity(move.type)) return; // immunity has priority
			if (target.hp < target.maxhp) return;

			this.add('-activate', target, 'ability: Direspike Scales');
			this.effectState.resisted = true;
			return -1;
		},
		onAnyAfterMove() {
			this.effectState.resisted = false;
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, breakable: 1},
		name: "Direspike Scales",
		shortDesc: "Dalamadur: If full HP, attacks taken have 0.5 effectiveness unless naturally immune.",
		rating: 3.5,
		num: 1000,
	},
	icearmor: {
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical' && target.species.id === 'zamtrios') {
					this.add('-ability', target, 'Ice-Armor');
					this.add('-message', `Zamtrios is transforming!`);
					target.formeChange('zamtriosiced', this.effect, true);
				}
			},
			onStart(pokemon) {
				if (this.field.isWeather(['hail', 'snow']) && pokemon.species.id === 'zamtrios') {
					this.add('-ability', pokemon, 'Ice-Armor');
					this.add('-message', `Zamtrios is transforming!`);
					pokemon.formeChange('zamtriosiced', this.effect, true);
				}
			},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1, 
			notransform: 1},
		name: "Ice-Armor",
		shortDesc: "This pokemon will react to a physical attack by encasing it's body in ice. Also activates under Snow.",
		rating: 3,
		num: 1001,
	},
	puffup: {
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Special' && target.species.id === 'zamtrios') {
					this.add('-ability', target, 'Puff-Up');
					this.add('-message', `Zamtrios is transforming!`);
					target.formeChange('zamtriospuffed', this.effect, true);
				}
			},
			onStart(pokemon) {
				if (this.field.isWeather(['rain']) && pokemon.species.id === 'zamtrios') {
					this.add('-ability', pokemon, 'Puff-Up');
					this.add('-message', `Zamtrios is transforming!`);
					pokemon.formeChange('zamtriospuffed', this.effect, true);
				}
			},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1, 
			notransform: 1},
		name: "Puff-Up",
		shortDesc: "This pokemon will react to a special attack by puffing up it's body. Also activates under Rain.",
		rating: 3,
		num: 1002,
	},
	debris: {
		onDamagingHit(damage, target, source, move) {
			const side = source.isAlly(target) ? source.side.foe : source.side;
			const Spikes = side.sideConditions['spikes'];
			if (move.category === 'Physical' && (!Spikes || Spikes.layers < 3)) {
				this.add('-activate', target, 'ability: Debris');
				side.addSideCondition('spikes', target);
			}
		},
		flags: {},
		name: "Debris",
		shortDesc: "If this pokemon is hit by a physical attack, Spikes are set on the opposing side.",
		rating: 3.5,
		num: 1003,
	},
	solarwrath: {
		onModifyAtkPriority: 5,
		onModifyAtk(spa, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		flags: {},
		name: "Solar Wrath",
		shortDesc: "If Sunny Day is active, this Pokemon's Atk is 1.5x; loses 1/8 max HP per turn.",
		rating: 2,
		num: 1004,
	},
	tempestenergy: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onStart(pokemon) {
			if (pokemon.side.sideConditions['tailwind'] || this.field.isWeather('sandstorm')) {
				this.boost({ spa: 1 }, pokemon, pokemon);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.flags['wind']) {
				if (!this.boost({ spa: 1 }, target, target)) {
					this.add('-immune', target, '[from] ability: Tempest Energy');
				}
				return null;
			}
		},
		onAllySideConditionStart(target, source, sideCondition) {
			const pokemon = this.effectState.target;
			if (sideCondition.id === 'tailwind' || this.field.isWeather('sandstorm')) {
				this.boost({ spa: 1 }, pokemon, pokemon);
			}
		},
		flags: {},
		rating: 1,
		desc: "This Pokemon is immune to wind moves and raises its Sp.Attack by 1 stage when hit by a wind move, when Tailwind begins on this Pokemon's side, or when Sandstorm is active. Sandstorm immunity.",
		shortDesc: "If hit by a wind move or under Tailwind/Sandstorm: +1 SpA. Wind move/Sand immunity.",
		name: "Tempest Energy",
		num: 1005,
	},
	tempestforce: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onStart(pokemon) {
			if (pokemon.side.sideConditions['tailwind'] || this.field.isWeather('sandstorm')) {
				this.boost({ atk: 1 }, pokemon, pokemon);
			}
		},
		onAllySideConditionStart(target, source, sideCondition) {
			const pokemon = this.effectState.target;
			if (sideCondition.id === 'tailwind' || this.field.isWeather('sandstorm')) {
				this.boost({ atk: 1 }, pokemon, pokemon);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.flags['wind']) {
				if (!this.boost({atk: 1}, target, target)) {
					this.add('-immune', target, '[from] ability: Tempest Force');
				}
				return null;
			}
		},
		flags: {},
		rating: 1,
		num: 1006,
		desc: "This Pokemon is immune to wind moves and raises its Attack by 1 stage when hit by a wind move, when Tailwind begins on this Pokemon's side, or when Sandstorm is active. Sandstorm immunity.",
		shortDesc: "If hit by a wind move or under Tailwind/Sandstorm: +1 Atk. Wind move/Sand immunity.",
		name: "Tempest Force",
	},
	mightywall: {
		name: "Mighty Wall",
		flags: {},
		rating: 1,
		num: 1007,
		shortDesc: "This Pokemon takes half damage from attacks when switching in.",
		onSourceModifyDamage(damage, source, target, move) {
			if (!target.activeTurns) {
				this.debug('Mighty Wall weaken');
				return this.chainModify(0.5);
			}
		},
	},
	ignite: {
		desc: "This Pokémon's Normal-type moves become Fire-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokémon's Normal-type moves become Fire-type and have 1.2x power.",
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fire';
				(move as any).igniteBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if ((move as any).igniteBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		name: "Ignite",
		rating: 4,
		num: 1008,
	},
	vampirism: {
		shortDesc: "Replaces target's ability with Vampirism if user made contact.",
		onSourceDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			const targetAbility = target.getAbility();
	
			// Check if the target's ability can be suppressed
			if (targetAbility.flags['cantsuppress'] || targetAbility.id === 'vampirism') {
				return; // Exit if the target's ability cannot be replaced or is already Vampirism
			}
	
			// Check if the move makes contact
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				// Replace the target's ability with Vampirism
				const oldAbility = target.setAbility('vampirism', source);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Vampirism', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
				}
			}
		},
		flags: {},
		name: "Vampirism",
		rating: 3,
		num: 1009,
	},
	aggravation: {
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit && !move.smartTarget ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({atk: 1}, target, target);
			}
		},
		flags: {},
		name: "Aggravation",
		shortDesc: "This Pokemon's Attack is raised by 1 when it reaches 1/2 or less of its Max HP.",
		rating: 2,
		num: 1010,
	},
	geminicore: {
		onChargeMove(pokemon, target, move) {
			this.debug('tireless - remove charge turn for ' + move.id);
			this.add('-activate', pokemon, 'ability: Gemini Core');
			this.attrLastMove('[still]');
			this.addMove('-anim', pokemon, move.name, target);
			return false; // skip charge turn
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['mustrecharge']) {
				pokemon.removeVolatile('mustrecharge');
				this.debug('tireless - remove recharge');
				this.add('-activate', pokemon, 'ability: Gemini Core');
			}
		},
		onBeforeMovePriority: 11,
		onBeforeMove(pokemon) {
			if (pokemon.volatiles['mustrecharge']) {
				pokemon.removeVolatile('mustrecharge');
				this.debug('geminicore - failsafe remove recharge');
			}
		},
		name: "Gemini Core",
		desc: "When this Pokemon uses a move that must spend a turn charging, it executes on the first turn, after any effects are applied from the charge. When it uses a move that must spend a turn recharging, it does not need to recharge.",
		shortDesc: "This Pokemon's attacks skip charging and recharging turns.",
		activate: "[POKEMON] became energized immediately!",
        flags: {},
		rating: 2,
		num: 1011,
	},
	megiddosgift: {
		onBeforeMovePriority: 0.5,
		onBeforeMove(target, source, move) {
			if (move.type === 'Fire') {
				this.field.setWeather('sunnyday');
			} else if (move.type === 'Water') {
				this.field.setWeather('raindance');
			}
		},
		name: "Megiddo's Gift",
		shortDesc: "Before using a Water or Fire-type move, this Pokemon sets Rain Dance or Sunny Day respectively.",
		rating: 1012,
	},
	corrosiveclaws: {
		desc: "When this Pokemon brings an opponent to 50% or under using an attacking move, it badly poisons that opponent.",
		shortDesc: "Badly poison enemies brought under half health.",
		onAfterMove(source, target, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				target.setStatus('tox');
			}
		},
		name: "Corrosive Claws",
		rating: 4,
		num: 1013,
	},
	centrifuge: {
		shortDesc: "The Pokémon draws Ground moves to itself to raise Attack by 1; Ground immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				if (!this.boost({atk: 1})) {
					this.add('-immune', target, '[from] ability: Centrifuge');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Ground' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				return this.effectState.target;
			}
		},
		name: "Centrifuge",
		rating: 3,
		num: 1014,
	},
	dragonvein: {
		desc: "When it KOs an opponent with a direct move, it recovers 25% of its max HP.",
		shortDesc: "Heals 25% HP on KO.",
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.heal(source.baseMaxhp / 4);
			}
		},
		name: "Dragonvein",
		rating: 3,
		num: 1015,
	},
	permafrost: {
			name: "Permafrost",
			onStart(pokemon) {
				this.add('-ability', pokemon, 'Permafrost');
				this.add('-message', `${pokemon.name}'s freezing aura turns water into ice!`);
			},
			onDamagingHit(damage, target, source, move) {
				if (move.type === 'Ice') {
					this.boost({def: 1});
				}
			},
			onFoeBeforeMovePriority: 13,
			onFoeBeforeMove(attacker, defender, move) {
				attacker.addVolatile('permafrost');
			},
			condition: {
				onModifyTypePriority: -1,
				onModifyType(move, pokemon) {
					if (move.type === 'Water') {
						move.type = 'Ice';
					}
				},
				onAfterMove(pokemon) {
					pokemon.removeVolatile('permafrost');
				},
			},
			shortDesc: "Water moves used against this Pokemon become Ice-type. +1 Def when hit by Ice.",
			num: 1016,
			rating: 4,
		},
	heatsink: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Heat Sink');
				}
				return null;
			}
		},
		flags: {breakable: 1},
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fire moves; Fire immunity.",
		name: "Heat Sink",
		rating: 3.5,
		num: 1017,
	},
	rustedgale: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Rusted Gale');
		},
		onAnyModifyDef(def, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Rusted Gale')) return;
			if (!move.ruinedDef?.hasAbility('Rusted Gale')) move.ruinedDef = abilityHolder;
			if (move.ruinedDef !== abilityHolder) return;
			this.debug('Rusted Gale Def drop');
			return this.chainModify(0.75);
		},
		flags: {},
		name: "Rusted Gale",
		shortDesc: "Active Pokemon without this Ability have their Defense multiplied by 0.75.",
		rating: 4.5,
		num: 1018,
	},
	frostnip: {
		shortDesc: "This Pokemon's moves have 1.3x power against frostbitten targets.",
		onBasePower(basePower, attacker, defender, move) {
			if (defender && ['frz'].includes(defender.status)) return this.chainModify(1.3);
		},
		name: "Frostnip",
		rating: 4,
		num: 1019,
	},
	pungency: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('stench', this.effectState.target);
				}
			}
		},
		flags: {},
		shortDesc: "30% chance of inflicting Stench on a Pokemon if they make contact.",
		name: "Pungency",
		rating: 0.5,
		num: 1020,
	},
	oilslick: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Oilslick', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({spe: -1}, target, pokemon, null, true);
				}
			}
		},
		flags: {},
		shortDesc: "On switch-in, this Pokemon lowers the Speed of opponents by 1 stage.",
		name: "Oilslick",
		rating: 3.5,
		num: 1021,
	},
	airbag: {
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category !== 'Physical') return;
			if (!target.runImmunity(move.type)) return;
			if (this.dex.getEffectiveness(move, target) === -1) return;
			return 0;
		},
		name: "Airbag",
		rating: 4,
		shortDesc: "If this Pokemon is hit by a physical super effective move, it takes neutral damage.",
		num: 1022,
	},
	itembag: {
		name: "Itembag",
		desc: "At the end of each turn, if it doesn't have an held item, the user acquires a random item. (Leftovers, Sitrus Berry, Lum Berry, Figy Berry, Choice Band, Choice Specs, Choice Scarf, Flame Orb, Frost Orb, Toxic Orb, Light Ball, Iron Ball, Rocky Helmet, Heavy-Duty Boots)",
		shortDesc: "Gets a random item from a list at the end of the turn if the user doesn't already have one.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			const itemList = ['leftovers', 'sitrusberry', 'lumberry', 'figyberry', 'choiceband', 'choicespecs', 'choicescarf', 'flameorb', 'frostaorb', 'toxicorb', 'lightball', 'ironball', 'rockyhelmet', 'heavydutyboots'];
			const itemIndex = this.random(itemList.length);
			const itemMade = itemList[itemIndex];
			if (pokemon.hp && !pokemon.item) {
				pokemon.setItem(itemMade);
				this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Itembag');
			}
		},
		rating: 3,
		num: 1023,
	},
	generalist: {
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (!pokemon.hasType(move.type)) {
				return this.chainModify(1.3);
			}
		},
		name: "Generalist",
		shortDesc: "Non-STAB moves have 1.3x power.",
		rating: 4.5,
		num: 1024,
	},
	frozencalamity: {
		onStart(pokemon) {
			const target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target.side.totalFainted) {
				this.add('-activate', pokemon, 'ability: Frozen Calamity');
				const fallen = Math.min(target.side.totalFainted, 5);
				this.add('-start', pokemon, `fallen${fallen}`, '[silent]');
				this.effectState.fallen = fallen;
			}
		},
		onResidual(pokemon) {
			this.add('-end', pokemon, `fallen${this.effectState.fallen}`, '[silent]');
			const target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target.side.totalFainted) {
				this.add('-activate', pokemon, 'ability: Frozen Calamity');
				const fallen = Math.min(target.side.totalFainted, 5);
				this.add('-start', pokemon, `fallen${fallen}`, '[silent]');
				this.effectState.fallen = fallen;
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, `fallen${this.effectState.fallen}`, '[silent]');
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.effectState.fallen && move.type === 'Ice') {
				const powMod = [4096, 4300, 4505, 4710, 4915, 5120];
				this.debug(`Pyre boost: ${powMod[this.effectState.fallen]}/4096`);
				return this.chainModify([powMod[this.effectState.fallen], 4096]);
			}
		},
		flags: {},
		name: "Frozen Calamity",
		desc: "For each fainted Pokemon on the opposing team, this Pokemon's Ice-type moves power is increased by 5% of their base power.",
		shortDesc: "For each fainted Pokemon on the opposing team, Ice-type power +5%.",
		rating: 4,
		num: 1025,
	},
	riptide: {
		onResidualOrder: 8,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.foes()) {
				if (target.volatiles['trapped']) {
					const damage = this.damage(pokemon.baseMaxhp / 8, target, pokemon);
					if (damage) {
						this.heal(damage, pokemon, pokemon);
					}
				}
			}
		},
		flags: {},
		desc: "If any foe is trapped by a non-damaging move, the foe loses 1/8 of its max HP; heals by that amount.",
		shortDesc: "If foe is hit by non-residual trapping move, foe loses 1/8 of max HP; user heals 1/8th.",
		name: "Riptide",
		rating: 3,
		num: 1026,
	},
	ragingrebel: {
		shortDesc: "This Pokémon and allies: 1.3x damage when any Pokémon has stat drops; attack can't lowered.",
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			let rebel = null;
			for (const pokemon of this.getAllActive()) {
				let statDrop: BoostName;
				for (statDrop in pokemon.boosts) {
					if (pokemon.boosts[statDrop] < 0) rebel = true;
				}
			}
			if (rebel) {
				this.debug('Rebel boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Raging Rebel", "[of] " + target);
				}
			}
		},
		name: "Raging Rebel",
		rating: 2.5,
		num: 1027,
	},
	silversubsume: {
		onAnyTryMove(target, source, effect) {
			if (['stealthrock', 'spikes', 'toxicspikes', 'stickyweb'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.boost({atk: 1}, source);
				this.add('cant', this.effectState.target, 'ability: Silver Subsume', effect, '[of] ' + target);
				return false;
			}
		},
		name: "Silver Subsume",
		shortDesc: "If a hazard move is used on this Pokemon, it fails and this Pokemon's Attack is raised by 1.",
		rating: 3.5,
		num: 1028,
	},
	strafe: {
		shortDesc: "When taking damages, this Pokemon adds 20% of its Speed to its corresponding defense.",
		name: "Strafe",
		onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			const spe = pokemon.getStat('spe', false, true);
			const newDef = def + (spe / 5);
			return newDef;
		},
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			const spe = pokemon.getStat('spe', false, true);
			const newSpD = spd + (spe / 5);
			return newSpD;
		},
		rating: 3.5,
		num: 1029,
	},
	plow: {
		onDamage(damage, target, source, effect) {
			if (effect && (effect.id === 'stealthrock' || effect.id === 'spikes')) {
				this.heal(damage);
				return false;
			}
		},
		flags: {breakable: 1},
		name: "Plow",
		shortDesc: "Heals 1/4 of its max HP when hit by Ground; Ground immunity. Healed by Spikes and Stealth Rock.",
		rating: 3.5,
		num: 1030,
	},
	insectarmor: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Insect Armor boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Insect Armor boost');
				return this.chainModify(1.5);
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fighting' || move.type === 'Grass' || move.type === 'Ground') {
				this.debug('Insect Armor weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fighting' || move.type === 'Grass' || move.type === 'Ground') {
				this.debug('Insect Armor weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Insect Armor",
		shortDesc: "User gains STAB on Bug moves and also gains Bug-type resistances.",
		rating: 4.5,
		num: 1031,
	},
	dukesbayonet: {
		shortDesc: "Contact moves bypass Protect. 25% damage instead.",
		onModifyMove(move, source, target) {
			if (move.flags['contact']) {
				delete move.flags['protect'];
				(move as any).armorPiercer = true;
			}
		},
		onModifyDamage(damage, source, target, move) {
			if ((move as any).armorPiercer && move.flags?.contact && target.volatiles['protect']) {
				this.debug('Armor Piercer: reduced damage to 25% through Protect');
				return this.chainModify(0.25);
			}
		},
		flags: {},
		name: "Duke's Bayonet",
		rating: 4,
		num: 1032,
	},
	watercompaction: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({ def: 2 })) {
					this.add('-immune', target, '[from] ability: Water Compaction');
				}
				return null;
			}
		},
		name: "Water Compaction",
		desc: "This Pokemon is immune to Water-type moves and raises its Def by 2 stages when hit by an Water-type move.",
		shortDesc: "This Pokemon's Defense is raised 2 stages if hit by an Water move; Water immunity.",
		rating: 3,
		num: 1033,
	},
	escaton: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Escaton');
			}
		},
		flags: {},
		name: "Escaton",
		rating: 1034,
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use. Works multiple times per switch-in.",
	},
	twilightdust: {
		onStart(pokemon, source) {
			if (pokemon.swordBoost) return;
			pokemon.swordBoost = true;
			this.add('-activate', source, 'ability: Twilight Dust');
			this.field.addPseudoWeather('trickroom')
		},
		flags: {},
		name: "Twilight Dust",
		rating: 4,
		num: 1035,
		shortDesc: "On activation, this Pokemon summons Trick Room; Once per battle.",
	},
	protopyre: {
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			// Protosynthesis is not affected by Utility Umbrella
			if (this.field.isWeather('sunnyday')) {
				pokemon.addVolatile('protopyre');
			} else if (!pokemon.volatiles['protopyre']?.fromBooster) {
				pokemon.removeVolatile('protopyre');
			}
		},
		onUpdate(pokemon) {
			if ((pokemon.hp <= pokemon.maxhp / 3) || this.field.isWeather('sunnyday')) {
				pokemon.addVolatile('protopyre');
			} else if (!pokemon.volatiles['protopyre']?.fromBooster) {
				pokemon.removeVolatile('protopyre');
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['protopyre'];
			this.add('-end', pokemon, 'Protopyre', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				if (effect?.name === 'Booster Energy') {
					this.effectState.fromBooster = true;
					this.add('-activate', pokemon, 'ability: Protopyre', '[fromitem]');
				} else {
					this.add('-activate', pokemon, 'ability: Protopyre');
				}
				this.effectState.bestStat = pokemon.getBestStat(false, true);
				this.add('-start', pokemon, 'protosynthesis' + this.effectState.bestStat);
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				if (this.effectState.bestStat !== 'atk' || pokemon.ignoringAbility()) return;
				this.debug('Protopyre atk boost');
				return this.chainModify([5325, 4096]);
			},
			onModifyDefPriority: 6,
			onModifyDef(def, pokemon) {
				if (this.effectState.bestStat !== 'def' || pokemon.ignoringAbility()) return;
				this.debug('Protopyre def boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpAPriority: 5,
			onModifySpA(spa, pokemon) {
				if (this.effectState.bestStat !== 'spa' || pokemon.ignoringAbility()) return;
				this.debug('Protopyre spa boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpDPriority: 6,
			onModifySpD(spd, pokemon) {
				if (this.effectState.bestStat !== 'spd' || pokemon.ignoringAbility()) return;
				this.debug('Protopyre spd boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpe(spe, pokemon) {
				if (this.effectState.bestStat !== 'spe' || pokemon.ignoringAbility()) return;
				this.debug('Protopyre spe boost');
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Protosynthesis');
			},
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1},
		name: "Protopyre",
		num: 1036,
		shortDesc: "Sunny Day active, Booster Energy used or HP drops below 1/3 max HP: highest stat is 1.3x, or 1.5x if Speed.",
	},
	icebreaker: {
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather('snow')) {
				this.debug('Ice Breaker boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'snow') return false;
		},
		name: "Ice Breaker",
		desc: "If Snow is active, this Pokemon's attacks have their power multiplied by 1.3. This Pokemon takes no damage from Snow.",
		shortDesc: "This Pokemon's attacks have 1.3x power in snow; immunity to it.",
        flags: {},
		rating: 2.5,
		num: 1037,
	},
	oilmucus: {
		shortDesc: "This Pokemon is healed 1/4 by Fire, 1/8 by Sun; is hurt 1.25x by Water, 1/8 by Rain.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Bask');
				}
				return null;
			}
		},
		onFoeBasePowerPriority: 17,
		onFoeBasePower(basePower, attacker, defender, move) {
			if (this.effectState.target !== defender) return;
			if (move.type === 'Water') {
				return this.chainModify(1.25);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.heal(target.baseMaxhp / 8);
			} else if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		name: "Oilmucus",
		num: 1038,
		rating: 2.5,
	},
	dozing: {
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when drowsy; ignores drawbacks.",
		onResidual(pokemon) {
			if (pokemon.status === 'slp') {
				this.heal(pokemon.baseMaxhp / 8);
			}
		},
		flags: {},
		num: 1039,
		name: "Dozing",
	},
	perforating: {
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Poison'] = true;
			}
		},
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0 && (move.type === 'Poison')) {
				this.debug('Perforating boost');
				return this.chainModify(2);
			}
		},
		name: "Perforating",
		shortDesc: "Poison moves deal 2x damage if resisted; Can hit and poison Steel types.",
		rating: 3,
		num: 1040,
	},
	gravedrum: {
		onModifySpe(spe, pokemon) {
			if(pokemon.adjacentFoes().length == 0) return;
			let target = this.sample(pokemon.adjacentFoes());
			if (target.status === 'brn') {
				return this.chainModify(2);
			}
		},
		flags: {},
		name: "Gravedrum",
		shortDesc: "Speed is doubled if an opponent is burned.",
	},
	blindrage: {
		onDamagingHit(damage, target, source, move) {
			if (!move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod > 0) {
				this.boost({ atk: 1 });
			}
		},
		name: "Blind Rage",
		shortDesc: "This Pokemon's Atk is raised by 1 when hit by a super effective attack.",
		rating: 3.5,
	},
	/*
	Edits
	*/
	icebody: {
		inherit: true,
		shortDesc: "If Snow is active, this Pokemon heals 1/16 of its max HP each turn.",
		onWeather(target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'snow') {
				this.heal(target.baseMaxhp / 8);
			}
		},
	},
	poisonpuppeteer: {
		onAnyAfterSetStatus(status, target, source, effect) {
			if (source.baseSpecies.name !== "Chameleos") return;
			if (source !== this.effectState.target || target === source || effect.effectType !== 'Move') return;
			if (status.id === 'psn' || status.id === 'tox') {
				target.addVolatile('confusion');
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1},
		name: "Poison Puppeteer",
		shortDesc: "Chameleos: If this Pokemon poisons a target, the target also becomes confused.",
		rating: 3,
		num: 310,
	},
}