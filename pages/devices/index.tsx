import { Devices } from "components/Devices"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


export const DevicesPage = () => {
    return (
        <Devices />
    )
}

export default DevicesPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'tasks', 'modals'])),
        },
    }
}