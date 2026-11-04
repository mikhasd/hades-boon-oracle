// Auto-generated Hades boon data. Source: hades.fandom.com
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  ]
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
 },
 {
  "id": "lightning-reflexes",
  "name": "Lightning Reflexes",
  "god": "zeus",
  "slot": "util",
  "icon": "Lightning_Reflexes_I.png",
  "desc": "After you Dash just before getting hit, a bolt strikes a nearby foe.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "storm-lightning",
  "name": "Storm Lightning",
  "god": "zeus",
  "slot": "util",
  "icon": "Storm_Lightning_I.png",
  "desc": "Your chain-lightning effects bounce more times before expiring.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "high-voltage",
  "name": "High Voltage",
  "god": "zeus",
  "slot": "util",
  "icon": "High_Voltage_I.png",
  "desc": "Your lightning bolt effects deal damage in a larger area.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "double-strike",
  "name": "Double Strike",
  "god": "zeus",
  "slot": "util",
  "icon": "Double_Strike_I.png",
  "desc": "Your lightning bolt effects have a chance to strike twice.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
 },
 {
  "id": "clouded-judgment",
  "name": "Clouded Judgment",
  "god": "zeus",
  "slot": "util",
  "icon": "Clouded_Judgment_I.png",
  "desc": "Your God Gauge charges faster when you deal or take damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "billowing-strength",
  "name": "Billowing Strength",
  "god": "zeus",
  "slot": "util",
  "icon": "Billowing_Strength_I.png",
  "desc": "After using Call, you deal more damage for a short time.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "splitting-bolt",
  "name": "Splitting Bolt",
  "god": "zeus",
  "slot": "util",
  "icon": "Splitting_Bolt_I.png",
  "desc": "All your lightning effects create an additional burst.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
 },
 {
  "id": "typhoon-s-fury",
  "name": "Typhoon's Fury",
  "god": "poseidon",
  "slot": "util",
  "icon": "Typhoon's_Fury_I.png",
  "desc": "You deal more damage when slamming foes into barriers.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "hydraulic-might",
  "name": "Hydraulic Might",
  "god": "poseidon",
  "slot": "util",
  "icon": "Hydraulic_Might_I.png",
  "desc": "Your Attack and Special are stronger the first few seconds of an Encounter.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "ocean-s-bounty",
  "name": "Ocean's Bounty",
  "god": "poseidon",
  "slot": "util",
  "icon": "Ocean's_Bounty_I.png",
  "desc": "Any Gemstones, Darkness, or Obol chamber rewards are worth more.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "sunken-treasure",
  "name": "Sunken Treasure",
  "god": "poseidon",
  "slot": "util",
  "icon": "Sunken_Treasure_I.png",
  "desc": "Gain an assortment of Gemstones, Darkness, Obol, and Health.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "razor-shoals",
  "name": "Razor Shoals",
  "god": "poseidon",
  "slot": "util",
  "icon": "Razor_Shoals_I.png",
  "desc": "Using knock-away effects also Rupture foes.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "boiling-point",
  "name": "Boiling Point",
  "god": "poseidon",
  "slot": "util",
  "icon": "Boiling_Point_I.png",
  "desc": "Your God Gauge charges faster when you take damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "breaking-wave",
  "name": "Breaking Wave",
  "god": "poseidon",
  "slot": "util",
  "icon": "Breaking_Wave_I.png",
  "desc": "Slamming foes into walls or corners creates a watery blast in the area.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "wave-pounding",
  "name": "Wave Pounding",
  "god": "poseidon",
  "slot": "util",
  "icon": "Wave_Pounding_I.png",
  "desc": "Your boons with Knock-Away effects deal bonus damage to bosses.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "rip-current",
  "name": "Rip Current",
  "god": "poseidon",
  "slot": "util",
  "icon": "Rip_Current_I.png",
  "desc": "Your Call pulls in foes and the effect lasts longer.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "huge-catch",
  "name": "Huge Catch",
  "god": "poseidon",
  "slot": "util",
  "icon": "Huge_Catch_I.png",
  "desc": "You have a greater chance to find a Fishing Point in each Chamber.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "second-wave",
  "name": "Second Wave",
  "god": "poseidon",
  "slot": "util",
  "icon": "Second_Wave_I.png",
  "desc": "Your knock-away effects shove foes a second time after the first.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
 },
 {
  "id": "urge-to-kill",
  "name": "Urge to Kill",
  "god": "ares",
  "slot": "util",
  "icon": "Urge_to_Kill_I.png",
  "desc": "Your Attack, Special, and Cast deal more damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "battle-rage",
  "name": "Battle Rage",
  "god": "ares",
  "slot": "util",
  "icon": "Battle_Rage_I.png",
  "desc": "After slaying a foe, your next Attack or Special deals more damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "blood-frenzy",
  "name": "Blood Frenzy",
  "god": "ares",
  "slot": "util",
  "icon": "Blood_Frenzy_I.png",
  "desc": "After using Death Defiance, deal more damage that encounter.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "black-metal",
  "name": "Black Metal",
  "god": "ares",
  "slot": "util",
  "icon": "Black_Metal_I.png",
  "desc": "Your Blade Rift powers deal damage in a wider area.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "engulfing-vortex",
  "name": "Engulfing Vortex",
  "god": "ares",
  "slot": "util",
  "icon": "Engulfing_Vortex_I.png",
  "desc": "Your Blade Rift effects last longer and pull foes in.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "dire-misfortune",
  "name": "Dire Misfortune",
  "god": "ares",
  "slot": "util",
  "icon": "Dire_Misfortune_I.png",
  "desc": "Your Doom effects deal more damage when applied multiple times.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "impending-doom",
  "name": "Impending Doom",
  "god": "ares",
  "slot": "util",
  "icon": "Impending_Doom_I.png",
  "desc": "Your Doom effects deal more damage, after a slightly longer time.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "vicious-cycle",
  "name": "Vicious Cycle",
  "god": "ares",
  "slot": "util",
  "icon": "Vicious_Cycle_I.png",
  "desc": "Your Blade Rift effects deal more damage for each consecutive hit.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
 },
 {
  "id": "bronze-skin",
  "name": "Bronze Skin",
  "god": "athena",
  "slot": "util",
  "icon": "Bronze_Skin_I.png",
  "desc": "Resist damage from foes' attacks.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "sure-footing",
  "name": "Sure Footing",
  "god": "athena",
  "slot": "util",
  "icon": "Sure_Footing_I.png",
  "desc": "Resist damage from Traps.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "proud-bearing",
  "name": "Proud Bearing",
  "god": "athena",
  "slot": "util",
  "icon": "Proud_Bearing_I.png",
  "desc": "You begin each Encounter with your God Gauge partly full.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "blinding-flash",
  "name": "Blinding Flash",
  "god": "athena",
  "slot": "util",
  "icon": "Blinding_Flash_I.png",
  "desc": "Your abilities that can Deflect also make foes Exposed.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "brilliant-riposte",
  "name": "Brilliant Riposte",
  "god": "athena",
  "slot": "util",
  "icon": "Brilliant_Riposte_I.png",
  "desc": "When you Deflect attacks, they deal more damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "deathless-stand",
  "name": "Deathless Stand",
  "god": "athena",
  "slot": "util",
  "icon": "Deathless_Stand_I.png",
  "desc": "Death Defiance makes you Impervious longer. Replenish a charge immediately.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "last-stand",
  "name": "Last Stand",
  "god": "athena",
  "slot": "util",
  "icon": "Last_Stand_I.png",
  "desc": "Death Defiance restores more Health than usual. Replenish a charge immediately.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "divine-protection",
  "name": "Divine Protection",
  "god": "athena",
  "slot": "util",
  "icon": "Divine_Protection_I.png",
  "desc": "You have a barrier that negates incoming damage.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
 },
 {
  "id": "dying-lament",
  "name": "Dying Lament",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Dying_Lament_I.png",
  "desc": "When foes are slain, they damage nearby foes and inflict Weak.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
 },
 {
  "id": "different-league",
  "name": "Different League",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Different_League_I.png",
  "desc": "Resist some damage from nearby foes' attacks.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "life-affirmation",
  "name": "Life Affirmation",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Life_Affirmation_I.png",
  "desc": "Any Health chamber rewards are worth more.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "empty-inside",
  "name": "Empty Inside",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Empty_Inside_I.png",
  "desc": "Your Weak effects have a longer duration.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "sweet-surrender",
  "name": "Sweet Surrender",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Sweet_Surrender_I.png",
  "desc": "Weak-affected foes are also more susceptible to damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "broken-resolve",
  "name": "Broken Resolve",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Broken_Resolve_I.png",
  "desc": "Your Weak effects are more potent.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "blown-kiss",
  "name": "Blown Kiss",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Blown_Kiss_I.png",
  "desc": "Your Cast shoots farther and is stronger against undamaged foes.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "unhealthy-fixation",
  "name": "Unhealthy Fixation",
  "god": "aphrodite",
  "slot": "util",
  "icon": "Unhealthy_Fixation_I.png",
  "desc": "Your Weak effects also have a chance to Charm foes.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
 },
 {
  "id": "pressure-points",
  "name": "Pressure Points",
  "god": "artemis",
  "slot": "util",
  "icon": "Pressure_Points_I.png",
  "desc": "Any damage you deal has a chance to be Critical.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "exit-wounds",
  "name": "Exit Wounds",
  "god": "artemis",
  "slot": "util",
  "icon": "Exit_Wounds_I.png",
  "desc": "Your foes take damage when your Ammo stuck in them is dislodged.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "hide-breaker",
  "name": "Hide Breaker",
  "god": "artemis",
  "slot": "util",
  "icon": "Hide_Breaker_I.png",
  "desc": "Your Critical effects deal even more damage to Armor.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "clean-kill",
  "name": "Clean Kill",
  "god": "artemis",
  "slot": "util",
  "icon": "Clean_Kill_I.png",
  "desc": "Your Critical effects deal even more damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "hunter-instinct",
  "name": "Hunter Instinct",
  "god": "artemis",
  "slot": "util",
  "icon": "Hunter_Instinct_I.png",
  "desc": "Your God Gauge charges faster when you deal Critical damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "hunter-s-mark",
  "name": "Hunter's Mark",
  "god": "artemis",
  "slot": "util",
  "icon": "Hunter's_Mark_I.png",
  "desc": "After you deal Critical damage to a foe, a foe near it is Marked.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "support-fire",
  "name": "Support Fire",
  "god": "artemis",
  "slot": "util",
  "icon": "Support_Fire_I.png",
  "desc": "After you Cast, or hit with an Attack or Special, fire a seeking arrow.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "fully-loaded",
  "name": "Fully Loaded",
  "god": "artemis",
  "slot": "util",
  "icon": "Fully_Loaded_I.png",
  "desc": "Gain extra Ammo for your Cast.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
 },
 {
  "id": "rare-crop",
  "name": "Rare Crop",
  "god": "demeter",
  "slot": "util",
  "icon": "Rare_Crop_I.png",
  "desc": "Your Boons become Common, then gain Rarity every few Encounters.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "ravenous-will",
  "name": "Ravenous Will",
  "god": "demeter",
  "slot": "util",
  "icon": "Ravenous_Will_I.png",
  "desc": "While you have no Ammo, take less damage and deal more.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "nourished-soul",
  "name": "Nourished Soul",
  "god": "demeter",
  "slot": "util",
  "icon": "Nourished_Soul_I.png",
  "desc": "Any Health effects are more potent. Restore some health now.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "snow-burst",
  "name": "Snow Burst",
  "god": "demeter",
  "slot": "util",
  "icon": "Snow_Burst_I.png",
  "desc": "Whenever you Cast, damage nearby foes and inflict Chill.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "arctic-blast",
  "name": "Arctic Blast",
  "god": "demeter",
  "slot": "util",
  "icon": "Arctic_Blast_I.png",
  "desc": "Applying 10 stacks of Chill causes a blast, clearing the effect.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "killing-freeze",
  "name": "Killing Freeze",
  "god": "demeter",
  "slot": "util",
  "icon": "Killing_Freeze_I.png",
  "desc": "When all foes are Chill-affected, they become Slow and Decay.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "glacial-glare",
  "name": "Glacial Glare",
  "god": "demeter",
  "slot": "util",
  "icon": "Glacial_Glare_I.png",
  "desc": "Your Cast fires longer and inflicts Chill.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "winter-harvest",
  "name": "Winter Harvest",
  "god": "demeter",
  "slot": "util",
  "icon": "Winter_Harvest_I.png",
  "desc": "Chill-affected foes shatter at low Health, inflicting Chill nearby.",
  "duos": [],
  "duoCapable": false
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
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
  "duoCapable": true
 },
 {
  "id": "after-party",
  "name": "After Party",
  "god": "dionysus",
  "slot": "util",
  "icon": "After_Party_I.png",
  "desc": "If your Health is low after Encounters, restore to the threshold.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "positive-outlook",
  "name": "Positive Outlook",
  "god": "dionysus",
  "slot": "util",
  "icon": "Positive_Outlook_I.png",
  "desc": "Take less damage while at low Health.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "premium-vintage",
  "name": "Premium Vintage",
  "god": "dionysus",
  "slot": "util",
  "icon": "Premium_Vintage_I.png",
  "desc": "Gain Health when you pick up Nectar. Receive a Nectar now.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "strong-drink",
  "name": "Strong Drink",
  "god": "dionysus",
  "slot": "util",
  "icon": "Strong_Drink_I.png",
  "desc": "Using a Fountain restores all Health and gives you bonus damage.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "bad-influence",
  "name": "Bad Influence",
  "god": "dionysus",
  "slot": "util",
  "icon": "Bad_Influence_I.png",
  "desc": "Deal more damage while multiple foes are Hangover-affected.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "numbing-sensation",
  "name": "Numbing Sensation",
  "god": "dionysus",
  "slot": "util",
  "icon": "Numbing_Sensation_I.png",
  "desc": "Your Hangover effects also make foes move slower.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "peer-pressure",
  "name": "Peer Pressure",
  "god": "dionysus",
  "slot": "util",
  "icon": "Peer_Pressure_I.png",
  "desc": "Hangover-affected foes contaminate other nearby foes.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "high-tolerance",
  "name": "High Tolerance",
  "god": "dionysus",
  "slot": "util",
  "icon": "High_Tolerance_I.png",
  "desc": "Take less damage while standing in Festive Fog.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "black-out",
  "name": "Black Out",
  "god": "dionysus",
  "slot": "util",
  "icon": "Black_Out_I.png",
  "desc": "Hangover-affected foes take bonus damage in Festive Fog.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "swift-strike",
  "name": "Swift Strike",
  "god": "hermes",
  "slot": "attack",
  "icon": "Swift_Strike_I.png",
  "desc": "Your Attack is faster.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "swift-flourish",
  "name": "Swift Flourish",
  "god": "hermes",
  "slot": "special",
  "icon": "Swift_Flourish_I.png",
  "desc": "Your Special is faster.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "flurry-cast",
  "name": "Flurry Cast",
  "god": "hermes",
  "slot": "cast",
  "icon": "Flurry_Cast_I.png",
  "desc": "Your Cast is faster and fully automatic.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "quick-favor",
  "name": "Quick Favor",
  "god": "hermes",
  "slot": "call",
  "icon": "Quick_Favor_I.png",
  "desc": "Your Call charges up automatically.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "hyper-sprint",
  "name": "Hyper Sprint",
  "god": "hermes",
  "slot": "dash",
  "icon": "Hyper_Sprint_I.png",
  "desc": "For a few seconds after you Dash, become Sturdy and run much faster.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "greater-haste",
  "name": "Greater Haste",
  "god": "hermes",
  "slot": "util",
  "icon": "Greater_Haste_I.png",
  "desc": "You move faster.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "quick-recovery",
  "name": "Quick Recovery",
  "god": "hermes",
  "slot": "util",
  "icon": "Quick_Recovery_I.png",
  "desc": "After you take damage, quickly Dash to recover part of your Health.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "greater-evasion",
  "name": "Greater Evasion",
  "god": "hermes",
  "slot": "util",
  "icon": "Greater_Evasion_I.png",
  "desc": "You have a higher chance to Dodge.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "greatest-reflex",
  "name": "Greatest Reflex",
  "god": "hermes",
  "slot": "util",
  "icon": "Greatest_Reflex_I.png",
  "desc": "You can Dash more times in a row.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "second-wind",
  "name": "Second Wind",
  "god": "hermes",
  "slot": "util",
  "icon": "Second_Wind_I.png",
  "desc": "After using Call, gain Dodge chance and move speed for 10 seconds.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "quick-reload",
  "name": "Quick Reload",
  "god": "hermes",
  "slot": "util",
  "icon": "Quick_Reload_I.png",
  "desc": "Foes drop Ammo stuck in them faster.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "side-hustle",
  "name": "Side Hustle",
  "god": "hermes",
  "slot": "util",
  "icon": "Side_Hustle_I.png",
  "desc": "Each time you enter a Chamber, gain a bit of wealth.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "rush-delivery",
  "name": "Rush Delivery",
  "god": "hermes",
  "slot": "util",
  "icon": "Rush_Delivery_I.png",
  "desc": "You deal bonus damage based on any bonus move speed.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "auto-reload",
  "name": "Auto Reload",
  "god": "hermes",
  "slot": "util",
  "icon": "Auto_Reload_I.png",
  "desc": "You regenerate Ammo faster.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "greater-recall",
  "name": "Greater Recall",
  "god": "hermes",
  "slot": "util",
  "icon": "Greater_Recall_I.png",
  "desc": "Your Ammo automatically return to you.",
  "duos": [],
  "duoCapable": false
 },
 {
  "id": "bad-news",
  "name": "Bad News",
  "god": "hermes",
  "slot": "util",
  "icon": "Bad_News_I.png",
  "desc": "Your Cast deals more damage to foes without Ammo on them.",
  "duos": [],
  "duoCapable": false
 }
];
