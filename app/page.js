import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loris Ohr | HTL-Dornbirn</title>
      </Head>
      <Navbar/>
    </div>
  )
}
