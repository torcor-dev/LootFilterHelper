import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices, cycleThroughChoicesByValue } from "./sections/ArmorSection";
import PropTypes from 'prop-types'
import {useState} from "react";
import {synchCol} from '../utils/columnUtils'
import {filterAPIPut} from "../utils/apiHelpers";
import {useFilterContex} from '../utils/filterState'

const tierOneChoices = {
  DISABLED: 0,
  RARE: 1,
  WHITE: 2,
}

const tierChoices = {
  DISABLED: 0,
  RARE: 1,
}

function TierColumn({ name, heading, tiers, section }) {
  const { id, setId, filter, setFilter } = useFilterContex()
  const arr = filter[section][name]

  console.log("Rerender", name)

  function handleClick(tier, choices) {
    const changedIdx = tiers.findIndex(i => i === tier)
    const prev = arr.slice()
    arr[changedIdx] = cycleThroughChoicesByValue(arr[changedIdx], choices)
    const newColumn = synchCol(arr, prev)
    filter[section][name] = newColumn
    const updateDoc = `${section}.${name}`

    filterAPIPut(id, updateDoc, newColumn, filter, setFilter, setId)
    setFilter(filter)
  }

  function renderButtons() {
    return tiers.map((tier, index) => {
      return (
        <ToggleButton 
          name={tier}
          fullName={tier}
          column={name}
          currentChoice={arr[index]}
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
  section: PropTypes.string,
  filterId: PropTypes.string,
}

export default TierColumn
