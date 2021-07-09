import Layout from '../components/Layout'
import ArmorSection from '../components/sections/ArmorSection'
import WeaponSection from '../components/sections/WeaponSection'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/client'
import { connectToDatabase } from '../utils/mongodb'
import {useState} from 'react'

export default function Home({ defaultFilter}) {
  const [session, loading] = useSession()

  if (session) {
    // Load user specific filter.
    // filter = foo()
  }

  const [filter, setFilter] = useState(defaultFilter)

  function handleFilterUpdate(newFilter) {
    setFilter(newFilter)
  }

  return (
    <Layout session={session}>
      <h1>CURRENT FILTER: {filter._id}</h1>
      <ArmorSection filter={filter} updateFilter={handleFilterUpdate} />
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
