import PropTypes from 'prop-types'
import {useState} from 'react';
import styles from "../styles/components/ListItem.module.css"

export const rarityChoices = {
  RARE: 0,
  MAGIC: 1,
  WHITE: 2,
}

function ExceptionsList({ listItems, onClick, removeItemCallback }) {
  return (
    <>
      <ul className={styles.exceptionContainer}>
        {listItems.map((item, index) => { 
          return <ExceptionsListItem key={index} item={item} onClick={onClick}/>
        })}
      </ul>
    </>
  )
}

function ExceptionsListItem({ item, onClick }) {
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

  return (
    <li onClick={handleClick} className={itemStyling(item)}>
      <div className="w-1/2 pl-1">
        <p className={styles.exceptionName}>
          {item.name}
        </p>
      </div>
    </li> 
  )
}

ExceptionsList.propTypes = {
  listItems: PropTypes.array,
  removeItemCallback: PropTypes.func,
}

export default ExceptionsList
