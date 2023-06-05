import { System } from "@/components/System"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export const SystemPage = () => {
    return (
        <System />
    )
}

export default SystemPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'vulns', 'modals', 'login'])),
        },
    }
}