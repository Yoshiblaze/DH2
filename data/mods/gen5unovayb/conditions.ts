export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	par: {
		name: 'par',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'par', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'par');
			}
		},
		onModifySpePriority: -101,
		onModifySpe(spe, pokemon) {
			// Paralysis occurs after all other Speed modifiers, so evaluate all modifiers up to this point first
			spe = this.finalModify(spe);
			if (!pokemon.hasAbility('quickfeet')) {
				spe = Math.floor(spe * 50 / 100);
			}
			return spe;
		},
		onBeforeMovePriority: 1,
		onBeforeMove(pokemon) {
			if (this.randomChance(1, 4)) {
				this.add('cant', pokemon, 'par');
				return false;
			}
		},
	},
	confusion: {
		name: 'confusion',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			if (sourceEffect?.id === 'lockedmove') {
				this.add('-start', target, 'confusion', '[fatigue]');
			} else if (sourceEffect?.effectType === 'Ability') {
				this.add('-start', target, 'confusion', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-start', target, 'confusion');
			}
			const min = sourceEffect?.id === 'axekick' ? 3 : 2;
			this.effectState.time = this.random(min, 6);
		},
		onEnd(target) {
			this.add('-end', target, 'confusion');
		},
		onBeforeMovePriority: 3,
		onBeforeMove(pokemon) {
			pokemon.volatiles['confusion'].time--;
			if (!pokemon.volatiles['confusion'].time) {
				pokemon.removeVolatile('confusion');
				return;
			}
			this.add('-activate', pokemon, 'confusion');
			if (!this.randomChance(33, 100)) {
				return;
			}
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 40);
			if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
			const activeMove = {id: this.toID('confused'), effectType: 'Move', type: '???'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			return false;
		},
	},
	frz: {
		name: 'frz',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frz');
			}
			if (target.species.name === 'Shaymin-Sky' && target.baseSpecies.baseSpecies === 'Shaymin') {
				target.formeChange('Shaymin', this.effect, true);
			}
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			if (this.randomChance(1, 10)) {
				pokemon.cureStatus();
				return;
			}
  		if (this.field.isWeather('snow')) {
				this.damage(pokemon.baseMaxhp / 8);
				return;
			} else {
			  this.damage(pokemon.baseMaxhp / 16);
      }
		},
		onSourceModifyDamage(damage, source, target, move) {
			this.debug('Freeze extra damage');
			return this.chainModify([5325, 4096]);
		},
		onModifyMove(move, pokemon) {
			if (move.flags['defrost']) {
				this.add('-curestatus', pokemon, 'frz', '[from] move: ' + move);
				pokemon.clearStatus();
			}
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.thawsTarget) {
				target.cureStatus();
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire' && move.category !== 'Status') {
				target.cureStatus();
			}
		},
	},
	gem: {
		name: 'gem',
		duration: 1,
		affectsFainted: true,
		onBasePowerPriority: 14,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify([4915, 4096]);
		},
	},
	downloadatk: {
		name: 'downloadatk',
		duration: 2,
		onEnd(pokemon) {
			this.add('-ability', pokemon, 'Download');
			this.add('-message', `${pokemon.name} deleted the file!`);
			this.boost({atk: -1}, pokemon);
		},
	},
	downloadspa: {
		name: 'downloadspa',
		duration: 2,
		onEnd(pokemon) {
			this.add('-ability', pokemon, 'Download');
			this.add('-message', `${pokemon.name} deleted the file!`);
			this.boost({spa: -1}, pokemon);
		},
	},
};
