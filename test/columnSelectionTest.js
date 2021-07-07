/*
function downUp(newCol) { 
  for (let i=newCol.length-1; i>=0; i--) {
    for (let j=i-1; j>=0; j--) {
      if (newCol[i] != newCol[j]) {
        newCol[j] = newCol[i]
      }
    }
  }
}
*/

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


function compareArrays(a1, a2) {
  if (a1.length !== a2.length) return false

  let result = true
  for(let i = 0; i < a1.length; i++) {
    if(a1[i] !== a2[i]) {
      result = false
    }
  }
  return result
}

function testForwards3() {
  const oldCol    = [1, 1, 1, 0]
  const newCol    = [1, 2, 1, 0]
  const expected  = [2, 2, 1, 0]
  const processed = synchCol(newCol, oldCol)
  if (compareArrays(expected, processed)) {
    console.log("testForwards3 passed!")
  } else {
    console.log("testForwards3 failed!")
    console.log("Old column:", oldCol)
    console.log("Input:     ", newCol)
    console.log("\nExpected:  ", expected)
    console.log("Actual:    ", processed)
  }
}

function testForwards() {
  const oldCol    = [1, 1, 1, 0]
  const newCol    = [2, 1, 1, 0]
  const expected  = [2, 1, 1, 0]
  const processed = synchCol(newCol, oldCol)
  if (compareArrays(expected, processed)) {
    console.log("testForwards passed!")
  } else {
    console.log("testForwards failed!")
    console.log("Old column:", oldCol)
    console.log("Input:     ", newCol)
    console.log("\nExpected:  ", expected)
    console.log("Actual:    ", processed)
  }
}

function testForwards2() {
  const oldCol    = [1, 1, 1, 0]
  const newCol    = [1, 1, 1, 2]
  const expected  = [2, 2, 2, 2]
  const processed = synchCol(newCol, oldCol)
  if (compareArrays(expected, processed)) {
    console.log("testForwards2 passed!")
  } else {
    console.log("testForwards2 failed!")
    console.log("Old column:", oldCol)
    console.log("Input:     ", newCol)
    console.log("\nExpected:  ", expected)
    console.log("Actual:    ", processed)
  }
}

function testForwards4() {
  const oldCol    = [0, 0, 0, 0]
  const newCol    = [0, 0, 0, 1]
  const expected  = [1, 1, 1, 1]
  const processed = synchCol(newCol, oldCol)
  if (compareArrays(expected, processed)) {
    console.log("testForwards2 passed!")
  } else {
    console.log("testForwards2 failed!")
    console.log("Old column:", oldCol)
    console.log("Input:     ", newCol)
    console.log("\nExpected:  ", expected)
    console.log("Actual:    ", processed)
  }
}

function testBackwards2() {
  const oldCol    = [2, 2, 2, 2]
  const newCol    = [2, 0, 2, 2]
  const expected  = [2, 0, 0, 0]
  const processed = synchCol(newCol, oldCol)
  if (compareArrays(expected, processed)) {
    console.log("testBackwards2 passed!")
  } else {
    console.log("testBackwards2 failed!")
    console.log("Old column:", oldCol)
    console.log("Input:     ", newCol)
    console.log("\nExpected:  ", expected)
    console.log("Actual:    ", processed)
  }
}


function testBackwards() {
  const oldCol    = [4, 4, 4, 0]
  const newCol    = [4, 3, 4, 0]
  const expected  = [4, 3, 3, 0]
  const processed = synchCol(newCol, oldCol)
  if (compareArrays(expected, processed)) {
    console.log("testBackwards passed!")
  } else {
    console.log("testBackwards failed!")
    console.log("Old column:", oldCol)
    console.log("Input:     ", newCol)
    console.log("\nExpected:  ", expected)
    console.log("Actual:    ", processed)
  }
}

function testBackwards3() {
  const oldCol    = [2, 2, 2, 2]
  const newCol    = [2, 1, 2, 2]
  const expected  = [2, 1, 1, 1]
  const processed = synchCol(newCol, oldCol)
  if (compareArrays(expected, processed)) {
    console.log("testBackwards passed!")
  } else {
    console.log("testBackwards failed!")
    console.log("Old column:", oldCol)
    console.log("Input:     ", newCol)
    console.log("\nExpected:  ", expected)
    console.log("Actual:    ", processed)
  }
}

function runTests() {
  testBackwards()
  testBackwards2()
  testBackwards3()
  testForwards()
  testForwards2()
  testForwards3()
  testForwards4()
}

runTests()


