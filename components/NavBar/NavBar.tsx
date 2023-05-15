import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
    HomeIcon,
    ShowIcon,
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

interface IMenuItem {
    id: number
    name: string
    icon: ({ fill }: { fill?: string | undefined }) => JSX.Element
    link: string
}

const menuItems: IMenuItem[] = [
    { id: 1, name: 'Главная', icon: HomeIcon, link: '/' },
    { id: 2, name: 'Карта сети', icon: NetIcon, link: '/map' },
    { id: 3, name: 'VPN', icon: NetIcon, link: '/vpn' },
    { id: 4, name: 'Уязвимости', icon: DangerIcon, link: '/danger' },
    { id: 5, name: 'События', icon: EventIcon, link: '/event' },
    { id: 6, name: 'Устройства', icon: DevicesIcon, link: '/devices' },
    { id: 7, name: 'Пользователи', icon: UsersIcon, link: '/users' },
    { id: 8, name: 'Настройки', icon: SettingsIcon, link: '/settings' },
    { id: 9, name: 'Система', icon: SystemIcon, link: '/system' },
]

export const NavBar = () => {
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
        'h-screen px-2 w-20 pt-8 pb-4 bg-light dark:bg-darkD flex justify-between flex-col sticky top-0 z-10',
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
                    {isCollapse && (
                        <button
                            className={collapseIconClasses}
                            onClick={toggleNavBar}
                        >
                            <ShowIcon fill={theme === 'dark' ? 'white' : 'black'}/>
                        </button>
                    )}
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
                                            {item.name}
                                        </span>
                                    )}
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
                        Выход
                    </span>
                )}
            </Link>
        </div>
    )
}
