import { Login } from 'components/Login'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export const LoginPage: NextPageWithLayout = () => {
    return <Login />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <section>{page}</section>
}

export default LoginPage

export const getServerSideProps: GetServerSideProps = async ({
    locale,
    req,
}) => {
    // store.dispatch(auth.actions.setInitTimeoutLogin(req.cookies?.timeoutTime || 0))
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'vulns', 'modals', 'login'])),
        },
    }
}
