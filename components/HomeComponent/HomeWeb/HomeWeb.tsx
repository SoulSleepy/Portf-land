import {
    useGetToggleWiFiQuery,
    useLazyGetToggleWiFiQuery,
    useLazySetToggleWiFiQuery,
} from 'state/rtk/home.rtk'
import { ISetToggleWifiRequest } from 'types/types'
import { useState } from 'react'
import cn from 'classnames'
import { WifiOffIcon, WifiOnIcon } from 'components/Icons/Icons'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

export const HomeWeb = () => {
    const { t } = useTranslation('home')
    const [timeoutOn, setOnTimeout] = useState(false)
    const { data, isLoading } = useGetToggleWiFiQuery()
    const [getNewToggleWifi] = useLazyGetToggleWiFiQuery()
    const [setWifi] = useLazySetToggleWiFiQuery()

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-8 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const btnClasses = cn(
        'dark:bg-light-lighterD flex flex-col items-center justify-center h-8 w-[120px] cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter rounded-sm ml-auto',
        { 'opacity-30 hover:outline-none hover:font-normal': timeoutOn }
    )

    const toggleWifi = ({ started, range }: ISetToggleWifiRequest) => {
        if (timeoutOn === false) {
            setWifi({ range, started })
            setOnTimeout(true)
            setTimeout(setOnTimeout, 16000, false)
            setTimeout(getNewToggleWifi, 15000)
        }
    }

    return (
        <div className={blockClasses}>
            <div className='flex flex-row items-center justify-between h-8'>
                <p className={titleClasses}>{t('home network')}</p>
                <Loader size={75} children={''} isLoading={timeoutOn}/>
            </div>
            <hr className={hrClasses} />
            <div className='flex flex-col gap-4 h-28'>
                <Loader isLoading={isLoading}>
                    {typeof data !== 'string' && data?.map((item) => {
                        return (
                            <div
                                key={item.name}
                                className='flex flex-row h-[52px] gap-[10px] items-center'
                            >
                                <div className='flex flex-row gap-5 items-center'>
                                    <div className='scale-75'>
                                        {item.enabled === true ? (
                                            <WifiOnIcon />
                                        ) : (
                                            <WifiOffIcon />
                                        )}
                                    </div>
                                    <div className='w-[140px]'>
                                        <p className='font-medium text-xl whitespace-nowrap'>
                                            {item.name}
                                        </p>
                                        <p className='text-sm'>
                                            {item.range} {t('GHz')}, {t('channel')}{' '}
                                            {item.channel}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() =>
                                        toggleWifi({
                                            range: item.range,
                                            started: !item.enabled,
                                        })
                                    }
                                    className={btnClasses}
                                >
                                    {item.enabled === true
                                        ? t('off')
                                        : t('on')}
                                </button>
                            </div>
                        )
                    })}
                </Loader>
            </div>
        </div>
    )
}
