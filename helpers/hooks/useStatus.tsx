import { setActiveUser, setAuthUser } from 'state/slices/auth.slice'
import { useAppDispatch } from 'state/store'

import { useEffect } from 'react'
import { BASE_URL, fetchStatus } from 'state/rtk/config'
import Cookies from 'js-cookie'

export const useStatus = () => {
    const dispath = useAppDispatch()

    const statusFetch = () => {
        fetch(`${BASE_URL}auth-status`, fetchStatus)
            .then((res) => res.json())
            .then(({ data }) => {
                dispath(setActiveUser(data !== 'wizard'))
                if (data === 'cubic-is-not-auth') {
                    dispath(setAuthUser(false))
                    Cookies.remove('isAuth')
                }
            })
    }

    useEffect(() => {
        statusFetch()
    }, [])

    return {}
}
