import styles from "../styles/components/ListItem.module.css"

export default function SuggestionItem({ item }) {
  const { name, itemClass, implicits, propertiesText } = item
  const implicitInfo = implicits.map(implicit => implicit.fullDescr)

  return (
    <div className={styles.itemContainer}>
      <div className="w-1/2 pl-1">
        <p className={styles.itemName}> {name} </p>
        <p className={styles.infoText}>{itemClass}</p>
      </div>
      <div className="w-1/2 flex flex-row">
        <div className="w-2/3 pr-1" title={implicitInfo.join("\n")}>
          <ul>
            {implicitInfo.map(info => {
              return <li key={info} className={styles.infoText} >{info}</li> 
            })}
          </ul>
        </div>
        <div className="w-1/3 pr-1" title={propertiesText.join("\n")}>
          <ul>
            {propertiesText.map(info => {
              return <li key={info} className={styles.infoText}>{info}</li> 
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}