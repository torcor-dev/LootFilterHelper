import ToggleButton, {buttonChoices} from "./ToggleButton";
import { cycleThroughChoices } from "./sections/ArmorSection";
import PropTypes from 'prop-types'
import {useMemo, useState} from "react";
import { filterAPIPut } from "../utils/apiHelpers";
import { useFilterContex } from "../utils/filterState";

const rowChoices = {
  DISABLED: buttonChoices.DISABLED,
  SELECTED: buttonChoices.BASE_SELECTED,
}

function ButtonRow({ details, type, section}) {
  const { id, setId, filter, setFilter, updateFilter } = useFilterContex()
  const bases = filter[section][type]

  console.log("Rerender", type)

  function handleClick(name) {
    const updateDoc = section + "." + type
    bases[name] = cycleThroughChoices(bases, name, rowChoices)
    filterAPIPut(id, updateDoc, bases, filter, setFilter, setId)
    filter[section][type] = bases

    updateFilter({keys: [section, type], value: bases})
  }

  function renderButtons() {
    return Object.keys(filter[section][type]).map( (key) => {
      return (
        <ToggleButton 
          name={key} 
          fullName={details.get(key).fullName}
          currentChoice={filter[section][type][key]}
          choices={rowChoices}
          type={type}
          icon={details.get(key).icon}
          key={`${key}_button`}
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
  details: PropTypes.instanceOf(Map),
  type: PropTypes.string,
  section: PropTypes.string,
}

export default ButtonRow
