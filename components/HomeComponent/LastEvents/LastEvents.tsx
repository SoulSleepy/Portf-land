import { IIncidentsItem } from 'types/types'
import { EventIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { useAppDispatch } from 'state/store'
import { useState } from 'react'
import { openGetEventItemModal } from 'state/slices/modals.slice'
import { GetEventItemModal } from 'components/Modals/GetEventItemModal'
import { eventTypeObj } from 'helpers/consts'
import { useTheme } from 'helpers/hooks/useTheme'

interface IProps {
    eventList: IIncidentsItem[]
    isLoading: boolean
}

export const LastEvents = ({ eventList, isLoading }: IProps) => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetEventItemModal())
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2 h-[322px]'
    const titleClasses = 'flex font-medium h-8 items-center text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const eventDangerClasses =
        'flex flex-row items-center gap-2 p-1 bg-light-lighter dark:bg-light-lighterD cursor-pointer'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Последние события</p>
            <hr className={hrClasses} />
            <div className='flex flex-col h-[250px] overflow-auto gap-2'>
                {isLoading ? (
                    <p className='Loading'></p>
                ) : (
                    eventList.map((item) => {
                        return (
                            <div
                                className={eventDangerClasses}
                                key={item.id}
                                onClick={() => openModal(item.id)}
                            >
                                <div className='scale-110'>
                                    <EventIcon fill={theme === 'dark' ? 'white': '#6C7281'}/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='leading-5'>
                                        {eventTypeObj[item.type as number]?.title}
                                    </p>
                                    <p className='text-sm'>
                                        {toDate(item.createTst)}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            <GetEventItemModal id={taskId}/>
        </div>
    )
}
