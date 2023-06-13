import cn from 'classnames'
import { DeviceInfo } from './DeviceInfo'
import { useEffect, useState } from 'react'
import { useGetDevicesListQuery } from 'state/rtk/devices.rtk'
import { IDeviceItem } from 'types/types'
import { toDate } from 'helpers/softFunctions'
import { DevicesIcon } from '../Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from '../Loader'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'state/store'
import { setActiveItem } from 'state/slices/devices.slice'

export const Devices = () => {
    const { t } = useTranslation('devices')
    const { theme } = useTheme()
    const { data, isLoading } = useGetDevicesListQuery()
    const dispatch = useAppDispatch()
    const { activeItem } = useAppSelector((store) => store.devices)
    // const [activeItem, setActiveItem] = useState({ id: 1 } as IDeviceItem)
    const { query } = useRouter()

    useEffect(() => {
        if (data) {
            if (query.id === undefined) {
                dispatch(setActiveItem(data?.[0]))
            } else {
                dispatch(setActiveItem(
                    (data as IDeviceItem[]).find(
                        (item) => item.id === Number(query.id)
                    ) as IDeviceItem
                ))
            }
        }
    }, [data])

    const colorFill = (value: boolean) => {
        if (!value) {
            if (theme === 'dark') return '#bebebe'
            else return '#6C7281'
        } else if (theme === 'dark') return 'white'
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'

    return (
        <div className='grid grid-cols-[1fr_2.4fr] gap-3 text-text-light'>
            <div className={blockClasses}>
                <div>
                    <input
                        className='p-1 h-[32px] w-full outline outline-1 rounded-md hover:outline-2 dark:bg-darkD outline-text-light dark:outline-text-lightD'
                        type='text'
                        placeholder={`${t('search')}`}
                    />
                </div>
                <div className='flex flex-col gap-2 h-[600px] overflow-auto'>
                    <Loader isLoading={isLoading}>
                        {data?.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={cn(
                                        'flex flex-row gap-3 hover:bg-light-lighter dark:hover:bg-light-lighterD cursor-pointer',
                                        {
                                            ['bg-light-lighter dark:bg-light-lighterD  border-r-[2px] border-primary']:
                                                item.id === activeItem.id,
                                        },
                                        {
                                            'dark:text-light':
                                                item.online === true,
                                        }
                                    )}
                                    onClick={() => dispatch(setActiveItem(item))}
                                >
                                    <div className='flex items-center pl-1 scale-110'>
                                        <DevicesIcon
                                            fill={colorFill(
                                                item.online === true
                                            )}
                                        />
                                    </div>
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
                                                ? `${t('logged')} ${toDate(
                                                      item.online as any
                                                  )}`
                                                : item.ip}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </Loader>
                </div>
            </div>
            <Loader isLoading={isLoading}>
                <DeviceInfo device={activeItem} />
            </Loader>
        </div>
    )
}
