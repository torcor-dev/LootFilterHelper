import Layout from '../components/Layout'
import ArmorSection from '../components/sections/ArmorSection'
import WeaponSection from '../components/sections/WeaponSection'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/client'
import { connectToDatabase } from '../utils/mongodb'

export default function Home({ filter }) {
  const [session, loading] = useSession()

  if (session) {
    // Load user specific filter.
    // filter = foo()
  }

  return (
    <Layout session={session}>
      <ArmorSection filter={filter} />
      <WeaponSection />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase()

  const defaultFilter = await db.collection("filter").findOne({})
  const filter = JSON.parse(JSON.stringify(defaultFilter))

  return {
    props: {
      filter,
    }
  }

}
