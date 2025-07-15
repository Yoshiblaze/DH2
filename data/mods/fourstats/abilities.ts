export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
  // Changed Abilties
	beadsofruin: {
    inherit: true,
		onAnyModifySpA(spa, source, target, move) {
			const abilityHolder = this.effectState.target;
			if (source.hasAbility('Beads of Ruin')) return;
			if (!move.ruinedSpA) move.ruinedSpA = abilityHolder;
			if (move.ruinedSpA !== abilityHolder) return;
			this.debug('Beads of Ruin SpA drop');
			return this.chainModify(0.75);
		},
		shortDesc: "Active Pokemon without this Ability have their Special multiplied by 0.75.",
	},
	vesselofruin: {
    inherit: true,
		onAnyModifySpD(spd, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Vessel of Ruin')) return;
			if (!move.ruinedSpD?.hasAbility('Vessel of Ruin')) move.ruinedSpD = abilityHolder;
			if (move.ruinedSpD !== abilityHolder) return;
			this.debug('Vessel of Ruin SpD drop');
			return this.chainModify(0.75);
		},
		shortDesc: "Active Pokemon without this Ability have their Special multiplied by 0.75.",
	},
	bigpecks: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
		},
		flags: {breakable: 1},
		name: "Big Pecks",
		rating: 0.5,
		num: 145,
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Physical stat stage.",
	},
	hypercutter: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
		},
		flags: {breakable: 1},
		name: "Hyper Cutter",
		rating: 1.5,
		num: 52,
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Physical stat stage.",
	},
	defeatist: {
    inherit: true,
		onModifyDefPriority: 5,
		onModifyDef(def, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		onModifySpDPriority: 5,
		onModifySpD(def, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Physical and Special are halved.",
	},
	flowergift: {
    inherit: true,
		onAllyModifyDefPriority: 4,
		onAllyModifyDef(def, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
  	onAllyModifySpAPriority: 3,
		onAllyModifySpA(spa, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Physical and Special are 1.5x.",
	},
	furcoat: {
    inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		shortDesc: "This Pokemon's Physical is doubled.",
	},
	hugepower: {
    inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		shortDesc: "This Pokemon's Physical is doubled.",
	},
	purepower: {
    inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		shortDesc: "This Pokemon's Physical is doubled.",
	},
	gorillatactics: {
    inherit: true,
  	onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Gorilla Tactics Atk Boost');
			return this.chainModify(1.5);
		},
		shortDesc: "This Pokemon's Physical is 1.5x, but it can only select the first move it executes.",
	},
	grasspelt: {
    inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return this.chainModify(1.5);
		},
		shortDesc: "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",
	},
	guts: {
    inherit: true,
		onModifyAtkPriority: 6,
		onModifyDef(def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		shortDesc: "If this Pokemon is statused, its Physical is 1.5x; ignores burn halving physical damage.",
	},
	hadronengine: {
    inherit: true,
		onModifySpDPriority: 6,
		onModifySpD(spd, attacker, defender, move) {
			if (this.field.isTerrain('electricterrain')) {
				this.debug('Hadron Engine boost');
				return this.chainModify([5461, 4096]);
			}
		},
		shortDesc: "On switch-in, summons Electric Terrain. During Electric Terrain, Special is 1.3333x.",
	},
	orichalcumpulse: {
    inherit: true,
		onModifyDefPriority: 6,
		onModifyDef(spd, attacker, defender, move) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				this.debug('Orichalcum boost');
				return this.chainModify([5461, 4096]);
			}
		},
		shortDesc: "On switch-in, summons Sunny Day. During Sunny Day, Physical is 1.3333x.",
	},

  // Changed Descriptions
	angerpoint: {
    inherit: true,
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Physical is raised 12 stages.",
	},
	angershell: {
    inherit: true,
		shortDesc: "At 1/2 or less of this Pokemon's max HP: +1 Speed.",
	},
	battlebond: {
    inherit: true,
		shortDesc: "After KOing a Pokemon: raises Physical, Special, Speed by 1 stage. Once per battle.",
	},
	berserk: {
    inherit: true,
		shortDesc: "At 1/2 or less of this Pokemon's max HP: +1 Special.",
	},
	chillingneigh: {
    inherit: true,
		shortDesc: "This Pokemon's Physical is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	moxie: {
    inherit: true,
		shortDesc: "This Pokemon's Physical is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	grimneigh: {
    inherit: true,
		shortDesc: "This Pokemon's Special is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	competitive: {
    inherit: true,
		shortDesc: "This Pokemon's Special is raised by 2 for each of its stats that is lowered by a foe.",
	},
	defiant: {
    inherit: true,
		shortDesc: "This Pokemon's Physical is raised by 2 for each of its stats that is lowered by a foe.",
	},
	guarddog: {
    inherit: true,
		shortDesc: "Immune to Intimidate. Intimidated: +1 Physical. Cannot be forced to switch out.",
	},
	gulpmissile: {
    inherit: true,
		shortDesc: "When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Physical or paralysis.",
	},
};
