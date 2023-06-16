import { useAppDispatch, useAppSelector } from 'state/store'
import { useEffect } from 'react'
import { resetTimeoutTime, setTimeoutNewTime } from 'state/slices/auth.slice'

export const useTimeoutLogin = () => {
    const dispatch = useAppDispatch()
    const { timeoutLogin, timeoutTime } = useAppSelector((store) => store.auth)

    useEffect(() => {
        let timeoutId: NodeJS.Timer
        if (timeoutLogin) {
            timeoutId = setInterval(() => {
                if (timeoutTime > 0) {
                    dispatch(setTimeoutNewTime())
                } else {
                    dispatch(resetTimeoutTime())
                    clearInterval(timeoutId)
                }
            }, 1000)
        }
        return () => {
            clearInterval(timeoutId)
        }
    }, [timeoutLogin, timeoutTime])

    return {
        timeoutLogin,
        timeoutTime,
    }
}
