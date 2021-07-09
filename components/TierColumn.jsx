import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices, cycleThroughChoicesByValue } from "./sections/ArmorSection";
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

function TierColumn({ name, heading, tiers, selection, selectionDoc, filterId }) {
  const [columnValues, setColumnValues] = useState(selection)

  function handleClick(tier, choices) {
    const changedIdx = tiers.findIndex(i => i === tier)
    const prev = columnValues.slice()
    columnValues[changedIdx] = cycleThroughChoicesByValue(columnValues[changedIdx], choices)
    const newColumn = synchCol(columnValues, prev)
    setColumnValues(newColumn)

    const updateDoc = `${selectionDoc}.${name}`
    filterAPIPut(filterId, updateDoc, newColumn)

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
        />
      )
    })
  }

  return (
    <div id={`${name}_column`} className="w-full flex flex-col gap-1">
      <h2 className="text-center text-lg font-bold">{heading}</h2>
      {renderButtons()}
    </div>

  )
}

TierColumn.propTypes = {
  name: PropTypes.string,
  heading: PropTypes.string,
  tiers: PropTypes.array,
  selection: PropTypes.array,
  selectionDoc: PropTypes.string,
  filterId: PropTypes.string,
}

export default TierColumn
