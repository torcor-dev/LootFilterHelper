import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ session, children }) {
  const siteName = "Filterhelper"

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Edit your Path of Exile lootfilters on the fly."
        />
        <title>{siteName}</title>
      </Head>
      <header>
        <Navbar session={session} siteName={siteName} />
      </header>
      <main>
        { children }
      </main>
    </>
  )
}
