export default function SuggestionItem({ item }) {
  const { name, itemClass, implicits, properties } = item
  const implicitInfo = implicits.map(implicit => implicit.fullDescr)

  const titleCase = (str) => str.replace(/\b\S/g, t => t.toUpperCase());
  const propertyInfo = Object.keys(properties)
    .map((prop) => prop === "movement_speed" && properties[prop] <= 0 ? "" 
      : `${titleCase(prop.replace(/_/, " "))}: ${properties[prop]}`)

  return (
    <div className="flex flex-row text-blue-500 cursor-pointer">
      <div className="w-1/3">
        <p className="text-lg"> {name} </p>
      </div>
      <div className="w-1/3">
        <ul>
          {implicitInfo.map(info => {
            return <li key={info} className="text-xs truncate">{info}</li> 
          })}
        </ul>
      </div>
      <div className="w-1/3">
        <ul>
          {propertyInfo.map(info => {
            return <li key={info} className="text-xs truncate">{info}</li> 
          })}
        </ul>
      </div>
    </div>
  )

}
