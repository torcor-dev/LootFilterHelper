import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices } from "../utils/buttonUtils";
import PropTypes from 'prop-types'
import {useState} from "react";
import { filterAPIPut } from "../utils/apiHelpers";

const rowChoices = {
  DISABLED: buttonChoices.DISABLED,
  SELECTED: buttonChoices.BASE_SELECTED,
}

function ButtonRow({ details, type, selection, filter,  filterId }) {
  const [toggleState, setToggleState] = useState(filter[selection][type])

  function handleClick(name) {
    const stateCopy = {...toggleState}
    stateCopy[name] = cycleThroughChoices(stateCopy, name, rowChoices)
    setToggleState(stateCopy)
    const key = `${selection}.${type}`
    filterAPIPut(key, stateCopy, filterId)
  }

  function renderButtons() {
    return Object.keys(toggleState).map(base => {
      const [curBase] = details.filter(d => d.name === base)
      return (
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
      )
    })
  }

  return (
    <div className="w-screen flex justify-center items-center gap-1">
      {renderButtons()}
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
