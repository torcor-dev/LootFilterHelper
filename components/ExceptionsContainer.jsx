import AutoSuggestInput from "./AutoSuggestInput";
import ExceptionsList from "./ExceptionsList"; 
import PropTypes from 'prop-types'
import {useState} from "react";
import { rarityChoices } from "./ExceptionsList";
import { cycleThroughChoices } from "../utils/buttonUtils";

const baseItemSearchKeys = ["name", "implicitsText", "propertiesText", "itemClass"]

function ExceptionsContainer({
  suggestionData, 
  section,
  selection,
  filter,
  filterId,
}) {
  const [listItems, setListItems] = useState(filter[selection]["exceptionSelection"])

  function onItemSelect({item}) {
    const isDupe = (i) => listItems.filter(li => li.name === i.name).length === 0 ? false : true

    if (isDupe(item)) {
      return
    }

    const exceptionItem = {
      name: item.name,
      itemId: item.id,
      rarity: rarityChoices.MAGIC,
    }

    const listCopy = listItems.slice()
    listCopy.push(exceptionItem)
    setListItems(listCopy)
  }

  function onClick(item) {
    const listCopy = listItems.slice()
    listCopy[listCopy.indexOf(item)].rarity = cycleThroughChoices(listCopy[listCopy.indexOf(item)], "rarity", rarityChoices)
    setListItems(listCopy)
  }

  function removeItem(item) {
    return
  }

  return(
    <div className="">
      <h3>Excpetion rules</h3>
      <div className="pb-2">
        <AutoSuggestInput 
        placeholder={`Search for ${section} bases.`}
        suggestionData={suggestionData} 
        onItemSelect={onItemSelect} 
        searchKeys={baseItemSearchKeys}
        />
      </div>
      <ExceptionsList 
      listItems={listItems}
      onClick={onClick}
      removeItemCallback={removeItem}
      />
    </div>
  )
}

ExceptionsContainer.propTypes = {
  suggestionData: PropTypes.array,
  section: PropTypes.string,
  selection: PropTypes.string,
  filter: PropTypes.object,
  filterId: PropTypes.string,
}

export default ExceptionsContainer
