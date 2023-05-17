import { ClockIcon, DevicesIcon, EventIcon } from 'components/Icons/Icons'
import { FilterEvent } from './FilterEvent'
import { useFilter } from 'helpers/hooks/useFilter'
import { useGetEventListQuery } from 'state/rtk/dangerAndEvent.rtk'
import { toDate } from 'helpers/softFunctions'
import { openGetEventItemModal } from 'state/slices/modals.slice'
import { useState } from 'react'
import { useAppDispatch } from 'state/store'
import { GetEventItemModal } from '../Modals/GetEventItemModal'
import { eventTypeObj } from 'helpers/consts'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from '../Loader'

export const Event = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetEventItemModal())
    }

    const { filter } = useFilter()
    const { data, isLoading } = useGetEventListQuery(filter)

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2 dark:bg-darkD dark:text-text-lightD'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full mb-3'

    return (
        <div className='grid grid-cols-[2.4fr_1fr] gap-3 text-text-light h-[670px]'>
            <div className={blockClasses}>
                <div className='flex flex-col gap-2 h-[640px] overflow-auto'>
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
                                                {
                                                    eventTypeObj[
                                                        item.type as number
                                                    ]?.title
                                                }
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
                                                    <p>
                                                        {toDate(item.createTst)}
                                                    </p>
                                                </div>
                                                <div className='flex flex-row gap-2'>
                                                    <DevicesIcon
                                                        fill={
                                                            theme === 'dark'
                                                                ? '#bebebe'
                                                                : '#6C7281'
                                                        }
                                                    />
                                                    <p>
                                                        {item.deviceInfo.name}
                                                    </p>
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
                                События отсутствуют
                            </p>
                        )}
                    </Loader>
                </div>
            </div>
            <div className={blockClasses}>
                <p className='flex font-medium h-10 items-center text-lg'>
                    Фильтр
                </p>
                <hr className={hrClasses} />
                <FilterEvent />
            </div>
            <GetEventItemModal id={taskId} />
        </div>
    )
}
