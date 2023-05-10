import { closeUpdateUserModal } from 'state/slices/modals.slice'
import { useAppDispatch, useAppSelector } from 'state/store'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal'
import { SubmitHandler, set, useForm } from 'react-hook-form'
import Image from 'next/image'
import showInputIcon from '../../../images/showInputIconB.svg'
import hideInputIcon from '../../../images/hideInputIconB.svg'
import { useGetUpdateUserMutation } from 'state/rtk/users.rtk'
import { IUpdateUserForm, IUserItem } from 'types/types'

interface IProps {
    user: IUserItem
}

export const UpdateUserModal = ({user}: IProps) => {
    const [getUpdateUser] = useGetUpdateUserMutation()
    const [show, setShow] = useState(false)
    const dispatch = useAppDispatch()
    const {isOpenUpdateUser} = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeUpdateUserModal())
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setValue
    } = useForm<IUpdateUserForm>({
        mode: 'onBlur',
    })

    useEffect(() => {
        setValue('id', user.id)
        setValue('login', user.login)
    }, [user])

    const onSubmit: SubmitHandler<IUpdateUserForm> = (data) => {
        getUpdateUser(data)
        onClose()
    }

    const inputClasses =
        'flex items-center h-10 w-[250px] outline outline-1 hover:outline-2 focus:outline-2 rounded-lg pl-2 bg-transparent'
    const labelClasses =
        ' z-10 absolute -top-[12px] text-sm left-2 bg-light rounded-xl px-2'
    const btnClasses = 'flex mt-2 items-center justify-center h-8 w-[250px] uppercase hover:font-medium outline outline-0 bg-light-lighter hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenUpdateUser} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light rounded-md text-text-light'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>
                    Редактировать пользователя
                </p>
                <form
                    className='flex flex-col gap-6'
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete='off'
                >
                    <div className='relative z-10'>
                        <input
                            className={inputClasses}
                            {...register('login')}
                        />
                        <label className={labelClasses}>Логин</label>
                    </div>
                    <div className='relative'>
                        <input
                            className={inputClasses}
                            type={show ? 'text' : 'password'}
                            {...register('password')}
                        />
                        <label className={labelClasses}>Пароль</label>
                        <Image
                            className='absolute cursor-pointer right-1 top-2'
                            onClick={() => setShow(!show)}
                            src={show ? showInputIcon : hideInputIcon}
                            alt='showpass'
                        />
                    </div>
                    <div className='relative'>
                        <button
                            className={btnClasses}
                            type='submit'
                        >
                            Изменить
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
