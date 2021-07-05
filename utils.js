function updateCellsBefore(changedIdx, newCol) {
  const col = newCol.slice()
  for (let i = 0; i < changedIdx; i++) {
    //if (col[i] > col[changedIdx]) continue // ? A higher value takes precedent over a smaller one.
    //col[i] = col[changedIdx]
    if (col[i] < col[changedIdx]) col[i] = col[changedIdx]
  }
  return col
}

function updateAllCellsAfter(changedIdx, newCol) {
  const col =  newCol.slice()
  for (let i = changedIdx; i < col.length; i++) {
    col[i] = col[changedIdx]
  }
  return col
}


function updateCellsAfterExceptZero(changedIdx, newCol) {
  const col =  newCol.slice()
  for (let i = changedIdx; i < col.length; i++) {
    if (col[i] === 0) {
      break
    }
    col[i] = col[changedIdx]
  }
  return col
}

export function synchCol(newCol, oldCol) { 
  /* 
  * Syncronize a column
  * Expect the column to always be in a valid state.
  */
  if (oldCol.length != newCol.length) {
    throw Error("The two columns must be same length")
  }

  let updatedCol = newCol.slice()
  // Find the changed cell
  for (let i = 0; i < newCol.length; i++) {
    if (newCol[i] !== oldCol[i] && newCol[i] === 0) {
      updatedCol = updateAllCellsAfter(i, newCol)
      break
    } else if (newCol[i] > oldCol[i]) {
      updatedCol = updateCellsBefore(i, newCol)
      break
    } else if (newCol[i] < oldCol[i]) {
      updatedCol = updateCellsAfterExceptZero(i, newCol)
      break
    }

  }

  return updatedCol
}

