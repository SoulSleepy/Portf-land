import cn from 'classnames'
import { useState } from 'react'
import { HideInputIcon, ShowInputIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { useTranslation } from 'next-i18next'

export const ChangeAuth = () => {
    const { t } = useTranslation('system')
    const { theme } = useTheme()
    const [show, setShow] = useState(false)

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 text-lg items-center'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer dark:bg-darkD outline-1 hover:outline-2 focus:outline-2 outline-text-light dark:outline-text-lightD'
    const labelClasses =
        'bg-light dark:bg-darkD text-sm absolute -top-[13px] left-1 leading-[17px]'
    const btnClasses =
        'flex flex-col items-center justify-center cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter dark:bg-light-lighterD rounded-sm p-3'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('change authorization data')}</p>
            <hr className={hrClasses} />
            <div className='flex flex-col gap-5 mt-2 h-[88px]'>
                <div className='relative w-[250px]'>
                    <label className={labelClasses}>{t('login')}</label>
                    <input className={inputClasses} type='text' />
                </div>
                <div className='relative w-[250px]'>
                    <label className={labelClasses}>{t('password')}</label>
                    <input
                        className={inputClasses}
                        type={show ? 'text' : 'password'}
                    />
                    <div
                        className='absolute cursor-pointer right-1 top-[3px]'
                        onClick={() => setShow(!show)}
                    >
                        {show ? <ShowInputIcon fill={
                                        theme === 'dark' ? '#bebebe' : '#6C7281'
                                    }/> : <HideInputIcon fill={
                                        theme === 'dark' ? '#bebebe' : '#6C7281'
                                    }/>}
                    </div>
                </div>
            </div>
            <button className={cn(btnClasses, 'h-8 w-[120px] mt-2')}>
                {t('save')}
            </button>
        </div>
    )
}
