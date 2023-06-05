import { useAppDispatch, useAppSelector } from 'state/store'
import { useEffect } from 'react'
import { resetTimeoutTime, setTimeoutTime } from 'state/slices/auth.slice'
import Cookies from 'js-cookie'

export const useTimeoutLogin = () => {
    const dispatch = useAppDispatch()
    const { timeoutLogin, timeoutTime } = useAppSelector((store) => store.auth)


    useEffect(() => {
        
    },[])


    useEffect(() => {
        let timeoutId: NodeJS.Timer
        if (timeoutLogin) {
            timeoutId = setInterval(() => {
                if (Cookies.get('timeoutTime') !== '0') {
                    dispatch(setTimeoutTime())
                } else {
                    clearInterval(timeoutId)
                    dispatch(resetTimeoutTime())
                }
            }, 1000)
        }

        return () => {
            clearInterval(timeoutId)
        }
    }, [timeoutLogin])

    return {
        timeoutLogin,
        timeoutTime,
    }
}
