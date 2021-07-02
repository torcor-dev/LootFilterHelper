import Section from "./Section";
import ToggleButton, {buttonChoices} from "../ToggleButton";
import TierColumn from "../TierColumn";
import {useState} from "react";

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

const tiers = ["T1", "T2", "T3", "All"]
const tiersMap = new Map()
tiers.forEach(tier => tiersMap.set(tier, buttonChoices.DISABLED))

function cycleThroughChoices(stateObj, key, choiceObj) {
  let choice;
  if (stateObj instanceof Map) {
    choice = stateObj.get(key) + 1
  } else {
    choice = stateObj[key] + 1
  }
  return choice % Object.keys(choiceObj).length
}

export default function ArmorSection() {
  const [basesState, setBasesState] = useState({
    helmets: buttonChoices.DISABLED,
    boots: buttonChoices.DISABLED,
    gloves: buttonChoices.DISABLED,
    bodyArmour: buttonChoices.DISABLED,
    shields: buttonChoices.DISABLED,
  })

  const [columnStates, setColumnStates] = useState({
    armour: new Map(tiersMap),
    evasion: new Map(tiersMap),
    energyShield: new Map(tiersMap),
  })

  function handleBasesClick(base) {
    basesState[base] = cycleThroughChoices(basesState, base, buttonChoices)
    setBasesState(basesState)
    return basesState[base]
  }

  function handleColumnClick(col, tier) {
    columnStates[col].set(tier, cycleThroughChoices(columnStates[col], tier, buttonChoices))
    //syncronizeColumn(columnStates[col])
    setColumnStates(columnStates)
    //console.log(columnStates[col])
    return columnStates[col].get(tier)
  }

  function syncronizeColumn(colMap) {
  }

  function renderBasesButtons() {
    return Object.keys(basesState).map((key) => {
      return (
        <ToggleButton 
          name={key} 
          icon={key}
          initialTier={basesState[key]}
          onClick={() => handleBasesClick(key)} 
          key={`${key}_button`}
        />
      )
    })
  }

  function renderTierButtons() {
    return (
      Object.keys(columnStates).map((column) => {
        const buttons = []
        columnStates[column].forEach((value, tier) => {
          buttons.push(
            <ToggleButton 
            name={tier}
            initialTier={value}
            styles="text-xl font-bold" 
            onClick={() => handleColumnClick(column, tier)}
            key={`${tier} ${column}`}
            />
          )
        })
        return (
          <div key={column} className="w-full">
            <h2 className="text-center text-lg font-bold">{baseTypes[column].heading}</h2>
          {buttons}
        </div> 
        )
      })
    )
  }

  return (
    <Section name="Armor Bases">
      <div className="w-screen flex justify-center items-center gap-1">
        {renderBasesButtons()}
      </div>
      <div className="w-screen flex mt-4 gap-1">
        {renderTierButtons()}
      </div>
    </Section>
  )
}

