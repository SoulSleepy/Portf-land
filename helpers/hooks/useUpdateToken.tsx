import { BASE_URL, fetchStatus, fetchTimeout } from 'state/rtk/config'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'state/store'
import { setAuthUser } from 'state/slices/auth.slice'
import Cookies from 'js-cookie'

let idInterval: NodeJS.Timer | null = null

export const useUpdateToken = () => {
    const { authUser } = useAppSelector((store) => store.auth)
    const dispath = useAppDispatch()

    const timeoutFetch = () => {
        fetch(`${BASE_URL}auth-timeout`, fetchTimeout)
        fetch(`${BASE_URL}auth-status`, fetchStatus)
            .then((res) => res.json())
            .then(({ data }) => {
                if (data === 'cubic-is-not-auth') {
                    dispath(setAuthUser(false))
                    Cookies.remove('isAuth')
                }
            })
    }

    useEffect(() => {
        if (authUser === true) {
            clearInterval(idInterval as NodeJS.Timer)
            idInterval = setInterval(timeoutFetch, 15000)
        }
        if (authUser === false && idInterval) {
            clearInterval(idInterval)
        }
    }, [authUser])
}
