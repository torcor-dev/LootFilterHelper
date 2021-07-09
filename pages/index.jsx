import Layout from '../components/Layout'
import ArmorSection from '../components/sections/ArmorSection'
import WeaponSection from '../components/sections/WeaponSection'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/client'
import { connectToDatabase } from '../utils/mongodb'
import {useState, useReducer} from 'react'

export default function Home({ defaultFilter}) {
  const [session, loading] = useSession()
  const [filter, setFilter] = useState(defaultFilter)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  if (session) {
    // Load user specific filter.
    // filter = foo()
  }

  function handleFilterUpdate(newFilter) {
    setFilter(newFilter)
  }

  function handleClick() {
    fetch("api/filter/defaults")
      .then(response => response.json())
      .then(response => setFilter(response))
      .then(forceUpdate)
  }

  return (
    <Layout session={session} key={ignored}>
      <h1>CURRENT FILTER: {defaultFilter._id === filter._id ? "Default" : filter._id}</h1>
      <button onClick={handleClick}>Reset filter</button>
      <ArmorSection filter={filter} key={ignored} updateFilter={handleFilterUpdate} />
      <WeaponSection />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase()

  let defaultFilter = await db.collection("filter").findOne({})
  defaultFilter = JSON.parse(JSON.stringify(defaultFilter))

  return {
    props: {
      defaultFilter,
    }
  }

}
