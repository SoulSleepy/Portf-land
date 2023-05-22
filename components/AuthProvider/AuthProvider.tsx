import { useAppDispatch, useAppSelector } from 'state/store'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'
import { useUpdateToken } from 'helpers/hooks/useUpdateToken'
import { setAuthUser } from 'state/slices/auth.slice'
import { useStatus } from 'helpers/hooks/useStatus'

type Props = {
    children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
    useStatus()
    useUpdateToken()
    const { push, pathname } = useRouter()
    const { authUser, activeUser } = useAppSelector((store) => store.auth)
    const dispatch = useAppDispatch()

    // const [test, setTest] = useState(true)
    // useEffect(() => {
    //     setTest(localStorage.isAuth !== 'true')
    // }, [children])

    useEffect(() => {
        const isAuth: boolean = JSON.parse(localStorage.isAuth || 'false')
        dispatch(setAuthUser(isAuth))
    }, [])

    useEffect(() => {
        if (activeUser === false) {
            push('/activate')
        } else if (pathname === '/activate') {
            push('/')
        } else if (authUser === true && pathname === '/login') {
            push('/')
        } else if (authUser === false) {
            push('/login')
        }
    }, [authUser, activeUser])

    return <>{children}</>
}
