var defaultArmourSelection = {
    "armourSelection": {
        "bases": {
            "helmets": 1,
            "gloves": 1,
            "boots": 0,
            "bodyArmour": 0,
            "shields": 0
        },
        "armour": [
            1,
            1,
            0,
            0
        ],
        "evasion": [
            1,
            0,
            0,
            0
        ],
        "energyShield": [
            1,
            0,
            0,
            0
        ],
        "hybrids": 1,
        "itemlevel": 68,
        "exceptionSelection": [
            {
                "name": "Two-Toned Boots",
                "itemId": "6110f8ea90861eac085354be",
                "rarity": 1,
                "itemlevel": 1
            },
            {
                "name": "Spiked Gloves",
                "itemId": "6110f8ea90861eac08535506",
                "rarity": 1,
                "itemlevel": 1
            },
            {
                "name": "Gripped Gloves",
                "itemId": "6110f8ea90861eac08535504",
                "rarity": 1,
                "itemlevel": 1
            },
            {
                "name": "Fugitive Boots",
                "itemId": "6110f8ea90861eac085354c1",
                "rarity": 1,
                "itemlevel": 1
            },
            {
                "name": "Bone Helmet",
                "itemId": "6110f8ea90861eac08535547",
                "rarity": 1,
                "itemlevel": 1
            },
            {
                "name": "Fingerless Silk Gloves",
                "itemId": "6110f8ea90861eac08535505",
                "rarity": 1,
                "itemlevel": 1
            },
            {
                "name": "Apothecary's Gloves",
                "itemId": "6110f8ea90861eac08535507",
                "rarity": 1,
                "itemlevel": 1
            },
            {
                "name": "Hussar Brigandine",
                "itemId": "6110f8ea90861eac085354a9",
                "rarity": 1,
                "itemlevel": 1
            }
        ]
    }
}

var defaultWeaponSelection = {
    "weaponSelection": {
        "melee": {
            bases: {
                "twoHandAxe": 1,
                "twoHandSword": 1,
                "twoHandMace": 0,
                "oneHandAxe": 1,
                "oneHandSword": 1,
                "oneHandMace": 0,
                "warstaff": 0,
                "dagger": 0,
                "claw": 0,
            },
            options: {
                "elemental": 0,
                "physical": 0
            },
        },
        "ranged": {
            bases: {
                "bow": 1,
                "quiver": 1,
                "wand": 0,
            },
            options: {
                "elemental": 0,
                "physical": 0
            },
        },
        "caster": {
            bases: {
                "wand": 1,
                "scepter": 1,
                "staff": 0,
                "runeDagger": 0,
            },
            options: {
                "tiers": [1, 0, 0, 0] 
            },
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

db.filter.updateOne(
    {name: "F1"},
    {$set: defaultWeaponSelection },
    {$set: defaultArmourSelection },
)


db.filter.updateMany(
    {},
    {$set: defaultWeaponSelection },
    {$set: defaultArmourSelection },
)

db.filter.updateOne(
    {_id: ObjectId("60e81740b565781aa4fdfd80")},
    {$set: defaultWeaponSelection },
    {$set: defaultArmourSelection },
)


