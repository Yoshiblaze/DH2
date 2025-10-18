export const Scripts: ModdedBattleScriptsData = {
	teambuilderConfig: {
		// only to specify the order of custom tiers
		customTiers: ['Ultra'],
	},
	init() {
		this.modData("Learnsets", "skeledirge").learnset.healbell = ["9L1"];
		this.modData("Learnsets", "tinkaton").learnset.wish = ["9L1"];
		this.modData("Learnsets", "tinkaton").learnset.flipturn = ["9L1"];
		this.modData("Learnsets", "samurotthisui").learnset.bitterblade = ["9L1"];
		this.modData("Learnsets", "samurotthisui").learnset.ragingfury = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.energyball = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.ironhead = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.magiccoat = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.moonblast = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.moonlight = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.mysticalfire = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.playrough = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.psyshock = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.toxic = ["9L1"];
		this.modData("Learnsets", "blissey").learnset.trickroom = ["9L1"];
		this.modData("Learnsets", "pincurchin").learnset.arcanerush = ["9L1"];
		this.modData("Learnsets", "pincurchin").learnset.risingvoltage = ["9L1"];
		this.modData("Learnsets", "pincurchin").learnset.encore = ["9L1"];
		this.modData("Learnsets", "metagross").learnset.twinbeam = ["9L1"];
		this.modData("Learnsets", "metagross").learnset.avalanche = ["9L1"];
		this.modData("Learnsets", "mabosstiff").learnset.pursuit = ["9L1"];
		this.modData("Learnsets", "mabosstiff").learnset.gunkshot = ["9L1"];
		this.modData("Learnsets", "mabosstiff").learnset.superpower = ["9L1"];
		this.modData("Learnsets", "mabosstiff").learnset.poisonfang = ["9L1"];
		this.modData("Learnsets", "clodsire").learnset.knockoff = ["9L1"];
		this.modData("Learnsets", "clodsire").learnset.taunt = ["9L1"];
		this.modData("Learnsets", "clodsire").learnset.crunch = ["9L1"];
		this.modData("Learnsets", "clodsire").learnset.snarl = ["9L1"];
		this.modData("Learnsets", "ironleaves").learnset.synthesis = ["9L1"];
		delete this.modData('Learnsets', 'ironleaves').learnset.swordsdance;
		this.modData("Learnsets", "flygon").learnset.roost = ["9L1"];
		this.modData("Learnsets", "flygon").learnset.boomingsands = ["9L1"];
		this.modData("Learnsets", "weezinggalar").learnset.thunderwave = ["9L1"];
		this.modData("Learnsets", "weezinggalar").learnset.voltswitch = ["9L1"];
		this.modData("Learnsets", "meowscarada").learnset.fakeout = ["9L1"];
		this.modData("Learnsets", "volcanion").learnset.stealthrock = ["9L1"];
		this.modData("Learnsets", "okidogi").learnset.toxicspikes = ["9L1"];
		this.modData("Learnsets", "munkidori").learnset.expandingforce = ["9L1"];
		this.modData("Learnsets", "munkidori").learnset.burningjealousy = ["9L1"];
		this.modData("Learnsets", "munkidori").learnset.solarbeam = ["9L1"];
		this.modData("Learnsets", "fezandipiti").learnset.flipturn = ["9L1"];
		this.modData("Learnsets", "fezandipiti").learnset.aquajet = ["9L1"];
		this.modData("Learnsets", "fezandipiti").learnset.barbbarrage = ["9L1"];
		this.modData("Learnsets", "fezandipiti").learnset.spiritbreak = ["9L1"];
		this.modData("Learnsets", "fezandipiti").learnset.tripledive = ["9L1"];
		this.modData("Learnsets", "kleavor").learnset.spookyslash = ["9L1"];
		this.modData("Learnsets", "kleavor").learnset.shadowsneak = ["9L1"];
		this.modData("Learnsets", "kleavor").learnset.accelerock = ["9L1"];
		this.modData("Learnsets", "diancie").learnset.psychicnoise = ["9L1"];
		this.modData("Learnsets", "basculegionf").learnset.nastyplot = ["9L1"];
		this.modData("Learnsets", "hawlucha").learnset.ragingfury = ["9L1"];
		this.modData("Learnsets", "hawlucha").learnset.firelash = ["9L1"];
		this.modData("Learnsets", "hawlucha").learnset.solarblade = ["9L1"];
		delete this.modData('Learnsets', 'farigiraf').learnset.storedpower;
		delete this.modData('Learnsets', 'girafarig').learnset.storedpower;
		this.modData("Learnsets", "primarina").learnset.bugbuzz = ["9L1"];
		this.modData("Learnsets", "primarina").learnset.rapidspin = ["9L1"];
		this.modData("Learnsets", "dragonite").learnset.hypervoice = ["9L1"];
		this.modData("Learnsets", "dragonite").learnset.dualwingbeat = ["9L1"];
		delete this.modData('Learnsets', 'palafin').learnset.encore;
		delete this.modData('Learnsets', 'palafin').learnset.taunt;
		delete this.modData('Learnsets', 'finizen').learnset.encore;
		this.modData("Learnsets", "ironcrown").learnset.thunderwave = ["9L1"];
		this.modData("Learnsets", "ironcrown").learnset.psychicterrain = ["9L1"];
		this.modData("Learnsets", "snorlax").learnset.gyroball = ["9L1"];
		this.modData("Learnsets", "leavanny").learnset.vacuumwave = ["9L1"];
		this.modData("Learnsets", "leavanny").learnset.upperhand = ["9L1"];
		this.modData("Learnsets", "leavanny").learnset.shadowball = ["9L1"];
		this.modData("Learnsets", "leavanny").learnset.taunt = ["9L1"];
	},
	actions: {
		inherit: true,
  	canUltraBurst(pokemon: Pokemon) {
  		if (['Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane'].includes(pokemon.baseSpecies.name) &&
  			pokemon.getItem().id === 'ultranecroziumz') {
  			return "Necrozma-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Pikachu') &&
  			pokemon.getItem().id === 'pikaniumz') {
  			return "Pikachu-Ultra";
  		}
  		if ([
          'Pikachu-Original', 'Pikachu-Hoenn', 'Pikachu-Sinnoh',
          'Pikachu-Unova', 'Pikachu-Kalos', 'Pikachu-Alola', 'Pikachu-Partner'
        ].includes(pokemon.baseSpecies.name) &&
  			pokemon.getItem().id === 'pikashuniumz') {
  			return "Pikachu-Cap-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Raichu-Alola') &&
  			pokemon.getItem().id === 'aloraichiumz') {
  			return "Raichu-Alola-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Eevee') &&
  			pokemon.getItem().id === 'eeviumz') {
  			return "Eevee-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Snorlax') &&
  			pokemon.getItem().id === 'snorliumz') {
  			return "Snorlax-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Mew') &&
  			pokemon.getItem().id === 'mewniumz') {
  			return "Mew-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Decidueye') &&
  			pokemon.getItem().id === 'decidiumz') {
  			return "Decidueye-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Incineroar') &&
  			pokemon.getItem().id === 'inciniumz') {
  			return "Incineroar-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Primarina') &&
  			pokemon.getItem().id === 'primariumz') {
  			return "Primarina-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Lycanroc') &&
  			pokemon.getItem().id === 'lycaniumz') {
  			return "Lycanroc-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Lycanroc-Midnight') &&
  			pokemon.getItem().id === 'lycaniumz') {
  			return "Lycanroc-Midnight-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Lycanroc-Dusk') &&
  			pokemon.getItem().id === 'lycaniumz') {
  			return "Lycanroc-Dusk-Ultra";
  		}
  		if (['Mimikyu', 'Mimikyu-Totem'].includes(pokemon.baseSpecies.name) &&
  			pokemon.getItem().id === 'mimikiumz') {
  			return "Mimikyu-Ultra";
  		}
  		if (['Mimikyu-Busted', 'Mimikyu-Busted-Totem'].includes(pokemon.baseSpecies.name) &&
  			pokemon.getItem().id === 'mimikiumz') {
  			return "Mimikyu-Busted-Ultra";
  		}
  		if (['Kommo-o', 'Kommo-o-Totem'].includes(pokemon.baseSpecies.name) &&
  			pokemon.getItem().id === 'kommoniumz') {
  			return "Kommo-o-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Tapu Koko') &&
  			pokemon.getItem().id === 'tapuniumz') {
  			return "Tapu Koko-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Tapu Lele') &&
  			pokemon.getItem().id === 'tapuniumz') {
  			return "Tapu Lele-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Tapu Bulu') &&
  			pokemon.getItem().id === 'tapuniumz') {
  			return "Tapu Bulu-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Tapu Fini') &&
  			pokemon.getItem().id === 'tapuniumz') {
  			return "Tapu Fini-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Marshadow') &&
  			pokemon.getItem().id === 'marshadiumz') {
  			return "Marshadow-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Solgaleo') &&
  			pokemon.getItem().id === 'solganiumz') {
  			return "Solgaleo-Ultra";
  		}
  		if (pokemon.species.baseSpecies.name === 'Lunala') &&
  			pokemon.getItem().id === 'lunaliumz') {
  			return "Lunala-Ultra";
  		}
  		return null;
  	},
	},
};
