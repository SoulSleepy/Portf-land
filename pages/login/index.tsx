import { Login } from 'components/Login'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const LoginPage: NextPageWithLayout = () => {
    return <Login />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <section>{page}</section>
}

export default LoginPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'tasks'])),
        },
    }
}
