import {useEffect, useState} from 'react'
import buttonStyles from '../styles/components/ToggleButton.module.css' 
import Icon from './Icon'

/*MOVE ME!*/
export const buttonChoices = {
  DISABLED: 0,
  RARE: 1,
  WHITE: 2,
}


export default function ToggleButton({ name, fullName, currentChoice, icon, onClick, choices }) {
  if (!fullName) {
    fullName = name
  }

  function buttonStyling(chosenTier) {
    let style = buttonStyles.button
    switch (chosenTier) {
      case buttonChoices.WHITE:
        style += " " + buttonStyles.buttonWhite
        break;
      case buttonChoices.RARE:
        style += " " + buttonStyles.buttonRare
        break;
      case buttonChoices.DISABLED:
        style += " " + buttonStyles.buttonDisabled
        break;
    }
    return style
  }

  function handleClick() {
    onClick(name, choices)
  }

  return (
    <button 
      className={buttonStyling(currentChoice)} 
      title={fullName}
      onClick={handleClick}
    >
      {icon ? <Icon type={icon} /> : fullName}
    </button>
  )
}
