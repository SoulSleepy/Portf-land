import { ClockIcon, DevicesIcon, EventIcon } from 'components/Icons/Icons'
import { useEffect, useState } from 'react'
import { useLazyGetDeviceIncidentsQuery } from 'state/rtk/devices.rtk'
import { toDate } from 'helpers/softFunctions'
import { openGetEventItemModal } from 'state/slices/modals.slice'
import { useAppDispatch } from 'state/store'
import { GetEventItemModal } from 'components/Modals/GetEventItemModal'

interface IProps {
    deviceId: number
}

export const Events = ({ deviceId }: IProps) => {
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
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'

    return (
        <div className={blockClasses}>
            <div className='flex flex-col gap-2 h-[365px] overflow-auto'>
                {data?.length ? (
                    isLoading ? (
                        <p>loading</p>
                    ) : (
                        data?.map((item) => {
                            return (
                                <div
                                    onClick={() => openModal(item.id)}
                                    key={item.id}
                                    className='flex flex-row gap-5 items-center pl-2  hover:bg-light-lighter cursor-pointer'
                                >
                                    <div className='scale-[2.0]'>
                                        <EventIcon fill={'black'} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-medium text-lg'>
                                            {item.type === 5
                                                ? 'Рассылка пакетов отключения пользователей от Wifi-сети'
                                                : 'неизвестно'}
                                        </p>
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row gap-2'>
                                                <ClockIcon />
                                                <p>{toDate(item.createTst)}</p>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <DevicesIcon />
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
                    )
                ) : (
                    <p className='flex flex-col items-center justify-center text-2xl h-full'>
                        События отсутствуют
                    </p>
                )}
            </div>
            <GetEventItemModal id={taskId}/>
        </div>
    )
}
