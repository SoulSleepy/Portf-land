import { VPN } from "components/VPN"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export const VPNPage = () => {
    return (
        <VPN />
    )
}

export default VPNPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'tasks', 'modals'])),
        },
    }
}