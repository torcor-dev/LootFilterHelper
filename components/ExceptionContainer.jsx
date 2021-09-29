import AutoSuggestInput from "./AutoSuggestInput";
import ExceptionListItem from "./ExceptionListItem"; 
import PropTypes from 'prop-types'
import {useState} from "react";
import { rarityChoices } from "./ExceptionListItem";
import { cycleThroughChoices } from "../utils/buttonUtils";
import styles from "../styles/components/ListItem.module.css"
import {filterAPIPut} from "../utils/apiHelpers";

const baseItemSearchKeys = ["name", "implicitsText", "propertiesText", "itemClass"]

function ExceptionContainer({
  suggestionData, 
  atlasBaseTypes,
  defaultIlvl,
  section,
  selection,
  filter,
  filterId,
}) {
  const [listItems, setListItems] = useState(filter[selection]["exceptionSelection"])

  function makeExceptionItem(item) {
    const isDupe = listItems.filter(li => li.name === item.name).length === 0 ? false : true

    const exceptionItem = {
      name: item.name,
      itemId: item.id,
      rarity: rarityChoices.MAGIC,
    }
    return [exceptionItem, isDupe]
  }

  function onItemSelect({item}) {
    const [exceptionItem, isDupe] = makeExceptionItem(item)
    if (isDupe) {
      return
    }

    const listCopy = listItems.slice()
    listCopy.push(exceptionItem)
    setListItems(listCopy)
    filterAPIPut(`${selection}.exceptionSelection`, exceptionItem, filterId, {operator: "$push"})
  }

  function onClick(item) {
    const listCopy = listItems.slice()
    listCopy[listCopy.indexOf(item)].rarity = 
      cycleThroughChoices(
        listCopy[listCopy.indexOf(item)], 
        "rarity", 
        rarityChoices
      )
    setListItems(listCopy)
  }

  function removeItem(item) {
    const listCopy = listItems.filter(i => i.name !== item.name)
    setListItems(listCopy)
    filterAPIPut(`${selection}.exceptionSelection`, {name: item.name}, filterId, {operator: "$pull"})
  }

  function addAtlasBases() {
    const bases = atlasBaseTypes.flatMap(base => {
      const [item] = suggestionData.filter(i => i.name === base)
      const [exceptionItem, isDupe] = makeExceptionItem(item)
      if (!isDupe) {
        return [exceptionItem]
      }
      return []
    })
    const listCopy = listItems.concat(bases)
    setListItems(listCopy)
    filterAPIPut(`${selection}.exceptionSelection`, {"$each": bases}, filterId, {operator: "$push"})
  }

  return(
    <div className="pb-2">
      <div className="flex w-full">
        <h3>Exception rules</h3>
        <button className="ml-auto text-xs" onClick={addAtlasBases}>Add all atlas bases</button>
      </div>
      <div className="pb-2">
        <AutoSuggestInput 
        placeholder={`Search for ${section} bases.`}
        suggestionData={suggestionData} 
        onItemSelect={onItemSelect} 
        searchKeys={baseItemSearchKeys}
        />
      </div>
      <ul className={styles.exceptionContainer}>
        {listItems.map((item, index) => { 
          return (
            <ExceptionListItem 
              key={index} 
              item={item} 
              defaultIlvl={defaultIlvl}
              onClick={onClick} 
              removeCallback={removeItem}
              selection={selection}
              filter={filter}
              filterId={filterId}
            />
          )
        })}
      </ul>
    </div>
  )
}

ExceptionContainer.propTypes = {
  suggestionData: PropTypes.array,
  atlasBaseTypes: PropTypes.array,
  section: PropTypes.string,
  selection: PropTypes.string,
  filter: PropTypes.object,
  filterId: PropTypes.string,
}

export default ExceptionContainer
