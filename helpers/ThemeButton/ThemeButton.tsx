import Image from 'next/image'
import sunIcon from '../../images/sunIcon.svg'
import moonIcon from '../../images/moonIcon.svg'
import { useTheme } from '../hooks/useTheme'
import { useEffect, useState } from 'react'

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
                            ${theme === 'light' ? 'white' : 'red'} inset;
                        -webkit-text-fill-color: ${theme === 'light'
                            ? '#6c7281'
                            : '#6c7281'};
                    }
                `}
            </style>
            {mounted && (
                <button
                    className='absolute top-0 flex items-center justify-center p-1'
                    onClick={setTheme}
                >
                    <Image
                        src={theme === 'dark' ? sunIcon : moonIcon}
                        alt='sun/moon'
                    />
                </button>
            )}
        </div>
    )
}
