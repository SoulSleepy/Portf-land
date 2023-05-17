import { ClockIcon, DangerLevelIcon, DevicesIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { useGetDangerListQuery } from 'state/rtk/dangerAndEvent.rtk'
import { useFilter } from 'helpers/hooks/useFilter'
import { GetDangerItemModal } from 'components/Modals/GetDangerItemModal'
import { useAppDispatch } from 'state/store'
import { useState } from 'react'
import { openGetTaskItemModal } from 'state/slices/modals.slice'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'

export const InWork = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetTaskItemModal())
    }

    const { filter } = useFilter()
    const { data, isLoading } = useGetDangerListQuery(filter)

    return (
        <div className='flex flex-col gap-2 h-[610px] overflow-auto'>
            <Loader isLoading={isLoading}>
                {data?.length ? (
                    data?.map((item) => {
                        return (
                            <div
                                onClick={() => openModal(item.id)}
                                key={item.id}
                                className='flex flex-row gap-4 hover:bg-light-lighter dark:hover:bg-light-lighterD cursor-pointer'
                            >
                                <div className='flex flex-col items-center justify-center relative pl-3'>
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
                                        {item.titles?.ru}
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
                                <p className='flex ml-auto pr-2 items-center'>
                                    #{item.id}
                                </p>
                            </div>
                        )
                    })
                ) : (
                    <p className='flex flex-col items-center justify-center text-2xl h-full'>
                        Уязвимости отсутствуют
                    </p>
                )}
            </Loader>
            <GetDangerItemModal id={taskId} />
        </div>
    )
}
