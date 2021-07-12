import Layout from '../components/Layout'
import ArmorSection from '../components/sections/ArmorSection'
import WeaponSection from '../components/sections/WeaponSection'
import { useSession} from 'next-auth/client'
import { connectToDatabase } from '../utils/mongodb'
import { useReducer } from 'react'

const actions = {
  SET_ID: "SET_ID",
  SET_FILTER: "SET_FILTER",
}

function reducer(filter, action) {
  switch (action.type) {
    case actions.SET_ID:
      return { ...filter, _id: action.value }
    case actions.SET_FILTER:
      return { ...filter, ...action.value }
  }
}

export default function Home({ defaultFilter, staticData }) {
  const [session, loading] = useSession()
  const [filter, dispatch] = useReducer(reducer, defaultFilter)
  const [updater, forceUpdate] = useReducer(x => x + 1, 0);

  const [armourDetails] = staticData.filter(data => data.name === "armourDetails");

  const filterFuncs = {
    setId: value => { dispatch({type: actions.SET_ID, value}) },
    setFilter: value => { dispatch({type: actions.SET_FILTER, value}) },
  }

  function handleClick() {
    fetch("api/filter/defaults")
      .then(response => response.json())
      .then(response => filterFuncs.setFilter(response))
      .then(forceUpdate)
  }

  return (
    <Layout session={session} key={updater}>
      <h1>CURRENT FILTER: {defaultFilter._id === filter._id ? "Default" : filter._id}</h1>
      <button onClick={handleClick}>Reset filter</button>
      <ArmorSection 
        filter={filter} 
        data={armourDetails} 
        filterFuncs={filterFuncs}
      />
      <WeaponSection />
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
