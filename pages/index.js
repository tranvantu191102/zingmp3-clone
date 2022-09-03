import Head from 'next/head'
import { getHome } from '../api/api'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar/Sidebar'
import Center from '../components/Home/Center'

const Main = styled.div`

`

export default function Home({ data }) {

  console.log(data)
  return (
    <div >
      <Head>
        <title>Zing Mp3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        {/* <Sidebar /> */}
        <Center data={data} />
      </main>


    </div>
  )
}


export const getServerSideProps = async () => {

  const data = await getHome()
  if (!data) {
    return {
      props: {
        data: [],
      },
    }
  }

  return {
    props: {
      data,
    },
  }
}