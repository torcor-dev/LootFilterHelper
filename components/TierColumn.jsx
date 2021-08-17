import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices, cycleThroughChoicesByValue } from "../utils/buttonUtils";
import PropTypes from 'prop-types'
import {useState} from "react";
import {synchCol} from '../utils/columnUtils'
import {filterAPIPut} from "../utils/apiHelpers";

const tierOneChoices = {
  DISABLED: 0,
  RARE: 1,
  WHITE: 2,
}

const tierChoices = {
  DISABLED: 0,
  RARE: 1,
}

function TierColumn({ 
  name, 
  heading, 
  tiers, 
  selection, 
  filter, 
  filterId, 
  fields, 
  direction="col", 
  buttonSize=null,
}) {
  let filterSelection = filter[selection][name]
  if (fields) {
    filterSelection = filter[selection]
    fields.forEach(field => filterSelection = filterSelection[field])
  }
  const [columnValues, setColumnValues] = useState(filterSelection)

  let buttonStyleOverride = ""
  if (buttonSize === "small") {
    buttonStyleOverride = "h-0 w-0 text-xs p-0 m-0"
  }

  function handleClick(tier, choices) {
    const changedIdx = tiers.findIndex(i => i === tier)
    const prev = columnValues.slice()
    columnValues[changedIdx] = cycleThroughChoicesByValue(columnValues[changedIdx], choices)
    const newColumn = synchCol(columnValues, prev)
    setColumnValues(newColumn)

    let key = `${selection}.${name}`
    if (fields) {
      key = `${selection}`
      fields.forEach(field => key += `.${field}`)
    }
    filterAPIPut(key, newColumn, filterId)
  }

  function renderButtons() {
    return tiers.map((tier, index) => {
      return (
        <ToggleButton 
          name={tier}
          fullName={tier}
          column={name}
          currentChoice={columnValues[index]}
          choices={index === 0 ? tierOneChoices : tierChoices}
          type={"tier"}
          key={`${tier} ${name}`}
          onClick={handleClick}
          styleOverrides={buttonStyleOverride}
        />
      )
    })
  }

  if (direction === "row") {
    return (
      <div id={`${name}_column`} className="w-full flex flex-col justify-center items-center gap-1">
        <h4 className="text-center">{heading}</h4>
        <div className="flex gap-1 flex-row">
          {renderButtons()}
        </div>
      </div>
    )
  }
  return (
    <div id={`${name}_column`} className="w-full flex flex-col gap-1">
      <h3 className="text-center text-lg font-bold">{heading}</h3>
      {renderButtons()}
    </div>

  )
}

TierColumn.propTypes = {
  name: PropTypes.string,
  heading: PropTypes.string,
  tiers: PropTypes.array,
  selection: PropTypes.string,
  filter: PropTypes.object,
  filterId: PropTypes.string,
}

export default TierColumn
