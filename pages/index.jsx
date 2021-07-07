import Layout from '../components/Layout'
import ArmorSection from '../components/sections/ArmorSection'
import WeaponSection from '../components/sections/WeaponSection'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/client'


export default function Home() {
  const [session, loading] = useSession()

  return (
    <Layout session={session}>
      <ArmorSection />
      <WeaponSection />
    </Layout>
  )
}


