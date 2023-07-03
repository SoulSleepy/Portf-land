import { useEffect, useState } from 'react'
import cn from 'classnames'
import { useGetUsersQuery } from 'state/rtk/users.rtk'
import { IUserItem } from 'types/types'
import { UserEvents } from './UserEvents'
import { CreateUserModal } from '../Modals/CreateUserModal'
import {
    openCreateUserModal,
    openDeleteUserModal,
    openUpdateUserModal,
} from 'state/slices/modals.slice'
import { DeleteUserModal } from '../Modals/DeleteUserModal'
import { UpdateUserModal } from '../Modals/UpdateUserModal'
import { useAppDispatch } from 'state/store'
import { UserIcon } from '../Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from '../Loader'
import { useTranslation } from 'next-i18next'

export const Users = () => {
    const { t } = useTranslation('users')
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const { data, isLoading } = useGetUsersQuery()
    const [activeItem, setActiveItem] = useState({ id: 1 } as IUserItem)

    useEffect(() => {
        if (data) {
            setActiveItem(data?.[0])
        }
    }, [data])

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const btnInfoClasses =
        'flex flex-col items-center justify-center cursor-pointer h-8 w-36 outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter dark:bg-light-lighterD rounded-sm'

    return (
        <div className='grid grid-cols-[1fr_2.4fr] gap-3 text-text-light'>
            <div className={blockClasses}>
                {/* <input
                    className='p-1 h-[32px] w-full outline outline-1 rounded-md hover:outline-2 outline-text-light dark:outline-text-lightD dark:bg-darkD'
                    type='text'
                    placeholder={`${t('search')}`} 
                />МОЖНО ДОПИЛИТЬ ПРИ ВОЗМОЖНОСТИ */}
                <div className='flex flex-col gap-2 h-[605px] overflow-auto'>
                    <Loader isLoading={isLoading}>
                        {data?.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={cn(
                                        'flex flex-row gap-3 hover:bg-light-lighter dark:hover:bg-light-lighterD cursor-pointer',
                                        {
                                            ['bg-light-lighter dark:bg-light-lighterD border-r-[2px] border-primary']:
                                                item.id === activeItem.id,
                                        }
                                    )}
                                    onClick={() => setActiveItem(item)}
                                >
                                    <div className='flex items-center pl-1 scale-110'>
                                        <UserIcon
                                            fill={
                                                theme === 'dark'
                                                    ? '#bebebe'
                                                    : '#6C7281'
                                            }
                                        />
                                    </div>
                                    <div className='flex flex-col leading-3'>
                                        <p className='text-base'>
                                            {item.login}
                                        </p>
                                        <p className='text-sm'>{item.role}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Loader>
                </div>
                <button
                    className={cn(btnInfoClasses, 'rounded-md w-full')}
                    onClick={() => dispatch(openCreateUserModal())}
                >
                    {t('create')}
                </button>
            </div>
            <div className='flex flex-col gap-3 h-[675px]'>
                <div className={blockClasses}>
                    <p className={titleClasses}>{t('user information')}</p>
                    <hr className={hrClasses} />
                    <div className='flex flex-row justify-between p-2'>
                        <div className='flex flex-col'>
                            <p>id</p>
                            <p>{t('login')}</p>
                            <p>{t('role')}</p>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p>{activeItem.id}</p>
                            <p>{activeItem.login}</p>
                            <p>{activeItem.role}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <button
                            className={btnInfoClasses}
                            onClick={() => dispatch(openUpdateUserModal())}
                        >
                            {t('edit')}
                        </button>
                        <button
                            className={btnInfoClasses}
                            onClick={() => dispatch(openDeleteUserModal())}
                        >
                            {t('delete')}
                        </button>
                    </div>
                </div>
                <Loader isLoading={isLoading}>
                    <UserEvents userId={activeItem.id} />
                </Loader>
            </div>
            <UpdateUserModal user={activeItem} />
            <DeleteUserModal id={activeItem.id} />
            <CreateUserModal />
        </div>
    )
}
