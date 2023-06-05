import { Activate } from 'components/Activate'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const ActivatePage: NextPageWithLayout = () => {
    return <Activate />
}

ActivatePage.getLayout = function getLayout(page: ReactElement) {
    return <section>{page}</section>
}

export default ActivatePage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'vulns', 'modals', 'login'])),
        },
    }
}
