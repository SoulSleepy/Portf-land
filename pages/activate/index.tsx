import { Activate } from 'components/Activate'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

export const ActivatePage: NextPageWithLayout = () => {
    return <Activate />
}

ActivatePage.getLayout = function getLayout(page: ReactElement) {
    return <section>{page}</section>
}

export default ActivatePage
