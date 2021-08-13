import PropTypes from 'prop-types'
import InputField from './InputField';
import {useState} from 'react';
import styles from "../styles/components/ListItem.module.css"

export const rarityChoices = {
  RARE: 0,
  MAGIC: 1,
  WHITE: 2,
}

function ExceptionList({ 
  listItems, 
  defaultIlvl,
  onClick, 
  removeItemCallback, 
  selection,
  filter,
  filterId,
}) {
  return (
    <>
      <ul className={styles.exceptionContainer}>
        {listItems.map((item, index) => { 
          return (
            <ExceptionListItem 
              key={index} 
              item={item} 
              defaultIlvl={defaultIlvl}
              onClick={onClick} 
              removeCallback={removeItemCallback}
              selection={selection}
              filter={filter}
              filterId={filterId}
            />
          )
        })}
      </ul>
    </>
  )
}

function ExceptionListItem({ 
  item, 
  defaultIlvl,
  onClick, 
  removeCallback,
  selection,
  filter,
  filterId,
}) {
  function itemStyling(item) {
    let rarityStyle = ""
    switch (item.rarity) {
      case rarityChoices.RARE:
        rarityStyle = styles.rareItemColors; break
      case rarityChoices.MAGIC:
        rarityStyle = styles.magicItemColors; break
      case rarityChoices.WHITE:
        rarityStyle = styles.whiteItemColors; break
      default:
        rarityStyle = styles.rareItemColors
    }
    return `${styles.exceptionItem} ${rarityStyle}`
  }

  function handleClick() {
    onClick(item)
  }

  function remove() {
    removeCallback(item)
  }

  return (
    <li className={itemStyling(item)}>
      <div onClick={handleClick} className="pl-1 h-4/5 w-full">
        <p className={styles.exceptionName}>
          {item.name}
        </p>
      </div>
      <div className="ml-auto h-4/5 pr-1">
        <div className="flex flex-row items-center">
          <div className="flex flex-row">
            <InputField 
              defaultValue={item.ilvl ? item.ilvl : defaultIlvl}
              label="ilvl:" 
              field={`${selection}.exceptionSelection.$[updateItem].ilvl`}
              filterId={filterId}
              apiOptions={{ 
                arrayFilters: [
                  {"updateItem.name": item.name}
                ]
              }}
              type="number"
              title="The minimum item level for the item to appear."
              className={styles.ilvlInput} 
              labelClassName={styles.ilvlLabel} 
              max={100}
              min={1}
            />
          </div>
          <div onClick={remove} className={styles.crossmark}></div>
        </div>
      </div>
    </li> 
  )
}

ExceptionList.propTypes = {
  listItems: PropTypes.array,
  removeItemCallback: PropTypes.func,
}

export default ExceptionList
