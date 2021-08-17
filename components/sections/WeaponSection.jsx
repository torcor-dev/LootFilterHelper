import Section from "./Section"
import ToggleButton from "../ToggleButton"
import ButtonRow from "../ButtonRow"
import InputField from "../InputField"
import ExceptionContainer from "../ExceptionContainer"
import TierColumn from "../TierColumn"
import {useEffect, useState} from "react"
import { buttonChoices } from "../ToggleButton"
import { cycleThroughChoicesByValue } from "../../utils/buttonUtils"
import { filterAPIPut } from "../../utils/apiHelpers"

const tiers = ["T1", "T2", "T3", "T4+"]
const dmgTypeChoices = {
  DISABLED: buttonChoices.DISABLED,
  SELECTED: buttonChoices.BASE_SELECTED,
}

function WeaponSection({
  filter,
  data, 
  filterId, 
  weaponBaseTypes, 
}) {
  const {selectionName, details, baseTypes, atlasBaseTypes} = data
  const [defaultIlvl, setDefaultIlvl] = useState(filter[selectionName].itemlevel)
  const [meleeEleDmg, setMeleeEleDmg] = useState(filter[selectionName].melee.elemental)
  const [meleePhysDmg, setMeleePhysDmg] = useState(filter[selectionName].melee.physical)
  const [rangedEleDmg, setRangedEleDmg] = useState(filter[selectionName].ranged.elemental)
  const [rangedPhysDmg, setRangedPhysDmg] = useState(filter[selectionName].ranged.physical)
  const [meleeDetails, rangedDetails, casterDetails] = details

  const buttonHelper = {
    meleeEleDmg: {
      value: meleeEleDmg,
      setter: setMeleeEleDmg,
      dbField: `${selectionName}.melee.elemental`,
    },
    meleePhysDmg: {
      value: meleePhysDmg,
      setter: setMeleePhysDmg,
      dbField: `${selectionName}.melee.physical`,
    },
    rangedEleDmg: {
      value: rangedEleDmg,
      setter: setRangedEleDmg,
      dbField: `${selectionName}.ranged.elemental`,
    },
    rangedPhysDmg: {
      value: rangedPhysDmg,
      setter: setRangedPhysDmg,
      dbField: `${selectionName}.ranged.physical`,
    },
  }

  function handleClick(helper) {
    const nextChoice = cycleThroughChoicesByValue(helper.value, dmgTypeChoices)
    helper.setter(nextChoice)
    filterAPIPut(helper.dbField, nextChoice, filterId)
  }

  function handleMEDClick() {
    handleClick(buttonHelper.meleeEleDmg)
  }

  function handleMPDClick() {
    handleClick(buttonHelper.meleePhysDmg)
  }

  function handleREDClick() {
    handleClick(buttonHelper.rangedEleDmg)
  }

  function handleRPDClick() {
    handleClick(buttonHelper.rangedPhysDmg)
  }

  return (
    <Section name="Weapons">
      <div>
        <h3>Melee attack weapons</h3>
        <ButtonRow 
          details={meleeDetails.melee}
          type="melee"
          selection={selectionName}
          filter={filter}
          filterId={filterId}
          maxButtons={3}
        />
        <div className="w-screen max-w-full flex items-end flex-row mt-2 mb-2 p-2 gap-1 box-shadow">
          <div className="ml-auto">
            <ToggleButton 
              name={"Physical"}
              title={"Include physical damage bases"}
              currentChoice={meleePhysDmg}
              choices={dmgTypeChoices}
              type={"bases"}
              onClick={handleMPDClick}
              styleOverrides="p-0 h-1"
            />
          </div>
          <div className="mr-auto">
            <ToggleButton 
              name={"Elemental"}
              title={"Include elemental damage bases"}
              currentChoice={meleeEleDmg}
              choices={dmgTypeChoices}
              type={"bases"}
              onClick={handleMEDClick}
              styleOverrides="p-0 h-1"
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Ranged attack weapons</h3>
        <ButtonRow 
          details={rangedDetails.ranged}
          type="ranged"
          selection={selectionName}
          filter={filter}
          filterId={filterId}
          maxButtons={3}
        />
        <div className="w-screen max-w-full flex items-end flex-row mt-2 p-2 mb-2 gap-1 box-shadow">
          <div className="ml-auto">
            <ToggleButton 
              name={"Physical"}
              title={"Include physical damage bases"}
              currentChoice={rangedPhysDmg}
              choices={dmgTypeChoices}
              type={"bases"}
              onClick={handleRPDClick}
              styleOverrides="p-0 h-1"
            />
          </div>
          <div className="mr-auto">
            <ToggleButton 
              name={"Elemental"}
              title={"Include elemental damage bases"}
              currentChoice={rangedEleDmg}
              choices={dmgTypeChoices}
              type={"bases"}
              onClick={handleREDClick}
              styleOverrides="p-0 h-1"
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Caster weapons</h3>
        <ButtonRow 
          details={casterDetails.caster}
          type="caster"
          selection={selectionName}
          filter={filter}
          filterId={filterId}
        />
        <div className="w-screen max-w-full flex justify-center items-end flex-row p-2 gap-1 box-shadow">
          <div className="w-1/2">
            <TierColumn 
              name={"tiers"}
              heading={"Caster weapon tiers"}
              fields={["caster", "tiers"]}
              tiers={tiers}
              selection={selectionName}
              filter={filter}
              filterId={filterId}
              direction="row"
              buttonSize="small"
            />
          </div>
        </div>
      </div>
      <div className="w-screen max-w-full flex items-end flex-row mt-4 mb-2 p-2 gap-1 box-shadow">
        <InputField 
          defaultValue={defaultIlvl}
          label="ilvl:" 
          field={`${selectionName}.itemlevel`}
          filterId={filterId}
          type="number"
          title="The minimum item level for the items to appear."
          className="input w-6"
          labelClassName="label"
          setExternalState={setDefaultIlvl} 
          max={100}
          min={1}
        />
      </div>
      <div className="w-screen max-w-full flex flex-col mt-4 gap-1">
        <ExceptionContainer
          suggestionData={weaponBaseTypes}
          atlasBaseTypes={atlasBaseTypes}
          defaultIlvl={defaultIlvl}
          section="weapon"
          selection={selectionName}
          filter={filter}
          filterId={filterId}
        />
      </div>
    </Section>
  )
}


export default WeaponSection
