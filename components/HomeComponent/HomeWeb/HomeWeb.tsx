import Image from 'next/image'
import wifiIcon from '../../../images/wifiIcon.svg'
import noWifiIcon from '../../../images/noWifiIcon.svg'
import {
    useGetToggleWiFiQuery,
    useLazyGetToggleWiFiQuery,
    useLazySetToggleWiFiQuery,
} from 'state/rtk/home.rtk'
import { ISetToggleWifiRequest } from 'types/types'
import { useState } from 'react'
import cn from 'classnames'

export const HomeWeb = () => {
    const [timeoutOn, setOnTimeout] = useState(false)
    const { data, isLoading } = useGetToggleWiFiQuery()
    const [getNewToggleWifi] = useLazyGetToggleWiFiQuery()
    const [setWifi] = useLazySetToggleWiFiQuery()

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const btnClasses =
        cn('flex flex-col items-center justify-center h-8 w-[120px] cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter rounded-sm ml-auto', {'opacity-30 hover:outline-none hover:font-normal': timeoutOn})

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
            <p className={titleClasses}>Домашняя сеть</p>
            <hr className={hrClasses} />
            <div className='flex flex-col gap-4'>
                {isLoading ? (
                    <p className='h-[120px]'>loading</p>
                ) : (
                    data?.map((item) => {
                        return (
                            <div
                                key={item.name}
                                className='flex flex-row h-[52px] gap-[10px] items-center'
                            >
                                <div className='flex flex-row gap-5'>
                                    <Image
                                        src={
                                            item.enabled === true
                                                ? wifiIcon
                                                : noWifiIcon
                                        }
                                        alt='wifiOnOff'
                                        width={45}
                                        height={45}
                                    />
                                    <div className='w-[140px]'>
                                        <p className='font-medium text-xl'>
                                            {item.name}
                                        </p>
                                        <p className='text-sm'>
                                            {item.range} Ггц, канал{' '}
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
                                        ? 'Выключить'
                                        : 'Включить'}
                                </button>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
