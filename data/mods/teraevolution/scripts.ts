export const Scripts: ModdedBattleScriptsData = {
	init() {
		this.modData("Learnsets", "meowscarada").learnset.haze = ["9L1"];
		this.modData("Learnsets", "quaquaval").learnset.axekick = ["9L1"];
		this.modData("Learnsets", "pawmot").learnset.drainpunch = ["9L1"];
		this.modData("Learnsets", "ursaluna").learnset.xscissor = ["9L1"];
		this.modData("Learnsets", "ursaluna").learnset.lunge = ["9L1"];
		this.modData("Learnsets", "ursaluna").learnset.pounce = ["9L1"];
		this.modData("Learnsets", "ursaluna").learnset.leechlife = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.swordsdance = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.aquajet = ["9L1"];
		this.modData("Learnsets", "crabominable").learnset.slackoff = ["9L1"];
		this.modData("Learnsets", "toxtricity").learnset.shadowsneak = ["9L1"];
		this.modData("Learnsets", "toxtricity").learnset.confuseray = ["9L1"];
		this.modData("Learnsets", "toxtricitylowkey").learnset.shadowsneak = ["9L1"];
		this.modData("Learnsets", "toxtricitylowkey").learnset.confuseray = ["9L1"];
		this.modData("Learnsets", "florges").learnset.expandingforce = ["9L1"];
		this.modData("Learnsets", "florges").learnset.trickroom = ["9L1"];
		this.modData("Learnsets", "florges").learnset.growth = ["9L1"];
		this.modData("Learnsets", "altaria").learnset.fakeout = ["9L1"];
		this.modData("Learnsets", "altaria").learnset.bodypress = ["9L1"];
		this.modData("Learnsets", "flamigo").learnset.scald = ["9L1"];
		this.modData("Learnsets", "hydrapple").learnset.acidarmor = ["9L1"];
		this.modData("Learnsets", "cinccino").learnset.toxic = ["9L1"];
		this.modData("Learnsets", "cinccino").learnset.wish = ["9L1"];
		this.modData("Learnsets", "cinccino").learnset.sweetkiss = ["9L1"];
		this.modData("Learnsets", "grafaiai").learnset.tailslap = ["9L1"];
		this.modData("Learnsets", "serperior").learnset.defog = ["9L1"];
		this.modData("Learnsets", "emboar").learnset.axekick = ["9L1"];
		this.modData("Learnsets", "samurott").learnset.focusblast = ["9L1"];
		this.modData("Learnsets", "samurotthisui").learnset.focusblast = ["9L1"];
		this.modData("Learnsets", "cyclizar").learnset.electricterrain = ["9L1"];
		this.modData("Learnsets", "cyclizar").learnset.flamethrower = ["9L1"];
		this.modData("Learnsets", "cyclizar").learnset.blazekick = ["9L1"];
		this.modData("Learnsets", "cyclizar").learnset.thunderwave = ["9L1"];
		this.modData("Learnsets", "cyclizar").learnset.solarbeam = ["9L1"];
		this.modData("Learnsets", "breloom").learnset.toxicspikes = ["9L1"];
		this.modData("Learnsets", "breloom").learnset.poisontail = ["9L1"];
		this.modData("Learnsets", "mamoswine").learnset.playrough = ["9L1"];
		this.modData("Learnsets", "mamoswine").learnset.furyattack = ["9L1"];
		this.modData("Learnsets", "mamoswine").learnset.pinmissile = ["9L1"];
		this.modData("Learnsets", "dewgong").learnset.freezedry = ["9L1"];
		this.modData("Learnsets", "dewgong").learnset.swordsdance = ["9L1"];
		this.modData("Learnsets", "malamar").learnset.overheat = ["9L1"];
		this.modData("Learnsets", "malamar").learnset.painsplit = ["9L1"];
		this.modData("Learnsets", "toxicroak").learnset.nightslash = ["9L1"];
		this.modData("Learnsets", "kricketune").learnset.nastyplot = ["9L1"];
		this.modData("Learnsets", "kricketune").learnset.alluringvoice = ["9L1"];
		this.modData("Learnsets", "kricketune").learnset.snarl = ["9L1"];
		this.modData("Learnsets", "kricketune").learnset.psychicnoise = ["9L1"];
		this.modData("Learnsets", "kricketune").learnset.partingshot = ["9L1"];
		this.modData("Learnsets", "dusknoir").learnset.knockoff = ["9L1"];
		this.modData("Learnsets", "greedent").learnset.drainpunch = ["9L1"];
		this.modData("Learnsets", "greedent").learnset.firepunch = ["9L1"];
		this.modData("Learnsets", "greedent").learnset.icepunch = ["9L1"];
		this.modData("Learnsets", "greedent").learnset.thunderpunch = ["9L1"];
		this.modData("Learnsets", "greedent").learnset.focuspunch = ["9L1"];
		this.modData("Learnsets", "honchkrow").learnset.smartstrike = ["9L1"];
		this.modData("Learnsets", "honchkrow").learnset.steelwing = ["9L1"];
		this.modData("Learnsets", "honchkrow").learnset.superpower = ["9L1"];
		this.modData("Learnsets", "armarouge").learnset.healpulse = ["9L1"];
		this.modData("Learnsets", "armarouge").learnset.waterpulse = ["9L1"];
		this.modData("Learnsets", "ceruledge").learnset.sacredsword = ["9L1"];
		this.modData("Learnsets", "ceruledge").learnset.slash = ["9L1"];
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
				const tera = pokemon.species.id === 'serperior' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Emboar') {
				const tera = pokemon.species.id === 'emboar' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Samurott') {
				const tera = pokemon.species.id === 'samurott' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Meowscarada') {
				const tera = pokemon.species.id === 'meowscarada' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Skeledirge') {
				const tera = pokemon.species.id === 'skeledirge' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Quaquaval') {
				const tera = pokemon.species.id === 'quaquaval' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Pawmot') {
				const tera = pokemon.species.id === 'pawmot' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Mabosstiff') {
				const tera = pokemon.species.id === 'mabosstiff' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Glimmora') {
				const tera = pokemon.species.id === 'glimmora' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Ursaluna') {
				const tera = pokemon.species.id === 'ursaluna' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Sudowoodo') {
				const tera = pokemon.species.id === 'sudowoodo' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Mismagius') {
				const tera = pokemon.species.id === 'mismagius' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Crabominable') {
				const tera = pokemon.species.id === 'crabominable' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Toxtricity') {
				const tera = pokemon.species.id === 'toxtricity' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Florges') {
				const tera = pokemon.species.id === 'florges' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Altaria') {
				const tera = pokemon.species.id === 'altaria' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Clodsire') {
				const tera = pokemon.species.id === 'clodsire' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Tinkaton') {
				const tera = pokemon.species.id === 'tinkaton' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Flamigo') {
				const tera = pokemon.species.id === 'flamigo' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Hydrapple') {
				const tera = pokemon.species.id === 'hydrapple' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Dragonite') {
				const tera = pokemon.species.id === 'dragonite' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Cinccino') {
				const tera = pokemon.species.id === 'cinccino' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Grafaiai') {
				const tera = pokemon.species.id === 'grafaiai' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Cyclizar') {
				const tera = pokemon.species.id === 'cyclizar' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Breloom') {
				const tera = pokemon.species.id === 'breloom' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Mamoswine') {
				const tera = pokemon.species.id === 'mamoswine' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Dewgong') {
				const tera = pokemon.species.id === 'dewgong' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Malamar') {
				const tera = pokemon.species.id === 'malamar' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Toxicroak') {
				const tera = pokemon.species.id === 'toxicroak' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Kricketune') {
				const tera = pokemon.species.id === 'kricketune' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Granbull') {
				const tera = pokemon.species.id === 'granbull' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Spiritomb') {
				const tera = pokemon.species.id === 'spiritomb' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Clawitzer') {
				const tera = pokemon.species.id === 'clawitzer' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Dragalge') {
				const tera = pokemon.species.id === 'dragalge' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Dusknoir') {
				const tera = pokemon.species.id === 'dusknoir' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Volcanion') {
				const tera = pokemon.species.id === 'volcanion' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Zoroark') {
				const tera = pokemon.species.id === 'zoroark' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Baxcalibur') {
				const tera = pokemon.species.id === 'baxcalibur' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Koraidon') {
				const tera = pokemon.species.id === 'koraidon' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Miraidon') {
				const tera = pokemon.species.id === 'miraidon' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Greedent') {
				const tera = pokemon.species.id === 'greedent' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Honchkrow') {
				const tera = pokemon.species.id === 'miraidon' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Armarouge') {
				const tera = pokemon.species.id === 'armarouge' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
  			if (pokemon.species.baseSpecies === 'Ceruledge') {
				const tera = pokemon.species.id === 'ceruledge' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			this.battle.runEvent('AfterTerastallization', pokemon);
		},
	},
};
