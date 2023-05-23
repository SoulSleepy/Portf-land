import { closeConnectServerModal } from 'state/slices/modals.slice'
import { useAppDispatch, useAppSelector } from 'state/store'
import { Modal } from '../Modal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { ConnectServer2 } from './ConnectServer2'
import { useLazyGetRegistrationServerQuery } from 'state/rtk/system.rtk'
import { IRegisterItems, IRegisterServerForm } from 'types/types'

export const ConnectServerModal = () => {
    const [path, setPath] = useState('1')
    const [registerKey, { data, isLoading }] =
        useLazyGetRegistrationServerQuery()

    const dispatch = useAppDispatch()
    const { isOpenConnectServer } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeConnectServerModal())
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IRegisterServerForm>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IRegisterServerForm> = (data) => {
        registerKey(data)
        setPath('2')
    }

    const inputClasses =
        'flex items-center h-10 w-[250px] outline outline-1 hover:outline-2 focus:outline-2 rounded-lg pl-2 bg-transparent'
    const labelClasses =
        ' z-10 absolute -top-[12px] text-sm left-2 bg-light dark:bg-darkDD rounded-xl px-2'
    const btnClasses =
        'flex mt-2 items-center justify-center h-8 w-[250px] uppercase hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenConnectServer} onClose={onClose}>
            {path === '1' && (
                <div
                    className='flex flex-col p-5 items-center gap-5 bg-light dark:bg-darkDD rounded-md text-text-light dark:text-text-lightD'
                    onClick={(event) => event.stopPropagation()}
                >
                    <p className='font-medium text-xl tracking-wider'>
                        Введите ключ
                    </p>
                    <form
                        className='flex flex-col gap-6 mt-3'
                        onSubmit={handleSubmit(onSubmit)}
                        autoComplete='off'
                    >
                        <div className='relative z-10'>
                            <input
                                className={inputClasses}
                                {...register('domain')}
                            />
                            <label className={labelClasses}>Domain</label>
                        </div>
                        <div className='relative'>
                            <input
                                autoComplete='new-password'
                                className={inputClasses}
                                type='text'
                                {...register('init_key')}
                            />
                            <label className={labelClasses}>Ваш ключ</label>
                        </div>
                        <div className='relative'>
                            <button className={btnClasses} type='submit'>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {path === '2' && (
                <ConnectServer2
                    items={data as IRegisterItems[]}
                    isLoading={isLoading}
                    onClose={onClose}
                />
            )}
        </Modal>
    )
}
