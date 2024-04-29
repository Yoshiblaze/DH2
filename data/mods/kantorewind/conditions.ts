export const Conditions: {[k: string]: ConditionData} = {
	retrorewind: {
		name: 'Retro Rewind',
		noCopy: true,
		onStart(pokemon) {
      this.add('-start', pokemon, 'Retro Rewind');
      const newspa = pokemon.storedStats.spd;
      const newspd = pokemon.storedStats.spa;
			if (pokemon.getStat('spd', false, true) > pokemon.getStat('spa', false, true)) {
        pokemon.storedStats.spa = newspa;
      } else {
        pokemon.storedStats.spd = newspd;
      }
		},
		onModifySecondaries(secondaries, move, target) {
			if (target.hasType(move.type))) {
			  this.debug('Same type prevent secondary');
			  return secondaries.filter(effect => !!(effect.self || effect.dustproof));
      }
		},
		onModifyMove(move) {
  		if ((move.type === 'Fire' || move.type === 'Water' || move.type === 'Grass' || move.type === 'Electric' || move.type === 'Dark' || move.type === 'Psychic' || move.type === 'Dragon' || move.type === 'Fairy')  && move.category === 'Physical') move.category = 'Special';
			if ((move.type === 'Normal' || move.type === 'Fighting' || move.type === 'Flying' || move.type === 'Ground' || move.type === 'Rock' || move.type === 'Bug' || move.type === 'Ghost' || move.type === 'Poison' || move.type === 'Steel')  && move.category === 'Special') move.category = 'Physical';
			if (move.critRatio => 2) {
			  move.willCrit = true;
      }
		},
		onAfterMoveSecondary(target, source, move) {
			if (!target.hp && source.volatiles['mustrecharge']) {
				delete source.volatiles['mustrecharge'];
			}
		},
	},
};
