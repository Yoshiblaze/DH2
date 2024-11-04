export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	runaway: {
		flags: {},
		name: "Run Away",
		rating: 0,
		num: 50,
		shortDesc: "This Pokemon can escape from Arena Trap and Mean Look.",
	},
	oblivious: {
		onModifyMove(move) {
			move.ignoreEvasion = true;
			move.ignoreDefensive = true;
		},
		flags: {},
		name: "Oblivious",
		rating: 1.5,
		num: 12,
		shortDesc: "This Pokemon ignores defensive stat stages when attacking.",
	},
	illuminate: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5);
			}
		},
		flags: {breakable: 1},
		name: "Illuminate",
		rating: 0.5,
		num: 35,
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using an Electric-type attack.",
	},
	owntempo: {
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['encore', 'taunt'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Aroma Veil', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		onModifyMovePriority: 1,
		onModifyMove(move) {
			// most of the implementation is in Battle#getTarget
			move.tracksTarget = move.target !== 'scripted';
		},
		flags: {breakable: 1},
		name: "Own Tempo",
		rating: 1.5,
		num: 20,
		shortDesc: "This Pokemon cannot be taunted, Encored, or have its move redirected.",
	},
	pickup: { //placeholder
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.item) return;
			const pickupTargets = this.getAllActive().filter(target => (
				target.lastItem && target.usedItemThisTurn && pokemon.isAdjacent(target)
			));
			if (!pickupTargets.length) return;
			const randomTarget = this.sample(pickupTargets);
			const item = randomTarget.lastItem;
			randomTarget.lastItem = '';
			this.add('-item', pokemon, this.dex.items.get(item), '[from] ability: Pickup');
			pokemon.setItem(item);
		},
		flags: {},
		name: "Pickup",
		rating: 0.5,
		num: 53,
		shortDesc: "After this Pokemon loses its item, it will pick it back up the next turn.",
	},
  prankster: {
		inherit: true,
		gen: 3,
	},
	snowwarning: {
		onStart(source) {
			this.field.setWeather('snow');
		},
		flags: {},
		name: "Snow Warning",
		rating: 4,
		num: 117,
		gen: 3,
	},
	corrosion: {
		// Implemented in sim/pokemon.js:Pokemon#setStatus
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Poison'] = true;
			}
		},
		flags: {},
		name: "Corrosion",
		rating: 2.5,
		num: 212,
		shortDesc: "This Pokemon can poison and hit Poison moves on a Pokemon regardless of its typing.",
		gen: 3,
	},
	arenatrap: {
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.isAdjacent(this.effectState.target)) return;
  		if (pokemon.hasAbility('runaway')) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source) || pokemon.hasAbility('runaway')) return;
			if (pokemon.isGrounded(!pokemon.knownType)) { // Negate immunity if the type is unknown
				pokemon.maybeTrapped = true;
			}
		},
		flags: {},
		name: "Arena Trap",
		rating: 5,
		num: 71,
	},
};
