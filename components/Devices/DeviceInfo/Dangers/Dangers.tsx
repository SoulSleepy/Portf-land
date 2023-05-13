import {
    ClockIcon,
    DangerLevelIconIcon,
    DevicesIcon,
} from 'components/Icons/Icons'
import { useLazyGetDeviceTasksQuery } from 'state/rtk/devices.rtk'
import { useEffect, useState } from 'react'
import { toDate } from 'helpers/softFunctions'
import { useAppDispatch } from 'state/store'
import { GetDangerItemModal } from 'components/Modals/GetDangerItemModal'
import { openGetTaskItemModal } from 'state/slices/modals.slice'

interface IProps {
    deviceId: number
}

export const Dangers = ({ deviceId }: IProps) => {
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetTaskItemModal())
    }

    const [getDeviceTasks, { data, isLoading }] = useLazyGetDeviceTasksQuery()

    useEffect(() => {
        if (deviceId) {
            getDeviceTasks(deviceId)
        }
    }, [deviceId])

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'

    return (
        <div className={blockClasses}>
            <div className='flex flex-col gap-2 h-[365px] overflow-auto'>
                {data?.length ? (
                    data ? (
                        data.map((item) => {
                            return (
                                <div
                                    onClick={() => openModal(item.id)}
                                    key={item.id}
                                    className='flex flex-row gap-4 pl-3 hover:bg-light-lighter cursor-pointer'
                                >
                                    <div className='flex flex-col items-center justify-center relative'>
                                        <div className='scale-[2.0]'>
                                            <DangerLevelIconIcon />
                                        </div>
                                        <p className='absolute top-[27px] font-medium text-[black]'>
                                            {item.crt}
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-medium text-lg'>
                                            Найдено уязвимое ПО{' '}
                                            {item.titleVars.softName}
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
                    ) : (
                        <p>loading</p>
                    )
                ) : (
                    <p className='flex flex-col items-center justify-center text-2xl h-full'>
                        Уязвимости отсутствуют
                    </p>
                )}
            </div>
            <GetDangerItemModal id={taskId} />
        </div>
    )
}
