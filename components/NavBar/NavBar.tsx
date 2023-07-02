import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
    HomeIcon,
    ShowIcon,
    VPNIcon,
    NetIcon,
    DangerIcon,
    EventIcon,
    DevicesIcon,
    UsersIcon,
    SettingsIcon,
    SystemIcon,
    LogoutIcon,
    LogoIcon,
} from '../Icons/Icons'
import { useLazyLogoutUserQuery } from 'state/rtk/auth.rtk'
import { useTheme } from 'helpers/hooks/useTheme'
import { useTranslation } from 'next-i18next'
import { useAppSelector } from 'state/store'

interface IMenuItem {
    id: number
    name: string
    icon: ({ fill }: { fill?: string | undefined }) => JSX.Element
    link: string
}

const menuItems: IMenuItem[] = [
    { id: 1, name: 'home', icon: HomeIcon, link: '/' },
    { id: 2, name: 'network map', icon: NetIcon, link: '/map' },
    { id: 3, name: 'VPN', icon: VPNIcon, link: '/vpn' },
    { id: 4, name: 'vulns', icon: DangerIcon, link: '/danger' },
    { id: 5, name: 'events', icon: EventIcon, link: '/event' },
    { id: 6, name: 'devices', icon: DevicesIcon, link: '/devices' },
    { id: 7, name: 'users', icon: UsersIcon, link: '/users' },
    { id: 8, name: 'settings', icon: SettingsIcon, link: '/settings' },
    { id: 9, name: 'system', icon: SystemIcon, link: '/system' },
]

export const NavBar = () => {
    const { vulner, incident } = useAppSelector((store) => store.navbar)
    const { t } = useTranslation('navbar')
    const { theme } = useTheme()
    const { route } = useRouter()
    const [toggleCollapse, setToggleCollapse] = useState(false)
    const [isCollapse, setIsCollapse] = useState(false)
    const [postLogoutUser] = useLazyLogoutUserQuery()

    const onMouseOver = () => {
        setIsCollapse(!isCollapse)
    }

    const toggleNavBar = () => {
        setToggleCollapse(!toggleCollapse)
    }

    const wrapperClasses = cn(
        'h-screen overflow-auto px-2 w-20 pt-8 pb-4 bg-light dark:bg-darkD flex justify-between flex-col max-md:fixed sticky top-0 z-20',
        {
            ['w-52']: !toggleCollapse,
        }
    )

    const collapseIconClasses = cn(
        'p-4 rounded bg-light-lighter dark:bg-light-lighterD absolute right-0',
        {
            'rotate-180': toggleCollapse,
        }
    )

    const mainInfoClasses = cn(
        'absolute flex items-center justify-center left-1 h-[32px] w-[32px] rounded-2xl',
        {
            ['left-[-12px] top-[-4px] text-sm h-[23px] w-[23px] dark:bg-transparent bg-transparent dark:text-primary text-darkDD shadow-none underline underline-offset-2']:
                toggleCollapse,
        },
        { 'bg-primary shadow-dark': !toggleCollapse }
    )

    const getNavBarItemsClasses = (link: string) => {
        return cn(
            'flex items-center cursor-pointer hover:bg-light-lighter dark:hover:bg-light-lighterD rounded w-full overflow-hidden whitespace-nowrap',
            { ['bg-light-lighter dark:bg-light-lighterD']: route === link }
        )
    }

    return (
        <div
            className={wrapperClasses}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: 'width 400ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
        >
            <div className='flex flex-col'>
                <div className='flex items-center jastify-between relative'>
                    <div className='flex items-center pl-1 gap-4'>
                        <div
                            className={cn(
                                'absolute -top-20 right-5 flex flex-col items-center justify-center',
                                { hidden: toggleCollapse }
                            )}
                        >
                            <LogoIcon />
                        </div>
                    </div>
                    <button
                        className={cn(collapseIconClasses, {'hidden': !isCollapse }, 'max-lg:block')}
                        onClick={toggleNavBar}
                    >
                        <ShowIcon fill={theme === 'dark' ? 'white' : 'black'} />
                    </button>
                </div>
                <div className='flex flex-col items-start mt-[100px]'>
                    {menuItems.map((item) => {
                        return (
                            <div
                                className={getNavBarItemsClasses(item.link)}
                                key={item.id}
                            >
                                <Link
                                    href={item.link}
                                    className='flex py-[10px] px-4 gap-2 items-center w-full h-full'
                                >
                                    <div>
                                        <item.icon
                                            fill={
                                                theme === 'dark'
                                                    ? 'white'
                                                    : 'black'
                                            }
                                        />
                                    </div>
                                    {!toggleCollapse && (
                                        <span className='text-md font-medium text-text-light dark:text-text-lightD'>
                                            {t(item.name)}
                                        </span>
                                    )}
                                    <div className='relative flex items-center justify-center'>
                                        {item.name === 'vulns' && (
                                            <p
                                                className={cn(mainInfoClasses, {
                                                    ['scale-50']: vulner === 0,
                                                })}
                                            >
                                                {vulner === 0 ? null : vulner}
                                            </p>
                                        )}
                                        {item.name === 'events' && (
                                            <p
                                                className={cn(mainInfoClasses, {
                                                    ['scale-50']:
                                                        incident === 0,
                                                })}
                                            >
                                                {incident === 0
                                                    ? null
                                                    : incident}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link
                href={'/login'}
                onClick={() => postLogoutUser()}
                className='flex items-center cursor-pointer hover:bg-light-lighter dark:hover:bg-light-lighterD rounded w-full overflow-hidden whitespace-nowrap gap-2 px-4 py-[10px]'
            >
                <div>
                    <LogoutIcon fill={theme === 'dark' ? 'white' : 'black'} />
                </div>
                {!toggleCollapse && (
                    <span className='text-md font-medium text-text-light dark:text-text-lightD'>
                        {t('exit')}
                    </span>
                )}
            </Link>
        </div>
    )
}
