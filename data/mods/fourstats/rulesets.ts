export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	sameboostsmod: {
		effectType: 'Rule',
		name: 'Same Boosts Mod',
		desc: "Stat changes to Atk or SpA also effect Def or SpD respectively, and vice verse",
		onBegin() {
			this.add('rule', 'Same Boosts Mod: Changes to Atk/SpA are also applied to Def/SpD');
		},
		onSwap(pokemon) {
			pokemon.addVolatile('sameboost');
		},
	},
};
