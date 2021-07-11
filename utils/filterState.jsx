import {useState, useReducer, createContext, useContext, useMemo} from 'react'
import filterStateReducer from './filterReducer'
import { initialFilter } from '../data/initFilter'

const FilterContext = createContext({})

export const initialState = {
  id: initialFilter._id,
  name: initialFilter.name,
  filter: {...initialFilter}
}

export const actions = {
  SET_FILTER: "SET_FILTER",
  SET_ID: "SET_ID",
  UPDATE_FILTER: "UPDATE_FILTER",
  RESET: "RESET",
}

export default function FilterProvider({ children }) {
  const [filterState, dispatch] = useReducer(filterStateReducer, initialState)

  const value = useMemo(() => ({
    id: filterState.id,
    name: filterState.name,
    filter: filterState.filter,
    setFilter: (value) => {dispatch({ type: actions.SET_FILTER, value })},
    setId: (value) => {dispatch({ type: actions.SET_ID, value })},
    reset: () => { dispatch({ type: actions.RESET }) },
    updateFilter: (value) => { dispatch({ type: actions.UPDATE_FILTER, value }) },
  }), [filterState])

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}


export function useFilterContex() {
  return useContext(FilterContext)
}



/*
  
function Provider({ children }) {
  const [filter, dispatch] = useReducer(filterReducer, initialFilter)

  const value = {
    name: filter.name,
    values: {
      v1: filter.values.v1,
      v2: filter.values.v2,
      v3: filter.values.v3.slice(),
    },
    setName: value => {
      dispatch({ type: actions.SET_NAME, value})
    },
    setValues: value => {
      dispatch({ type: actions.SET_VALUES, value })
    },
    setDefault: () => {
      dispatch({ type: actions.SET_DEFAULT })
    },
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}
  */
