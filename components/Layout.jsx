import Head from 'next/head'
import Link from 'next/link'



export default function Layout({ children }) {
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
        <Link href="/">
          <a>
            <h1>{siteName}</h1>
          </a>
        </Link>
      </header>
      <main>
        { children }
      </main>
    </>
  )
}
