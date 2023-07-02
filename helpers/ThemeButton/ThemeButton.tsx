import { useTheme } from '../hooks/useTheme'
import { useEffect, useState } from 'react'
import { DarkModeIcon, LightModeIcon } from '@/components/Icons/Icons'

export const ThemeButton = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <div>
            <style jsx global>
                {`
                    input:-webkit-autofill,
                    input:-webkit-autofill:hover,
                    input:-webkit-autofill:focus,
                    input:-webkit-autofill:active {
                        -webkit-box-shadow: 0 0 0 50px
                            ${theme === 'light' ? 'white' : '#1c1a33'} inset;
                        -webkit-text-fill-color: ${theme === 'light'
                            ? '#6c7281'
                            : '#6c7281'};
                    }
                `}
            </style>
            {mounted && (
                <button
                    className=''
                    onClick={setTheme}
                >
                    {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon fill='#18162bdc'/>}
                </button>
            )}
        </div>
    )
}
