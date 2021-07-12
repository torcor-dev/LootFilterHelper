export function cycleThroughChoices(stateObj, key, choiceObj) {
  const choice = stateObj instanceof Map ? stateObj.get(key) + 1 : stateObj[key] + 1
  return choice % Object.keys(choiceObj).length
}

export function cycleThroughChoicesByValue(value, choiceObj) {
  return (value + 1) % Object.keys(choiceObj).length
}
