import { closeUpdateUserModal } from 'state/slices/modals.slice'
import { useAppDispatch, useAppSelector } from 'state/store'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useGetUpdateUserMutation } from 'state/rtk/users.rtk'
import { IUpdateUserForm, IUserItem } from 'types/types'
import { useTheme } from 'helpers/hooks/useTheme'
import { HideInputIcon, ShowInputIcon } from 'components/Icons/Icons'
import { useTranslation } from 'next-i18next'

interface IProps {
    user: IUserItem
}

export const UpdateUserModal = ({ user }: IProps) => {
    const { t } = useTranslation('modals')
    const { theme } = useTheme()
    const [getUpdateUser] = useGetUpdateUserMutation()
    const [show, setShow] = useState(false)
    const dispatch = useAppDispatch()
    const { isOpenUpdateUser } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeUpdateUserModal())
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setValue,
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
        ' z-10 absolute -top-[12px] text-sm left-2 bg-light dark:bg-darkD rounded-xl px-2'
    const btnClasses =
        'flex mt-2 items-center justify-center h-8 w-[250px] uppercase hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenUpdateUser} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light dark:bg-darkDD rounded-md text-text-light dark:text-text-lightD'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>
                    {t('edit user')}
                </p>
                <form
                    className='flex flex-col gap-6 mt-3'
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete='off'
                >
                    <div className='relative z-10'>
                        <input
                            className={inputClasses}
                            {...register('login')}
                        />
                        <label className={labelClasses}>{t('login')}</label>
                    </div>
                    <div className='relative'>
                        <input
                            autoComplete='new-password'
                            className={inputClasses}
                            type={show ? 'text' : 'password'}
                            {...register('password')}
                        />
                        <label className={labelClasses}>{t('password')}</label>
                        <div
                            className='absolute cursor-pointer right-1 top-2'
                            onClick={() => setShow(!show)}
                        >
                            {show ? (
                                <ShowInputIcon
                                    fill={
                                        theme === 'dark' ? '#bebebe' : '#6C7281'
                                    }
                                />
                            ) : (
                                <HideInputIcon
                                    fill={
                                        theme === 'dark' ? '#bebebe' : '#6C7281'
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <div className='relative'>
                        <button className={btnClasses} type='submit'>
                        {t('change')}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
