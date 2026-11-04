// Auto-generated Hades boon data. Source: hades.fandom.com
// Damage values: rank-1 per-rarity values from the god 'Boons (Hades)'
// pages; level scaling from the 'Pom of Power' page (documented model).
const GODS = [
 {
  "id": "zeus",
  "name": "Zeus",
  "color": "#f2c14e",
  "symbol": "Zeus_symbol.png"
 },
 {
  "id": "poseidon",
  "name": "Poseidon",
  "color": "#4d9be6",
  "symbol": "Poseidon_symbol.png"
 },
 {
  "id": "ares",
  "name": "Ares",
  "color": "#e0483e",
  "symbol": "Ares_symbol.png"
 },
 {
  "id": "athena",
  "name": "Athena",
  "color": "#a8c6e8",
  "symbol": "Athena_symbol.png"
 },
 {
  "id": "aphrodite",
  "name": "Aphrodite",
  "color": "#e88bb0",
  "symbol": "Aphrodite_symbol.png"
 },
 {
  "id": "artemis",
  "name": "Artemis",
  "color": "#7cc46a",
  "symbol": "Artemis_symbol.png"
 },
 {
  "id": "demeter",
  "name": "Demeter",
  "color": "#8fd6b0",
  "symbol": "Demeter_symbol.png"
 },
 {
  "id": "dionysus",
  "name": "Dionysus",
  "color": "#a06be0",
  "symbol": "Dionysus_symbol.png"
 },
 {
  "id": "hermes",
  "name": "Hermes",
  "color": "#5fd6c8",
  "symbol": "Hermes_symbol.png"
 }
];

const DUOS = [
 {
  "id": "curse-of-longing",
  "name": "Curse of Longing",
  "icon": "Curse_of_Longing_I.png",
  "gods": [
   "aphrodite",
   "ares"
  ],
  "effect": "Doom effects continuously strike Weak foes. Successive hit damage: 50%.",
  "note": null,
  "req": [
   [
    "heartbreak-strike",
    "heartbreak-flourish",
    "crush-shot",
    "passion-dash"
   ],
   [
    "curse-of-agony",
    "curse-of-pain"
   ]
  ],
  "dmg": null
 },
 {
  "id": "heart-rend",
  "name": "Heart Rend",
  "icon": "Heart_Rend_I.png",
  "gods": [
   "aphrodite",
   "artemis"
  ],
  "effect": "Critical hits do more damage to Weak enemies. Bonus Critical Damage: +150%.",
  "note": null,
  "req": [
   [
    "heartbreak-strike",
    "heartbreak-flourish",
    "crush-shot",
    "passion-dash"
   ],
   [
    "deadly-strike",
    "deadly-flourish",
    "true-shot",
    "hunter-s-flare"
   ]
  ],
  "dmg": [
   {
    "s": "crit",
    "k": "pct",
    "b": 150,
    "lg": 1,
    "lb": "vs Weak"
   }
  ]
 },
 {
  "id": "parting-shot",
  "name": "Parting Shot",
  "icon": "Parting_Shot_I.png",
  "gods": [
   "aphrodite",
   "athena"
  ],
  "effect": "Your Cast gains bonuses for striking foes from behind. Bonus Backstab Damage: +35%.",
  "note": null,
  "req": [
   [
    "heartbreak-strike",
    "heartbreak-flourish",
    "crush-shot",
    "passion-dash",
    "aphrodite-s-aid"
   ],
   [
    "divine-strike",
    "divine-flourish",
    "phalanx-shot",
    "divine-dash",
    "athena-s-aid"
   ]
  ],
  "dmg": [
   {
    "s": "cast",
    "k": "pct",
    "b": 35,
    "lg": 1,
    "cd": 1,
    "lb": "Backstab"
   }
  ]
 },
 {
  "id": "cold-embrace",
  "name": "Cold Embrace",
  "icon": "Cold_Embrace_I.png",
  "gods": [
   "aphrodite",
   "demeter"
  ],
  "effect": "Your Cast crystal fires its beam at you for +4 Sec. Bonus Cast Damage: +30%.",
  "note": "Cannot combine with Crystal Clarity.",
  "req": [
   [
    "heartbreak-strike",
    "passion-dash",
    "heartbreak-flourish",
    "aphrodite-s-aid"
   ],
   [
    "crystal-beam"
   ]
  ],
  "dmg": [
   {
    "s": "cast",
    "k": "pct",
    "b": 30,
    "lg": 1,
    "cd": 1,
    "lb": "Crystal Beam"
   }
  ]
 },
 {
  "id": "low-tolerance",
  "name": "Low Tolerance",
  "icon": "Low_Tolerance_I.png",
  "gods": [
   "aphrodite",
   "dionysus"
  ],
  "effect": "Your Hangover effects can stack more times against Weak foes. Max Stacks vs Weak: +3.",
  "note": null,
  "req": [
   [
    "heartbreak-strike",
    "heartbreak-flourish",
    "crush-shot",
    "passion-dash"
   ],
   [
    "drunken-strike",
    "drunken-flourish",
    "drunken-dash",
    "dionysus-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "sweet-nectar",
  "name": "Sweet Nectar",
  "icon": "Sweet_Nectar_I.png",
  "gods": [
   "aphrodite",
   "poseidon"
  ],
  "effect": "Poms of Power you find are more effective. Bonus Level from Poms: +1.",
  "note": null,
  "req": [
   [
    "heartbreak-strike",
    "heartbreak-flourish",
    "crush-shot",
    "passion-flare",
    "passion-dash",
    "aphrodite-s-aid"
   ],
   [
    "tempest-strike",
    "tempest-flourish",
    "flood-shot",
    "flood-flare",
    "tidal-dash",
    "poseidon-s-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "smoldering-air",
  "name": "Smoldering Air",
  "icon": "Smoldering_Air_I.png",
  "gods": [
   "aphrodite",
   "zeus"
  ],
  "effect": "Your God Gauge charges automatically but is capped at 25%. Auto Gauge Gain: 1% (every 0.2 Sec).",
  "note": null,
  "req": [
   [
    "heartbreak-strike",
    "heartbreak-flourish",
    "crush-shot",
    "passion-flare",
    "passion-dash",
    "aphrodite-s-aid"
   ],
   [
    "lightning-strike",
    "thunder-flourish",
    "electric-shot",
    "thunder-flare",
    "thunder-dash",
    "zeus-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "hunting-blades",
  "name": "Hunting Blades",
  "icon": "Hunting_Blades_I.png",
  "gods": [
   "ares",
   "artemis"
  ],
  "effect": "Your Cast is a faster Blade Rift that seeks the nearest foe. Seek Duration: 3.3 Sec.",
  "note": "Cannot combine with Freezing Vortex.",
  "req": [
   [
    "slicing-shot"
   ],
   [
    "deadly-strike",
    "deadly-flourish",
    "hunter-dash",
    "artemis-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "merciful-end",
  "name": "Merciful End",
  "icon": "Merciful_End_I.png",
  "gods": [
   "ares",
   "athena"
  ],
  "effect": "Your attacks that can Deflect immediately activate Doom effects. Doom Combo Damage: 40.",
  "note": null,
  "req": [
   [
    "curse-of-agony",
    "curse-of-pain"
   ],
   [
    "divine-strike",
    "divine-flourish"
   ]
  ],
  "dmg": null
 },
 {
  "id": "freezing-vortex",
  "name": "Freezing Vortex",
  "icon": "Freezing_Vortex_I.png",
  "gods": [
   "ares",
   "demeter"
  ],
  "effect": "Your Cast inflicts Chill, but is smaller and moves slower. Blade Rift size: -15%.",
  "note": "Cannot combine with Hunting Blades.",
  "req": [
   [
    "slicing-shot",
    "slicing-flare"
   ],
   [
    "frost-strike",
    "frost-flourish",
    "mistral-dash",
    "demeter-s-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "curse-of-nausea",
  "name": "Curse of Nausea",
  "icon": "Curse_of_Nausea_I.png",
  "gods": [
   "ares",
   "dionysus"
  ],
  "effect": "Your Hangover effects deal damage faster. Hangover damage rate: 0.5 to 0.35 Sec.",
  "note": null,
  "req": [
   [
    "curse-of-agony",
    "curse-of-pain",
    "curse-of-vengeance"
   ],
   [
    "drunken-strike",
    "drunken-flourish",
    "drunken-dash",
    "dionysus-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "curse-of-drowning",
  "name": "Curse of Drowning",
  "icon": "Curse_of_Drowning_I.png",
  "gods": [
   "ares",
   "poseidon"
  ],
  "effect": "Your Cast is a pulse that deals damage to foes around you. Pulses per Cast: 3.",
  "note": "Cannot combine with Mirage Shot or Blizzard Shot.",
  "req": [
   [
    "curse-of-agony",
    "curse-of-pain",
    "blade-dash",
    "ares-aid"
   ],
   [
    "flood-shot",
    "flood-flare"
   ]
  ],
  "dmg": null
 },
 {
  "id": "vengeful-mood",
  "name": "Vengeful Mood",
  "icon": "Vengeful_Mood_I.png",
  "gods": [
   "ares",
   "zeus"
  ],
  "effect": "Your Revenge effects sometimes occur without taking damage. Auto-Revenge Rate: 3 Sec.",
  "note": "Requires at least 1 Revenge Boon from any god.",
  "req": [
   [
    "curse-of-agony",
    "curse-of-pain",
    "slicing-shot",
    "slicing-flare",
    "blade-dash",
    "ares-aid"
   ],
   [
    "lightning-strike",
    "thunder-flourish",
    "electric-shot",
    "thunder-flare",
    "thunder-dash",
    "zeus-aid"
   ],
   [
    "wave-of-despair",
    "curse-of-vengeance",
    "holy-shield",
    "frozen-touch",
    "heaven-s-vengeance"
   ]
  ],
  "dmg": null
 },
 {
  "id": "deadly-reversal",
  "name": "Deadly Reversal",
  "icon": "Deadly_Reversal_I.png",
  "gods": [
   "artemis",
   "athena"
  ],
  "effect": "After you Deflect, briefly gain +20% chance to deal Critical damage. Critical Duration: 2 Sec.",
  "note": null,
  "req": [
   [
    "deadly-strike",
    "deadly-flourish",
    "true-shot",
    "hunter-s-flare",
    "artemis-aid"
   ],
   [
    "divine-strike",
    "divine-flourish"
   ]
  ],
  "dmg": null
 },
 {
  "id": "crystal-clarity",
  "name": "Crystal Clarity",
  "icon": "Crystal_Clarity_I.png",
  "gods": [
   "artemis",
   "demeter"
  ],
  "effect": "Your Cast is stronger and tracks foes more effectively. Beam Damage: +10%.",
  "note": "Cannot combine with Cold Embrace.",
  "req": [
   [
    "deadly-strike",
    "deadly-flourish",
    "hunter-dash",
    "artemis-aid"
   ],
   [
    "crystal-beam"
   ]
  ],
  "dmg": [
   {
    "s": "cast",
    "k": "pct",
    "b": 10,
    "lg": 1,
    "lb": "Beam"
   }
  ]
 },
 {
  "id": "splitting-headache",
  "name": "Splitting Headache",
  "icon": "Splitting_Headache_I.png",
  "gods": [
   "artemis",
   "dionysus"
  ],
  "effect": "Hangover-affected foes are more likely to take Critical damage. Bonus Critical Chance per Hangover Stack: +1.5%.",
  "note": null,
  "req": [
   [
    "deadly-strike",
    "deadly-flourish",
    "true-shot",
    "artemis-aid"
   ],
   [
    "drunken-strike",
    "drunken-flourish",
    "drunken-dash",
    "dionysus-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "mirage-shot",
  "name": "Mirage Shot",
  "icon": "Mirage_Shot_I.png",
  "gods": [
   "artemis",
   "poseidon"
  ],
  "effect": "Your Cast fires a second projectile with reduced damage. Secondary Shot Damage: 30%.",
  "note": "Cannot combine with Curse of Drowning.",
  "req": [
   [
    "deadly-strike",
    "deadly-flourish",
    "true-shot",
    "hunter-s-flare",
    "artemis-aid"
   ],
   [
    "tempest-strike",
    "tempest-flourish",
    "flood-shot",
    "flood-flare",
    "tidal-dash",
    "poseidon-s-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "lightning-rod",
  "name": "Lightning Rod",
  "icon": "Lightning_Rod_I.png",
  "gods": [
   "artemis",
   "zeus"
  ],
  "effect": "Your collectible Ammo strike nearby foes every 1 Sec. Lightning Damage: 70.",
  "note": "Requires the Mirror of Night ability.",
  "req": [
   [
    "deadly-strike",
    "deadly-flourish",
    "true-shot",
    "hunter-s-flare",
    "hunter-dash",
    "artemis-aid"
   ],
   [
    "lightning-strike",
    "thunder-flourish",
    "electric-shot",
    "thunder-flare",
    "thunder-dash",
    "zeus-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "stubborn-roots",
  "name": "Stubborn Roots",
  "icon": "Stubborn_Roots_I.png",
  "gods": [
   "athena",
   "demeter"
  ],
  "effect": "If you have no Death Defiance, your Health slowly recovers. Life Regen in Battle: 1 (every 0.8 Sec).",
  "note": null,
  "req": [
   [
    "divine-strike",
    "divine-flourish",
    "phalanx-shot",
    "phalanx-flare",
    "divine-dash",
    "athena-s-aid"
   ],
   [
    "frost-strike",
    "frost-flourish",
    "crystal-beam",
    "icy-flare",
    "mistral-dash",
    "demeter-s-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "calculated-risk",
  "name": "Calculated Risk",
  "icon": "Calculated_Risk_I.png",
  "gods": [
   "athena",
   "dionysus"
  ],
  "effect": "Your foes' ranged-attack projectiles are slower. Foe Projectile Speed Reduction: +50%.",
  "note": null,
  "req": [
   [
    "divine-strike",
    "divine-flourish",
    "divine-dash",
    "athena-s-aid"
   ],
   [
    "drunken-strike",
    "drunken-flourish",
    "drunken-dash",
    "dionysus-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "unshakable-mettle",
  "name": "Unshakable Mettle",
  "icon": "Unshakable_Mettle_I.png",
  "gods": [
   "athena",
   "poseidon"
  ],
  "effect": "You cannot be stunned, and resist some damage from Bosses. Boss Damage Reduction: +10%.",
  "note": null,
  "req": [
   [
    "divine-strike",
    "divine-flourish",
    "phalanx-shot",
    "phalanx-flare",
    "athena-s-aid"
   ],
   [
    "tempest-strike",
    "tempest-flourish",
    "flood-shot",
    "flood-flare",
    "poseidon-s-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "lightning-phalanx",
  "name": "Lightning Phalanx",
  "icon": "Lightning_Phalanx_I.png",
  "gods": [
   "athena",
   "zeus"
  ],
  "effect": "Your Cast bounces between nearby enemies. Max Bounces: 3.",
  "note": null,
  "req": [
   [
    "phalanx-shot"
   ],
   [
    "lightning-strike",
    "thunder-flourish",
    "thunder-dash",
    "zeus-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "ice-wine",
  "name": "Ice Wine",
  "icon": "Ice_Wine_I.png",
  "gods": [
   "demeter",
   "dionysus"
  ],
  "effect": "Your Cast blasts an area with freezing Festive Fog that inflicts Chill. Blast Damage: +30%.",
  "note": null,
  "req": [
   [
    "frost-strike",
    "frost-flourish",
    "mistral-dash",
    "demeter-s-aid"
   ],
   [
    "trippy-shot",
    "trippy-flare"
   ]
  ],
  "dmg": [
   {
    "s": "cast",
    "k": "pct",
    "b": 30,
    "lg": 1,
    "cd": 1,
    "lb": "Blast"
   }
  ]
 },
 {
  "id": "blizzard-shot",
  "name": "Blizzard Shot",
  "icon": "Blizzard_Shot_I.png",
  "gods": [
   "demeter",
   "poseidon"
  ],
  "effect": "Your Cast moves slowly, piercing foes and firing shards around it. Shard Damage: 40.",
  "note": null,
  "req": [
   [
    "frost-strike",
    "frost-flourish",
    "mistral-dash",
    "demeter-s-aid"
   ],
   [
    "flood-shot"
   ]
  ],
  "dmg": null
 },
 {
  "id": "cold-fusion",
  "name": "Cold Fusion",
  "icon": "Cold_Fusion_I.png",
  "gods": [
   "demeter",
   "zeus"
  ],
  "effect": "Your Jolted effects do not expire when foes attack. Jolted Duration: 10 Sec.",
  "note": null,
  "req": [
   [
    "frost-strike",
    "frost-flourish",
    "mistral-dash",
    "demeter-s-aid"
   ],
   [
    "static-discharge"
   ]
  ],
  "dmg": null
 },
 {
  "id": "exclusive-access",
  "name": "Exclusive Access",
  "icon": "Exclusive_Access_I.png",
  "gods": [
   "dionysus",
   "poseidon"
  ],
  "effect": "Any Boons you find have superior effects. Minimum Boon Rarity: Epic.",
  "note": null,
  "req": [
   [
    "drunken-strike",
    "drunken-flourish",
    "trippy-shot",
    "trippy-flare",
    "drunken-dash",
    "dionysus-aid"
   ],
   [
    "tempest-strike",
    "tempest-flourish",
    "flood-shot",
    "flood-flare",
    "tidal-dash",
    "poseidon-s-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "scintillating-feast",
  "name": "Scintillating Feast",
  "icon": "Scintillating_Feast_I.png",
  "gods": [
   "dionysus",
   "zeus"
  ],
  "effect": "Your Festive Fog effects also deal lightning damage periodically. Lightning Damage: 60.",
  "note": null,
  "req": [
   [
    "trippy-shot"
   ],
   [
    "lightning-strike",
    "thunder-flourish",
    "thunder-dash",
    "zeus-aid"
   ]
  ],
  "dmg": null
 },
 {
  "id": "sea-storm",
  "name": "Sea Storm",
  "icon": "Sea_Storm_I.png",
  "gods": [
   "poseidon",
   "zeus"
  ],
  "effect": "Your knock-away effects also cause foes to be struck by lightning. Lightning Damage: 40.",
  "note": null,
  "req": [
   [
    "tempest-strike",
    "tempest-flourish",
    "flood-shot",
    "flood-flare",
    "poseidon-s-aid"
   ],
   [
    "lightning-strike",
    "thunder-flourish",
    "electric-shot",
    "thunder-flare",
    "thunder-dash",
    "zeus-aid"
   ]
  ],
  "dmg": null
 }
];

const BOONS = [
 {
  "id": "lightning-strike",
  "name": "Lightning Strike",
  "god": "zeus",
  "slot": "attack",
  "icon": "Lightning_Strike_I.png",
  "desc": "Your Attack emits chain-lightning when you damage a foe.",
  "duos": [
   "smoldering-air",
   "vengeful-mood",
   "lightning-rod",
   "lightning-phalanx",
   "scintillating-feast",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "attack",
    "k": "flat",
    "b": 10
   }
  ],
  "pom": true
 },
 {
  "id": "thunder-flourish",
  "name": "Thunder Flourish",
  "god": "zeus",
  "slot": "special",
  "icon": "Thunder_Flourish_I.png",
  "desc": "Your Special causes a lightning bolt to strike nearby foes.",
  "duos": [
   "smoldering-air",
   "vengeful-mood",
   "lightning-rod",
   "lightning-phalanx",
   "scintillating-feast",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "special",
    "k": "flat",
    "b": 30,
    "c": [
     1,
     1.2667,
     1.5,
     2
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "electric-shot",
  "name": "Electric Shot",
  "god": "zeus",
  "slot": "cast",
  "icon": "Electric_Shot_I.png",
  "desc": "Your Cast is a burst of chain-lightning that bounces between foes.",
  "duos": [
   "smoldering-air",
   "vengeful-mood",
   "lightning-rod",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 60,
    "c": [
     1,
     1.1667,
     1.35,
     1.5
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "thunder-flare",
  "name": "Thunder Flare",
  "god": "zeus",
  "slot": "cast",
  "icon": "Electric_Shot_I.png",
  "desc": "Your Cast causes a lightning bolt to strike nearby foes.",
  "duos": [
   "smoldering-air",
   "vengeful-mood",
   "lightning-rod",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 60,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "thunder-dash",
  "name": "Thunder Dash",
  "god": "zeus",
  "slot": "dash",
  "icon": "Thunder_Dash_I.png",
  "desc": "Your Dash causes a lightning bolt to strike nearby foes.",
  "duos": [
   "smoldering-air",
   "vengeful-mood",
   "lightning-rod",
   "lightning-phalanx",
   "scintillating-feast",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "dash",
    "k": "flat",
    "b": 10
   }
  ],
  "pom": true
 },
 {
  "id": "zeus-aid",
  "name": "Zeus' Aid",
  "god": "zeus",
  "slot": "call",
  "icon": "Zeus'_Aid_I.png",
  "desc": "Your Call makes lightning strike nearby foes repeatedly for a few seconds.",
  "duos": [
   "smoldering-air",
   "vengeful-mood",
   "lightning-rod",
   "lightning-phalanx",
   "scintillating-feast",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "call",
    "k": "flat",
    "b": 50,
    "st": 5
   }
  ],
  "pom": true
 },
 {
  "id": "heaven-s-vengeance",
  "name": "Heaven's Vengeance",
  "god": "zeus",
  "slot": "util",
  "icon": "Heaven's_Vengeance_I.png",
  "desc": "After you take damage, your foe is struck by lightning.",
  "duos": [
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "revenge",
    "k": "flat",
    "b": 80,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "lightning-reflexes",
  "name": "Lightning Reflexes",
  "god": "zeus",
  "slot": "util",
  "icon": "Lightning_Reflexes_I.png",
  "desc": "After you Dash just before getting hit, a bolt strikes a nearby foe.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 20,
    "st": 10,
    "lb": "Lightning"
   }
  ],
  "pom": true
 },
 {
  "id": "storm-lightning",
  "name": "Storm Lightning",
  "god": "zeus",
  "slot": "util",
  "icon": "Storm_Lightning_I.png",
  "desc": "Your chain-lightning effects bounce more times before expiring.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "high-voltage",
  "name": "High Voltage",
  "god": "zeus",
  "slot": "util",
  "icon": "High_Voltage_I.png",
  "desc": "Your lightning bolt effects deal damage in a larger area.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "double-strike",
  "name": "Double Strike",
  "god": "zeus",
  "slot": "util",
  "icon": "Double_Strike_I.png",
  "desc": "Your lightning bolt effects have a chance to strike twice.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "static-discharge",
  "name": "Static Discharge",
  "god": "zeus",
  "slot": "util",
  "icon": "Static_Discharge_I.png",
  "desc": "Your lightning effects also make foes Jolted.",
  "duos": [
   "cold-fusion"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 60,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ],
    "lb": "Jolt"
   }
  ],
  "pom": true
 },
 {
  "id": "clouded-judgment",
  "name": "Clouded Judgment",
  "god": "zeus",
  "slot": "util",
  "icon": "Clouded_Judgment_I.png",
  "desc": "Your God Gauge charges faster when you deal or take damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "billowing-strength",
  "name": "Billowing Strength",
  "god": "zeus",
  "slot": "util",
  "icon": "Billowing_Strength_I.png",
  "desc": "After using Call, you deal more damage for a short time.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 20,
    "c": [
     1,
     1.1,
     1.2,
     1.5
    ],
    "cd": 1,
    "lb": "after Call"
   }
  ],
  "pom": true
 },
 {
  "id": "splitting-bolt",
  "name": "Splitting Bolt",
  "god": "zeus",
  "slot": "util",
  "icon": "Splitting_Bolt_I.png",
  "desc": "All your lightning effects create an additional burst.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 40,
    "lg": 1,
    "lb": "Lightning"
   }
  ],
  "pom": false
 },
 {
  "id": "tempest-strike",
  "name": "Tempest Strike",
  "god": "poseidon",
  "slot": "attack",
  "icon": "Tempest_Strike_I.png",
  "desc": "Your Attack deals more damage and knocks foes away.",
  "duos": [
   "sweet-nectar",
   "mirage-shot",
   "unshakable-mettle",
   "exclusive-access",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "attack",
    "k": "pct",
    "b": 30,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "tempest-flourish",
  "name": "Tempest Flourish",
  "god": "poseidon",
  "slot": "special",
  "icon": "Tempest_Flourish_I.png",
  "desc": "Your Special deals more damage and knocks foes away.",
  "duos": [
   "sweet-nectar",
   "mirage-shot",
   "unshakable-mettle",
   "exclusive-access",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "special",
    "k": "pct",
    "b": 70,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "flood-shot",
  "name": "Flood Shot",
  "god": "poseidon",
  "slot": "cast",
  "icon": "Flood_Shot_I.png",
  "desc": "Your Cast damages foes in an area and knocks them away.",
  "duos": [
   "sweet-nectar",
   "curse-of-drowning",
   "mirage-shot",
   "unshakable-mettle",
   "blizzard-shot",
   "exclusive-access",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 60,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "flood-flare",
  "name": "Flood Flare",
  "god": "poseidon",
  "slot": "cast",
  "icon": "Flood_Shot_I.png",
  "desc": "Your Cast damages foes around you and knocks them away.",
  "duos": [
   "sweet-nectar",
   "curse-of-drowning",
   "mirage-shot",
   "unshakable-mettle",
   "exclusive-access",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 60,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "tidal-dash",
  "name": "Tidal Dash",
  "god": "poseidon",
  "slot": "dash",
  "icon": "Tidal_Dash_I.png",
  "desc": "Your Dash damages foes in an area and knocks them away.",
  "duos": [
   "sweet-nectar",
   "mirage-shot",
   "exclusive-access"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "dash",
    "k": "flat",
    "b": 35,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "poseidon-s-aid",
  "name": "Poseidon's Aid",
  "god": "poseidon",
  "slot": "call",
  "icon": "Poseidon's_Aid_I.png",
  "desc": "Your Call makes you surge into foes while Impervious for a few seconds.",
  "duos": [
   "sweet-nectar",
   "mirage-shot",
   "unshakable-mettle",
   "exclusive-access",
   "sea-storm"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "call",
    "k": "flat",
    "b": 250,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "typhoon-s-fury",
  "name": "Typhoon's Fury",
  "god": "poseidon",
  "slot": "util",
  "icon": "Typhoon's_Fury_I.png",
  "desc": "You deal more damage when slamming foes into barriers.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "pct",
    "b": 200,
    "st": 50,
    "cd": 1,
    "lb": "Slam vs Barrier"
   }
  ],
  "pom": true
 },
 {
  "id": "hydraulic-might",
  "name": "Hydraulic Might",
  "god": "poseidon",
  "slot": "util",
  "icon": "Hydraulic_Might_I.png",
  "desc": "Your Attack and Special are stronger the first few seconds of an Encounter.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "asp",
    "k": "pct",
    "b": 50,
    "c": [
     1,
     1.25,
     1.5,
     1.75
    ],
    "cd": 1,
    "lb": "first 10s"
   }
  ],
  "pom": true
 },
 {
  "id": "ocean-s-bounty",
  "name": "Ocean's Bounty",
  "god": "poseidon",
  "slot": "util",
  "icon": "Ocean's_Bounty_I.png",
  "desc": "Any Gemstones, Darkness, or Obol chamber rewards are worth more.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "sunken-treasure",
  "name": "Sunken Treasure",
  "god": "poseidon",
  "slot": "util",
  "icon": "Sunken_Treasure_I.png",
  "desc": "Gain an assortment of Gemstones, Darkness, Obol, and Health.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "razor-shoals",
  "name": "Razor Shoals",
  "god": "poseidon",
  "slot": "util",
  "icon": "Razor_Shoals_I.png",
  "desc": "Using knock-away effects also Rupture foes.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 10,
    "lb": "Rupture /0.2s"
   }
  ],
  "pom": true
 },
 {
  "id": "boiling-point",
  "name": "Boiling Point",
  "god": "poseidon",
  "slot": "util",
  "icon": "Boiling_Point_I.png",
  "desc": "Your God Gauge charges faster when you take damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "breaking-wave",
  "name": "Breaking Wave",
  "god": "poseidon",
  "slot": "util",
  "icon": "Breaking_Wave_I.png",
  "desc": "Slamming foes into walls or corners creates a watery blast in the area.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "wave-pounding",
  "name": "Wave Pounding",
  "god": "poseidon",
  "slot": "util",
  "icon": "Wave_Pounding_I.png",
  "desc": "Your boons with Knock-Away effects deal bonus damage to bosses.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 20,
    "st": 10,
    "cd": 1,
    "lb": "vs Boss"
   }
  ],
  "pom": true
 },
 {
  "id": "rip-current",
  "name": "Rip Current",
  "god": "poseidon",
  "slot": "util",
  "icon": "Rip_Current_I.png",
  "desc": "Your Call pulls in foes and the effect lasts longer.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "huge-catch",
  "name": "Huge Catch",
  "god": "poseidon",
  "slot": "util",
  "icon": "Huge_Catch_I.png",
  "desc": "You have a greater chance to find a Fishing Point in each Chamber.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "second-wave",
  "name": "Second Wave",
  "god": "poseidon",
  "slot": "util",
  "icon": "Second_Wave_I.png",
  "desc": "Your knock-away effects shove foes a second time after the first.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "curse-of-agony",
  "name": "Curse of Agony",
  "god": "ares",
  "slot": "attack",
  "icon": "Curse_of_Agony_I.png",
  "desc": "Your Attack inflicts Doom.",
  "duos": [
   "curse-of-longing",
   "merciful-end",
   "curse-of-nausea",
   "curse-of-drowning",
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 50,
    "lb": "Doom"
   }
  ],
  "pom": true
 },
 {
  "id": "curse-of-pain",
  "name": "Curse of Pain",
  "god": "ares",
  "slot": "special",
  "icon": "Curse_of_Pain_I.png",
  "desc": "Your Special inflicts Doom.",
  "duos": [
   "curse-of-longing",
   "merciful-end",
   "curse-of-nausea",
   "curse-of-drowning",
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 60,
    "st": 20,
    "lb": "Doom"
   }
  ],
  "pom": true
 },
 {
  "id": "slicing-shot",
  "name": "Slicing Shot",
  "god": "ares",
  "slot": "cast",
  "icon": "Slicing_Shot_I.png",
  "desc": "Your Cast sends a Blade Rift hurling ahead.",
  "duos": [
   "hunting-blades",
   "freezing-vortex",
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 20,
    "st": 2,
    "lb": "Rift /hit"
   }
  ],
  "pom": true
 },
 {
  "id": "slicing-flare",
  "name": "Slicing Flare",
  "god": "ares",
  "slot": "cast",
  "icon": "Slicing_Shot_I.png",
  "desc": "Your Cast sends a large Blade Rift hurling ahead for a brief time.",
  "duos": [
   "freezing-vortex",
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 30,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ],
    "lb": "Rift /hit"
   }
  ],
  "pom": true
 },
 {
  "id": "blade-dash",
  "name": "Blade Dash",
  "god": "ares",
  "slot": "dash",
  "icon": "Blade_Dash_I.png",
  "desc": "Your Dash creates a Blade Rift where you started.",
  "duos": [
   "curse-of-drowning",
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "dash",
    "k": "flat",
    "b": 10,
    "st": 2,
    "lb": "Rift /hit"
   }
  ],
  "pom": true
 },
 {
  "id": "ares-aid",
  "name": "Ares' Aid",
  "god": "ares",
  "slot": "call",
  "icon": "Ares'_Aid_I.png",
  "desc": "Your Call turns you into an Impervious Blade Rift for a short time.",
  "duos": [
   "curse-of-drowning",
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "call",
    "k": "flat",
    "b": 30,
    "c": [
     1,
     1.2667,
     1.5,
     1.7667
    ],
    "lb": "Rift /hit"
   }
  ],
  "pom": true
 },
 {
  "id": "curse-of-vengeance",
  "name": "Curse of Vengeance",
  "god": "ares",
  "slot": "util",
  "icon": "Curse_of_Vengeance_I.png",
  "desc": "After you take damage, inflict Doom on surrounding foes.",
  "duos": [
   "curse-of-nausea",
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "revenge",
    "k": "flat",
    "b": 100,
    "st": 20
   }
  ],
  "pom": true
 },
 {
  "id": "urge-to-kill",
  "name": "Urge to Kill",
  "god": "ares",
  "slot": "util",
  "icon": "Urge_to_Kill_I.png",
  "desc": "Your Attack, Special, and Cast deal more damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 10,
    "st": 3
   }
  ],
  "pom": true
 },
 {
  "id": "battle-rage",
  "name": "Battle Rage",
  "god": "ares",
  "slot": "util",
  "icon": "Battle_Rage_I.png",
  "desc": "After slaying a foe, your next Attack or Special deals more damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "asp",
    "k": "pct",
    "b": 100,
    "st": 50,
    "cd": 1,
    "lb": "after kill"
   }
  ],
  "pom": true
 },
 {
  "id": "blood-frenzy",
  "name": "Blood Frenzy",
  "god": "ares",
  "slot": "util",
  "icon": "Blood_Frenzy_I.png",
  "desc": "After using Death Defiance, deal more damage that encounter.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 15,
    "c": [
     1,
     1.4667,
     2,
     2.5333
    ],
    "cd": 1,
    "lb": "after Defiance"
   }
  ],
  "pom": false
 },
 {
  "id": "black-metal",
  "name": "Black Metal",
  "god": "ares",
  "slot": "util",
  "icon": "Black_Metal_I.png",
  "desc": "Your Blade Rift powers deal damage in a wider area.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "engulfing-vortex",
  "name": "Engulfing Vortex",
  "god": "ares",
  "slot": "util",
  "icon": "Engulfing_Vortex_I.png",
  "desc": "Your Blade Rift effects last longer and pull foes in.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "dire-misfortune",
  "name": "Dire Misfortune",
  "god": "ares",
  "slot": "util",
  "icon": "Dire_Misfortune_I.png",
  "desc": "Your Doom effects deal more damage when applied multiple times.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 10,
    "st": 2,
    "lb": "Doom /stack"
   }
  ],
  "pom": false
 },
 {
  "id": "impending-doom",
  "name": "Impending Doom",
  "god": "ares",
  "slot": "util",
  "icon": "Impending_Doom_I.png",
  "desc": "Your Doom effects deal more damage, after a slightly longer time.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "pct",
    "b": 60,
    "st": 5,
    "lb": "Doom"
   }
  ],
  "pom": true
 },
 {
  "id": "vicious-cycle",
  "name": "Vicious Cycle",
  "god": "ares",
  "slot": "util",
  "icon": "Vicious_Cycle_I.png",
  "desc": "Your Blade Rift effects deal more damage for each consecutive hit.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "divine-strike",
  "name": "Divine Strike",
  "god": "athena",
  "slot": "attack",
  "icon": "Divine_Strike_I.png",
  "desc": "Your Attack is stronger, and can Deflect.",
  "duos": [
   "parting-shot",
   "merciful-end",
   "deadly-reversal",
   "stubborn-roots",
   "calculated-risk",
   "unshakable-mettle"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "attack",
    "k": "pct",
    "b": 40,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "divine-flourish",
  "name": "Divine Flourish",
  "god": "athena",
  "slot": "special",
  "icon": "Divine_Flourish_I.png",
  "desc": "Your Special is stronger, and can Deflect.",
  "duos": [
   "parting-shot",
   "merciful-end",
   "deadly-reversal",
   "stubborn-roots",
   "calculated-risk",
   "unshakable-mettle"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "special",
    "k": "pct",
    "b": 60,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "phalanx-shot",
  "name": "Phalanx Shot",
  "god": "athena",
  "slot": "cast",
  "icon": "Phalanx_Shot_I.png",
  "desc": "Your Cast damages foes in a small area, and can Deflect.",
  "duos": [
   "parting-shot",
   "stubborn-roots",
   "unshakable-mettle",
   "lightning-phalanx"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 85,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "phalanx-flare",
  "name": "Phalanx Flare",
  "god": "athena",
  "slot": "cast",
  "icon": "Phalanx_Shot_I.png",
  "desc": "Your Cast damages foes around you, and can Deflect.",
  "duos": [
   "stubborn-roots",
   "unshakable-mettle"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 80,
    "st": 10
   }
  ],
  "pom": true
 },
 {
  "id": "divine-dash",
  "name": "Divine Dash",
  "god": "athena",
  "slot": "dash",
  "icon": "Divine_Dash_I.png",
  "desc": "Your Dash deals damage and can Deflect.",
  "duos": [
   "parting-shot",
   "stubborn-roots",
   "calculated-risk"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "dash",
    "k": "flat",
    "b": 10,
    "st": 2
   }
  ],
  "pom": true
 },
 {
  "id": "athena-s-aid",
  "name": "Athena's Aid",
  "god": "athena",
  "slot": "call",
  "icon": "Athena's_Aid_I.png",
  "desc": "Your Call briefly makes you Invulnerable and Deflect all attacks.",
  "duos": [
   "parting-shot",
   "stubborn-roots",
   "calculated-risk",
   "unshakable-mettle"
  ],
  "duoCapable": true,
  "dmg": null,
  "pom": true
 },
 {
  "id": "holy-shield",
  "name": "Holy Shield",
  "god": "athena",
  "slot": "util",
  "icon": "Holy_Shield_I.png",
  "desc": "After you take damage, damage nearby foes and briefly Deflect.",
  "duos": [
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "revenge",
    "k": "flat",
    "b": 30,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "bronze-skin",
  "name": "Bronze Skin",
  "god": "athena",
  "slot": "util",
  "icon": "Bronze_Skin_I.png",
  "desc": "Resist damage from foes' attacks.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 5,
    "c": [
     1,
     1.5,
     2,
     2.5
    ],
    "lb": "Damage taken"
   }
  ],
  "pom": true
 },
 {
  "id": "sure-footing",
  "name": "Sure Footing",
  "god": "athena",
  "slot": "util",
  "icon": "Sure_Footing_I.png",
  "desc": "Resist damage from Traps.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "proud-bearing",
  "name": "Proud Bearing",
  "god": "athena",
  "slot": "util",
  "icon": "Proud_Bearing_I.png",
  "desc": "You begin each Encounter with your God Gauge partly full.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "blinding-flash",
  "name": "Blinding Flash",
  "god": "athena",
  "slot": "util",
  "icon": "Blinding_Flash_I.png",
  "desc": "Your abilities that can Deflect also make foes Exposed.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "brilliant-riposte",
  "name": "Brilliant Riposte",
  "god": "athena",
  "slot": "util",
  "icon": "Brilliant_Riposte_I.png",
  "desc": "When you Deflect attacks, they deal more damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "pct",
    "b": 80,
    "c": [
     1,
     1.4,
     2.25,
     2.25
    ],
    "cd": 1,
    "lb": "Deflected attacks"
   }
  ],
  "pom": true
 },
 {
  "id": "deathless-stand",
  "name": "Deathless Stand",
  "god": "athena",
  "slot": "util",
  "icon": "Deathless_Stand_I.png",
  "desc": "Death Defiance makes you Impervious longer. Replenish a charge immediately.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "last-stand",
  "name": "Last Stand",
  "god": "athena",
  "slot": "util",
  "icon": "Last_Stand_I.png",
  "desc": "Death Defiance restores more Health than usual. Replenish a charge immediately.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "divine-protection",
  "name": "Divine Protection",
  "god": "athena",
  "slot": "util",
  "icon": "Divine_Protection_I.png",
  "desc": "You have a barrier that negates incoming damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "heartbreak-strike",
  "name": "Heartbreak Strike",
  "god": "aphrodite",
  "slot": "attack",
  "icon": "Heartbreak_Strike_I.png",
  "desc": "Your Attack deals more damage and inflicts Weak.",
  "duos": [
   "curse-of-longing",
   "heart-rend",
   "parting-shot",
   "cold-embrace",
   "low-tolerance",
   "sweet-nectar",
   "smoldering-air"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "attack",
    "k": "pct",
    "b": 50,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "heartbreak-flourish",
  "name": "Heartbreak Flourish",
  "god": "aphrodite",
  "slot": "special",
  "icon": "Heartbreak_Flourish_I.png",
  "desc": "Your Special deals more damage and inflicts Weak.",
  "duos": [
   "curse-of-longing",
   "heart-rend",
   "parting-shot",
   "cold-embrace",
   "low-tolerance",
   "sweet-nectar",
   "smoldering-air"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "special",
    "k": "pct",
    "b": 80,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "crush-shot",
  "name": "Crush Shot",
  "god": "aphrodite",
  "slot": "cast",
  "icon": "Crush_Shot_I.png",
  "desc": "Your Cast is a wide, short-range blast that inflicts Weak.",
  "duos": [
   "curse-of-longing",
   "heart-rend",
   "parting-shot",
   "low-tolerance",
   "sweet-nectar",
   "smoldering-air"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 90,
    "st": 10
   }
  ],
  "pom": true
 },
 {
  "id": "passion-flare",
  "name": "Passion Flare",
  "god": "aphrodite",
  "slot": "cast",
  "icon": "Crush_Shot_I.png",
  "desc": "Your Cast damages foes around you and inflicts Weak.",
  "duos": [
   "sweet-nectar",
   "smoldering-air"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 80,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "passion-dash",
  "name": "Passion Dash",
  "god": "aphrodite",
  "slot": "dash",
  "icon": "Passion_Dash_I.png",
  "desc": "Your Dash inflicts damage where you end up, inflicting Weak.",
  "duos": [
   "curse-of-longing",
   "heart-rend",
   "parting-shot",
   "cold-embrace",
   "low-tolerance",
   "sweet-nectar",
   "smoldering-air"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "dash",
    "k": "flat",
    "b": 20,
    "st": 4
   }
  ],
  "pom": true
 },
 {
  "id": "aphrodite-s-aid",
  "name": "Aphrodite's Aid",
  "god": "aphrodite",
  "slot": "call",
  "icon": "Aphrodite's_Aid_I.png",
  "desc": "Your Call fires a seeking projectile that inflicts Charm.",
  "duos": [
   "parting-shot",
   "cold-embrace",
   "sweet-nectar",
   "smoldering-air"
  ],
  "duoCapable": true,
  "dmg": null,
  "pom": true
 },
 {
  "id": "dying-lament",
  "name": "Dying Lament",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Dying_Lament_I.png",
  "desc": "When foes are slain, they damage nearby foes and inflict Weak.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 40,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ],
    "lb": "Death blast"
   }
  ],
  "pom": true
 },
 {
  "id": "wave-of-despair",
  "name": "Wave of Despair",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Wave_of_Despair_I.png",
  "desc": "After you take damage, damage nearby foes and inflict Weak.",
  "duos": [
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "revenge",
    "k": "flat",
    "b": 50,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "different-league",
  "name": "Different League",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Different_League_I.png",
  "desc": "Resist some damage from nearby foes' attacks.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 10,
    "c": [
     1,
     1.3,
     1.5,
     1.8
    ],
    "lb": "Damage taken"
   }
  ],
  "pom": true
 },
 {
  "id": "life-affirmation",
  "name": "Life Affirmation",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Life_Affirmation_I.png",
  "desc": "Any Health chamber rewards are worth more.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "empty-inside",
  "name": "Empty Inside",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Empty_Inside_I.png",
  "desc": "Your Weak effects have a longer duration.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "sweet-surrender",
  "name": "Sweet Surrender",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Sweet_Surrender_I.png",
  "desc": "Weak-affected foes are also more susceptible to damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 10,
    "c": [
     1,
     1.4,
     2.25,
     2.6
    ],
    "cd": 1,
    "lb": "vs Weak"
   }
  ],
  "pom": true
 },
 {
  "id": "broken-resolve",
  "name": "Broken Resolve",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Broken_Resolve_I.png",
  "desc": "Your Weak effects are more potent.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "blown-kiss",
  "name": "Blown Kiss",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Blown_Kiss_I.png",
  "desc": "Your Cast shoots farther and is stronger against undamaged foes.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "cast",
    "k": "pct",
    "b": 50,
    "c": [
     1,
     1.5,
     2,
     2.5
    ],
    "cd": 1,
    "lb": "first hit"
   }
  ],
  "pom": false
 },
 {
  "id": "unhealthy-fixation",
  "name": "Unhealthy Fixation",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Unhealthy_Fixation_I.png",
  "desc": "Your Weak effects also have a chance to Charm foes.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "deadly-strike",
  "name": "Deadly Strike",
  "god": "artemis",
  "slot": "attack",
  "icon": "Deadly_Strike_I.png",
  "desc": "Your Attack is stronger, with a chance to deal Critical damage.",
  "duos": [
   "heart-rend",
   "hunting-blades",
   "deadly-reversal",
   "crystal-clarity",
   "splitting-headache",
   "mirage-shot",
   "lightning-rod"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "attack",
    "k": "pct",
    "b": 20,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "deadly-flourish",
  "name": "Deadly Flourish",
  "god": "artemis",
  "slot": "special",
  "icon": "Deadly_Flourish_I.png",
  "desc": "Your Special is stronger, with a chance to deal Critical Damage.",
  "duos": [
   "heart-rend",
   "hunting-blades",
   "deadly-reversal",
   "crystal-clarity",
   "splitting-headache",
   "mirage-shot",
   "lightning-rod"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "special",
    "k": "pct",
    "b": 40,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "true-shot",
  "name": "True Shot",
  "god": "artemis",
  "slot": "cast",
  "icon": "True_Shot_I.png",
  "desc": "Your Cast seeks foes, with a chance to deal Critical damage.",
  "duos": [
   "heart-rend",
   "deadly-reversal",
   "splitting-headache",
   "mirage-shot",
   "lightning-rod"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 70,
    "st": 10
   }
  ],
  "pom": true
 },
 {
  "id": "hunter-s-flare",
  "name": "Hunter's Flare",
  "god": "artemis",
  "slot": "cast",
  "icon": "True_Shot_I.png",
  "desc": "Your Cast damages foes around you, with a bonus Critical chance.",
  "duos": [
   "heart-rend",
   "deadly-reversal",
   "mirage-shot",
   "lightning-rod"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 55,
    "c": [
     1,
     1.1455,
     1.2909,
     1.4364
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "hunter-dash",
  "name": "Hunter Dash",
  "god": "artemis",
  "slot": "dash",
  "icon": "Hunter_Dash_I.png",
  "desc": "Your Dash-Strike deals more damage.",
  "duos": [
   "hunting-blades",
   "crystal-clarity",
   "lightning-rod"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "dash",
    "k": "pct",
    "b": 50,
    "st": 10
   }
  ],
  "pom": true
 },
 {
  "id": "artemis-aid",
  "name": "Artemis' Aid",
  "god": "artemis",
  "slot": "call",
  "icon": "Artemis'_Aid_I.png",
  "desc": "Your Call fires a seeking arrow with a large Critical chance.",
  "duos": [
   "hunting-blades",
   "deadly-reversal",
   "crystal-clarity",
   "splitting-headache",
   "mirage-shot",
   "lightning-rod"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "call",
    "k": "flat",
    "b": 100,
    "st": 10
   }
  ],
  "pom": true
 },
 {
  "id": "pressure-points",
  "name": "Pressure Points",
  "god": "artemis",
  "slot": "util",
  "icon": "Pressure_Points_I.png",
  "desc": "Any damage you deal has a chance to be Critical.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "critc",
    "k": "flat",
    "b": 2,
    "st": 1,
    "lb": "Crit chance"
   }
  ],
  "pom": true
 },
 {
  "id": "exit-wounds",
  "name": "Exit Wounds",
  "god": "artemis",
  "slot": "util",
  "icon": "Exit_Wounds_I.png",
  "desc": "Your foes take damage when your Ammo stuck in them is dislodged.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 100,
    "st": 20,
    "lb": "Dislodge"
   }
  ],
  "pom": true
 },
 {
  "id": "hide-breaker",
  "name": "Hide Breaker",
  "god": "artemis",
  "slot": "util",
  "icon": "Hide_Breaker_I.png",
  "desc": "Your Critical effects deal even more damage to Armor.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "crit",
    "k": "pct",
    "b": 200,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ],
    "lb": "Crit vs Armor"
   }
  ],
  "pom": true
 },
 {
  "id": "clean-kill",
  "name": "Clean Kill",
  "god": "artemis",
  "slot": "util",
  "icon": "Clean_Kill_I.png",
  "desc": "Your Critical effects deal even more damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "crit",
    "k": "pct",
    "b": 15,
    "c": [
     1,
     1.5,
     2,
     2.5
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "hunter-instinct",
  "name": "Hunter Instinct",
  "god": "artemis",
  "slot": "util",
  "icon": "Hunter_Instinct_I.png",
  "desc": "Your God Gauge charges faster when you deal Critical damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "hunter-s-mark",
  "name": "Hunter's Mark",
  "god": "artemis",
  "slot": "util",
  "icon": "Hunter's_Mark_I.png",
  "desc": "After you deal Critical damage to a foe, a foe near it is Marked.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "critc",
    "k": "pct",
    "b": 30,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ],
    "cd": 1,
    "lb": "Crit vs Marked"
   }
  ],
  "pom": true
 },
 {
  "id": "support-fire",
  "name": "Support Fire",
  "god": "artemis",
  "slot": "util",
  "icon": "Support_Fire_I.png",
  "desc": "After you Cast, or hit with an Attack or Special, fire a seeking arrow.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 10,
    "st": 2,
    "lb": "Arrow"
   }
  ],
  "pom": true
 },
 {
  "id": "fully-loaded",
  "name": "Fully Loaded",
  "god": "artemis",
  "slot": "util",
  "icon": "Fully_Loaded_I.png",
  "desc": "Gain extra Ammo for your Cast.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "frost-strike",
  "name": "Frost Strike",
  "god": "demeter",
  "slot": "attack",
  "icon": "Frost_Strike_I.png",
  "desc": "Your Attack is stronger and inflicts Chill.",
  "duos": [
   "freezing-vortex",
   "stubborn-roots",
   "ice-wine",
   "blizzard-shot",
   "cold-fusion"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "attack",
    "k": "pct",
    "b": 40,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "frost-flourish",
  "name": "Frost Flourish",
  "god": "demeter",
  "slot": "special",
  "icon": "Frost_Flourish_I.png",
  "desc": "Your Special is stronger and inflicts Chill.",
  "duos": [
   "freezing-vortex",
   "stubborn-roots",
   "ice-wine",
   "blizzard-shot",
   "cold-fusion"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "special",
    "k": "pct",
    "b": 60,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ]
   }
  ],
  "pom": true
 },
 {
  "id": "crystal-beam",
  "name": "Crystal Beam",
  "god": "demeter",
  "slot": "cast",
  "icon": "Crystal_Beam_I.png",
  "desc": "Your Cast drops a crystal that fires a beam straight ahead for a few seconds.",
  "duos": [
   "cold-embrace",
   "crystal-clarity",
   "stubborn-roots"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 8,
    "c": [
     1.0,
     1.2,
     1.4,
     1.6
    ],
    "lb": "/tick"
   }
  ],
  "pom": true
 },
 {
  "id": "icy-flare",
  "name": "Icy Flare",
  "god": "demeter",
  "slot": "cast",
  "icon": "Crystal_Beam_I.png",
  "desc": "Your Cast damages foes around you and inflicts Chill.",
  "duos": [
   "stubborn-roots"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 70,
    "st": 10
   }
  ],
  "pom": true
 },
 {
  "id": "mistral-dash",
  "name": "Mistral Dash",
  "god": "demeter",
  "slot": "dash",
  "icon": "Mistral_Dash_I.png",
  "desc": "Your Dash shoots a gust ahead that inflicts Chill.",
  "duos": [
   "freezing-vortex",
   "stubborn-roots",
   "ice-wine",
   "blizzard-shot",
   "cold-fusion"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "dash",
    "k": "flat",
    "b": 15,
    "lb": "Gust"
   }
  ],
  "pom": true
 },
 {
  "id": "demeter-s-aid",
  "name": "Demeter's Aid",
  "god": "demeter",
  "slot": "call",
  "icon": "Demeter's_Aid_I.png",
  "desc": "Your Call creates a winter vortex that deals damage and inflicts Chill.",
  "duos": [
   "freezing-vortex",
   "stubborn-roots",
   "ice-wine",
   "blizzard-shot",
   "cold-fusion"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "call",
    "k": "flat",
    "b": 10,
    "st": 1,
    "lb": "/tick"
   }
  ],
  "pom": true
 },
 {
  "id": "frozen-touch",
  "name": "Frozen Touch",
  "god": "demeter",
  "slot": "util",
  "icon": "Frozen_Touch_I.png",
  "desc": "After you take damage, damage and completely Chill your foe.",
  "duos": [
   "vengeful-mood"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "revenge",
    "k": "flat",
    "b": 10
   }
  ],
  "pom": true
 },
 {
  "id": "rare-crop",
  "name": "Rare Crop",
  "god": "demeter",
  "slot": "util",
  "icon": "Rare_Crop_I.png",
  "desc": "Your Boons become Common, then gain Rarity every few Encounters.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "ravenous-will",
  "name": "Ravenous Will",
  "god": "demeter",
  "slot": "util",
  "icon": "Ravenous_Will_I.png",
  "desc": "While you have no Ammo, take less damage and deal more.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 10,
    "st": 10,
    "cd": 1,
    "lb": "no Ammo"
   }
  ],
  "pom": false
 },
 {
  "id": "nourished-soul",
  "name": "Nourished Soul",
  "god": "demeter",
  "slot": "util",
  "icon": "Nourished_Soul_I.png",
  "desc": "Any Health effects are more potent. Restore some health now.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "snow-burst",
  "name": "Snow Burst",
  "god": "demeter",
  "slot": "util",
  "icon": "Snow_Burst_I.png",
  "desc": "Whenever you Cast, damage nearby foes and inflict Chill.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 40,
    "st": 10,
    "lb": "on Cast"
   }
  ],
  "pom": true
 },
 {
  "id": "arctic-blast",
  "name": "Arctic Blast",
  "god": "demeter",
  "slot": "util",
  "icon": "Arctic_Blast_I.png",
  "desc": "Applying 10 stacks of Chill causes a blast, clearing the effect.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 80,
    "st": 10,
    "lb": "Blast"
   }
  ],
  "pom": false
 },
 {
  "id": "killing-freeze",
  "name": "Killing Freeze",
  "god": "demeter",
  "slot": "util",
  "icon": "Killing_Freeze_I.png",
  "desc": "When all foes are Chill-affected, they become Slow and Decay.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 20,
    "st": 10,
    "lb": "Decay /0.5s"
   }
  ],
  "pom": false
 },
 {
  "id": "glacial-glare",
  "name": "Glacial Glare",
  "god": "demeter",
  "slot": "util",
  "icon": "Glacial_Glare_I.png",
  "desc": "Your Cast fires longer and inflicts Chill.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "winter-harvest",
  "name": "Winter Harvest",
  "god": "demeter",
  "slot": "util",
  "icon": "Winter_Harvest_I.png",
  "desc": "Chill-affected foes shatter at low Health, inflicting Chill nearby.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 50,
    "lg": 1,
    "lb": "Shatter"
   }
  ],
  "pom": false
 },
 {
  "id": "drunken-strike",
  "name": "Drunken Strike",
  "god": "dionysus",
  "slot": "attack",
  "icon": "Drunken_Strike_I.png",
  "desc": "Your Attack inflicts Hangover.",
  "duos": [
   "low-tolerance",
   "curse-of-nausea",
   "splitting-headache",
   "calculated-risk",
   "exclusive-access"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 4,
    "st": 1,
    "lb": "Hangover"
   }
  ],
  "pom": true
 },
 {
  "id": "drunken-flourish",
  "name": "Drunken Flourish",
  "god": "dionysus",
  "slot": "special",
  "icon": "Drunken_Flourish_I.png",
  "desc": "Your Special inflicts Hangover.",
  "duos": [
   "low-tolerance",
   "curse-of-nausea",
   "splitting-headache",
   "calculated-risk",
   "exclusive-access"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 5,
    "st": 1,
    "lb": "Hangover"
   }
  ],
  "pom": true
 },
 {
  "id": "trippy-shot",
  "name": "Trippy Shot",
  "god": "dionysus",
  "slot": "cast",
  "icon": "Trippy_Shot_I.png",
  "desc": "Your Cast lobs a projectile that bursts into Festive Fog.",
  "duos": [
   "ice-wine",
   "exclusive-access",
   "scintillating-feast"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 100,
    "st": 20,
    "lb": "Blast"
   }
  ],
  "pom": true
 },
 {
  "id": "trippy-flare",
  "name": "Trippy Flare",
  "god": "dionysus",
  "slot": "cast",
  "icon": "Trippy_Shot_I.png",
  "desc": "Your Cast damages foes around you, leaving behind Festive Fog.",
  "duos": [
   "ice-wine",
   "exclusive-access"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "cast",
    "k": "flat",
    "b": 100,
    "st": 20,
    "lb": "Blast"
   }
  ],
  "pom": true
 },
 {
  "id": "drunken-dash",
  "name": "Drunken Dash",
  "god": "dionysus",
  "slot": "dash",
  "icon": "Drunken_Dash_I.png",
  "desc": "Your Dash inflicts foes near you with Hangover.",
  "duos": [
   "low-tolerance",
   "curse-of-nausea",
   "splitting-headache",
   "calculated-risk",
   "exclusive-access"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "dash",
    "k": "flat",
    "b": 2,
    "st": 1,
    "lb": "Hangover"
   }
  ],
  "pom": true
 },
 {
  "id": "dionysus-aid",
  "name": "Dionysus' Aid",
  "god": "dionysus",
  "slot": "call",
  "icon": "Dionysus'_Aid_I.png",
  "desc": "Your Call inflicts Hangover to foes all around you for a few seconds.",
  "duos": [
   "low-tolerance",
   "curse-of-nausea",
   "splitting-headache",
   "calculated-risk",
   "exclusive-access"
  ],
  "duoCapable": true,
  "dmg": [
   {
    "s": "call",
    "k": "flat",
    "b": 15,
    "c": [
     1,
     1.1,
     1.2,
     1.3
    ],
    "lb": "Hangover"
   }
  ],
  "pom": true
 },
 {
  "id": "after-party",
  "name": "After Party",
  "god": "dionysus",
  "slot": "util",
  "icon": "After_Party_I.png",
  "desc": "If your Health is low after Encounters, restore to the threshold.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "positive-outlook",
  "name": "Positive Outlook",
  "god": "dionysus",
  "slot": "util",
  "icon": "Positive_Outlook_I.png",
  "desc": "Take less damage while at low Health.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "premium-vintage",
  "name": "Premium Vintage",
  "god": "dionysus",
  "slot": "util",
  "icon": "Premium_Vintage_I.png",
  "desc": "Gain Health when you pick up Nectar. Receive a Nectar now.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "strong-drink",
  "name": "Strong Drink",
  "god": "dionysus",
  "slot": "util",
  "icon": "Strong_Drink_I.png",
  "desc": "Using a Fountain restores all Health and gives you bonus damage.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 3,
    "st": 1,
    "cd": 1,
    "lb": "per Fountain"
   }
  ],
  "pom": false
 },
 {
  "id": "bad-influence",
  "name": "Bad Influence",
  "god": "dionysus",
  "slot": "util",
  "icon": "Bad_Influence_I.png",
  "desc": "Deal more damage while multiple foes are Hangover-affected.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 50,
    "c": [
     1.0,
     1.4,
     1.9,
     2.4
    ],
    "cd": 1,
    "lb": "3+ Hangover"
   }
  ],
  "pom": true
 },
 {
  "id": "numbing-sensation",
  "name": "Numbing Sensation",
  "god": "dionysus",
  "slot": "util",
  "icon": "Numbing_Sensation_I.png",
  "desc": "Your Hangover effects also make foes move slower.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "peer-pressure",
  "name": "Peer Pressure",
  "god": "dionysus",
  "slot": "util",
  "icon": "Peer_Pressure_I.png",
  "desc": "Hangover-affected foes contaminate other nearby foes.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "other",
    "k": "flat",
    "b": 4,
    "c": [
     1,
     1.4,
     2.25,
     2.6
    ],
    "lb": "Hangover"
   }
  ],
  "pom": true
 },
 {
  "id": "high-tolerance",
  "name": "High Tolerance",
  "god": "dionysus",
  "slot": "util",
  "icon": "High_Tolerance_I.png",
  "desc": "Take less damage while standing in Festive Fog.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": true
 },
 {
  "id": "black-out",
  "name": "Black Out",
  "god": "dionysus",
  "slot": "util",
  "icon": "Black_Out_I.png",
  "desc": "Hangover-affected foes take bonus damage in Festive Fog.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 60,
    "lg": 1,
    "cd": 1,
    "lb": "in Fog"
   }
  ],
  "pom": false
 },
 {
  "id": "swift-strike",
  "name": "Swift Strike",
  "god": "hermes",
  "slot": "attack",
  "icon": "Swift_Strike_I.png",
  "desc": "Your Attack is faster.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "swift-flourish",
  "name": "Swift Flourish",
  "god": "hermes",
  "slot": "special",
  "icon": "Swift_Flourish_I.png",
  "desc": "Your Special is faster.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "flurry-cast",
  "name": "Flurry Cast",
  "god": "hermes",
  "slot": "cast",
  "icon": "Flurry_Cast_I.png",
  "desc": "Your Cast is faster and fully automatic.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "quick-favor",
  "name": "Quick Favor",
  "god": "hermes",
  "slot": "call",
  "icon": "Quick_Favor_I.png",
  "desc": "Your Call charges up automatically.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "hyper-sprint",
  "name": "Hyper Sprint",
  "god": "hermes",
  "slot": "dash",
  "icon": "Hyper_Sprint_I.png",
  "desc": "For a few seconds after you Dash, become Sturdy and run much faster.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "greater-haste",
  "name": "Greater Haste",
  "god": "hermes",
  "slot": "util",
  "icon": "Greater_Haste_I.png",
  "desc": "You move faster.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "quick-recovery",
  "name": "Quick Recovery",
  "god": "hermes",
  "slot": "util",
  "icon": "Quick_Recovery_I.png",
  "desc": "After you take damage, quickly Dash to recover part of your Health.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "greater-evasion",
  "name": "Greater Evasion",
  "god": "hermes",
  "slot": "util",
  "icon": "Greater_Evasion_I.png",
  "desc": "You have a higher chance to Dodge.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "greatest-reflex",
  "name": "Greatest Reflex",
  "god": "hermes",
  "slot": "util",
  "icon": "Greatest_Reflex_I.png",
  "desc": "You can Dash more times in a row.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "second-wind",
  "name": "Second Wind",
  "god": "hermes",
  "slot": "util",
  "icon": "Second_Wind_I.png",
  "desc": "After using Call, gain Dodge chance and move speed for 10 seconds.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "quick-reload",
  "name": "Quick Reload",
  "god": "hermes",
  "slot": "util",
  "icon": "Quick_Reload_I.png",
  "desc": "Foes drop Ammo stuck in them faster.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "side-hustle",
  "name": "Side Hustle",
  "god": "hermes",
  "slot": "util",
  "icon": "Side_Hustle_I.png",
  "desc": "Each time you enter a Chamber, gain a bit of wealth.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "rush-delivery",
  "name": "Rush Delivery",
  "god": "hermes",
  "slot": "util",
  "icon": "Rush_Delivery_I.png",
  "desc": "You deal bonus damage based on any bonus move speed.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "all",
    "k": "pct",
    "b": 50,
    "st": 25,
    "cd": 1,
    "lb": "from Move Speed"
   }
  ],
  "pom": false
 },
 {
  "id": "auto-reload",
  "name": "Auto Reload",
  "god": "hermes",
  "slot": "util",
  "icon": "Auto_Reload_I.png",
  "desc": "You regenerate Ammo faster.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "greater-recall",
  "name": "Greater Recall",
  "god": "hermes",
  "slot": "util",
  "icon": "Greater_Recall_I.png",
  "desc": "Your Ammo automatically return to you.",
  "duos": [],
  "duoCapable": false,
  "dmg": null,
  "pom": false
 },
 {
  "id": "bad-news",
  "name": "Bad News",
  "god": "hermes",
  "slot": "util",
  "icon": "Bad_News_I.png",
  "desc": "Your Cast deals more damage to foes without Ammo on them.",
  "duos": [],
  "duoCapable": false,
  "dmg": [
   {
    "s": "cast",
    "k": "pct",
    "b": 50,
    "lg": 1,
    "cd": 1,
    "lb": "vs No Ammo"
   }
  ],
  "pom": false
 }
];

const WEAPONS = [
 {
  "id": "blade",
  "name": "Stygian Blade",
  "icon": "Stygian_Blade.png",
  "atk": [
   20,
   30
  ],
  "atk_hits": 3,
  "atk_note": "Strike / Chop / Thrust",
  "sp": 50,
  "sp_hits": 1,
  "sp_note": "Nova Smash"
 },
 {
  "id": "spear",
  "name": "Eternal Spear",
  "icon": "Eternal_Spear.png",
  "atk": [
   25,
   30
  ],
  "atk_hits": 3,
  "atk_note": "Strike / Combo (Spin 100)",
  "sp": 25,
  "sp_hits": 1,
  "sp_note": "Throw + Return"
 },
 {
  "id": "bow",
  "name": "Heart-Seeking Bow",
  "icon": "Heart-Seeker_Bow.png",
  "atk": [
   20,
   60
  ],
  "atk_hits": 1,
  "atk_note": "Fire, charged (Power 70)",
  "sp": 10,
  "sp_hits": 9,
  "sp_note": "Volley, 9 arrows"
 },
 {
  "id": "shield",
  "name": "Shield of Chaos",
  "icon": "Shield_of_Chaos.png",
  "atk": [
   25,
   40
  ],
  "atk_hits": 2,
  "atk_note": "Bash / Bull Rush",
  "sp": 15,
  "sp_hits": 1,
  "sp_note": "Throw"
 },
 {
  "id": "fists",
  "name": "Twin Fists",
  "icon": "Twin_Fists.png",
  "atk": [
   15,
   15
  ],
  "atk_hits": 5,
  "atk_note": "Pummel sequence",
  "sp": 30,
  "sp_hits": 2,
  "sp_note": "Rising Cutter"
 },
 {
  "id": "rail",
  "name": "Adamant Rail",
  "icon": "Adamant_Rail.png",
  "atk": [
   10,
   10
  ],
  "atk_hits": 1,
  "atk_note": "Fire",
  "sp": 60,
  "sp_hits": 1,
  "sp_note": "Bombard"
 }
];

const DAEDALA = [
 {
  "id": "breaching-slash",
  "weapon": "blade",
  "name": "Breaching Slash",
  "icon": "Armor_Slayer.png",
  "desc": "Your Attack deals +300% damage to Armor. Also applies to Dash-Strike.",
  "mods": null,
  "excl": []
 },
 {
  "id": "cruel-thrust",
  "weapon": "blade",
  "name": "Cruel Thrust",
  "icon": "Cruel_Thrust.png",
  "desc": "Your Thrust deals +200% damage and has +40% Critical chance. Dash-Strike does not benefit.",
  "mods": null,
  "excl": [
   "world-splitter",
   "flurry-slash"
  ]
 },
 {
  "id": "cursed-slash",
  "weapon": "blade",
  "name": "Cursed Slash",
  "icon": "Cursed_Slash.png",
  "desc": "Your Attack restores 2 Health, but you have -60% max Health.",
  "mods": null,
  "excl": []
 },
 {
  "id": "dash-nova",
  "weapon": "blade",
  "name": "Dash Nova",
  "icon": "Sword_Snap_Nova.png",
  "desc": "Your Special makes you lunge ahead, then become Sturdy for 0.8 Sec.",
  "mods": null,
  "excl": []
 },
 {
  "id": "double-edge",
  "weapon": "blade",
  "name": "Double Edge",
  "icon": "Double_Edge.png",
  "desc": "Your Dash-Strike hits twice and deals +20% damage.",
  "mods": null,
  "excl": []
 },
 {
  "id": "double-nova",
  "weapon": "blade",
  "name": "Double Nova",
  "icon": "Sudden_Sunder.png",
  "desc": "Your Special hits twice but no longer knocks foes away.",
  "mods": [
   {
    "t": "hits",
    "s": "special",
    "v": 2
   }
  ],
  "excl": []
 },
 {
  "id": "flurry-slash",
  "weapon": "blade",
  "name": "Flurry Slash",
  "icon": "Flurry_Blade.png",
  "desc": "Hold Attack to strike rapidly, dealing 25 base damage per hit.",
  "mods": [
   {
    "t": "repl",
    "s": "attack",
    "v": 25,
    "h": 1
   }
  ],
  "excl": [
   "cruel-thrust",
   "world-splitter"
  ]
 },
 {
  "id": "hoarding-slash",
  "weapon": "blade",
  "name": "Hoarding Slash",
  "icon": "Sword_Hoarding_Slash.png",
  "desc": "Your Attack deals bonus damage equal to 5% of your current Obol.",
  "mods": null,
  "excl": []
 },
 {
  "id": "piercing-wave",
  "weapon": "blade",
  "name": "Piercing Wave",
  "icon": "Piercing_Wave.png",
  "desc": "Your Attack fires a wave that pierces foes, dealing 30 damage.",
  "mods": null,
  "excl": []
 },
 {
  "id": "shadow-slash",
  "weapon": "blade",
  "name": "Shadow Slash",
  "icon": "Shadow_Slash.png",
  "desc": "Your Attack deals +200% damage when striking foes from behind. Does not apply to Dash-Strike.",
  "mods": null,
  "excl": []
 },
 {
  "id": "super-nova",
  "weapon": "blade",
  "name": "Super Nova",
  "icon": "Super_Nova.png",
  "desc": "Your Special hits a wider area and deals +20% damage.",
  "mods": [
   {
    "t": "pct",
    "s": "special",
    "v": 20
   }
  ],
  "excl": []
 },
 {
  "id": "world-splitter",
  "weapon": "blade",
  "name": "World Splitter",
  "icon": "World_Splitter.png",
  "desc": "Your Attack is replaced with a big chop that deals 90 base damage.",
  "mods": [
   {
    "t": "repl",
    "s": "attack",
    "v": 90,
    "h": 1
   }
  ],
  "excl": [
   "cruel-thrust",
   "flurry-slash"
  ]
 },
 {
  "id": "greater-consecration",
  "weapon": "blade",
  "name": "Greater Consecration",
  "icon": "Sword_Greater_Consecration.png",
  "desc": "Aspect of Arthur: your Holy Excalibur aura is +45% larger and makes foes +10% slower.",
  "mods": null,
  "excl": []
 },
 {
  "id": "extending-jab",
  "weapon": "spear",
  "name": "Extending Jab",
  "icon": "Extended_Jab.png",
  "desc": "Your Attack has +40% range and deals +40% damage to distant foes.",
  "mods": null,
  "excl": []
 },
 {
  "id": "chain-skewer",
  "weapon": "spear",
  "name": "Chain Skewer",
  "icon": "Multi_Skewer.png",
  "desc": "Your Special bounces to up to 7 foes, dealing +30% damage for each.",
  "mods": null,
  "excl": [
   "exploding-launcher"
  ]
 },
 {
  "id": "breaching-skewer",
  "weapon": "spear",
  "name": "Breaching Skewer",
  "icon": "Armor_Skewer.png",
  "desc": "Your Special deals +400% damage to Armor.",
  "mods": null,
  "excl": []
 },
 {
  "id": "vicious-skewer",
  "weapon": "spear",
  "name": "Vicious Skewer",
  "icon": "Vicious_Skewer.png",
  "desc": "Your Special deals +50% damage; +50% Critical chance on recovery.",
  "mods": [
   {
    "t": "pct",
    "s": "special",
    "v": 50
   }
  ],
  "excl": [
   "exploding-launcher"
  ]
 },
 {
  "id": "exploding-launcher",
  "weapon": "spear",
  "name": "Exploding Launcher",
  "icon": "Exploding_Launcher.png",
  "desc": "Your Special is replaced with a shot that deals 50 damage in an area. Disables Special backstab bonuses.",
  "mods": [
   {
    "t": "repl",
    "s": "special",
    "v": 50,
    "h": 1
   }
  ],
  "excl": [
   "chain-skewer",
   "vicious-skewer"
  ]
 },
 {
  "id": "massive-spin",
  "weapon": "spear",
  "name": "Massive Spin",
  "icon": "Massive_Spin.png",
  "desc": "Your Spin Attack deals +125% damage and hits a larger area (+30% radius).",
  "mods": null,
  "excl": [
   "flurry-jab"
  ]
 },
 {
  "id": "quick-spin",
  "weapon": "spear",
  "name": "Quick Spin",
  "icon": "Quick_Spin.png",
  "desc": "Your Spin Attack charges and recovers much faster.",
  "mods": null,
  "excl": [
   "flurry-jab"
  ]
 },
 {
  "id": "flurry-jab",
  "weapon": "spear",
  "name": "Flurry Jab",
  "icon": "Flurry_Jab.png",
  "desc": "Hold Attack to strike rapidly, but you cannot Spin Attack.",
  "mods": null,
  "excl": []
 },
 {
  "id": "charged-skewer",
  "weapon": "spear",
  "name": "Charged Skewer",
  "icon": "Spear_Charged_Skewer.png",
  "desc": "Hold Special to charge your skewer for up to +200% base damage. Minimum range reduced.",
  "mods": null,
  "excl": []
 },
 {
  "id": "serrated-point",
  "weapon": "spear",
  "name": "Serrated Point",
  "icon": "Spear_Serrated_Point.png",
  "desc": "Your Dash-Strike hits 3 times, but your dash has -25% range.",
  "mods": null,
  "excl": [
   "flurry-jab"
  ]
 },
 {
  "id": "flaring-spin",
  "weapon": "spear",
  "name": "Flaring Spin",
  "icon": "Spear_Flaring_Spin.png",
  "desc": "Charging your Spin Attack makes you Sturdy and pulse 40 damage.",
  "mods": null,
  "excl": [
   "flurry-jab"
  ]
 },
 {
  "id": "triple-jab",
  "weapon": "spear",
  "name": "Triple Jab",
  "icon": "Spear_Triple_Jab.png",
  "desc": "Your Attack strikes 3 times in a spread pattern.",
  "mods": [
   {
    "t": "hits",
    "s": "attack",
    "v": 3
   }
  ],
  "excl": []
 },
 {
  "id": "winged-serpent",
  "weapon": "spear",
  "name": "Winged Serpent",
  "icon": "Spear_Winged_Serpent.png",
  "desc": "Aspect of Guan Yu: your Frost Fair Blade Spin Attack travels +80% longer.",
  "mods": null,
  "excl": []
 },
 {
  "id": "twin-shot",
  "weapon": "bow",
  "name": "Twin Shot",
  "icon": "Twin_Shot.png",
  "desc": "Your Attack fires 2 shots side-by-side, but has reduced range (65%).",
  "mods": [
   {
    "t": "hits",
    "s": "attack",
    "v": 2
   }
  ],
  "excl": [
   "triple-shot",
   "sniper-shot"
  ]
 },
 {
  "id": "sniper-shot",
  "weapon": "bow",
  "name": "Sniper Shot",
  "icon": "Sniper_Shot.png",
  "desc": "Your Attack deals +200% damage to distant foes.",
  "mods": null,
  "excl": [
   "twin-shot",
   "point-blank-shot"
  ]
 },
 {
  "id": "explosive-shot",
  "weapon": "bow",
  "name": "Explosive Shot",
  "icon": "Explosive_Shot.png",
  "desc": "Your Attack deals +300% damage in an area, but charges slower.",
  "mods": null,
  "excl": [
   "flurry-shot",
   "chain-shot"
  ]
 },
 {
  "id": "flurry-shot",
  "weapon": "bow",
  "name": "Flurry Shot",
  "icon": "Flurry_Shot.png",
  "desc": "Hold Attack to shoot rapidly (60 per hit, 40 for dash attack), but you cannot Power Shot.",
  "mods": [
   {
    "t": "repl",
    "s": "attack",
    "v": 60,
    "h": 1
   }
  ],
  "excl": [
   "perfect-shot",
   "explosive-shot"
  ]
 },
 {
  "id": "piercing-volley",
  "weapon": "bow",
  "name": "Piercing Volley",
  "icon": "Piercing_Barrage.png",
  "desc": "Your Special pierces foes, is Unblockable, and deals +400% damage to Armor.",
  "mods": null,
  "excl": []
 },
 {
  "id": "perfect-shot",
  "weapon": "bow",
  "name": "Perfect Shot",
  "icon": "Perfect_Shot.png",
  "desc": "Your Power Shot is easier to execute and deals +150% damage.",
  "mods": null,
  "excl": [
   "flurry-shot"
  ]
 },
 {
  "id": "relentless-volley",
  "weapon": "bow",
  "name": "Relentless Volley",
  "icon": "Relentless_Barrage.png",
  "desc": "Your Special shoots +4 shots.",
  "mods": [
   {
    "t": "hits+",
    "s": "special",
    "v": 4
   }
  ],
  "excl": [
   "charged-volley"
  ]
 },
 {
  "id": "triple-shot",
  "weapon": "bow",
  "name": "Triple Shot",
  "icon": "Triple_Shot.png",
  "desc": "Your Attack fires 3 shots in a spread pattern.",
  "mods": [
   {
    "t": "hits",
    "s": "attack",
    "v": 3
   }
  ],
  "excl": [
   "twin-shot"
  ]
 },
 {
  "id": "charged-volley",
  "weapon": "bow",
  "name": "Charged Volley",
  "icon": "Bow_Charged_Volley.png",
  "desc": "Hold Special for up to +250% base damage; minimum range is reduced.",
  "mods": null,
  "excl": [
   "relentless-volley"
  ]
 },
 {
  "id": "chain-shot",
  "weapon": "bow",
  "name": "Chain Shot",
  "icon": "Bow_Chain_Shot.png",
  "desc": "Your Attack bounces to up to 3 foes, dealing +15% damage for each.",
  "mods": null,
  "excl": [
   "explosive-shot"
  ]
 },
 {
  "id": "point-blank-shot",
  "weapon": "bow",
  "name": "Point-Blank Shot",
  "icon": "Bow_Point-Blank_Shot.png",
  "desc": "Your Attack deals +150% damage to nearby foes.",
  "mods": null,
  "excl": [
   "sniper-shot"
  ]
 },
 {
  "id": "concentrated-volley",
  "weapon": "bow",
  "name": "Concentrated Volley",
  "icon": "Bow_Concentrated_Volley.png",
  "desc": "Your Special deals +3 base damage for each consecutive hit to a foe.",
  "mods": null,
  "excl": []
 },
 {
  "id": "repulse-shot",
  "weapon": "bow",
  "name": "Repulse Shot",
  "icon": "Bow_Rama_Repulse_Shot.png",
  "desc": "Aspect of Rama: your Celestial Sharanga Attack creates a Blast Wave around you (knockback only).",
  "mods": null,
  "excl": []
 },
 {
  "id": "dread-flight",
  "weapon": "shield",
  "name": "Dread Flight",
  "icon": "Dread_Flight.png",
  "desc": "Your Special can strike up to 4 additional foes before returning.",
  "mods": null,
  "excl": []
 },
 {
  "id": "sudden-rush",
  "weapon": "shield",
  "name": "Sudden Rush",
  "icon": "Sudden_Rush.png",
  "desc": "Your Bull Rush charges much faster.",
  "mods": null,
  "excl": []
 },
 {
  "id": "pulverizing-blow",
  "weapon": "shield",
  "name": "Pulverizing Blow",
  "icon": "Pulverizing_Blow.png",
  "desc": "Your Attack (Bash) hits twice, but does not knock foes away.",
  "mods": [
   {
    "t": "hits",
    "s": "attack",
    "v": 2
   }
  ],
  "excl": []
 },
 {
  "id": "dashing-wallop",
  "weapon": "shield",
  "name": "Dashing Wallop",
  "icon": "Dashing_Wallop.png",
  "desc": "Your Dash-Strike deals +50% damage in a larger area.",
  "mods": null,
  "excl": []
 },
 {
  "id": "explosive-return",
  "weapon": "shield",
  "name": "Explosive Return",
  "icon": "Explosive_Return.png",
  "desc": "Your Special deals 50 damage to nearby foes when you catch it.",
  "mods": null,
  "excl": []
 },
 {
  "id": "minotaur-rush",
  "weapon": "shield",
  "name": "Minotaur Rush",
  "icon": "Minotaur_Rush.png",
  "desc": "Your Bull Rush gains a Power Rush that does +500% damage.",
  "mods": null,
  "excl": []
 },
 {
  "id": "breaching-rush",
  "weapon": "shield",
  "name": "Breaching Rush",
  "icon": "Armor_Shredder.png",
  "desc": "Your Bull Rush deals +400% damage to Armor.",
  "mods": null,
  "excl": []
 },
 {
  "id": "charged-shot",
  "weapon": "shield",
  "name": "Charged Shot",
  "icon": "Charged_Shot.png",
  "desc": "Your Bull Rush instead fires a piercing, unblockable shot that deals 80 base damage.",
  "mods": null,
  "excl": []
 },
 {
  "id": "charged-flight",
  "weapon": "shield",
  "name": "Charged Flight",
  "icon": "Charged_Flight.png",
  "desc": "Hold Special to charge your throw for up to +200% base damage.",
  "mods": null,
  "excl": [
   "dashing-flight"
  ]
 },
 {
  "id": "empowering-flight",
  "weapon": "shield",
  "name": "Empowering Flight",
  "icon": "Empowering_Flight.png",
  "desc": "After your Special hits, your next 2 Attacks deal +80% damage.",
  "mods": null,
  "excl": []
 },
 {
  "id": "dashing-flight",
  "weapon": "shield",
  "name": "Dashing Flight",
  "icon": "Dashing_Flight.png",
  "desc": "While you Dash, your Special is faster and deals +200% damage.",
  "mods": null,
  "excl": [
   "charged-flight"
  ]
 },
 {
  "id": "ferocious-guard",
  "weapon": "shield",
  "name": "Ferocious Guard",
  "icon": "Ferocious_Guard.png",
  "desc": "After blocking a foe, gain +20% damage and move speed for 10 Sec.",
  "mods": null,
  "excl": []
 },
 {
  "id": "unyielding-defense",
  "weapon": "shield",
  "name": "Unyielding Defense",
  "icon": "Unyielding_Defense.png",
  "desc": "Aspect of Beowulf: after using your Naegling's Board Cast, you are Sturdy for 3 Sec.",
  "mods": null,
  "excl": []
 },
 {
  "id": "breaching-cross",
  "weapon": "fists",
  "name": "Breaching Cross",
  "icon": "Breaching_Cross.png",
  "desc": "Your Dash-Strike pierces foes and deals +900% damage to Armor.",
  "mods": null,
  "excl": []
 },
 {
  "id": "rolling-knuckle",
  "weapon": "fists",
  "name": "Rolling Knuckle",
  "icon": "Rolling_Knuckle.png",
  "desc": "Your Dash-Strike deals +60% damage and is added to the Attack sequence.",
  "mods": null,
  "excl": [
   "heavy-knuckle"
  ]
 },
 {
  "id": "long-knuckle",
  "weapon": "fists",
  "name": "Long Knuckle",
  "icon": "Long_Knuckle.png",
  "desc": "Your Attack has more range and deals +10% damage.",
  "mods": [
   {
    "t": "pct",
    "s": "attack",
    "v": 10
   }
  ],
  "excl": []
 },
 {
  "id": "draining-cutter",
  "weapon": "fists",
  "name": "Draining Cutter",
  "icon": "Draining_Cutter.png",
  "desc": "Whenever your Special slays foes, restore 2% Life.",
  "mods": null,
  "excl": []
 },
 {
  "id": "concentrated-knuckle",
  "weapon": "fists",
  "name": "Concentrated Knuckle",
  "icon": "Concentrated_Knuckle.png",
  "desc": "Your Attack deals +5 base damage for each uninterrupted hit to a foe.",
  "mods": null,
  "excl": []
 },
 {
  "id": "explosive-upper",
  "weapon": "fists",
  "name": "Explosive Upper",
  "icon": "Explosive_Upper.png",
  "desc": "Your Dash-Upper deals +100% damage in an area.",
  "mods": null,
  "excl": [
   "kinetic-launcher"
  ]
 },
 {
  "id": "flying-cutter",
  "weapon": "fists",
  "name": "Flying Cutter",
  "icon": "Flying_Cutter.png",
  "desc": "Hold Special for longer range and up to +100% base damage.",
  "mods": null,
  "excl": [
   "rush-kick",
   "kinetic-launcher"
  ]
 },
 {
  "id": "rush-kick",
  "weapon": "fists",
  "name": "Rush Kick",
  "icon": "Rush_Kick.png",
  "desc": "Your Special becomes an advancing kick that deals 40 base damage twice.",
  "mods": [
   {
    "t": "repl",
    "s": "special",
    "v": 40,
    "h": 2
   }
  ],
  "excl": [
   "flying-cutter",
   "kinetic-launcher"
  ]
 },
 {
  "id": "quake-cutter",
  "weapon": "fists",
  "name": "Quake Cutter",
  "icon": "Quake_Cutter.png",
  "desc": "After using your Special, deal 90 damage in an area where you land. Scales with Special damage.",
  "mods": null,
  "excl": [
   "kinetic-launcher"
  ]
 },
 {
  "id": "kinetic-launcher",
  "weapon": "fists",
  "name": "Kinetic Launcher",
  "icon": "Kinetic_Launcher.png",
  "desc": "Your Special becomes a charged ranged attack dealing 50 base damage (75 for Power Shot).",
  "mods": [
   {
    "t": "repl",
    "s": "special",
    "v": 50,
    "h": 1
   }
  ],
  "excl": [
   "rush-kick",
   "flying-cutter",
   "explosive-upper",
   "quake-cutter"
  ]
 },
 {
  "id": "heavy-knuckle",
  "weapon": "fists",
  "name": "Heavy Knuckle",
  "icon": "Heavy_Knuckle.png",
  "desc": "Your Attack becomes a slower 3-hit sequence, each dealing 40 base damage.",
  "mods": [
   {
    "t": "repl",
    "s": "attack",
    "v": 40,
    "h": 3
   }
  ],
  "excl": [
   "rolling-knuckle"
  ]
 },
 {
  "id": "colossus-knuckle",
  "weapon": "fists",
  "name": "Colossus Knuckle",
  "icon": "Colossus_Knuckle.png",
  "desc": "While using your Attack or Special, you are Sturdy.",
  "mods": null,
  "excl": []
 },
 {
  "id": "rending-claws",
  "weapon": "fists",
  "name": "Rending Claws",
  "icon": "Rending_Claws.png",
  "desc": "Aspect of Gilgamesh: Maim-affected foes take +25% damage and move 30% slower.",
  "mods": null,
  "excl": []
 },
 {
  "id": "flurry-fire",
  "weapon": "rail",
  "name": "Flurry Fire",
  "icon": "Flurry_Fire.png",
  "desc": "Your Attack is faster and more accurate (60% cooldown); gain +6 ammo capacity.",
  "mods": null,
  "excl": [
   "spread-fire",
   "delta-chamber"
  ]
 },
 {
  "id": "ricochet-fire",
  "weapon": "rail",
  "name": "Ricochet Fire",
  "icon": "Ricochet_Fire.png",
  "desc": "Your Attack bounces to +1 other foe.",
  "mods": null,
  "excl": [
   "explosive-fire",
   "spread-fire",
   "seeking-fire"
  ]
 },
 {
  "id": "spread-fire",
  "weapon": "rail",
  "name": "Spread Fire",
  "icon": "Spread_Fire.png",
  "desc": "Your Attack becomes a short spread dealing 40 base damage; lose -6 ammo capacity.",
  "mods": [
   {
    "t": "repl",
    "s": "attack",
    "v": 40,
    "h": 1
   }
  ],
  "excl": [
   "flurry-fire",
   "delta-chamber",
   "ricochet-fire",
   "seeking-fire"
  ]
 },
 {
  "id": "explosive-fire",
  "weapon": "rail",
  "name": "Explosive Fire",
  "icon": "Explosive_Fire.png",
  "desc": "Your Attack deals damage in an area (275 radius) and briefly slows foes.",
  "mods": null,
  "excl": [
   "ricochet-fire",
   "piercing-fire"
  ]
 },
 {
  "id": "delta-chamber",
  "weapon": "rail",
  "name": "Delta Chamber",
  "icon": "Infinity_Chamber.png",
  "desc": "Your Attack is a 3-round burst; you never have to Reload.",
  "mods": [
   {
    "t": "hits",
    "s": "attack",
    "v": 3
   }
  ],
  "excl": [
   "flurry-fire",
   "spread-fire"
  ]
 },
 {
  "id": "piercing-fire",
  "weapon": "rail",
  "name": "Piercing Fire",
  "icon": "Piercing_Fire.png",
  "desc": "Your Attack pierces foes, is Unblockable, and deals +50% damage to Armor.",
  "mods": null,
  "excl": [
   "explosive-fire",
   "seeking-fire"
  ]
 },
 {
  "id": "triple-bomb",
  "weapon": "rail",
  "name": "Triple Bomb",
  "icon": "Triple_Bomb.png",
  "desc": "You can use your Special 3 times in rapid succession.",
  "mods": [
   {
    "t": "hits",
    "s": "special",
    "v": 3
   }
  ],
  "excl": [
   "cluster-bomb",
   "hazard-bomb"
  ]
 },
 {
  "id": "rocket-bomb",
  "weapon": "rail",
  "name": "Rocket Bomb",
  "icon": "Rocket_Bomb.png",
  "desc": "Your Special is replaced with a rocket that deals 80 base damage.",
  "mods": [
   {
    "t": "repl",
    "s": "special",
    "v": 80,
    "h": 1
   }
  ],
  "excl": [
   "hazard-bomb"
  ]
 },
 {
  "id": "targeting-system",
  "weapon": "rail",
  "name": "Targeting System",
  "icon": "Targeting_System.png",
  "desc": "Foes targeted by your Special move slower and take +30% damage.",
  "mods": null,
  "excl": []
 },
 {
  "id": "hazard-bomb",
  "weapon": "rail",
  "name": "Hazard Bomb",
  "icon": "Hazard_Bomb.png",
  "desc": "Your Special deals +300% base damage in a large area, but can hurt you (1% self-damage).",
  "mods": [
   {
    "t": "pct",
    "s": "special",
    "v": 300
   }
  ],
  "excl": [
   "rocket-bomb",
   "cluster-bomb",
   "triple-bomb"
  ]
 },
 {
  "id": "cluster-bomb",
  "weapon": "rail",
  "name": "Cluster Bomb",
  "icon": "Cluster_Bomb.png",
  "desc": "Your Special fires a spread of 5 bombs, but each deals -30% damage.",
  "mods": [
   {
    "t": "hits",
    "s": "special",
    "v": 5
   },
   {
    "t": "pct",
    "s": "special",
    "v": -30
   }
  ],
  "excl": [
   "hazard-bomb",
   "triple-bomb"
  ]
 },
 {
  "id": "seeking-fire",
  "weapon": "rail",
  "name": "Seeking Fire",
  "icon": "Seeking_Fire.png",
  "desc": "Your Attack seeks the nearest foe.",
  "mods": null,
  "excl": [
   "explosive-fire",
   "piercing-fire",
   "spread-fire",
   "ricochet-fire"
  ]
 }
];
