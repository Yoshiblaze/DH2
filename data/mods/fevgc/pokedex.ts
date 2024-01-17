export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	meowsdrahisui: {
		num: 2000,
		name: "Meowsdra-Hisui",
		gender: "M",
		types: ["Psychic", "Steel"],
		baseStats: {hp: 80, atk: 74, def: 88, spa: 96, spd: 115, spe: 82},
		abilities: {0: "Sly Slime", 1: "Sappy Jest", H: "Knights Eye"},
		weightkg: 171.3,
	},
	meowsdraf: {
		num: 2001,
		name: "Meowsdra-F",
		gender: "F",
		types: ["Psychic", "Dragon"],
		baseStats: {hp: 82, atk: 74, def: 73, spa: 99, spd: 115, spe: 92},
		abilities: {0: "Root Snap", 1: "Hydrovision", H: "Goo-Getter"},
		weightkg: 79.5,
	},
	honchkario: {
		num: 2002,
		name: "Honchkario",
		types: ["Steel", "Dark"],
		baseStats: {hp: 85, atk: 123, def: 61, spa: 110, spd: 61, spe: 90},
		abilities: {0: "Restless Speed", 1: "Hyperfocus", H: "Hero Ego"},
		weightkg: 40.7,
	},
	indeechufalola: {
		num: 2003,
		name: "Indeechu-F-Alola",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 70, atk: 70, def: 60, spa: 95, spd: 100, spe: 100},
		abilities: {0: "Electric Surge"},
		weightkg: 24.5,
	},
	empozinggalar: {
		num: 2004,
		name: "Empozing-Galar",
		types: ["Water", "Fairy"],
		baseStats: {hp: 84, atk: 88, def: 104, spa: 104, spd: 85, spe: 60},
		abilities: {0: "Magic Surge", H: "Neutral Match"},
		weightkg: 50.3,
	},
	samureedee: {
		num: 2005,
		name: "Samureedee",
		gender: "M",
		types: ["Psychic", "Water"],
		baseStats: {hp: 78, atk: 82, def: 70, spa: 106, spd: 82, spe: 82},
		abilities: {0: "Focus Falls", H: "Armor Surge"},
		weightkg: 61.3,
	},
	exeggolivaalola: {
		num: 2006,
		name: "Exeggoliva-Alola",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 86, atk: 107, def: 87, spa: 125, spd: 92, spe: 42},
		abilities: {0: "Grassy Surge", H: "Harvest"},
		weightkg: 231.9,
	},
	noctoed: {
		num: 2007,
		name: "Noctoed",
		types: ["Water", "Flying"],
		baseStats: {hp: 95, atk: 62, def: 62, spa: 88, spd: 98, spe: 90},
		abilities: {0: "Dive Goggles", 1: "High Energy", H: "Stormy Sight"},
		weightkg: 37.4,
	},
	torklod: {
		num: 2008,
		name: "Torklod",
		types: ["Fire", "Poison"],
		baseStats: {hp: 100, atk: 80, def: 100, spa: 85, spd: 85, spe: 20},
		abilities: {0: "Smoke Absorb", 1: "Solar Radiation", H: "Daft Shield"},
		weightkg: 151.7,
	},
	tyranaught: {
		num: 2009,
		name: "Tyranaught",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 94, atk: 130, def: 123, spa: 84, spd: 87, spe: 62},
		abilities: {0: "Forbidden Garden", H: "Sandproof"},
		weightkg: 146,
	},
	glacetalesalola: {
		num: 2010,
		name: "Glacetales-Alola",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 69, atk: 63, def: 92, spa: 105, spd: 97, spe: 107},
		abilities: {0: "Snow Cloak", H: "Cryowarning"},
		weightkg: 22.9,
	},
	sandslash: {
		inherit: true,
		otherFormes: ["Sandslash-Alola", "Sandslash-Crossbreed"],
		formeOrder: ["Sandslash", "Sandslash-Alola", "Sandslash-Crossbreed"],
	},
	sandslashcrossbreed: {
		num: 2011,
		name: "Sandslash-Crossbreed",
		baseSpecies: "Sandslash",
		forme: "Crossbreed",
		types: ["Ground", "Ice"],
		baseStats: {hp: 75, atk: 110, def: 115, spa: 35, spd: 60, spe: 75},
		abilities: {0: "Tundra Veil", H: "Tundra Rush"},
		weightkg: 34.8,
	},
	porynoirz: {
		num: 2012,
		name: "Porynoir-Z",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 65, atk: 90, def: 102, spa: 116, spd: 105, spe: 67},
		abilities: {0: "Night Vision", H: "Malware"},
		weightkg: 70.3,
	},
	victreevile: {
		num: 2013,
		name: "Victreevile",
		types: ["Grass", "Poison"],
		baseStats: {hp: 77, atk: 92, def: 75, spa: 105, spd: 80, spe: 80},
		abilities: {0: "Quick Delivery", H: "Fast Venom"},
		weightkg: 17.1,
	},
	megaflor: {
		num: 2014,
		name: "Megaflor",
		baseForme: "Red",
		gender: "F",
		types: ["Fairy", "Grass"],
		baseStats: {hp: 79, atk: 73, def: 84, spa: 100, spd: 127, spe: 77},
		abilities: {0: "Overbloom", H: "Teamwork"},
		cosmeticFormes: ["Megaflor-Blue", "Megaflor-Orange", "Megaflor-White", "Megaflor-Yellow"],
		formeOrder: ["Megaflor", "Megaflor-Blue", "Megaflor-Orange", "Megaflor-White", "Megaflor-Yellow"],
		weightkg: 55.3,
	},
	armarizor: {
		num: 2015,
		name: "Armarizor",
		types: ["Fire", "Steel"],
		baseStats: {hp: 77, atk: 95, def: 100, spa: 109, spd: 80, spe: 70},
		abilities: {0: "Pyrotechnic", H: "Light Armor"},
		weightkg: 101.5,
	},
	ceruleavor: {
		num: 2016,
		name: "Ceruleavor",
		types: ["Fire", "Rock"],
		baseStats: {hp: 81, atk: 130, def: 87, spa: 63, spd: 85, spe: 85},
		abilities: {0: "Heatblade", H: "Strong Armor"},
		weightkg: 75.5,
	},
	luxraptor: {
		num: 2017,
		name: "Luxraptor",
		types: ["Electric", "Flying"],
		baseStats: {hp: 92, atk: 120, def: 82, spa: 72, spd: 69, spe: 85},
		abilities: {0: "Underestimate", H: "Migrate"},
		weightkg: 33.5,
	},
	jumpathra: {
		num: 2018,
		name: "Jumpathra",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 85, atk: 57, def: 65, spa: 98, spd: 77, spe: 107},
		abilities: {0: "Seize the Moment", 1: "Safe Entry", H: "Speed Demon"},
		weightkg: 46.5,
	},
	haxocross: {
		num: 2019,
		name: "Haxocross",
		types: ["Dragon", "Bug"],
		baseStats: {hp: 78, atk: 136, def: 82, spa: 51, spd: 82, spe: 91},
		abilities: {0: "Pestilence", 1: "Breaking Character", H: "Unsettling"},
		weightkg: 79.8,
	},
	quaquadueyehisui: {
		num: 2020,
		name: "Quaquadueye-Hisui",
		types: ["Water", "Fighting"],
		baseStats: {hp: 86, atk: 116, def: 80, spa: 90, spd: 85, spe: 83},
		abilities: {0: "Kelp Power", H: "Prideful"},
		weightkg: 49.5,
	},
	gholdentales: {
		num: 2021,
		name: "Gholdentales",
		types: ["Steel", "Fire"],
		baseStats: {hp: 81, atk: 75, def: 85, spa: 111, spd: 95, spe: 93},
		abilities: {0: "Smelting"},
		weightkg: 25,
	},
	miensphlosionhisui: {
		num: 2022,
		name: "Miensphlosion-Hisui",
		types: ["Fire", "Fighting"],
		baseStats: {hp: 79, atk: 106, def: 72, spa: 107, spd: 72, spe: 104},
		abilities: {0: "Down In Flames", H: "From Ashes"},
		weightkg: 52.7,
	},
	araquaton: {
		num: 2023,
		name: "Araquaton",
		gender: "F",
		types: ["Water", "Steel"],
		baseStats: {hp: 76, atk: 72, def: 90, spa: 60, spd: 132, spe: 68},
		abilities: {0: "Bubble Burster", H: "Own Tides"},
		weightkg: 97.4,
	},
	garganacoal: {
		num: 2024,
		name: "Garganacoal",
		types: ["Rock"],
		baseStats: {hp: 105, atk: 100, def: 125, spa: 63, spd: 90, spe: 32},
		abilities: {0: "Saltwater Sauna", 1: "Obsidian Body", H: "Sturdy Fire"},
		weightkg: 275.3,
	},
	salazzern: {
		num: 2025,
		name: "Salazzern",
		gender: "F",
		types: ["Flying", "Poison"],
		baseStats: {hp: 86, atk: 67, def: 75, spa: 104, spd: 75, spe: 120},
		abilities: {0: "Deep Toxin", H: "Clueless"},
		weightkg: 53.6,
	},
	hattelure: {
		num: 2026,
		name: "Hattelure",
		gender: "F",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 71, atk: 72, def: 92, spa: 145, spd: 96, spe: 54},
		abilities: {0: "Eerie Flames", 1: "Guards Up", H: "Healing Burns"},
		weightkg: 19.7,
	},
	oinksler: {
		num: 2027,
		name: "Oinksler",
		gender: "M",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 95, atk: 115, def: 77, spa: 49, spd: 80, spe: 102},
		abilities: {0: "Smelly Touch", 1: "Berry Feast", H: "Thick Pressure"},
		weightkg: 81.5,
	},
	wyrdguru: {
		num: 2028,
		name: "Wyrdguru",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 105, atk: 82, def: 80, spa: 101, spd: 95, spe: 62},
		abilities: {0: "Incorporate", 1: "Item Meddler", H: "Mind Align"},
		weightkg: 85.6,
	},
	scrafdent: {
		num: 2029,
		name: "Scrafdent",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 112, atk: 92, def: 105, spa: 50, spd: 95, spe: 39},
		abilities: {0: "Scavenge", H: "Hunger Fate"},
		weightkg: 18,
	},
	toxtricoriopompomamped: {
		num: 2030,
		name: "Toxtricorio-Pom-Pom-Amped",
		baseSpecies: "Toxtricorio",
		forme: "Pom-Pom-Amped",
		types: ["Flying", "Electric"],
		baseStats: {hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104},
		abilities: {0: "Parroting"},
		weightkg: 21.7,
	},
	toxtricoriobaileamped: {
		num: 2030,
		name: "Toxtricorio-Baile-Amped",
		baseSpecies: "Toxtricorio",
		forme: "Baile-Amped",
		types: ["Fire", "Electric"],
		baseStats: {hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104},
		abilities: {0: "Parroting"},
		weightkg: 21.7,
	},
	toxtricoriopauamped: {
		num: 2030,
		name: "Toxtricorio-Pau-Amped",
		baseSpecies: "Toxtricorio",
		forme: "Pau-Amped",
		types: ["Psychic", "Electric"],
		baseStats: {hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104},
		abilities: {0: "Parroting"},
		weightkg: 21.7,
	},
	toxtricoriosensuamped: {
		num: 2030,
		name: "Toxtricorio-Sensu-Amped",
		baseSpecies: "Toxtricorio",
		forme: "Sensu-Amped",
		types: ["Ghost", "Electric"],
		baseStats: {hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104},
		abilities: {0: "Parroting"},
		weightkg: 21.7,
	},
	toxtricoriopompomkeylow: {
		num: 2030,
		name: "Toxtricorio-Pom-Pom-Key-Low",
		baseSpecies: "Toxtricorio",
		forme: "Pom-Pom-Key-Low",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104},
		abilities: {0: "Parroting"},
		weightkg: 21.7,
	},
	toxtricoriobailekeylow: {
		num: 2030,
		name: "Toxtricorio-Baile-Key-Low",
		baseSpecies: "Toxtricorio",
		forme: "Baile-Key-Low",
		types: ["Fire", "Poison"],
		baseStats: {hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104},
		abilities: {0: "Parroting"},
		weightkg: 21.7,
	},
	toxtricoriopaukeylow: {
		num: 2030,
		name: "Toxtricorio-Pau-Key-Low",
		baseSpecies: "Toxtricorio",
		forme: "Pau-Key-Low",
		types: ["Psychic", "Poison"],
		baseStats: {hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104},
		abilities: {0: "Parroting"},
		weightkg: 21.7,
	},
	toxtricoriosensukeylow: {
		num: 2030,
		name: "Toxtricorio-Sensu-Key-Low",
		baseSpecies: "Toxtricorio",
		forme: "Sensu-Key-Low",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 75, atk: 84, def: 70, spa: 106, spd: 70, spe: 104},
		abilities: {0: "Parroting"},
		weightkg: 21.7,
	},
	sabliados: {
		num: 2038,
		name: "Sabliados",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 60, atk: 85, def: 75, spa: 65, spd: 70, spe: 45},
		abilities: {0: "Telescopic Sight", 1: "Slow Bugs", H: "Nightly Jokes"},
		weightkg: 22.3,
	},
	fablapple: {
		num: 2039,
		name: "Fablapple",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 100, atk: 75, def: 91, spa: 107, spd: 85, spe: 52},
		abilities: {0: "Supercharming Syrup", 1: "Magic Sticks", H: "Recollect"},
		weightkg: 66.5,
	},
	slowzonegalar: {
		num: 2040,
		name: "Slowzone-Galar",
		types: ["Poison", "Electric"],
		baseStats: {hp: 90, atk: 67, def: 97, spa: 121, spd: 110, spe: 45},
		abilities: {0: "Surgeon Eye", 1: "Neutral Polarity", H: "Tough Brains"},
		weightkg: 129.8,
	},
	wigglylurk: {
		num: 2041,
		name: "Wigglylurk",
		types: ["Fairy", "Ghost"],
		baseStats: {hp: 114, atk: 114, def: 62, spa: 70, spd: 65, spe: 50},
		abilities: {0: "All-Seeing", 1: "Tuff Claws", H: "Malfunction"},
		weightkg: 171,
	},
	bravitry: {
		num: 2042,
		name: "Bravitry",
		gender: "M",
		types: ["Normal", "Dark"],
		baseStats: {hp: 95, atk: 118, def: 67, spa: 73, spd: 67, spe: 90},
		abilities: {0: "Sirocco", 1: "Sun Bathe", H: "Combative"},
		weightkg: 50.3,
	},
	cryomagius: {
		num: 2043,
		name: "Cryomagius",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 70, atk: 55, def: 55, spa: 120, spd: 120, spe: 105},
		abilities: {0: "Levitate"},
		weightkg: 76.2,
	},
	lycanrosmiddaypaldeaaqua: {
		num: 2044,
		name: "Lycanros-Midday-Paldea-Aqua",
		baseSpecies: "Lycanros",
		forme: "Midday-Paldea-Aqua",
		types: ["Rock", "Water"],
		baseStats: {hp: 85, atk: 117, def: 85, spa: 42, spd: 67, spe: 109},
		abilities: {0: "Eliminate", 1: "Oasis Lunch", H: "Fighting Fury"},
		weightkg: 56.7,
	},
	lycanrosmidnightpaldeablaze: {
		num: 2044,
		name: "Lycanros-Midnight-Paldea-Blaze",
		baseSpecies: "Lycanros",
		forme: "Midnight-Paldea-Blaze",
		types: ["Rock", "Fire"],
		baseStats: {hp: 95, atk: 115, def: 90, spa: 42, spd: 72, spe: 91},
		abilities: {0: "Dominate", 1: "Night Snack", H: "Rustle Rage"},
		weightkg: 56.7,
	},
	lycanrosduskpaldeacombat: {
		num: 2044,
		name: "Lycanros-Dusk-Paldea-Combat",
		baseSpecies: "Lycanros",
		forme: "Dusk-Paldea-Combat",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 90, atk: 113, def: 85, spa: 42, spd: 70, spe: 105},
		abilities: {0: "Obliterate"},
		weightkg: 56.7,
	},
	revarantis: {
		num: 2047,
		name: "Revarantis",
		types: ["Steel", "Grass"],
		baseStats: {hp: 75, atk: 112, def: 90, spa: 87, spd: 78, spe: 67},
		abilities: {0: "Leaf Coat", H: "Unfiltered"},
		weightkg: 69.3,
	},
	laprossand: {
		num: 2048,
		name: "Laprossand",
		types: ["Water", "Ground"],
		baseStats: {hp: 110, atk: 80, def: 95, spa: 105, spd: 85, spe: 50},
		abilities: {0: "Clumping Up", H: "Dissolution"},
		weightkg: 235,
	},
	spiritzer: {
		num: 2049,
		name: "Spiritzer",
		types: ["Dark", "Water"],
		baseStats: {hp: 70, atk: 82, def: 98, spa: 115, spd: 98, spe: 47},
		abilities: {0: "Hydrostatic Pressure"},
		weightkg: 71.7,
	},
	serpeblim: {
		num: 2050,
		name: "Serpeblim",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 115, atk: 80, def: 70, spa: 85, spd: 75, spe: 105},
		abilities: {0: "Germinate", H: "Sacrifice"},
		weightkg: 39,
	},
	venuvolt: {
		num: 2051,
		name: "Venuvolt",
		types: ["Poison", "Bug"],
		baseStats: {hp: 78, atk: 76, def: 86, spa: 142, spd: 87, spe: 61},
		abilities: {0: "Sunlit Flight"},
		weightkg: 72.5,
	},
	frosmivire: {
		num: 2052,
		name: "Frosmivire",
		types: ["Bug", "Electric"],
		baseStats: {hp: 80, atk: 95, def: 70, spa: 110, spd: 90, spe: 80},
		abilities: {0: "Electric Dust", H: "Vital Scales"},
		weightkg: 90.3,
	},
	rhyperluna: {
		num: 2053,
		name: "Rhyperluna",
		types: ["Ground", "Normal"],
		baseStats: {hp: 122, atk: 140, def: 117, spa: 50, spd: 71, spe: 50},
		abilities: {0: "Careless", 1: "Lithoproof", H: "Shock Horror"},
		weightkg: 286.4,
	},
	yanroar: {
		num: 2054,
		name: "Yanroar",
		gender: "M",
		types: ["Bug", "Fire"],
		baseStats: {hp: 86, atk: 72, def: 79, spa: 112, spd: 61, spe: 100},
		abilities: {0: "Move Mastery", 1: "Item Lockdown", H: "Speedy"},
		otherFormes: ["Yanroar-F"],
		formeOrder: ["Yanroar", "Yanroar-F"],
		weightkg: 66.5,
	},
	yanroarf: {
		num: 2054,
		name: "Yanroar-F",
		gender: "F",
		types: ["Bug", "Fire"],
		baseStats: {hp: 86, atk: 72, def: 79, spa: 112, spd: 61, spe: 100},
		abilities: {0: "Move Mastery", 1: "Item Lockdown", H: "Speedy"},
		weightkg: 66.5,
	},
	krookorotthisui: {
		num: 2055,
		name: "Krookorott-Hisui",
		types: ["Dark", "Water"],
		baseStats: {hp: 100, atk: 115, def: 80, spa: 85, spd: 70, spe: 90},
		abilities: {0: "Sea Monster", H: "Blade Edge"},
		weightkg: 77.3,
	},
	pincunguss: {
		num: 2056,
		name: "Pincunguss",
		types: ["Electric", "Grass"],
		baseStats: {hp: 81, atk: 93, def: 82, spa: 90, spd: 82, spe: 22},
		abilities: {0: "Jolt Spores", H: "Respark"},
		weightkg: 5.8,
	},
	mausaiai: {
		num: 2057,
		name: "Mausaiai",
		types: ["Normal", "Poison"],
		baseStats: {hp: 68, atk: 85, def: 67, spa: 72, spd: 73, spe: 110},
		abilities: {0: "Friendly Prank", 1: "Berry Diet", H: "Toxicologist"},
		otherFormes: ["Mausaiai-Four"],
		formeOrder: ["Mausaiai", "Mausaiai-Four"],
		weightkg: 14.8,
	},
	mausaiaifour: {
		num: 2057,
		name: "Mausaiai-Four",
		baseSpecies: "Mausaiai",
		forme: "Four",
		types: ["Normal", "Poison"],
		baseStats: {hp: 68, atk: 85, def: 67, spa: 72, spd: 73, spe: 110},
		abilities: {0: "Friendly Prank", 1: "Berry Diet", H: "Toxicologist"},
		weightkg: 15,
	},
	incineboar: {
		num: 2058,
		name: "Incineboar",
		types: ["Fire", "Dark"],
		baseStats: {hp: 102, atk: 119, def: 85, spa: 92, spd: 85, spe: 62},
		abilities: {0: "Inflame", H: "Blazing Passion"},
		weightkg: 116.5,
	},
	genglizar: {
		num: 2059,
		name: "Genglizar",
		types: ["Ghost", "Dragon"],
		baseStats: {hp: 70, atk: 80, def: 62, spa: 107, spd: 70, spe: 126},
		abilities: {0: "Revitalize"},
		weightkg: 51.8,
	},
	tropisdale: {
		num: 2060,
		name: "Tropisdale",
		types: ["Flying", "Ground"],
		baseStats: {hp: 100, atk: 100, def: 95, spa: 63, spd: 97, spe: 43},
		abilities: {0: "Growing Grass", 1: "Healthy Lunch", H: "Inner Power"},
		weightkg: 510,
	},
	galvillon: {
		num: 2061,
		name: "Galvillon",
		types: ["Electric", "Flying"],
		baseStats: {hp: 75, atk: 65, def: 55, spa: 100, spd: 55, spe: 100},
		abilities: {0: "Friendly Looks", 1: "Freaky Eyes", H: "Dusty Bugs"},
		weightkg: 15.7,
	},
	kingturne: {
		num: 2062,
		name: "Kingturne",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 77, atk: 105, def: 77, spa: 105, spd: 77, spe: 85},
		abilities: {0: "Hydrophilic", H: "Desert Shot"},
		weightkg: 114.7,
	},

// NFEs
	goopurr: {
		num: 2063,
		name: "Goopurr",
		types: ["Psychic", "Dragon"],
		baseStats: {hp: 57, atk: 49, def: 44, spa: 59, spd: 67, spe: 54},
		abilities: {0: "Root Snap", 1: "Hydrovision", H: "Goo With The Flow"},
		weightkg: 3.2,
	},
	riokrow: {
		num: 2064,
		name: "Riokrow",
		types: ["Fighting", "Dark"],
		baseStats: {hp: 60, atk: 80, def: 41, spa: 70, spd: 41, spe: 88},
		abilities: {0: "Restless Speed", 1: "Hyperfocus", H: "Prankster"},
		weightkg: 11.2,
	},
	pipoffing: {
		num: 2065,
		name: "Pipoffing",
		types: ["Water", "Poison"],
		baseStats: {hp: 46, atk: 58, def: 74, spa: 60, spd: 50, spe: 37},
		abilities: {0: "Murky Water", H: "Neutral Match"},
		weightkg: 3.1,
	},
	smolicute: {
		num: 2066,
		name: "Smolicute",
		types: ["Grass"],
		baseStats: {hp: 50, atk: 37, def: 62, spa: 59, spd: 57, spe: 35},
		abilities: {0: "Dawn Riser", H: "Harvest"},
		weightkg: 4.5,
	},
	polihoot: {
		num: 2067,
		name: "Polihoot",
		types: ["Water", "Flying"],
		baseStats: {hp: 50, atk: 40, def: 35, spa: 40, spd: 50, spe: 70},
		abilities: {0: "Dive Goggles", 1: "High Energy", H: "Keen Swim"},
		weightkg: 16.8,
	},
	larvipin: {
		num: 2068,
		name: "Larvipin",
		types: ["Rock", "Grass"],
		baseStats: {hp: 53, atk: 62, def: 57, spa: 46, spd: 47, spe: 39},
		abilities: {0: "Overguts", H: "Bullet Veil"},
		weightkg: 40.5,
	},
	pupadin: {
		num: 2069,
		name: "Pupadin",
		types: ["Rock", "Grass"],
		baseStats: {hp: 65, atk: 81, def: 82, spa: 64, spd: 64, spe: 54},
		abilities: {0: "Green Thumbs"},
		weightkg: 90.5,
	},
	eevulpalola: {
		num: 2070,
		name: "Eevulp-Alola",
		types: ["Normal", "Ice"],
		baseStats: {hp: 46, atk: 48, def: 45, spa: 47, spd: 65, spe: 60},
		abilities: {0: "Weather Preview", H: "Snow Layers"},
		weightkg: 8.2,
	},
	sandshrew: {
		inherit: true,
		otherFormes: ["Sandshrew-Alola", "Sandshrew-Crossbreed"],
		formeOrder: ["Sandshrew", "Sandshrew-Alola", "Sandshrew-Crossbreed"],
	},
	sandshrewcrossbreed: {
		num: 2071,
		name: "Sandshrew-Crossbreed",
		baseSpecies: "Sandshrew",
		forme: "Crossbreed",
		types: ["Ground", "Ice"],
		baseStats: {hp: 50, atk: 75, def: 90, spa: 15, spd: 40, spe: 40},
		abilities: {0: "Tundra Veil", H: "Tundra Rush"},
		weightkg: 26,
	},
	poryskull: {
		num: 2072,
		name: "Poryskull",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 42, atk: 50, def: 82, spa: 57, spd: 82, spe: 32},
		abilities: {0: "Visual Learner", H: "Malware"},
		weightkg: 25.8,
	},
	poryclops2: {
		num: 2073,
		name: "Poryclops2",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 62, atk: 75, def: 112, spa: 82, spd: 112, spe: 42},
		abilities: {0: "Visual Learner", H: "Malware"},
		weightkg: 31.6,
	},
	oddbell: {
		num: 2074,
		name: "Oddbell",
		types: ["Grass", "Poison"],
		baseStats: {hp: 47, atk: 62, def: 45, spa: 74, spd: 47, spe: 35},
		abilities: {0: "Quick Delivery", H: "Sun Away"},
		weightkg: 4.7,
	},
	gloopinbell: {
		num: 2075,
		name: "Gloopinbell",
		types: ["Grass", "Poison"],
		baseStats: {hp: 75, atk: 110, def: 115, spa: 35, spd: 60, spe: 75},
		abilities: {0: "Quick Delivery", H: "Durian Breath"},
		weightkg: 7.5,
	},
	chikobebe: {
		num: 2076,
		name: "Chikobe\u0301be\u0301",
		baseForme: "Red",
		gender: "F",
		types: ["Fairy", "Grass"],
		baseStats: {hp: 44, atk: 43, def: 52, spa: 55, spd: 72, spe: 43},
		abilities: {0: "Overbloom", H: "Teamwork"},
		cosmeticFormes: ["Chikobe\u0301be\u0301-Blue", "Chikobe\u0301be\u0301-Orange", "Chikobe\u0301be\u0301-White", "Chikobe\u0301be\u0301-Yellow"],
		formeOrder: ["Chikobe\u0301be\u0301", "Chikobe\u0301be\u0301-Blue", "Chikobe\u0301be\u0301-Orange", "Chikobe\u0301be\u0301-White", "Chikobe\u0301be\u0301-Yellow"],
		weightkg: 3.3,
	},
	floeleef: {
		num: 2077,
		name: "Floeleef",
		baseForme: "Red",
		gender: "F",
		types: ["Fairy", "Grass"],
		baseStats: {hp: 57, atk: 53, def: 63, spa: 69, spd: 92, spe: 56},
		abilities: {0: "Overbloom", H: "Teamwork"},
		cosmeticFormes: ["Floeleef-Blue", "Floeleef-Orange", "Floeleef-White", "Floeleef-Yellow"],
		formeOrder: ["Floeleef", "Floeleef-Blue", "Floeleef-Orange", "Floeleef-White", "Floeleef-Yellow"],
		weightkg: 8.4,
	},
	scythadet: {
		num: 2078,
		name: "Scythadet",
		types: ["Fire", "Flying"],
		baseStats: {hp: 55, atk: 100, def: 60, spa: 52, spd: 60, spe: 70},
		abilities: {0: "Blaze", H: "Fast Flame"},
		weightkg: 33.3,
	},
	shinly: {
		num: 2079,
		name: "Shinly",
		types: ["Electric", "Flying"],
		baseStats: {hp: 42, atk: 62, def: 32, spa: 35, spd: 32, spe: 52},
		abilities: {0: "Underestimate", H: "Brave Look"},
		weightkg: 5.8,
	},
	luxravia: {
		num: 2080,
		name: "Luxravia",
		types: ["Electric", "Flying"],
		baseStats: {hp: 57, atk: 80, def: 49, spa: 50, spd: 44, spe: 70},
		abilities: {0: "Underestimate", H: "Migrate"},
		weightkg: 23,
	},
	floppip: {
		num: 2081,
		name: "Floppip",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 32, atk: 35, def: 35, spa: 45, spd: 42, spe: 62},
		abilities: {0: "Guards Up", 1: "Safe Entry", H: "Speed Demon"},
		weightkg: 1,
	},
	quaxlet: {
		num: 2082,
		name: "Quaxlet",
		types: ["Water", "Flying"],
		baseStats: {hp: 61, atk: 61, def: 50, spa: 50, spd: 47, spe: 46},
		abilities: {0: "Kelp Power", H: "Long Moxie"},
		weightkg: 3.8,
	},
	quaxtrix: {
		num: 2083,
		name: "Quaxtrix",
		types: ["Water", "Flying"],
		baseStats: {hp: 74, atk: 80, def: 71, spa: 67, spd: 65, spe: 58},
		abilities: {0: "Kelp Power", H: "Long Moxie"},
		weightkg: 18.8,
	},
	gimmipixroaming: {
		num: 2084,
		name: "Gimmipix-Roaming",
		baseSpecies: "Gimmipix",
		forme: "Roaming",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 41, atk: 35, def: 32, spa: 62, spd: 55, spe: 75},
		abilities: {0: "Speedy Fire"},
		weightkg: 5,
	},
	gimmipix: {
		num: 2084,
		name: "Gimmipix",
		baseForme: "Chest",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 44, atk: 35, def: 55, spa: 62, spd: 67, spe: 37},
		abilities: {0: "Ghoul Fire"},
		weightkg: 7.5,
	},
	cyndafoo: {
		num: 2086,
		name: "Cyndafoo",
		types: ["Fire", "Fighting"],
		baseStats: {hp: 42, atk: 70, def: 46, spa: 57, spd: 50, spe: 65},
		abilities: {0: "Down In Flames", H: "Rekindle"},
		weightkg: 14,
	},
	dewpidink: {
		num: 2087,
		name: "Dewpidink",
		types: ["Water", "Steel"],
		baseStats: {hp: 44, atk: 51, def: 48, spa: 37, spd: 68, spe: 42},
		abilities: {0: "Bubble Burster", H: "Own Tides"},
		weightkg: 6.5,
	},
	nacoly: {
		num: 2088,
		name: "Nacoly",
		types: ["Rock"],
		baseStats: {hp: 42, atk: 47, def: 75, spa: 37, spd: 42, spe: 27},
		abilities: {0: "Saltwater Sauna", 1: "Rough Body", H: "Sturdy Fire"},
		weightkg: 14,
	},
	kolstack: {
		num: 2089,
		name: "Kolstack",
		types: ["Rock"],
		baseStats: {hp: 72, atk: 62, def: 95, spa: 47, spd: 67, spe: 42},
		abilities: {0: "Saltwater Sauna", 1: "Obsidian Body", H: "Sturdy Fire"},
		weightkg: 91.5,
	},
	salanbat: {
		num: 2090,
		name: "Salanbat",
		types: ["Flying", "Poison"],
		baseStats: {hp: 44, atk: 37, def: 37, spa: 58, spd: 40, spe: 66},
		abilities: {0: "Deep Toxin", H: "Clueless"},
		weightkg: 6.4,
	},
	litenna: {
		num: 2091,
		name: "Litenna",
		types: ["Ghost", "Psychic"],
		baseStats: {hp: 46, atk: 30, def: 50, spa: 61, spd: 54, spe: 29},
		abilities: {0: "Eerie Flames", 1: "Guards Up", H: "Healing Burns"},
		weightkg: 3.3,
	},
	hattlamp: {
		num: 2092,
		name: "Hattlamp",
		types: ["Ghost", "Psychic"],
		baseStats: {hp: 51, atk: 35, def: 52, spa: 79, spd: 56, spe: 47},
		abilities: {0: "Eerie Flames", 1: "Guards Up", H: "Healing Burns"},
		weightkg: 8.9,
	},
	snonkhisui: {
		num: 2093,
		name: "Snonk-Hisui",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 54, atk: 70, def: 47, spa: 35, spd: 60, spe: 75},
		abilities: {0: "Aroma Tricks", 1: "Hungry Eyes", H: "Inner Fat"},
		weightkg: 18.6,
	},
	skwoggy: {
		num: 2094,
		name: "Skwoggy",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 60, atk: 65, def: 62, spa: 35, spd: 52, spe: 36},
		abilities: {0: "Scavenge", H: "Hunger Fate"},
		weightkg: 7.2,
	},
	clefflin: {
		num: 2095,
		name: "Clefflin",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 45, atk: 32, def: 54, spa: 42, spd: 47, spe: 17},
		abilities: {0: "Cute Fruit", 1: "Magicproof", H: "Lunch With Friends"},
		weightkg: 1.8,
	},
	clepplin: {
		num: 2096,
		name: "Clepplin",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 75, atk: 62, def: 79, spa: 77, spd: 72, spe: 37},
		abilities: {0: "Supercharming Syrup", 1: "Magic Sticks", H: "Lunch With Friends"},
		weightkg: 6,
	},
	slowmitegalar: {
		num: 2097,
		name: "Slowmite-Galar",
		types: ["Psychic", "Electric"],
		baseStats: {hp: 57, atk: 51, def: 67, spa: 67, spd: 47, spe: 31},
		abilities: {0: "Surgeon Eye", 1: "Iron Diet", H: "Tough Brains"},
		weightkg: 21,
	},
	igglylett: {
		num: 2098,
		name: "Igglylett",
		types: ["Fairy", "Ghost"],
		baseStats: {hp: 74, atk: 52, def: 32, spa: 37, spd: 35, spe: 25},
		abilities: {0: "Unfriend Guard", 1: "Tuff Claws", H: "Malfunction"},
		weightkg: 46.5,
	},
	ruffdot: {
		num: 2099,
		name: "Ruffdot",
		gender: M,
		types: ["Grass", "Normal"],
		baseStats: {hp: 55, atk: 77, def: 50, spa: 33, spd: 40, spe: 45},
		abilities: {0: "Sheer Bird", 1: "Sun Bathe", H: "Robin"},
		weightkg: 7.3,
	},
	varantis: {
		num: 2100,
		name: "Varantis",
		types: ["Steel", "Grass"],
		baseStats: {hp: 45, atk: 82, def: 49, spa: 40, spd: 40, spe: 41},
		abilities: {0: "Leaf Coat", H: "Quickstart"},
		weightkg: 18.3,
	},
	sniloon: {
		num: 2101,
		name: "Sniloon",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 87, atk: 47, def: 44, spa: 52, spd: 49, spe: 66},
		abilities: {0: "Germinate", H: "Sacrifice"},
		weightkg: 4.7,
	},
	grubbasaur: {
		num: 2102,
		name: "Grubbasaur",
		types: ["Poison", "Bug"],
		baseStats: {hp: 46, atk: 72, def: 47, spa: 60, spd: 55, spe: 45},
		abilities: {0: "Summer Bugs"},
		weightkg: 5.7,
	},
	charjasaur: {
		num: 2103,
		name: "Charjasaur",
		types: ["Poison", "Bug"],
		baseStats: {hp: 60, atk: 72, def: 91, spa: 67, spd: 77, spe: 48},
		abilities: {0: "Solar Panel"},
		weightkg: 11.8,
	},
	snid: {
		num: 2104,
		name: "Snid",
		types: ["Bug", "Electric"],
		baseStats: {hp: 37, atk: 44, def: 36, spa: 55, spd: 42, spe: 57},
		abilities: {0: "Static Dust", H: "Vital Scales"},
		weightkg: 13.7,
	},
	rhyhursa: {
		num: 2105,
		name: "Rhyhursa",
		types: ["Ground", "Normal"],
		baseStats: {hp: 70, atk: 82, def: 72, spa: 40, spd: 40, spe: 32},
		abilities: {0: "Gangly", 1: "Rock Feet", H: "Zappy Sap"},
		weightkg: 61.9,
	},
	rhyring: {
		num: 2106,
		name: "Rhyring",
		types: ["Ground", "Normal"],
		baseStats: {hp: 97, atk: 130, def: 97, spa: 60, spd: 60, spe: 47},
		abilities: {0: "Careless", 1: "Rock Feet", H: "Shock Horror"},
		weightkg: 122.9,
	},
	yanleo: {
		num: 2107,
		name: "Yanleo",
		types: ["Bug", "Fire"],
		baseStats: {hp: 63, atk: 57, def: 51, spa: 74, spd: 49, spe: 83},
		abilities: {0: "Rival Group", 1: "Item Lockdown", H: "Speedy"},
		weightkg: 25.8,
	},
	sandwott: {
		num: 2108,
		name: "Sandwott",
		types: ["Dark", "Water"],
		baseStats: {hp: 52, atk: 63, def: 40, spa: 50, spd: 40, spe: 55},
		abilities: {0: "Sea Monster", H: "Armor Confidence"},
		weightkg: 10.6,
	},
	krokowott: {
		num: 2109,
		name: "Krokowott",
		types: ["Dark", "Water"],
		baseStats: {hp: 67, atk: 78, def: 52, spa: 64, spd: 52, spe: 67},
		abilities: {0: "Sea Monster", H: "Armor Confidence"},
		weightkg: 29,
	},
	tandoodle: {
		num: 2110,
		name: "Tandoodle",
		types: ["Normal", "Poison"],
		baseStats: {hp: 45, atk: 60, def: 40, spa: 40, spd: 40, spe: 75},
		abilities: {0: "Hit and Run", 1: "Pick Tempo", H: "More Burdens"},
		weightkg: 1.3,
	},
	litpig: {
		num: 2111,
		name: "Litpig",
		types: ["Fire"],
		baseStats: {hp: 55, atk: 64, def: 43, spa: 53, spd: 43, spe: 57},
		abilities: {0: "Inflame", H: "Fat Cat"},
		weightkg: 7.1,
	},
	torrapig: {
		num: 2112,
		name: "Torrapig",
		types: ["Fire"],
		baseStats: {hp: 80, atk: 89, def: 52, spa: 75, spd: 62, spe: 72},
		abilities: {0: "Inflame", H: "Fat Cat"},
		weightkg: 40.3,
	},
	jolterbug: {
		num: 2113,
		name: "Jolterbug",
		types: ["Electric", "Bug"],
		baseStats: {hp: 44, atk: 41, def: 45, spa: 42, spd: 37, spe: 51},
		abilities: {0: "Friendly Looks", 1: "Freaky Eyes", H: "Dusty Bugs"},
		weightkg: 1.6,
	},
	cacsea: {
		num: 2114,
		name: "Cacsea",
		types: ["Grass", "Water"],
		baseStats: {hp: 44, atk: 66, def: 55, spa: 77, spd: 33, spe: 55},
		abilities: {0: "Hydrophilic", H: "Desert Shot"},
		weightkg: 29.7,
	},
};
