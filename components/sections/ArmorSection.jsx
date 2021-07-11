import ButtonRow from "../ButtonRow";
import Section from "./Section";
import ToggleButton, {buttonChoices} from "../ToggleButton";
import TierColumn from "../TierColumn";
import {useState, useEffect} from "react";
import buttonStyles from "../../styles/components/ToggleButton.module.css"

const baseTypes = {
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


export const armorDetails = new Map([
  ["helmets", {
      name: "helmets",
      fullName: "Helmets",
      icon: "helmets",
  }],
  ["gloves", {
      name: "gloves",
      fullName: "Gloves",
      icon: "gloves",
  }], 
  ["boots", {
      name: "boots",
      fullName: "Boots",
      icon: "boots",
  }],
  ["bodyArmour", {
      name: "bodyArmour",
      fullName: "Body Armour",
      icon: "bodyArmour",
  }],
  ["shields", {
      name: "shields",
      fullName: "Shields",
      icon: "shields"
   }],
])

const tiers = ["T1", "T2", "T3", "T4+"]

export function cycleThroughChoices(stateObj, key, choiceObj) {
  const choice = stateObj instanceof Map ? stateObj.get(key) + 1 : stateObj[key] + 1
  return choice % Object.keys(choiceObj).length
}

export function cycleThroughChoicesByValue(value, choiceObj) {
  return (value + 1) % Object.keys(choiceObj).length
}

export default function ArmorSection({ filter, updateFilter }) {
  const selectionDoc = "armourSelection"
  function renderTierColumns() {
    return Object.keys(baseTypes).map((key) => {
      return (
        <TierColumn 
          key={key}
          name={key}
          heading={baseTypes[key].heading}
          tiers={tiers}
          selection={filter.armourSelection[key]}
          selectionDoc={selectionDoc}
          filterId={filter["_id"]}
          filter={filter}
          setFilter={updateFilter}
        />
      )
    }) 
  }

  return (
    <Section name="Armour Bases">
      <ButtonRow 
        details={armorDetails}
        type={"bases"}
        selection={filter.armourSelection.bases}
        selectionDoc={selectionDoc}
        filterId={filter["_id"]}
        filter={filter}
        setFilter={updateFilter}
      />
      <div className="w-screen flex mt-4 gap-1">
        {renderTierColumns()}
      </div>
    </Section>
  )
}

