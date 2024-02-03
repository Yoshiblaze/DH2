export const Scripts: ModdedBattleScriptsData = {
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ["MSQ"],
	},
	init() {
		this.modData("Learnsets", "emboar").learnset.drainingtusk = ["9L1"];
		this.modData("Learnsets", "drifblim").learnset.securelanding = ["9L1"];
		this.modData("Learnsets", "feraligatr").learnset.splashbite = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.diamondglow = ["9L1"];
		this.modData("Learnsets", "guzzlord").learnset.ultragulp = ["9L1"];
		this.modData("Learnsets", "whimsicott").learnset.cottonswab = ["9L1"];
		delete this.modData('Learnsets', 'excadrill').learnset.swordsdance;
		delete this.modData('Learnsets', 'excadrill').learnset.honeclaws;
		delete this.modData('Learnsets', 'drilbur').learnset.swordsdance;
		delete this.modData('Learnsets', 'drilbur').learnset.honeclaws;
		this.modData("Learnsets", "gigalith").learnset.earthmover = ["9L1"];
		delete this.modData('Learnsets', 'kommoo').learnset.swordsdance;
		delete this.modData('Learnsets', 'kommoo').learnset.clangoroussoul;
		delete this.modData('Learnsets', 'kommoo').learnset.bellydrum;
		delete this.modData('Learnsets', 'hakamoo').learnset.swordsdance;
		delete this.modData('Learnsets', 'jangmoo').learnset.swordsdance;
	},
	actions: {
		inherit: true,
		terastallize(pokemon: Pokemon) {
			if (pokemon.illusion?.species.baseSpecies === 'Ogerpon') {
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
			if (pokemon.species.baseSpecies === 'Emboar') {
				const tera = pokemon.species.id === 'emboar' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Delphox') {
				const tera = pokemon.species.id === 'delphox' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Chesnaught') {
				const tera = pokemon.species.id === 'chesnaught' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Swampert') {
				const tera = pokemon.species.id === 'swampert' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Boltund') {
				const tera = pokemon.species.id === 'boltund' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Arboliva') {
				const tera = pokemon.species.id === 'arboliva' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Gardevoir') {
				const tera = pokemon.species.id === 'gardevoir' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Corviknight') {
				const tera = pokemon.species.id === 'corviknight' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Drapion') {
				const tera = pokemon.species.id === 'drapion' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Flygon') {
				const tera = pokemon.species.id === 'flygon' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Drifblim') {
				const tera = pokemon.species.id === 'drifblim' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Kleavor') {
				const tera = pokemon.species.id === 'kleavor' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Feraligatr') {
				const tera = pokemon.species.id === 'feraligatr' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Porygon2') {
				const tera = pokemon.species.id === 'porygon2' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Kingdra') {
				const tera = pokemon.species.id === 'kingdra' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Galvantula') {
				const tera = pokemon.species.id === 'galvantula' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Druddigon') {
				const tera = pokemon.species.id === 'druddigon' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Aurorus') {
				const tera = pokemon.species.id === 'aurorus' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Excadrill') {
				const tera = pokemon.species.id === 'excadrill' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Whimsicott') {
				const tera = pokemon.species.id === 'whimsicott' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Guzzlord') {
				const tera = pokemon.species.id === 'guzzlord' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Absol') {
				const tera = pokemon.species.id === 'absol' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Kommo-o') {
				const tera = pokemon.species.id === 'kommoo' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Jellicent') {
				const tera = pokemon.species.id === 'jellicent' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Starmie') {
				const tera = pokemon.species.id === 'starmie' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Gigalith') {
				const tera = pokemon.species.id === 'gigalith' ? 'basetera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			this.battle.runEvent('AfterTerastallization', pokemon);
		},
	},
};
