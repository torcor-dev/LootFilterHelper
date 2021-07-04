import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices, cycleThroughChoicesByValue } from "./sections/ArmorSection";
import PropTypes from 'prop-types'
import {useState} from "react";
import {synchCol} from '../utils'

function TierColumn({ name, heading, tiers }) {
  const [columnValues, setColumnValues] = useState(Array(tiers.length).fill(buttonChoices.DISABLED))
  //const [prevColumnValues, setPrevColumnValues] = useState(Array(tiers.length).fill(buttonChoices.DISABLED))

  function handleClick(tier) {
    const changedIdx = tiers.findIndex(i => i === tier)
    //console.log("Setting prev values:", columnValues)
    const prev = columnValues.slice()
    //setPrevColumnValues(prev)
    columnValues[changedIdx] = cycleThroughChoicesByValue(columnValues[changedIdx], buttonChoices)
    const newColumn = synchCol(columnValues, prev)
    setColumnValues(newColumn)
    //console.log("pre",prevColumnValues)
    //console.log("new",newColumn)
  }

  function renderButtons() {
    return tiers.map((tier, index) => {
      return (
        <ToggleButton 
          name={tier}
          fullName={tier}
          column={name}
          currentChoice={columnValues[index]}
          key={`${tier} ${name}`}
          onClick={handleClick}
        />
      )
    })
  }

  return (
    <div id={`${name}_column`} className="w-full">
      <h2 className="text-center text-lg font-bold">{heading}</h2>
      {renderButtons()}
    </div>

  )
}

TierColumn.propTypes = {
  name: PropTypes.string,
  heading: PropTypes.string,
  tiers: PropTypes.array
}

export default TierColumn
