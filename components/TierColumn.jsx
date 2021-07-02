import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices } from "./sections/ArmorSection";
import PropTypes from 'prop-types'
import {useState} from "react";

function TierColumn({ name, heading, tiers }) {
  const tiersMap = new Map()
  tiers.forEach(tier => tiersMap.set(tier, buttonChoices.DISABLED))
  const [toggleState, setToggleState] = useState(tiersMap)

  function handleClick(tier) {
    const mapCopy = new Map(toggleState)
    mapCopy.set(tier, cycleThroughChoices(mapCopy, tier, buttonChoices))
    setToggleState(mapCopy)
  }

  function renderButtons() {
    const buttons = []
    toggleState.forEach((value, key) => {
      buttons.push(
        <ToggleButton 
          name={key}
          fullName={key}
          column={name}
          currentChoice={value}
          key={`${key} ${name}`}
          onClick={handleClick}
        />
      )
    })
    return buttons
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
