import styles from '../styles/components/ToggleButton.module.css' 
import Icon from './Icon'

export default function ToggleButton(props) {
  return (
    <>
    <button 
      className={styles.button + (props.styles ? " " + props.styles : "")} 
      title={props.name}
    >
      {props.icon ? <Icon type={props.icon} /> : props.name}
    </button>
    </>
  )
}
