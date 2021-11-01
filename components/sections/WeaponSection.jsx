import Section from "./Section"
import ToggleButton from "../ToggleButton"
import ButtonRow from "../ButtonRow"
import InputField from "../InputField"
import ExceptionContainer from "../ExceptionContainer"
import TierColumn from "../TierColumn"
import TabContainer from "../TabContainer"
import Tab from "../Tab"
import {useEffect, useReducer, useState} from "react"
import { buttonChoices } from "../ToggleButton"
import { cycleThroughChoicesByValue } from "../../utils/buttonUtils"
import { filterAPIPut } from "../../utils/apiHelpers"

const tiers = ["T1", "T2", "T3", "T4+"]
const dmgTypeChoices = {
  DISABLED: buttonChoices.DISABLED,
  SELECTED: buttonChoices.BASE_SELECTED,
}

const actions = {
  SET_ELEMENTAL: "SET_ELEMENTAL",
  SET_PHYSICAL:  "SET_PHYSICAL",
}

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_ELEMENTAL:
      return {...state, elemental: action.payload}
    case actions.SET_PHYSICAL:
      return {...state, physical: action.payload}
    default:
      return {...state}
  }
}  

function WeaponSection({
  filter,
  data, 
  filterId, 
  weaponBaseTypes, 
}) {
  const {selectionName, details, baseTypes, atlasBaseTypes} = data
  const [defaultIlvl, setDefaultIlvl] = useState(filter[selectionName].itemlevel)
  const [meleeOptions, meleeDispatch] = useReducer(reducer, {
    elemental: filter[selectionName].melee.options.elemental,
    physical: filter[selectionName].melee.options.physical,
  })
  const [rangedOptions, rangedDispatch] = useReducer(reducer, {
    elemental: filter[selectionName].ranged.options.elemental,
    physical: filter[selectionName].ranged.options.physical,
  })

  const [meleeDetails, rangedDetails, casterDetails] = details

  function handleMEDClick() {
    const nextChoice = cycleThroughChoicesByValue(
      meleeOptions.elemental, 
      dmgTypeChoices
    )
    meleeDispatch({
      type: actions.SET_ELEMENTAL, 
      payload: nextChoice
    })
    filterAPIPut(
      `${selectionName}.melee.options.elemental`, 
      nextChoice, 
      filterId
    )
  }

  function handleMPDClick() {
    const nextChoice = cycleThroughChoicesByValue(
      meleeOptions.physical, 
      dmgTypeChoices
    )
    meleeDispatch({
      type: actions.SET_PHYSICAL, 
      payload: nextChoice
    })
    filterAPIPut(
      `${selectionName}.melee.options.physical`, 
      nextChoice, 
      filterId
    )
  }

  function handleREDClick() {
    const nextChoice = cycleThroughChoicesByValue(
      rangedOptions.elemental, 
      dmgTypeChoices
    )
    rangedDispatch({
      type: actions.SET_ELEMENTAL, 
      payload: nextChoice
    })
    filterAPIPut(
      `${selectionName}.ranged.options.elemental`, 
      nextChoice, 
      filterId
    )
  }

  function handleRPDClick() {
    const nextChoice = cycleThroughChoicesByValue(
      rangedOptions.physical, 
      dmgTypeChoices
    )
    rangedDispatch({
      type: actions.SET_PHYSICAL, 
      payload: nextChoice
    })
    filterAPIPut(
      `${selectionName}.ranged.options.physical`, 
      nextChoice, 
      filterId
    )
  }

  return (
    <Section name="Weapon Bases">
      <TabContainer>
        <Tab title={baseTypes.melee.heading} active={true} key="meleeTab">
          <ButtonRow 
            details={meleeDetails.melee}
            type="melee"
            selection={selectionName}
            filter={filter}
            filterId={filterId}
            maxButtons={3}
            fields={["melee", "bases"]}
          />
          <div className="w-screen max-w-full flex items-end flex-row mt-2 mb-2 p-2 gap-1 ">
            <div className="ml-auto">
              <ToggleButton 
                name={"Physical"}
                title={"Include physical damage bases"}
                currentChoice={meleeOptions.physical}
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
                currentChoice={meleeOptions.elemental}
                choices={dmgTypeChoices}
                type={"bases"}
                onClick={handleMEDClick}
                styleOverrides="p-0 h-1"
              />
            </div>
          </div>
        </Tab>
        <Tab title={baseTypes.ranged.heading} active={false} key="rangedTab">
          <ButtonRow 
            details={rangedDetails.ranged}
            type="ranged"
            selection={selectionName}
            filter={filter}
            filterId={filterId}
            maxButtons={3}
            fields={["ranged", "bases"]}
          />
          <div className="w-screen max-w-full flex items-end flex-row mt-2 p-2 mb-2 gap-1 ">
            <div className="ml-auto">
              <ToggleButton 
                name={"Physical"}
                title={"Include physical damage bases"}
                currentChoice={rangedOptions.physical}
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
                currentChoice={rangedOptions.elemental}
                choices={dmgTypeChoices}
                type={"bases"}
                onClick={handleREDClick}
                styleOverrides="p-0 h-1"
              />
            </div>
          </div>
        </Tab>
        <Tab title={baseTypes.caster.heading} active={false} key="casterTab">
          <ButtonRow 
            details={casterDetails.caster}
            type="caster"
            selection={selectionName}
            filter={filter}
            filterId={filterId}
            fields={["caster", "bases"]}
          />
          <div className="w-screen max-w-full flex justify-center items-end flex-row p-2 gap-1 ">
            <div className="w-1/2">
              <TierColumn 
                name={"tiers"}
                heading={"Caster weapon tiers"}
                fields={["caster", "options", "tiers"]}
                tiers={tiers}
                selection={selectionName}
                filter={filter}
                filterId={filterId}
                direction="row"
                buttonSize="small"
              />
            </div>
          </div>
        </Tab>
      </TabContainer>
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
