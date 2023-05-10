import { Login } from 'components/Login'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

export const LoginPage: NextPageWithLayout = () => {
    return <Login />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <section>{page}</section>
}

export default LoginPage
