import cn from 'classnames'
import { useState } from 'react'
import Image from 'next/image'
import showInputIconB from '../../../images/showInputIconB.svg'
import hideInputIconB from '../../../images/hideInputIconB.svg'

export const ChangeAuth = () => {
    const [show, setShow] = useState(false)

    const blockClasses = 'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 hover:outline-2 focus:outline-2 outline-text-light'
    const labelClasses =
        'bg-light text-sm absolute -top-[13px] left-1 leading-[17px]'
    const btnClasses =
        'flex flex-col items-center justify-center cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter rounded-sm p-3'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Смена авторизационных данных</p>
            <hr className={hrClasses} />
            <div className='flex flex-col gap-5 mt-2'>
                <div className='relative w-[250px]'>
                    <label className={labelClasses}>Логин</label>
                    <input className={inputClasses} type='text' />
                </div>
                <div className='relative w-[250px]'>
                    <label className={labelClasses}>Пароль</label>
                    <input
                        className={inputClasses}
                        type={show ? 'text' : 'password'}
                    />
                    <Image
                        className='absolute cursor-pointer right-1 top-[3px]'
                        onClick={() => setShow(!show)}
                        src={show ? showInputIconB : hideInputIconB}
                        alt='showpass'
                    />
                </div>
            </div>
            <button className={cn(btnClasses, 'h-8 w-[120px] mt-2')}>
                Сохранить
            </button>
        </div>
    )
}
