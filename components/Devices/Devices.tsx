import cn from 'classnames'
import Image from 'next/image'
import devicesIcon from '../../images/devicesIcon.svg'
import { DeviceInfo } from './DeviceInfo'
import { useEffect, useState } from 'react'
import { useGetDevicesListQuery } from 'state/rtk/devices.rtk'
import { IDeviceItem } from 'types/types'
import { toDate } from 'helpers/softFunctions'

export const Devices = () => {
    const {data, isLoading} = useGetDevicesListQuery()
    const [activeItem, setActiveItem] = useState({id:1} as IDeviceItem)

    useEffect(() => {
        if (data) {
            setActiveItem(data?.[0])
        }
    }, [data])



    const blockClasses = 'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'

    return (
        <div className='grid grid-cols-[1fr_2.4fr] gap-3 text-text-light'>
            <div className={blockClasses}>
                <div className=''>
                    <input
                        className='p-1 h-[32px] w-full outline outline-1 rounded-md hover:outline-2 outline-text-light'
                        type='text'
                        placeholder='Search for device'
                    />
                </div>
                <div className='flex flex-col gap-2 h-[450px] overflow-auto'>
                    {isLoading ? <p>loading</p> : data?.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={cn('flex flex-row gap-3 hover:bg-light-lighter cursor-pointer',
                                {['bg-light-lighter border-r-[2px] border-primary']: item.id === activeItem.id})}
                                onClick={() => setActiveItem(item)}
                            >
                                <Image
                                    src={devicesIcon}
                                    width={28}
                                    height={28}
                                    alt='devices'
                                />
                                <div className='flex flex-col leading-4'>
                                    <p
                                        className={cn('text-base', {
                                            ['font-medium']:
                                                item.online === true,
                                        })}
                                    >
                                        {item.name}
                                    </p>
                                    <p
                                        className={cn('text-sm', {
                                            ['text-primary']:
                                                item.online === true,
                                        })}
                                    >
                                        {item.online !== true
                                            ? `был ${toDate(item.online as any)}`
                                            : item.ip}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <DeviceInfo device={activeItem} />
        </div>
    )
}
