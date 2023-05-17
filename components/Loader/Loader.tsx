import { ReactNode } from 'react'
import styles from './loader.module.css'
import cn from 'classnames'
import { useTheme } from '@/helpers/hooks/useTheme'

interface IProps {
    children: ReactNode
    isLoading: boolean
    isError?: boolean
    size?: number
}

export const Loader = ({ children, isLoading, isError, size }: IProps) => {
    const { theme } = useTheme()
    if (isLoading) {
        return (
            <div className={styles.wrap}>
                <div
                    className={cn(
                        styles.ellipsis,
                        { 'scale-75': size == 75 },
                        { 'scale-125': size == 125 },
                        {[styles.bgBlack]: theme === 'light' }
                    )}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
    return <>{children}</>
}
