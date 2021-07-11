import { actions, initialState } from "./filterState"
import { immutableFilter } from "../data/initFilter"

function updateFilter(value) {
  console.log(value.keys.join("."), ":", value.value)
  return {
    foo: "filter." + value.keys.join("."),
    bar: value.value,
  }


}

export default function filterStateReducer(state, action) {
  switch (action.type) {
    case actions.UPDATE_FILTER:
      const {foo, bar} = updateFilter(action.value)
      return { ...state, [foo]: bar }
    case actions.SET_FILTER:
      return { ...state, filter: action.value }
    case actions.SET_ID:
      return { ...state, id: action.value }
    case actions.RESET:
      console.log(immutableFilter)
      return { ...state, ...initialState, filter: JSON.parse(immutableFilter) }
  }
  return state
}
