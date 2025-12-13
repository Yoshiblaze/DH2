export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
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
			this.damage(pokemon.baseMaxhp / 8);
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
			if (!this.randomChance(33, 100) || pokemon.hasType('Shadow')) {
				return;
			}
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 40);
			if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
			const activeMove = {id: this.toID('confused'), effectType: 'Move', type: '???'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			return false;
		},
		onModifyMove(move, pokemon) {
			if (pokemon.hasType('Shadow')) {
				move.recoil = [1, 2];
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hasType('Shadow')) {
  				this.debug('Shadow extra damage');
  				return this.chainModify(1.5);
      	}
		},
	},
	shadowsky: {
		name: 'Shadow Sky',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('sinisterrock')) {
				return 8;
			}
			return 5;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Shadow Sky', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Shadow Sky');
			}
      	this.add('-message', `A shadowy aura filled the sky!`);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Shadow Sky', '[upkeep]');
      	this.add('-message', `The shadowy aura persists!`);
			if (this.field.isWeather('shadowsky')) this.eachEvent('Weather');
		},
		onWeather(target) {
			if (!target.hasType('Shadow')) {
				this.damage(target.baseMaxhp / 8);
      		this.add('-message', `A flashing light strikes ${target.name}!`);
			}
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Shadow') {
				this.debug('shadow sky boost');
				return this.chainModify([4915, 4096]);
			}
		},
		onFieldEnd() {
			this.add('-weather', 'none');
      	this.add('-message', `The shadowy aura faded away...`);
		},
	},
};
