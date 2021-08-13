import ButtonRow from "../ButtonRow";
import Section from "./Section";
import TierColumn from "../TierColumn";
import ExceptionContainer from "../ExceptionContainer";
import InputField from "../InputField";
import { useState } from "react";

const tiers = ["T1", "T2", "T3", "T4+"]

export default function ArmorSection({ filter, data, filterId, armourBaseTypes }) {
  const {selectionName, details, baseTypes} = data
  const [defaultIlvl, setDefaultIlvl] = useState(filter[selectionName].itemlevel)

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
      <div className="w-screen max-w-full flex mt-4 gap-1">
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
          suggestionData={armourBaseTypes}
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

