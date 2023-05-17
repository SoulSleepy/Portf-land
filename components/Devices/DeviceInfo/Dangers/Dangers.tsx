import { ClockIcon, DangerLevelIcon, DevicesIcon } from 'components/Icons/Icons'
import { useLazyGetDeviceTasksQuery } from 'state/rtk/devices.rtk'
import { useEffect, useState } from 'react'
import { toDate } from 'helpers/softFunctions'
import { useAppDispatch } from 'state/store'
import { GetDangerItemModal } from 'components/Modals/GetDangerItemModal'
import { openGetTaskItemModal } from 'state/slices/modals.slice'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from '@/components/Loader'

interface IProps {
    deviceId: number
}

export const Dangers = ({ deviceId }: IProps) => {
    const { theme } = useTheme()
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
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'

    return (
        <div className={blockClasses}>
            <div className='flex flex-col gap-2 h-[510px] overflow-auto'>
                <Loader isLoading={isLoading} >{data?.length ? (
                    data.map((item) => {
                        return (
                            <div
                                onClick={() => openModal(item.id)}
                                key={item.id}
                                className='flex flex-row gap-4 pl-3 hover:bg-light-lighter dark:hover:bg-light-lighterD cursor-pointer'
                            >
                                <div className='flex flex-col items-center justify-center relative'>
                                    <div className='scale-[2.0]'>
                                        <DangerLevelIcon
                                            fill={
                                                theme === 'dark'
                                                    ? 'white'
                                                    : 'black'
                                            }
                                        />
                                    </div>
                                    <p className='absolute top-[27px] font-medium text-[black] dark:text-light'>
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
                        Уязвимости отсутствуют
                    </p>
                )}</Loader>
            </div>
            <GetDangerItemModal id={taskId} />
        </div>
    )
}
