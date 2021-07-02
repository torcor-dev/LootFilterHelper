import {useState} from 'react'
import styles from '../styles/components/ToggleButton.module.css' 
import Icon from './Icon'

/*MOVE ME!*/
export const buttonChoices = {
  WHITE: 0,
  RARE: 1,
  DISABLED: 2,
}

/*MOVE ME!*/
export const details = {
  helmets: {
    name: "Helmets",
    icon: "helmets",
  },
  gloves: {
    name: "Gloves",
    icon: "gloves",
  },
  boots: {
    name: "Boots",
    icon: "boots",
  },
  bodyArmour: {
    name: "Body Armour",
    icon: "bodyArmour",
  },
  shields: {
    name: "Shields",
    icon: "shields"
  },
  
}

export default function ToggleButton(props) {
  const [chosenTier, setChosenTier] = useState(props.initialTier)
  const styleList = [
    styles.button,
    (props.styles ? props.styles: ""),
  ]

  let iname
  let icon
  if (props.name in details){
    iname = details[props.name].name
    icon = props.icon ? details[props.name].icon : null
  } else {
    iname = props.name
  }

  switch (chosenTier) {
    case buttonChoices.WHITE:
      styleList.push(styles.buttonWhite)
      break;
    case buttonChoices.RARE:
      styleList.push(styles.buttonRare)
      break;
    case buttonChoices.DISABLED:
      styleList.push(styles.buttonDisabled)
      break;
  }

  return (
    <button 
      className={styleList.join(" ")} 
      title={iname}
      onClick={() => { 
        setChosenTier(props.onClick()) 
      }}
      
    >
      {icon ? <Icon type={icon} /> : iname}
    </button>
  )
}
