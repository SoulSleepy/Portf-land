import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ReactElement, ReactNode } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Roboto } from 'next/font/google'
import store from 'state/store'
import MainLayout from 'components/Layouts/MainLayout'
import { AuthProvider } from 'components/AuthProvider'
import { appWithTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)

    return (
        <Provider store={store}>
            <style jsx global>
                {`
                    html {
                        font-family: ${roboto.style.fontFamily};
                    }
                `}
            </style>
            <AuthProvider>
                {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
        </Provider>
    )
}

export default appWithTranslation(MyApp)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['navbar', 'home', 'vpn', 'devices', 'events', 'map', 'settings', 'system', 'users', 'tasks'])),
        }
    }
}
