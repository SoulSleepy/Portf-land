import {
    homeApi,
    useLazyGetSpeedNetQuery,
    useLazyGetSpeedTestQuery,
} from 'state/rtk/home.rtk'
import { useEffect, useState } from 'react'
import { UpdateIcon } from 'components/Icons/Icons'
import cn from 'classnames'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

export const Speed = () => {
    const { t } = useTranslation('home')
    const { theme } = useTheme()
    const [test, setTest] = useState(false)

    const [getSpeedResult, { data, isLoading, isError }] =
        useLazyGetSpeedNetQuery()
    const [startSpeedTest] = useLazyGetSpeedTestQuery()

    useEffect(() => {
        getSpeedResult()
    }, [test])

    const testSpeed = () => {
        if (test === false) {
            startSpeedTest()
            setTest(true)
            setTimeout(setTest, 45000, false)
        }
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl max-sm:p-2 p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium max-sm:h-6 h-8 items-center max-sm:text-base text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const dotClasses = 'w-1 h-1 bg-text-light rounded-[2px] dark:bg-text-lightD'
    const updateBtnClasses =
        'dark:bg-light-lighterD flex items-center justify-center bg-light-lighter rounded-[20px] h-[40px] w-[40px] hover:border max-sm:ml-0 ml-auto'

    return (
        <div className={blockClasses}>
            <div className='flex flex-row items-center justify-between max-sm:h-6 h-8'>
                <p className={titleClasses}>{t('internet connection speed')}</p>
                <Loader size={75} children={''} isLoading={test} />
            </div>
            <hr className={hrClasses} />
            <div className='flex max-sm:flex-col flex-row gap-2 items-center max-sm:h-24 h-11'>
                <Loader size={75} isLoading={isLoading}>
                    <div className='flex flex-row gap-3 items-center max-sm:h-[50px] h-[45px]'>
                        <div className='max-sm:w-12 max-sm:text-center w-14'>
                            <p className='text-xs uppercase'>
                                <b>{t('PING')}</b> MS
                            </p>
                            <p className='font-medium text-xl'>{data?.ping}</p>
                        </div>
                        <div className={dotClasses} />
                        <div className='max-sm:w-16 max-sm:text-center w-24'>
                            <p className='text-xs uppercase'>
                                <b>{t('receive')}</b> MBPS
                            </p>
                            <p className='font-medium text-xl'>
                                {data?.download}
                            </p>
                        </div>
                        <div className={dotClasses} />
                        <div className='max-sm:w-20 max-sm:text-center w-28'>
                            <p className='text-xs uppercase'>
                                <b>{t('transmit')}</b> MBPS
                            </p>
                            <p className='font-medium text-xl'>
                                {data?.upload}
                            </p>
                        </div>
                    </div>
                </Loader>
                <button
                    className={cn(
                        updateBtnClasses,
                        {
                            'rotate-[360deg] transition-transform duration-500':
                                !test,
                        },
                        {
                            'cursor-default opacity-30 hover:border-0':
                                test === true,
                        }
                    )}
                    onClick={() => testSpeed()}
                >
                    <UpdateIcon fill={theme === 'dark' ? 'white' : '#6C7281'} />
                </button>
            </div>
        </div>
    )
}
