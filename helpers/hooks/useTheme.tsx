import { useAppDispatch, useAppSelector } from '@/state/store'
import { useState, useEffect } from 'react'
import { setStateTheme } from 'state/slices/main.slice'

export const useTheme = () => {
    const dispatch = useAppDispatch()
    const { theme } = useAppSelector((store) => store.main)

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            document.documentElement.style.colorScheme = 'dark'
            dispatch(setStateTheme('dark'))
        } else {
            dispatch(setStateTheme('light'))
            document.documentElement.classList.add('light')
            document.documentElement.style.colorScheme = 'light'
        }
    }, [])

    const setTheme = () => {
        if (typeof window !== undefined) {
            if (localStorage.theme !== 'dark') {
                document.documentElement.classList.remove('light')
                document.documentElement.classList.add('dark')
                document.documentElement.style.colorScheme = 'dark'
                localStorage.theme = 'dark'
                dispatch(setStateTheme('dark'))
            } else {
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
                localStorage.theme = 'light'
                document.documentElement.style.colorScheme = 'light'
                dispatch(setStateTheme('light'))
            }
        }
    }

    return {
        theme,
        setTheme,
    }
}
