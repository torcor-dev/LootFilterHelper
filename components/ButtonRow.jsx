import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices } from "../utils/buttonUtils";
import PropTypes from 'prop-types'
import {useEffect, useState} from "react";
import { filterAPIPut } from "../utils/apiHelpers";
import {useWindowSize} from "../utils/useWindowSize"

const rowChoices = {
  DISABLED: buttonChoices.DISABLED,
  SELECTED: buttonChoices.BASE_SELECTED,
}

function ButtonRow({ 
  details, 
  type, 
  selection, 
  filter,  
  filterId,
  maxButtons=10,
}) {
  const [toggleState, setToggleState] = useState(filter[selection][type])
  const windowSize = useWindowSize()

  function handleClick(name) {
    const stateCopy = {...toggleState}
    stateCopy[name] = cycleThroughChoices(stateCopy, name, rowChoices)
    setToggleState(stateCopy)
    const key = `${selection}.${type}`
    filterAPIPut(key, stateCopy, filterId)
  }

  function renderButtons() {
    return Object.keys(toggleState).flatMap(base => {
      const [curBase] = details.filter(d => d.name === base)
      if (curBase) {
        return [
          <ToggleButton 
            name={curBase.name} 
            fullName={curBase.fullName}
            currentChoice={toggleState[base]}
            choices={rowChoices}
            type={type}
            icon={curBase.icon}
            key={`${base}_button`}
            onClick={handleClick}
          />
        ]
      }
      return []
    })
  }
  const buttons = renderButtons()

  if (buttons.length > maxButtons) {
    const rowNumber = Math.ceil(buttons.length / maxButtons)
    const rowCapacity = Math.ceil(buttons.length / rowNumber)
    const rows = []

    let start = 0
    let end = rowCapacity
    for (let i = 0; i < rowNumber; i++) {
      rows.push(buttons.slice(start, end))
      start += rowCapacity
      end += rowCapacity
    }

    return (
      rows.map((row, idx) => {
          return (
            <div 
              key={`${type}_${row}_${idx}`} 
              className="w-screen max-w-full flex justify-center items-center pb-1 gap-1"
            >
              {row}
            </div>
          )
        })
    )
  }

  return (
    <div className="w-screen max-w-full flex justify-center items-center pb-1 gap-1">
      {buttons}
    </div>
  )
}

ButtonRow.propTypes = {
  details: PropTypes.array,
  type: PropTypes.string,
  selection: PropTypes.string,
  filter: PropTypes.object,
  filterId: PropTypes.string,

}

export default ButtonRow
