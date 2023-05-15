import Image from 'next/image'
import userIcon from '../../images/userIcon.svg'
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

export const Users = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading } = useGetUsersQuery()
    const [activeItem, setActiveItem] = useState({ id: 1 } as IUserItem)

    useEffect(() => {
        if (data) {
            setActiveItem(data?.[0])
        }
    }, [data])

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const btnInfoClasses =
        'flex flex-col items-center justify-center cursor-pointer h-8 w-36 outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter rounded-sm'

    return (
        <div className='grid grid-cols-[1fr_2.4fr] gap-3 text-text-light'>
            <div className={blockClasses}>
                <div className=''>
                    <input
                        className='p-1 h-[32px] w-full outline outline-1 rounded-md hover:outline-2 outline-text-light'
                        type='text'
                        placeholder='Search for users'
                    />
                </div>
                <div className='flex flex-col gap-2 h-[415px] overflow-auto'>
                    {isLoading ? (
                        <p>loading</p>
                    ) : (
                        data?.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={cn(
                                        'flex flex-row gap-3 hover:bg-light-lighter cursor-pointer',
                                        {
                                            ['bg-light-lighter border-r-[2px] border-primary']:
                                                item.id === activeItem.id,
                                        }
                                    )}
                                    onClick={() => setActiveItem(item)}
                                >
                                    <Image
                                        src={userIcon}
                                        width={28}
                                        height={28}
                                        alt='devices'
                                    />
                                    <div className='flex flex-col leading-3'>
                                        <p className='text-base'>
                                            {item.login}
                                        </p>
                                        <p className='text-sm'>{item.role}</p>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
                <button
                    className={cn(btnInfoClasses, 'rounded-md w-full')}
                    onClick={() => dispatch(openCreateUserModal())}
                >
                    Создать
                </button>
            </div>
            <div className='flex flex-col gap-3 overflow-auto h-[520px]'>
                <div className={blockClasses}>
                    <p className={titleClasses}>Информация о пользователе</p>
                    <hr className={hrClasses} />
                    <div className='flex flex-row justify-between p-2'>
                        <div className='flex flex-col'>
                            <p>id</p>
                            <p>Логин</p>
                            <p>Роль</p>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p>{activeItem.id}</p>
                            <p>{activeItem.login}</p>
                            <p>{activeItem.role}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <button className={btnInfoClasses} onClick={() => dispatch(openUpdateUserModal())}>
                            Редактировать
                        </button>
                        <button
                            className={btnInfoClasses}
                            onClick={() => dispatch(openDeleteUserModal())}
                        >
                            Удалить
                        </button>
                    </div>
                </div>
                <UserEvents userId={activeItem.id} />
            </div>
            <UpdateUserModal user={activeItem} />
            <DeleteUserModal id={activeItem.id} />
            <CreateUserModal />
        </div>
    )
}
