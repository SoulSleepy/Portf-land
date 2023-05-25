import { ClockIcon, DevicesIcon, EventIcon } from 'components/Icons/Icons'
import { useEffect, useState } from 'react'
import { useLazyGetDeviceIncidentsQuery } from 'state/rtk/devices.rtk'
import { toDate } from 'helpers/softFunctions'
import { openGetEventItemModal } from 'state/slices/modals.slice'
import { useAppDispatch } from 'state/store'
import { GetEventItemModal } from 'components/Modals/GetEventItemModal'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

interface IProps {
    deviceId: number
}

export const Events = ({ deviceId }: IProps) => {
    const { t } = useTranslation('events')
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetEventItemModal())
    }

    const [getDeviceIncidents, { data, isLoading }] =
        useLazyGetDeviceIncidentsQuery()

    useEffect(() => {
        if (deviceId) {
            getDeviceIncidents(deviceId)
        }
    }, [deviceId])

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'

    return (
        <div className={blockClasses}>
            <div className='flex flex-col gap-2 h-[510px] overflow-auto'>
                <Loader isLoading={isLoading}>
                    {data?.length ? (
                        data?.map((item) => {
                            return (
                                <div
                                    onClick={() => openModal(item.id)}
                                    key={item.id}
                                    className='flex flex-row gap-5 items-center pl-2  hover:bg-light-lighter dark:hover:bg-light-lighterD cursor-pointer'
                                >
                                    <div className='scale-[2.0]'>
                                        <EventIcon
                                            fill={
                                                theme === 'dark'
                                                    ? 'white'
                                                    : 'black'
                                            }
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-medium text-lg'>
                                            {t(`list.${item.type}.title`)}
                                        </p>
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row gap-2'>
                                                <ClockIcon
                                                    fill={
                                                        theme === 'dark'
                                                            ? '#bebebe'
                                                            : '#6C7281'
                                                    }
                                                />
                                                <p>{toDate(item.createTst)}</p>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <DevicesIcon
                                                    fill={
                                                        theme === 'dark'
                                                            ? '#bebebe'
                                                            : '#6C7281'
                                                    }
                                                />
                                                <p>{item.deviceInfo.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='flex ml-auto pr-1 items-center'>
                                        #{item.id}
                                    </p>
                                </div>
                            )
                        })
                    ) : (
                        <p className='flex flex-col items-center justify-center text-2xl h-full'>
                            {t('no events found')}
                        </p>
                    )}
                </Loader>
            </div>
            <GetEventItemModal id={taskId} />
        </div>
    )
}
