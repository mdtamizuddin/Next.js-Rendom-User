import Head from 'next/head'
import Navbar from '../components/Navbar'
import User from '../components/User'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Rendom user</title>
        <meta name="description" content="rendom user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <User />
    </div>
  )
}
