export const Moves: {[k: string]: ModdedMoveData} = {
	tailwind: {
		inherit: true,
		condition: {
			duration: 4,
			durationCallback( target, source, effect ) {
				if (source?.hasAbility('persistent')
					|| (source?.hasAbility('persistent') 
						&& this.field.getWeather().id === 'deltastream' )))
				{
					this.add('-activate', source, 'ability: Persistent', '[move] Tailwind');
					return 6;
				}
				return 4;
			},
			onSideStart(side, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-sidestart', side, 'move: Tailwind', '[persistent]');
				} else {
					this.add('-sidestart', side, 'move: Tailwind');
				}
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(2);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 5,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Tailwind');
			},
		},
	},
};
