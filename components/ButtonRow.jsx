import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices } from "./sections/ArmorSection";
import PropTypes from 'prop-types'
import {useState} from "react";

function ButtonRow({ details }) {
  const initMap = new Map()
  details.forEach((_, key) => {
    initMap.set(key, buttonChoices.DISABLED)
  })

  const [toggleState, setToggleState] = useState(initMap)

  function handleClick(name) {
    const mapCopy = new Map(toggleState)
    mapCopy.set(name, cycleThroughChoices(mapCopy, name, buttonChoices))
    setToggleState(mapCopy)
  }

  function renderButtons() {
    const buttons = []
    toggleState.forEach((value, key) => {
      buttons.push(
        <ToggleButton 
          name={key} 
          fullName={details.get(key).fullName}
          currentChoice={value}
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
}

export default ButtonRow
