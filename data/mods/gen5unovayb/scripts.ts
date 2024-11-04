export const Scripts: ModdedBattleScriptsData = {
  gen: 5,
	inherit: 'gen5',
	init() {
		this.modData("Learnsets", "oshawott").learnset.sacredsword = ["5L1"];
		this.modData("Learnsets", "dewott").learnset.sacredsword = ["5L1"];
		this.modData("Learnsets", "samurott").learnset.sacredsword = ["5L1"];
		this.modData("Learnsets", "watchog").learnset.extremespeed = ["5L1"];
		this.modData("Learnsets", "watchog").learnset.drainpunch = ["5L1"];
		delete this.modData('Learnsets', 'patrat').learnset.swordsdance;
		delete this.modData('Learnsets', 'watchog').learnset.swordsdance;
		this.modData("Learnsets", "purrloin").learnset.swordsdance = ["5L1"];
		this.modData("Learnsets", "purrloin").learnset.batonpass = ["5L1"];
		this.modData("Learnsets", "purrloin").learnset.copycat = ["5L1"];
		this.modData("Learnsets", "purrloin").learnset.mefirst = ["5L1"];
		this.modData("Learnsets", "purrloin").learnset.punishment = ["5L1"];
		this.modData("Learnsets", "liepard").learnset.swordsdance = ["5L1"];
		this.modData("Learnsets", "liepard").learnset.batonpass = ["5L1"];
		this.modData("Learnsets", "liepard").learnset.copycat = ["5L1"];
		this.modData("Learnsets", "liepard").learnset.mefirst = ["5L1"];
		this.modData("Learnsets", "liepard").learnset.punishment = ["5L1"];
		this.modData("Learnsets", "simisage").learnset.thunderpunch = ["5L1"];
		this.modData("Learnsets", "simisage").learnset.stoneedge = ["5L1"];
		this.modData("Learnsets", "simisear").learnset.thunderpunch = ["5L1"];
		this.modData("Learnsets", "simisear").learnset.stoneedge = ["5L1"];
		this.modData("Learnsets", "simipour").learnset.thunderpunch = ["5L1"];
		this.modData("Learnsets", "simipour").learnset.stoneedge = ["5L1"];
		this.modData("Learnsets", "unfezant").learnset.bravebird = ["5L1"];
		this.modData("Learnsets", "zebstrika").learnset.flareblitz = ["5L1"];
		this.modData("Learnsets", "zebstrika").learnset.naturepower = ["5L1"];
		this.modData("Learnsets", "swoobat").learnset.nastyplot = ["5L1"];
		this.modData("Learnsets", "audino").learnset.nightshade = ["5L1"];
		this.modData("Learnsets", "audino").learnset.focuspunch = ["5L1"];
		this.modData("Learnsets", "throh").learnset.rapidspin = ["5L1"];
		this.modData("Learnsets", "cottonee").learnset.defog = ["5L1"];
		this.modData("Learnsets", "whimsicott").learnset.defog = ["5L1"];
		this.modData("Learnsets", "krookodile").learnset.closecombat = ["5L1"];
		this.modData("Learnsets", "darmanitan").learnset.trick = ["5L1"];
		this.modData("Learnsets", "darmanitan").learnset.eruption = ["5L1"];
		this.modData("Learnsets", "maractus").learnset.weatherball = ["5L1"];
		this.modData("Learnsets", "maractus").learnset.leafstorm = ["5L1"];
		this.modData("Learnsets", "maractus").learnset.recover = ["5L1"];
		this.modData("Learnsets", "sigilyph").learnset.hurricane = ["5L1"];
		this.modData("Learnsets", "tirtouga").learnset.rapidspin = ["5L1"];
		this.modData("Learnsets", "carracosta").learnset.rapidspin = ["5L1"];
		this.modData("Learnsets", "archen").learnset.bravebird = ["5L1"];
		this.modData("Learnsets", "archeops").learnset.bravebird = ["5L1"];
		this.modData("Learnsets", "garbodor").learnset.poisonjab = ["5L1"];
		this.modData("Learnsets", "minccino").learnset.tidyup = ["5L1"];
		this.modData("Learnsets", "cinccino").learnset.tidyup = ["5L1"];
		this.modData("Learnsets", "gothita").learnset.fakeout = ["5L1"];
		this.modData("Learnsets", "gothita").learnset.nastyplot = ["5L1"];
		this.modData("Learnsets", "gothorita").learnset.fakeout = ["5L1"];
		this.modData("Learnsets", "gothorita").learnset.nastyplot = ["5L1"];
		this.modData("Learnsets", "gothitelle").learnset.fakeout = ["5L1"];
		this.modData("Learnsets", "gothitelle").learnset.nastyplot = ["5L1"];
		this.modData("Learnsets", "emolga").learnset.seedbomb = ["5L1"];
		this.modData("Learnsets", "klang").learnset.rapidspin = ["5L1"];
		this.modData("Learnsets", "klinklang").learnset.rapidspin = ["5L1"];
		this.modData("Learnsets", "eelektross").learnset.calmmind = ["5L1"];
		this.modData("Learnsets", "eelektross").learnset.surf = ["5L1"];
		this.modData("Learnsets", "eelektross").learnset.hydropump = ["5L1"];
		this.modData("Learnsets", "eelektross").learnset.waterfall = ["5L1"];
		this.modData("Learnsets", "beheeyem").learnset.bugbuzz = ["5L1"];
		this.modData("Learnsets", "cryogonal").learnset.darkpulse = ["5L1"];
		this.modData("Learnsets", "cryogonal").learnset.memento = ["5L1"];
		this.modData("Learnsets", "cryogonal").learnset.faketears = ["5L1"];
		this.modData("Learnsets", "cryogonal").learnset.foulplay = ["5L1"];
		this.modData("Learnsets", "cryogonal").learnset.nastyplot = ["5L1"];
		this.modData("Learnsets", "cryogonal").learnset.taunt = ["5L1"];
		this.modData("Learnsets", "cryogonal").learnset.pursuit = ["5L1"];
		this.modData("Learnsets", "stunfisk").learnset.voltswitch = ["5L1"];
		this.modData("Learnsets", "druddigon").learnset.roost = ["5L1"];
		this.modData("Learnsets", "golurk").learnset.closecombat = ["5L1"];
		this.modData("Learnsets", "golurk").learnset.shadowsneak = ["5L1"];
		this.modData("Learnsets", "golurk").learnset.spikes = ["5L1"];
		this.modData("Learnsets", "bouffalant").learnset.headsmash = ["5L1"];
		this.modData("Learnsets", "bouffalant").learnset.curse = ["5L1"];
		this.modData("Learnsets", "bouffalant").learnset.stealthrock = ["5L1"];
		this.modData("Learnsets", "braviary").learnset.agility = ["5L1"];
		this.modData("Learnsets", "hydreigon").learnset.stealthrock = ["5L1"];
		this.modData("Learnsets", "virizion").learnset.stunspore = ["5L1"];
		this.modData("Learnsets", "virizion").learnset.poisonpowder = ["5L1"];
		this.modData("Learnsets", "reshiram").learnset.eruption = ["5L1"];
		this.modData("Learnsets", "meloetta").learnset.rapidspin = ["5L1"];
  },
};
