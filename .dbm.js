show collections

db.filter.find({_id: "60ef31822fdf039ff1a60ce9"}, { "armourSelection.armour": 1 }).sort({_id: -1})

db.filter.aggregate([
  { $match: {name: "Default"} },
  { $sort: {_id: -1} }
])

db.static.insertOne(
    {
        "name": "weaponDetails",
        "selectionName": "weaponSelection",
        "details": [
            {
                "melee": [
                    {
                        "name": "axes",
                        "fullName": "Axes",
                        "icon": "axe"
                    },
                    {
                        "name": "swords",
                        "fullName": "Swords",
                        "icon": "sword"
                    },
                    {
                        "name": "maces",
                        "fullName": "Maces",
                        "icon": "mace"
                    },
                    {
                        "name": "warstaves",
                        "fullName": "Warstaves",
                        "icon": "warstaff"
                    },
                    {
                        "name": "claws",
                        "fullName": "Claws",
                        "icon": "claw"
                    },
                    {
                        "name": "daggers",
                        "fullName": "Daggers",
                        "icon": "dagger"
                    }

                ]
            },
            {
                "ranged": [
                    {
                        "name": "wands",
                        "fullName": "Wands",
                        "icon": "wand"
                    },
                    {
                        "name": "bows",
                        "fullName": "Bows",
                        "icon": "bow"
                    },
                    {
                        "name": "quivers",
                        "fullName": "Quivers",
                        "icon": "quiver"
                    }
                ]
            },
            {
                "caster": [
                    {
                        "name": "wands",
                        "fullName": "Wands",
                        "icon": "wand"
                    },
                    {
                        "name": "scepters",
                        "fullName": "Scepters",
                        "icon": "scepter"
                    },
                    {
                        "name": "runeDaggers",
                        "fullName": "Rune Daggers",
                        "icon": "runeDagger"
                    },
                    {
                        "name": "staves",
                        "fullName": "Staves",
                        "icon": "stave"
                    }
                ]
            }
        ],
        "baseTypes": {
            "melee": {
                "name": "Melee",
                "heading": "Melee"
            },
            "ranged": {
                "name": "Ranged",
                "heading": "Ranged"
            },
            "caster": {
                "name": "Caster",
                "heading": "Caster"
            }
        },
        "atlasBaseTypes": [
            "Convoking Wand",
            "Artillery Quiver"
        ]
    }
)

db.static.updateOne(
  {name: "weaponDetails"},
  {$set: {
        "details": [
            {
                "melee": [
                    {
                        "name": "axe",
                        "fullName": "Axes",
                        "icon": "axe"
                    },
                    {
                        "name": "sword",
                        "fullName": "Swords",
                        "icon": "sword"
                    },
                    {
                        "name": "mace",
                        "fullName": "Maces",
                        "icon": "mace"
                    },
                    {
                        "name": "warstaff",
                        "fullName": "Warstaves",
                        "icon": "warstaff"
                    },
                    {
                        "name": "claw",
                        "fullName": "Claws",
                        "icon": "claw"
                    },
                    {
                        "name": "dagger",
                        "fullName": "Daggers",
                        "icon": "dagger"
                    }

                ]
            },
            {
                "ranged": [
                    {
                        "name": "wand",
                        "fullName": "Wands",
                        "icon": "wand"
                    },
                    {
                        "name": "bow",
                        "fullName": "Bows",
                        "icon": "bow"
                    },
                    {
                        "name": "quiver",
                        "fullName": "Quivers",
                        "icon": "quiver"
                    }
                ]
            },
            {
                "caster": [
                    {
                        "name": "wand",
                        "fullName": "Wands",
                        "icon": "wand"
                    },
                    {
                        "name": "scepter",
                        "fullName": "Scepters",
                        "icon": "scepter"
                    },
                    {
                        "name": "runeDagger",
                        "fullName": "Rune Daggers",
                        "icon": "runeDagger"
                    },
                    {
                        "name": "staff",
                        "fullName": "Staves",
                        "icon": "stave"
                    }
                ]
            }
        ]
    }
  }
)

db.filter.updateMany(
  {}, 
  { $set: {
    "weaponSelection": {
        "melee": {
            "axe": 1,
            "sword": 1,
            "mace": 0,
            "warstaff": 0,
            "dagger": 0,
            "claw": 0,
            "oneHand": 0,
            "twoHand": 0,
            "elemental": 0,
            "physical": 0
        },
        "ranged": {
            "bow": 1,
            "quiver": 1,
            "wand": 0,
            "elemental": 0,
            "physical": 0
        },
        "caster": {
            "wand": 1,
            "scepter": 1,
            "staff": 0,
            "runeDagger": 0,
            "tiers": [
              1,
              0,
              0,
              0
            ] 
        },
        "itemlevel": 68,
        "exceptionSelection": [
            {
                "name": "Convoking Wand",
                "itemId": "6110f8ea90861eac085356da",
                "rarity": 1,
                "itemlevel": 1
            },
            {
                "name": "Artillery Quiver",
                "itemId": "6110f8ea90861eac08535602",
                "rarity": 1,
                "itemlevel": 1
            }
        ]
    }
  }
  }
)

db.filter.updateOne({_id: "60e81740b565781aa4fdfd80", "armourSelection.exceptionSelection.itemId": null}, )

db.filter.findOne({_id: ObjectId("60e81740b565781aa4fdfd80")}, {"armourSelection.exceptionSelection": 1})

db.filter.findOne({_id: ObjectId("60e81740b565781aa4fdfd80"), "armourSelection.exceptionSelection.name": "Crusader Boots"})

db.filter.updateOne(
  {_id: ObjectId("60e81740b565781aa4fdfd80")}, 
  {$set: 
    {"armourSelection.exceptionSelection.$[updateItem].itemId": 1}
  }, {
    "arrayFilters": [
      {"updateItem.name": "Crusader Boots"}
    ]
  }
)

db.static.insertOne({
  name: "armourDetails",
  selectionName: "armourSelection",
  details: [
    {
      name: "helmets",
      fullName: "Helmets",
      icon: "helmets",
    },
    {
      name: "gloves",
      fullName: "Gloves",
      icon: "gloves",
    },
    {
      name: "boots",
      fullName: "Boots",
      icon: "boots",
    },
    {
      name: "bodyArmour",
      fullName: "Body Armour",
      icon: "bodyArmour",
    },
    {
      name: "shields",
      fullName: "Shields",
      icon: "shields",
    }
  ],
  baseTypes: {
    armour: {
      name: "Armour",
      heading: "AR",
    },
    evasion: {
      name: "Evasion",
      heading: "EVA",
    },
    energyShield: {
      name: "Energy Shield",
      heading: "ES",
    },
  }
})

db.itemBases.find({itemType: "flask"}).count()
db.itemBases.find(
  {
    "properties.energy_shield": { $gt: 87 }, 
    "properties.armour": {$exists: true}
  }, 
  {
    name: 1, 
    "properties.armour": 1
  }
)

db.itemBases.find({release_state: {$not: /^released/}}, {_id: 0, name: 1, release_state: 1})

db.itemBases.find({
  release_state: "released",
  itemType: "armour"
},{
  _id: 0,
  name: 1,
  implicits: 1,
  item_class: 1,
  properties: 1,
})



db.itemBases.aggregate([
      { $match: {name: "Barbute Helmet", release_state: "released", itemType: "armour" } },
      { $lookup: {
          from: "mods",
          localField: "implicits",
          foreignField: "identifier",
          as: "implicitsInfo"
        } 
      },
      { $project: {
          _id: 1,
          name: 1,
          item_class: 1,
          properties: 1,
          requirements: 1,
          "implicitsInfo.translated_stats": { $ifNull: [ "$implicitsInfo.translated_stats", [""] ] },
          "implicitsInfo.name": { $ifNull: [ "$implicitsInfo.name", [""] ] },
        }
      },
    ])



db.itemBases.aggregate([
      { $match: {name: "Archdemon Crown", release_state: "released", itemType: "armour" } },
      { $lookup: {
          from: "mods",
          localField: "implicits",
          foreignField: "identifier",
          as: "implicitsInfo"
        } 
      },
//      { $lookup: {
//          from: "statTranslations",
//          localField: "implicitsInfo.stats.id",
//          foreignField: "ids",
//          as: "implicitsInfoHR"
//        } 
//      },
      { $project: {
          _id: 0,
          //name: 1,
          //item_class: 1,
          //properties: 1,
          //requirements: 1,
          "implicitsInfo.stats": { $ifNull: [ "$implicitsInfo.stats", "null" ] },
          "implicitsInfo.name": { $ifNull: [ "$implicitsInfo.name", "null" ] },
//          "implicitsInfoHR.English.string": { $ifNull: [ "$implicitsInfoHR.English.string", "null" ]},
//          "implicitsInfoHR.English.format": { $ifNull: [ "$implicitsInfoHR.English.format", "null" ]},
        }
      },
    ])



a = {
    "item_class": "Boots",
    "name": "Brimstone Treads",
    "properties": {
        "armour": 236
    },
    "requirements": {
        "dexterity": 0,
        "intelligence": 0,
        "level": 80,
        "strength": 124
    },
    "implicitsInfo": [
        {
            "stats": [
                [
                    {
                        "id": "additional_block_%",
                        "max": 5,
                        "min": 4
                    },
                    {
                        "id": "base_block_%_damage_taken",
                        "max": 20,
                        "min": 20
                    }
                ]
            ],
            "name": [
                ""
            ]
        }
    ],
    "implicitsInfoHR": [
        {
            "English": [
                {
                    "string": [
                        [
                            "{0}% Chance to Block Attack Damage"
                        ],
                        [
                            "You take {0}% of Damage from Blocked Hits"
                        ]
                    ],
                    "format": [
                        [
                            [
                                "+#"
                            ]
                        ],
                        [
                            [
                                "#"
                            ]
                        ]
                    ]
                }
            ]
        },
        {
            "English": [
                {
                    "string": [
                        [
                            "{0}% Chance to Block Attack Damage"
                        ],
                        [
                            "You take {0}% of Damage from Blocked Hits"
                        ]
                    ],
                    "format": [
                        [
                            [
                                "+#"
                            ]
                        ],
                        [
                            [
                                "#"
                            ]
                        ]
                    ]
                }
            ]
        }
    ]
}


b = {
    "item_class": "Helmet",
    "name": "Archdemon Crown",
    "properties": {
        "armour": 185,
        "energy_shield": 36
    },
    "requirements": {
        "dexterity": 0,
        "intelligence": 79,
        "level": 75,
        "strength": 79
    },
    "implicitsInfo": [
        {
            "stats": [
                [
                    {
                        "id": "base_resist_all_elements_%",
                        "max": -10,
                        "min": -10
                    },
                    {
                        "id": "local_display_socketed_gems_exposure_on_hit",
                        "max": 1,
                        "min": 1
                    }
                ]
            ],
            "name": [
                ""
            ]
        }
    ],
    "implicitsInfoHR": [
        {
            "English": [
                {
                    "string": [
                        [
                            "Socketed Skills apply Fire, Cold and Lightning Exposure on Hit"
                        ],
                        [
                            "{0}% to all Elemental Resistances"
                        ]
                    ],
                    "format": [
                        [
                            [
                                "ignore"
                            ]
                        ],
                        [
                            [
                                "+#"
                            ]
                        ]
                    ]
                }
            ]
        },
        {
            "English": [
                {
                    "string": [
                        [
                            "Socketed Skills apply Fire, Cold and Lightning Exposure on Hit"
                        ],
                        [
                            "{0}% to all Elemental Resistances"
                        ]
                    ],
                    "format": [
                        [
                            [
                                "ignore"
                            ]
                        ],
                        [
                            [
                                "+#"
                            ]
                        ]
                    ]
                }
            ]
        }
    ]
}
