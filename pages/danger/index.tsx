import { Danger } from "components/Danger"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


export const DangerPage = () => {
    return (
        <Danger />
    )
}

export default DangerPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'tasks', 'modals'])),
        },
    }
}