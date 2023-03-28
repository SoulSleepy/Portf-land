import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import {
    ZaglushLogoIcon,
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
} from '../Icons/Icons'

interface IMenuItem {
    id: number
    name: string
    icon: () => JSX.Element
    link: string
}

const menuItems: IMenuItem[] = [
    { id: 1, name: 'Главная', icon: HomeIcon, link: '/' },
    { id: 2, name: 'Карта сети', icon: NetIcon, link: '/map' },
    { id: 3, name: 'VPN', icon: NetIcon, link: '/vpn' },
    { id: 4, name: 'Уязвимости', icon: DangerIcon, link: '/danger' },
    { id: 5, name: 'События', icon: EventIcon, link: '/event' },
    { id: 6, name: 'Устройства', icon: DevicesIcon, link: '/' },
    { id: 7, name: 'Пользователи', icon: UsersIcon, link: '/' },
    { id: 8, name: 'Настройки', icon: SettingsIcon, link: '/' },
    { id: 9, name: 'Система', icon: SystemIcon, link: '/' },
]

export const NavBar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false)
    const [isCollapse, setIsCollapse] = useState(false)

    const router = useRouter()

    const activeMenu = useMemo<IMenuItem>(
        () =>
            menuItems.find(
                (menu) => menu.link === router.pathname
            ) as IMenuItem,
        [router.pathname]
    )

    const wrapperClasses = cn(
        'h-screen px-2 w-20 pt-8 pb-4 bg-light flex justify-between flex-col',
        {
            ['w-52']: !toggleCollapse,
        }
    )

    const collapseIconClasses = cn(
        'p-4 rounded bg-light-lighter absolute right-0',
        {
            'rotate-180': toggleCollapse,
        }
    )

    const getNavBarItemsClasses = (menu: Omit<IMenuItem, 'icon'>) => {
        return cn(
            'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap',
            { ['bg-light-lighter']: activeMenu.id === menu.id }
        )
    }

    const onMouseOver = () => {
        setIsCollapse(!isCollapse)
    }

    const toggleNavBar = () => {
        setToggleCollapse(!toggleCollapse)
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
                        <ZaglushLogoIcon />
                        <span
                            className={cn(
                                'mt-2 text-lg font-medium text-text',
                                { hidden: toggleCollapse }
                            )}
                        >
                            {/* Logo */}
                        </span>
                    </div>
                    {isCollapse && (
                        <button
                            className={collapseIconClasses}
                            onClick={toggleNavBar}
                        >
                            <ShowIcon />
                        </button>
                    )}
                </div>
                <div className='flex flex-col items-start mt-[40px]'>
                    {menuItems.map(({ icon: Icon, ...menu }) => {
                        return (
                            <div
                                className={getNavBarItemsClasses(menu)}
                                key={menu.id}
                            >
                                <Link
                                    href={menu.link}
                                    className='flex py-[10px] px-4 gap-2 items-center w-full h-full'
                                >
                                    <div>
                                        <Icon />
                                    </div>
                                    {!toggleCollapse && (
                                        <span
                                            className={cn(
                                                'text-md font-medium text-text-light'
                                            )}
                                        >
                                            {menu.name}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link
                href={'/'}
                className='flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap gap-2 px-4 py-[10px]'
            >
                <div>
                    <LogoutIcon />
                </div>
                {!toggleCollapse && (
                    <span className={cn('text-md font-medium text-text-light')}>
                        Выход
                    </span>
                )}
            </Link>
        </div>
    )
}
