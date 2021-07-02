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
    basesState[base] = (basesState[base] + 1) % Object.keys(buttonChoices).length
    setBasesState(basesState)
    return basesState[base]
  }

  function handleColumnClick(col, tier) {
    columnStates[col].set(tier, (columnStates[col].get(tier) + 1) % Object.keys(buttonChoices).length)
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
      Object.keys(baseTypes).map((key) => {
        const buttons = tiers.map((tier) => {
          return (
            <ToggleButton 
              name={tier}
              initialTier={2}
              styles="text-xl font-bold" 
              onClick={() => handleColumnClick(key, tier)}
              key={`${tier} ${key}`}
            />
          )
        })
        return ( 
        <div key={key} className="w-full">
          <h2 className="text-center text-lg font-bold">{baseTypes[key].heading}</h2>
          {buttons}
        </div> )
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

