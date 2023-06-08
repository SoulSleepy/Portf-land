import { IAuthForm } from 'types/types'
import cn from 'classnames'
import { HideInputIcon, ShowInputIcon } from 'components/Icons/Icons'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLazyCrateUserQuery } from 'state/rtk/auth.rtk'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'
import { useAppSelector } from 'state/store'
import { useRouter } from 'next/router'

export const Registration = () => {
    const { activeUser } = useAppSelector((store) => store.auth)
    const { push } = useRouter()
    const { t } = useTranslation('login')
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [error, setError] = useState(false)
    const [createUser, { isLoading }] = useLazyCrateUserQuery()

    const inputClasses =
        'flex items-center h-10 w-full outline outline-1 hover:outline-2 focus:outline-2 rounded-lg pl-2 bg-transparent'

    const { register, handleSubmit, watch } = useForm<IAuthForm>({
        mode: 'onBlur',
    })

    const [password, password2] = watch(['password', 'password2'])

    useEffect(() => {
        if (password2 !== '') {
            if (password === password2) {
                setError(false)
            } else {
                setError(true)
            }
        }
    }, [password, password2])

    useEffect(() => {
        if (activeUser) {
            push('/')
        }
    }, [activeUser])

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        if (!error) {
            const params = { login: data.login, password: data.password }
            createUser(params)
        }
    }

    return (
        <Loader isLoading={isLoading}>
            <div className='flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2 z-10 w-[400px]'>
                <p className='flex font-medium h-10 items-center text-lg border-b-[1px] pb-1'>
                    {t('registration')}
                </p>
                <form
                    className='flex flex-col gap-6'
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete='off'
                >
                    <input
                        className={inputClasses}
                        type='text'
                        placeholder={`${t('login')}`}
                        {...register('login')}
                    />
                    <div className='relative'>
                        <input
                            className={inputClasses}
                            type={show1 ? 'text' : 'password'}
                            placeholder={`${t('password')}`}
                            {...register('password')}
                        />
                        <div
                            className='absolute cursor-pointer right-1 top-2'
                            onClick={() => setShow1(!show1)}
                        >
                            {show1 ? (
                                <ShowInputIcon fill='#6C7281' />
                            ) : (
                                <HideInputIcon fill='#6C7281' />
                            )}
                        </div>
                    </div>
                    <div className='relative'>
                        <input
                            className={inputClasses}
                            type={show2 ? 'text' : 'password'}
                            placeholder={`${t('repeat password')}`}
                            {...register('password2')}
                        />
                        <div
                            className='absolute cursor-pointer right-1 top-2'
                            onClick={() => setShow2(!show2)}
                        >
                            {show2 ? (
                                <ShowInputIcon fill='#6C7281' />
                            ) : (
                                <HideInputIcon fill='#6C7281' />
                            )}
                        </div>
                    </div>
                    <div className='relative'>
                        <button
                            className={cn(
                                'flex mt-2 items-center justify-center h-8 w-full uppercase outline outline-0 bg-light-lighter hover:font-medium hover:outline-1 rounded-sm',
                                {
                                    'hover:outline-0 hover:font-normal hover:cursor-default':
                                        error,
                                }
                            )}
                            type='submit'
                        >
                            {t('create')}
                        </button>
                        {error && (
                            <div className='text-lightRed absolute -top-7 -left-10 flex items-center justify-center h-10 w-[250px]'>
                                {t('passwords do not match')}
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </Loader>
    )
}
