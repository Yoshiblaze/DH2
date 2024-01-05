export const Abilities: {[k: string]: ModdedAbilityData} = {
// New abilities
	battlespines: {
      onAfterMove(target, source, move) {
			if (target !== source && move.category !== 'Status' && move.totalDamage) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		name: "Battle Spines",
		shortDesc: "This Pokemon’s attacks do an additional 1/8 of the target’s max HP in damage.",
	},
	radiotherapy: {
		onStart(pokemon) {
			for (const ally of pokemon.adjacentAllies()) {
			  this.heal(ally.baseMaxhp / 4, ally, pokemon);
			  this.heal(pokemon.baseMaxhp / 4, pokemon, pokemon);
			}
		},
		name: "Radio Therapy",
		rating: 4,
		shortDesc: "On switch-in, this Pokemon restores 1/4 of its ally's and its own maximum HP, rounded down.",
	},
	bittercold: {
		onSwitchIn(pokemon) {
			if (pokemon.side.faintedLastTurn && !pokemon.volatiles['bittercold']) {
				this.add('-ability', pokemon, 'Bitter Cold');
				this.add('-message', `A bitter cold has enveloped the battlefield!`);
				pokemon.addVolatile('bittercold');
      	}
		},
		onUpdate(pokemon) {
			if (pokemon.side.faintedLastTurn && !pokemon.volatiles['bittercold']) {
				this.add('-ability', pokemon, 'Bitter Cold');
				this.add('-message', `A bitter cold has enveloped the battlefield!`);
				pokemon.addVolatile('bittercold');
      	}
		},
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target) {
				this.add('-start', target, 'ability: Bitter Cold');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Ice' && attacker.hasAbility('bittercold')) {
					this.debug('Bitter Cold boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Ice' && attacker.hasAbility('bittercold')) {
					this.debug('Bitter Cold boost');
					return this.chainModify(1.5);
				}
			},
	  		onAfterMoveSecondarySelf(target, source, move) {
	  			source.removeVolatile('bittercold');
	  		},
			onEnd(target) {
				this.add('-end', target, 'ability: Bitter Cold', '[silent]');
			},
		},
		name: "Bitter Cold",
		rating: 3,
		shortDesc: "If an ally fainted last turn, this Pokemon is immune to hazards and its Ice moves deal 1.5x damage.",
	},
	lastingresentment: {
		onStart(source) {
			let activated = false;
			for (const pokemon of source.foes()) {
			if (!activated) {
         this.add('-ability', source, 'Lasting Resentment');
				activated = true;
			}
			if (!pokemon.volatiles['lastingresentment']) {
					pokemon.addVolatile('lastingresentment');
				}
			}
		},
		onAnySwitchIn(pokemon) {
			const source = this.effectState.target;
			if (pokemon === source) return;
			for (const target of source.foes()) {
				if (!target.volatiles['lastingresentment']) {
					target.addVolatile('lastingresentment');
				}
			}
		},
		onEnd(pokemon) {
			for (const target of pokemon.foes()) {
				target.removeVolatile('lastingresentment');
			}
		},
		condition: {
	      onBeforeSwitchOut(pokemon) {
	        pokemon.damage(pokemon.baseMaxhp / 8);
			}
		},
		name: "Lasting Resentment",
		rating: 4.5,
		shortDesc: "While this Pokemon is active, foes switching out lose 1/8 of their max HP.",
	},
	graviseeds: {
		onDamagingHit(damage, target, source, move) {
			this.add('-activate', target, 'ability: Graviseeds');
			this.field.addPseudoWeather('gravity', target, target.ability);
			if (!source.hasType('Grass')) {
				source.addVolatile('leechseed', this.effectState.target);
			}
		},
		name: "Graviseeds",
		shortDesc: "When this Pokemon is hit by an attack, the effect of Leech Seed begins.",
		rating: 3,
	},
  tippedscales: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Tipped Scales');
			}
		},
		name: "Tipped Scales",
		rating: 5,
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use. Works multiple times per switch-in.",
	},
	auraboosterx: {
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target || source.switchFlag === true) return;
			if (move.type = 'Fairy' && !source.volatiles['auraboosterx']) {
				this.add('-activate', source, 'ability: Aura Booster X');
				source.addVolatile('auraboosterx');
				this.effectState.boosterNotFromAura = true;
			}
		},
		onUpdate(pokemon) {
			for (const target of this.getAllActive()) {
				if (target.hasAbility('fairyaura') && !pokemon.volatiles['auraboosterx']) {
					this.add('-activate', pokemon, 'ability: Aura Booster X');
					pokemon.addVolatile('auraboosterx');
				}
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['auraboosterx'];
			this.add('-end', pokemon, 'Aura Booster X', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Aura Booster X');
				this.add('-message', `${pokemon.name}'s lively aura started healing its allies!`);
			},
			onResidualOrder: 6,
			onResidual(pokemon) {
				for (const source of pokemon.alliesAndSelf()) {
					this.add('-activate', pokemon, 'ability: Aura Booster X');
					this.heal(source.baseMaxhp / 16);
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Aura Booster X');
			},
		},
		name: "Aura Booster X",
		rating: 3,
		shortDesc: "Booster Energy or Fairy move used, or Fairy Aura active: Side heals 1/16 max HP per turn.",
	},
	auraboostery: {
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target || source.switchFlag === true) return;
			if (move.type = 'Dark' && !source.volatiles['auraboostery']) {
				this.add('-activate', source, 'ability: Aura Booster Y');
				source.addVolatile('auraboostery');
				this.effectState.boosterNotFromAura = true;
			}
		},
		onUpdate(pokemon) {
			for (const target of this.getAllActive()) {
				if (target.hasAbility('darkaura') && !pokemon.volatiles['auraboostery']) {
					this.add('-activate', pokemon, 'ability: Aura Booster Y');
					pokemon.addVolatile('auraboostery');
				}
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['auraboostery'];
			this.add('-end', pokemon, 'Aura Booster Y', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Aura Booster Y');
				this.add('-message', `${pokemon.name}'s destructive aura hurts the foe!`);
			},
			onResidualOrder: 6,
			onResidual(pokemon) {
				if (!pokemon.hp) return;
				for (const source of pokemon.foes()) {
					this.add('-activate', pokemon, 'ability: Aura Booster Y');
					this.damage(source.baseMaxhp / 16, source, pokemon);
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Aura Booster Y');
			},
		},
		name: "Aura Booster Y",
		rating: 3,
		shortDesc: "Booster Energy or Dark  move used, or Dark Aura active: Foe's side loses 1/16 max HP per turn.",
	},

// Old abilities
	plus: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.hasItem('collider')) {
				return this.chainModify(1.5);
			}
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		name: "Plus",
		rating: 0,
		num: 57,
	},
	minus: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.hasItem('collider')) {
				return this.chainModify(1.5);
			}
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		name: "Minus",
		rating: 0,
		num: 58,
	},
	regenerator: {
		onSwitchOut(pokemon) {
			if (!pokemon.volatiles['healblock']) {
				pokemon.heal(pokemon.baseMaxhp / 3);
			}
		},
		name: "Regenerator",
		rating: 4.5,
		num: 144,
	},
	normalize: {
		onModifyTypePriority: 1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'hiddenpower', 'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'struggle', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!(move.isZ && move.category !== 'Status') && !noModifyType.includes(move.id) &&
				// TODO: Figure out actual interaction
				!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Normal';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify(2);
		},
		name: "Normalize",
		rating: 0,
		num: 96,
		shortDesc: "This Pokemon's moves are changed to be Normal type and have 2x power.",
	},
	supremeoverlord: {
		onStart(pokemon) {
			if (pokemon.side.totalFainted) {
				this.add('-activate', pokemon, 'ability: Supreme Overlord');
				const fallen = Math.min(pokemon.side.totalFainted, 3);
				this.add('-start', pokemon, `fallen${fallen}`, '[silent]');
				this.effectState.fallen = fallen;
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, `fallen${this.effectState.fallen}`, '[silent]');
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.effectState.fallen) {
				const powMod = [4096, 4506, 4915, 5325];
				this.debug(`Supreme Overlord boost: ${powMod[this.effectState.fallen]}/4096`);
				return this.chainModify([powMod[this.effectState.fallen], 4096]);
			}
		},
		name: "Supreme Overlord",
		rating: 4,
		num: 293,
		shortDesc: "This Pokemon's moves have 10% more power for each fainted ally, up to 3 allies.",
	},
	illuminate: {
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target || source.switchFlag === true) return;
			if (['confuseray','dazzlinggleam','flash','lightscreen','lusterpurge','moonlight', 'morningsun','shockwave',
          'solarbeam','spark','tailglow','volttackle','photongeyser','sunsteelstrike','moongeistbeam','electrolights',
           'fightlight','luminacrash','lightofruin','solarblade','synthesis', 'sparklingspike'].includes(move.id)) {
			  	this.add('-ability', source, 'Illuminate');
			  	this.add('-message', `The lights shine on ${source.name}!`);
				source.addVolatile('followme');
			}
		},
		name: "Illuminate",
		rating: 3,
		num: 35,
		shortDesc: "This Pokemon draws attention to itself after using a light-based attack.",
	},
	rivalry: {
		onBasePowerPriority: 24,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.gender && defender.gender) {
				if (attacker.gender === defender.gender) {
					this.debug('Rivalry boost');
					return this.chainModify(1.25);
				}
			}
		},
		name: "Rivalry",
		rating: 3,
		num: 79,
		shortDesc: "This Pokemon's attacks do 1.25x on same gender targets.",
	},
};
