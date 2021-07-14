import Layout from '../components/Layout'
import ArmorSection from '../components/sections/ArmorSection'
import WeaponSection from '../components/sections/WeaponSection'
import InputField from '../components/InputField'
import { useSession} from 'next-auth/client'
import { connectToDatabase } from '../utils/mongodb'
import { useEffect, useReducer, useState } from 'react'
import { getFilter } from '../utils/apiHelpers'

const actions = {
  SET_ID: "SET_ID",
  SET_FILTER: "SET_FILTER",
  SET_NAME: "SET_NAME",
  SET_USERID: "SET_USERID",
  RESET: "RESET",
  START_LOADING: "START_LOADING",
  FINISH_LOADING: "FINISH_LOADING",
}

function stateReducer(state, action) {
  switch (action.type) {
    case actions.SET_ID:
      return { ...state, _id: action.payload.id }
    case actions.SET_NAME:
      return { ...state, name: action.payload.name }
    case actions.SET_USERID:
      return { ...state, userId: action.payload.userId }
    case actions.RESET:
      return { ...state, ...initialState }
    case actions.START_LOADING:
      return { ...state, isLoading: true }
    case actions.FINISH_LOADING:
      return { ...state, isLoading: false }
  }
}

// Using this instead of BSON.ObjectId() because of BSON introducing
// a SharedArrayBuffer, which will require cross-origin isolation.
const ObjectId = (rnd = r16 => Math.floor(r16).toString(16)) =>
    rnd(Date.now()/1000) + ' '.repeat(16).replace(/./g, () => rnd(Math.random()*16));

const initialState = {
  _id: "",
  name: "",
  userId: "",
  isLoading: false,
  isError: false,
}

export default function Home({ defaultFilter, staticData }) {
  const [session, loading] = useSession()
  const [state, stateDispatch] = useReducer(stateReducer, initialState)
  const [filter, setFilter] = useState(defaultFilter)
  //const [updater, forceUpdate] = useReducer(x => x + 1, 0);
  //

  useEffect(() => {
    stateDispatch({ type: actions.START_LOADING })
    const existingFilter = localStorage.getItem("curFilter")
    if (existingFilter) {
      fetch(`api/filter/${existingFilter}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(response => response.json())
        .then(response => setFilter(response))
        .then(
          stateDispatch({type: "SET_ID", payload: {id: filter._id}}),
          stateDispatch({type: "SET_NAME", payload: {name: filter.name}}),
        )
    } else {
      stateDispatch({type: "SET_ID", payload: {id: ObjectId()}})
      stateDispatch({type: "SET_NAME", payload: {name: "Default filter"}})
    }

   const timer = setTimeout(() => {
      stateDispatch({ type: actions.FINISH_LOADING })
    }, 500)
    return () => clearTimeout(timer)
  }, [filter._id, filter.name])


  const [armourDetails] = staticData.filter(data => data.name === "armourDetails");

  function handleClick() {
    stateDispatch({ type: actions.START_LOADING })
    fetch("api/filter/defaults/defaults")
      .then(response => response.json())
      .then(response => {
        localStorage.removeItem("curFilter")
        setFilter(response)
        stateDispatch({type: "SET_ID", payload: {id: ObjectId()}})
        stateDispatch({type: "SET_NAME", payload: {name: filter.name}})
      })
     setTimeout(() => {
        stateDispatch({ type: actions.FINISH_LOADING })
      }, 500)
    }

  return (
    <Layout session={session} key={state._id}>
    {state.isLoading ? (
      <div className="flex w-screen h-screen justify-center items-center">
        <p>Loading...</p>
      </div>
    ): (
      <>
      <h1>CURRENT FILTER: {state.name} - {state._id}</h1>
      <button onClick={handleClick}>Reset filter</button>
      <br />
      <InputField 
      field="name"
      defaultValue={state.name}
      filterId={state._id}
      />
      <ArmorSection 
      filter={filter} 
      data={armourDetails} 
      filterId={state._id}
      />
      <WeaponSection />
      </>
    )}
    </Layout>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()

  const defaultFilter = JSON.parse(JSON.stringify(
    await db.collection("filter").findOne({})
  ))

  const staticData = JSON.parse(JSON.stringify(
    await db.collection("static").find({}).toArray()
  ))

  return {
    props: {
      defaultFilter,
      staticData,
    }
  }

}
