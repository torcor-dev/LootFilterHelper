show collections

db.filter.find({_id: "60ef31822fdf039ff1a60ce9"}, { "armourSelection.armour": 1 }).sort({_id: -1})

db.filter.aggregate([
  { $match: {name: "Default"} },
  { $sort: {_id: -1} }
])


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
