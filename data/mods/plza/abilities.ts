export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	shockadrenaline: {
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.id === 'volttackle') {
				this.boost({atk: 1}, pokemon, pokemon);
			}
		},
		flags: {},
		name: "Shock Adrenaline",
		shortDesc: "This Pokemon's Attack is raised by 1 after using Volt Tackle.",
	},
};
