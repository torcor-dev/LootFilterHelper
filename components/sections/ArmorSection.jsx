import ButtonRow from "../ButtonRow";
import Section from "./Section";
import TierColumn from "../TierColumn";

const tiers = ["T1", "T2", "T3", "T4+"]

export default function ArmorSection({ filter, data, filterFuncs }) {
  const {selectionName, details, baseTypes} = data

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
          filterFuncs={filterFuncs}
        />
      )
    }) 
  }

  return (
    <Section name="Armour Bases">
      <ButtonRow 
        details={details}
        type={"bases"}
        selection={selectionName}
        filter={filter}
        filterFuncs={filterFuncs}
      />
      <div className="w-screen flex mt-4 gap-1">
        {renderTierColumns()}
      </div>
    </Section>
  )
}

