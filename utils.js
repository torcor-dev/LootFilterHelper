function updateCellsBefore(changedIdx, col) {
  // If the changed cell is less than the old one
  // Set the values before the index to be the same
  // as the change.
  for (let i = 0; i < changedIdx; i++) {
    col[i] = col[changedIdx]
  }
}

function updateCellsAfter(changedIdx, col) {
  // If the opposite is true change latter values to be
  // the same as the change.
  for (let i = changedIdx; i < col.length; i++) {
    if (col[changedIdx] > col[i]) {
      col[i] = col[changedIdx]
    } 
  }
}

export function synchCol(newCol, oldCol) { 
  /* 
  * Syncronize a column
  * Expect the column to always be in a valid state.
  */
  if (oldCol.length != newCol.length) {
    throw Error("The two columns must be same length")
  }

  const updatedCol = newCol.slice()
  // Find the changed cell
  for (let i = 0; i < newCol.length; i++) {
    if(oldCol[i] > newCol[i]) {
      updateCellsBefore(i, updatedCol)
      break
    } else if(oldCol[i] < newCol[i]) {
      updateCellsAfter(i, updatedCol)
      break
    }
  }
  return updatedCol
}
