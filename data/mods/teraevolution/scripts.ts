export const Scripts: ModdedBattleScriptsData = {
	init() {

	},
	actions: {
		inherit: true,
		terastallize(pokemon: Pokemon) {
	  		if (pokemon.illusion && ['Ogerpon', 'Terapagos'].includes(pokemon.illusion.species.baseSpecies)) {
	  			this.battle.singleEvent('End', this.dex.abilities.get('Illusion'), pokemon.abilityState, pokemon);
	  		}
	
			const type = pokemon.teraType;
			this.battle.add('-terastallize', pokemon, type);
			pokemon.terastallized = type;
			for (const ally of pokemon.side.pokemon) {
				ally.canTerastallize = null;
			}
			pokemon.addedType = '';
			pokemon.knownType = true;
			pokemon.apparentType = type;
			pokemon.side.addSideCondition('teraused', pokemon);
			if (pokemon.species.baseSpecies === 'Ogerpon') {
				const tera = pokemon.species.id === 'ogerpon' ? 'tealtera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
	  		if (pokemon.species.name === 'Terapagos-Terastal' && type === 'Stellar') {
	  			pokemon.formeChange('Terapagos-Stellar', null, true);
	  			pokemon.baseMaxhp = Math.floor(Math.floor(
	  				2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
	  			) * pokemon.level / 100 + 10);
	  			const newMaxHP = pokemon.baseMaxhp;
	  			pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
	  			pokemon.maxhp = newMaxHP;
	  			this.battle.add('-heal', pokemon, pokemon.getHealth, '[silent]');
	  		}
			if (pokemon.species.baseSpecies === 'Serperior') {
				const tera = pokemon.species.id === 'serperior' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Emboar') {
				const tera = pokemon.species.id === 'emboar' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Samurott') {
				const tera = pokemon.species.id === 'samurott' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Meowscarada') {
				const tera = pokemon.species.id === 'meowscarada' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Skeledirge') {
				const tera = pokemon.species.id === 'skeledirge' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Quaquaval') {
				const tera = pokemon.species.id === 'quaquaval' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Pawmot') {
				const tera = pokemon.species.id === 'pawmot' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Mabosstiff') {
				const tera = pokemon.species.id === 'mabosstiff' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Glimmora') {
				const tera = pokemon.species.id === 'glimmora' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Ursaluna') {
				const tera = pokemon.species.id === 'ursaluna' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Sudowoodo') {
				const tera = pokemon.species.id === 'sudowoodo' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Mismagius') {
				const tera = pokemon.species.id === 'mismagius' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Crabominable') {
				const tera = pokemon.species.id === 'crabominable' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Toxtricity') {
				const tera = pokemon.species.id === 'toxtricity' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Florges') {
				const tera = pokemon.species.id === 'florges' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Altaria') {
				const tera = pokemon.species.id === 'altaria' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Clodsire') {
				const tera = pokemon.species.id === 'clodsire' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Tinkaton') {
				const tera = pokemon.species.id === 'tinkaton' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Flamigo') {
				const tera = pokemon.species.id === 'flamigo' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Hydrapple') {
				const tera = pokemon.species.id === 'hydrapple' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Dragonite') {
				const tera = pokemon.species.id === 'dragonite' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Cinccino') {
				const tera = pokemon.species.id === 'cinccino' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Grafaiai') {
				const tera = pokemon.species.id === 'grafaiai' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Cyclizar') {
				const tera = pokemon.species.id === 'cyclizar' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Breloom') {
				const tera = pokemon.species.id === 'breloom' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Mamoswine') {
				const tera = pokemon.species.id === 'mamoswine' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Dewgong') {
				const tera = pokemon.species.id === 'dewgong' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Malamar') {
				const tera = pokemon.species.id === 'malamar' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Toxicroak') {
				const tera = pokemon.species.id === 'toxicroak' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Kricketune') {
				const tera = pokemon.species.id === 'kricketune' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Granbull') {
				const tera = pokemon.species.id === 'granbull' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Spiritomb') {
				const tera = pokemon.species.id === 'spiritomb' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Clawitzer') {
				const tera = pokemon.species.id === 'clawitzer' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Dragalge') {
				const tera = pokemon.species.id === 'dragalge' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Dusknoir') {
				const tera = pokemon.species.id === 'dusknoir' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Volcanion') {
				const tera = pokemon.species.id === 'volcanion' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Zoroark') {
				const tera = pokemon.species.id === 'zoroark' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Baxcalibur') {
				const tera = pokemon.species.id === 'baxcalibur' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Koraidon') {
				const tera = pokemon.species.id === 'koraidon' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Miraidon') {
				const tera = pokemon.species.id === 'miraidon' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Greedent') {
				const tera = pokemon.species.id === 'greedent' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Honchkrow') {
				const tera = pokemon.species.id === 'miraidon' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Armarouge') {
				const tera = pokemon.species.id === 'armarouge' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Ceruledge') {
				const tera = pokemon.species.id === 'ceruledge' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			this.battle.runEvent('AfterTerastallization', pokemon);
		},
	},
};
