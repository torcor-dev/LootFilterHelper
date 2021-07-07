import PropTypes from 'prop-types'
import buttonStyles from '../styles/components/ToggleButton.module.css' 
import Icon from './Icon'

/*MOVE ME!*/
export const buttonChoices = {
  DISABLED: 0,
  RARE: 1,
  WHITE: 2,
  BASE_SELECTED: 1
}

function tierStyling(choice) {
    let style = buttonStyles.button
    switch (choice) {
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

function basesStyling(choice) {
    let style = buttonStyles.button
    switch (choice) {
      case buttonChoices.BASE_SELECTED:
        style += " " + buttonStyles.buttonBaseSelected
        break;
      case buttonChoices.DISABLED:
        style += " " + buttonStyles.buttonDisabled
        break;
    }
    return style
}


function ToggleButton({ 
  name, 
  fullName, 
  currentChoice, 
  icon, 
  onClick, 
  choices,
  type,
}) {
  if (!fullName) {
    fullName = name
  }

  function buttonStyling(choice) {
    switch (type) {
        case "tier": return tierStyling(choice)
        case "bases": return basesStyling(choice)
    }
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

ToggleButton.propTypes = {
  name: PropTypes.string,
  fullName: PropTypes.string, 
  currentChoice: PropTypes.number, 
  icon: PropTypes.string,
  onClick: PropTypes.func, 
  choices: PropTypes.object,
  type: PropTypes.string,
}

export default ToggleButton
