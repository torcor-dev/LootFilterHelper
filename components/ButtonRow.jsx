import styles from '../styles/components/ButtonRow.module.css'

export default function ButtonRow(props) {
  return (
    <div className={styles.buttonrow + (props.styles ? " " + props.styles : "")}>
      {props.children}
    </div>
  )
}
