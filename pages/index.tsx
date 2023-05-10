import Head from 'next/head'
import { NextPage } from 'next'
import { HomeComponent } from 'components/HomeComponent'

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>GAK-LINK</title>
                <link rel="SHORTCUT ICON" href="favicon.ico" />
            </Head>
            <HomeComponent />
        </div>
    )
}

export default Home
