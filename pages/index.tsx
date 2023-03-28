import Head from 'next/head'
import { NextPage } from 'next'
import { HomeComponent } from '@/components/HomeComponent'

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>GAK-LINK</title>
            </Head>
            <HomeComponent />
        </div>
    )
}

export default Home
