show collections

db.filter.find({name: "Default"}, { "armourSelection.armour": 1 }).sort({_id: -1})

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
