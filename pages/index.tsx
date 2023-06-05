import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { HomeComponent } from 'components/HomeComponent'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>GAK-LINK</title>
                <link rel='SHORTCUT ICON' href='favicon.ico' />
            </Head>
            <HomeComponent />
        </div>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'vulns', 'modals', 'login'])),
        },
    }
}
