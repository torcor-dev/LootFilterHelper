import ButtonRow from "../ButtonRow";
import Section from "./Section";
import TierColumn from "../TierColumn";
import ExceptionContainer from "../ExceptionContainer";
import InputField from "../InputField";
import ToggleButton, {buttonChoices} from "../ToggleButton";
import { useState } from "react";
import { cycleThroughChoicesByValue } from "../../utils/buttonUtils";
import { filterAPIPut } from "../../utils/apiHelpers";

const tiers = ["T1", "T2", "T3", "T4+"]
const hybridChoices = {
  DISABLED: buttonChoices.DISABLED,
  SELECTED: buttonChoices.BASE_SELECTED,
}

export default function ArmorSection({ filter, data, filterId, armourBaseTypes }) {
  const {selectionName, details, baseTypes, atlasBaseTypes} = data
  const [defaultIlvl, setDefaultIlvl] = useState(filter[selectionName].itemlevel)
  const [hybrids, setHybrids] = useState(filter[selectionName].hybrids)

  function handleClick() {
    const nextChoice = cycleThroughChoicesByValue(hybrids, hybridChoices)
    setHybrids(nextChoice)
    filterAPIPut(`${selectionName}.hybrids`, nextChoice, filterId)
  }

  function renderTierColumns() {
    return Object.keys(baseTypes).map((key) => {
      return (
        <TierColumn 
          key={key}
          name={key}
          heading={baseTypes[key].heading}
          tiers={tiers}
          selection={selectionName}
          filter={filter}
          filterId={filterId}
        />
      )
    }) 
  }

  console.log(details)

  return (
    <Section name="Armour Bases">
      <ButtonRow 
        details={details}
        type="bases"
        selection={selectionName}
        filter={filter}
        filterId={filterId}
      />
      <div className="w-screen max-w-full flex mt-4 gap-1">
        {renderTierColumns()}
      </div>
      <div className="w-screen max-w-full flex items-end flex-row mt-2 mb-2 p-2 gap-1 box-shadow">
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
        <div className="ml-auto w-30">
          <ToggleButton 
            name={"Hybrids"}
            title={"Include hybrid armour bases?"}
            currentChoice={hybrids}
            choices={hybridChoices}
            type={"bases"}
            onClick={handleClick}
            styleOverrides="p-0 h-1"
          />
        </div>
      </div>
      <div className="w-screen max-w-full flex flex-col mt-4 gap-1">
        <ExceptionContainer
          suggestionData={armourBaseTypes}
          atlasBaseTypes={atlasBaseTypes}
          defaultIlvl={defaultIlvl}
          section="armour"
          selection={selectionName}
          filter={filter}
          filterId={filterId}
        />
      </div>
    </Section>
  )
}

