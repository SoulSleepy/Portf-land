import {
    useLazyAuthTimeoutQuery,
    useLazyAuthUserQuery,
} from 'state/rtk/auth.rtk'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import bgImage from '../../images/bg.png'
import { IAuthForm } from 'types/types'
import { HideInputIcon, LogoIcon, ShowInputIcon } from '../Icons/Icons'
import { Loader } from '../Loader'
import { useTimeoutLogin } from 'helpers/hooks/useTimeoutLogin'
import { useTranslation } from 'next-i18next'

export const Login = () => {
    const { t } = useTranslation('login')
    const [updateTimeout, { data: dataTimeout, isLoading: isLoadUpdate }] =
        useLazyAuthTimeoutQuery()
    const [postAuthUser, { data, isLoading }] = useLazyAuthUserQuery()

    const { timeoutLogin, timeoutTime } = useTimeoutLogin()

    useEffect(() => {
        updateTimeout()
    }, [timeoutLogin])

    const [show, setShow] = useState(false)

    const { register, handleSubmit } = useForm<IAuthForm>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        postAuthUser(data)
        updateTimeout()
    }

    const inputClasses =
        'flex items-center h-10 w-[250px] outline outline-1 hover:outline-2 focus:outline-2 outline-light outline rounded-lg pl-2 bg-transparent'
    const labelClasses =
        ' z-10 absolute -top-[12px] text-sm left-2 bg-[#141935] rounded-xl px-2'

    return (
        <div className='text-light flex h-screen justify-center items-center relative'>
            <Image
                className='absolute h-full w-full blur-[5px] object-cover'
                src={bgImage}
                alt='background'
            />
            <div className='flex flex-col items-center gap-[60px] mt-[-140px] h-[438px]'>
                <div className='flex z-10 h-[110px] ml-[-55px]'>
                    <LogoIcon />
                </div>
                <p className='z-10 font-medium text-2xl tracking-wider'>
                    {t('authorization')}
                </p>
                <Loader isLoading={isLoading || isLoadUpdate}>
                    <div className='flex mb-[-30px] items-center justify-center z-10 relative w-60'>
                        <p className='z-10 absolute'>
                            {timeoutLogin
                                ? `${t('next attempt in')} ${timeoutTime}`
                                : `${t('attempts сount')}: ${dataTimeout?.count}`}
                        </p>
                    </div>
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
                            <label className={labelClasses}>{t('login')}</label>
                        </div>
                        <div className='relative'>
                            <input
                                autoComplete='new-password'
                                className={inputClasses}
                                type={show ? 'text' : 'password'}
                                {...register('password')}
                            />
                            <label className={labelClasses}>
                                {t('password')}
                            </label>
                            <div
                                className='absolute cursor-pointer right-1 top-2'
                                onClick={() => setShow(!show)}
                            >
                                {show ? <ShowInputIcon /> : <HideInputIcon />}
                            </div>
                        </div>
                        <div className='relative'>
                            <button
                                disabled={timeoutLogin}
                                className='flex disabled:hidden mt-2 items-center justify-center h-8 w-[250px] uppercase font-medium  outline outline-0 bg-light-lighter bg-opacity-10 hover:bg-opacity-20 hover:outline-1 rounded-sm'
                                type='submit'
                            >
                                {t('login btn')}
                            </button>
                            {data?.msg === 'log-pass-error' && (
                                <div className='text-lightRed absolute flex items-center justify-center h-10 w-[250px]'>
                                    {t('incorrect сredentials')}
                                </div>
                            )}
                        </div>
                    </form>
                </Loader>
            </div>
        </div>
    )
}
