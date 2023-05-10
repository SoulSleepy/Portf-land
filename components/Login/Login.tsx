import { useLazyAuthUserQuery } from 'state/rtk/auth.rtk'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Image from 'next/image'
import bgImage from '../../images/bg.png'
import { IAuthForm } from 'types/types'
import { HideInputIcon, ShowInputIcon } from '../Icons/Icons'

export const Login = () => {
    const [show, setShow] = useState(false)

    const { register, handleSubmit } = useForm<IAuthForm>({
        mode: 'onBlur',
    })

    const [postAuthUser, { isError }] = useLazyAuthUserQuery()
    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        postAuthUser(data)
        console.log(data)
    }

    const inputClasses =
        'flex items-center h-10 w-[250px] outline outline-1 hover:outline-2 focus:outline-2 rounded-lg pl-2 bg-transparent'
    const labelClasses =
        ' z-10 absolute -top-[12px] text-sm left-2 bg-[#141935] rounded-xl px-2'

    return (
        <>
            <style jsx global>
                {`
                    input.flex:-webkit-autofill,
                    input.flex:-webkit-autofill:hover,
                    input.flex:-webkit-autofill:focus,
                    input.flex:-webkit-autofill:active {
                        -webkit-box-shadow: 0 0 0 50px #141935 inset;
                        -webkit-text-fill-color: #6c7281;
                    }
                `}
            </style>
            <div className='text-light flex h-screen justify-center items-center relative'>
                <Image
                    className='absolute h-full w-full blur-[5px] object-cover'
                    src={bgImage}
                    alt='background'
                />
                <div className='flex flex-col items-center gap-16'>
                    <p className='z-10 font-medium text-2xl tracking-wider'>
                        Авторизация
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
                            <div
                                className='absolute cursor-pointer right-1 top-2'
                                onClick={() => setShow(!show)}
                            >
                                {show ? <ShowInputIcon /> : <HideInputIcon />}
                            </div>
                        </div>
                        <div className='relative'>
                            <button
                                className='flex mt-2 items-center justify-center h-8 w-[250px] uppercase font-medium  outline outline-0 bg-light-lighter bg-opacity-10 hover:bg-opacity-20 hover:outline-1 rounded-sm'
                                type='submit'
                            >
                                Войти
                            </button>
                            {isError && (
                                <div className='text-lightRed absolute flex items-center justify-center h-10 w-[250px]'>
                                    Не верный логин или пароль
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
