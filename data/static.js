db.static.updateOne(
    {"name": "armourDetails"},
    {$set: {
        "selectionName": "armourSelection",
        "details": [
            {
                "name": "helmets",
                "fullName": "Helmets",
                "icon": "helmet"
            },
            {
                "name": "gloves",
                "fullName": "Gloves",
                "icon": "glove"
            },
            {
                "name": "boots",
                "fullName": "Boots",
                "icon": "boot"
            },
            {
                "name": "bodyArmour",
                "fullName": "Body Armour",
                "icon": "bodyArmour"
            },
            {
                "name": "shields",
                "fullName": "Shields",
                "icon": "shield"
            }
        ],
        "baseTypes": {
            "armour": {
                "name": "Armour",
                "heading": "AR"
            },
            "evasion": {
                "name": "Evasion",
                "heading": "EVA"
            },
            "energyShield": {
                "name": "Energy Shield",
                "heading": "ES"
            }
        },
        "atlasBaseTypes": [
            "Bone Helmet",
            "Two-Toned Boots",
            "Spiked Gloves",
            "Gripped Gloves",
            "Fugitive Boots",
            "Fingerless Silk Gloves",
            "Apothecary's Gloves"
        ]
    }}
)

db.static.updateOne(
    {"name": "weaponDetails"},
    {$set: {
        "selectionName": "weaponSelection",
        "details": [
            {
                "melee": [
                    {
                        "name": "twoHandAxe",
                        "fullName": "Two-Hand Axes",
                        "icon": "twoHandAxe"
                    },
                    {
                        "name": "twoHandSword",
                        "fullName": "Two-Hand Swords",
                        "icon": "twoHandSword"
                    },
                    {
                        "name": "twoHandMace",
                        "fullName": "Two-Hand Maces",
                        "icon": "twoHandMace"
                    },
                    {
                        "name": "oneHandAxe",
                        "fullName": "One-Hand Axes",
                        "icon": "oneHandAxe"
                    },
                    {
                        "name": "oneHandSword",
                        "fullName": "One-Hand Swords",
                        "icon": "oneHandSword"
                    },
                    {
                        "name": "oneHandMace",
                        "fullName": "One-Hand Maces",
                        "icon": "oneHandMace"
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
                        "icon": "staff"
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
    }}
)
