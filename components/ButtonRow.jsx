import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices } from "./sections/ArmorSection";
import PropTypes from 'prop-types'
import {useState} from "react";
import { filterAPIPut } from "../utils/apiHelpers";

const rowChoices = {
  DISABLED: buttonChoices.DISABLED,
  SELECTED: buttonChoices.BASE_SELECTED,
}

function ButtonRow({ details, type, selection, selectionDoc, filterId }) {
  const initMap = new Map()
  details.forEach((_, key) => {
    initMap.set(key, selection[key])
  })

  const [toggleState, setToggleState] = useState(initMap)

  function handleClick(name) {
    const mapCopy = new Map(toggleState)
    mapCopy.set(name, cycleThroughChoices(mapCopy, name, rowChoices))
    setToggleState(mapCopy)
    const updateDoc = `${selectionDoc}.${type}`
    filterAPIPut(filterId, updateDoc, Object.fromEntries(mapCopy))
  }

  function renderButtons() {
    const buttons = []
    toggleState.forEach((value, key) => {
      buttons.push(
        <ToggleButton 
          name={key} 
          fullName={details.get(key).fullName}
          currentChoice={value}
          choices={rowChoices}
          type={type}
          icon={details.get(key).icon}
          key={`${key}_button`}
          onClick={handleClick}
        />
      )
    })
    return buttons
  }

  return (
    <div className="w-screen flex justify-center items-center gap-1">
      {renderButtons()}
    </div>
  )
}

ButtonRow.propTypes = {
  details: PropTypes.instanceOf(Map),
  type: PropTypes.string,
  selection: PropTypes.object,
  selectionDoc: PropTypes.string,
  filterId: PropTypes.string,
}

export default ButtonRow
