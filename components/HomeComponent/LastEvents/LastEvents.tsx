import { IIncidentsItem } from 'types/types'
import { EventIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { useAppDispatch } from 'state/store'
import { useState } from 'react'
import { openGetEventItemModal } from 'state/slices/modals.slice'
import { GetEventItemModal } from 'components/Modals/GetEventItemModal'

interface IProps {
    eventList: IIncidentsItem[]
    isLoading: boolean
}

export const LastEvents = ({ eventList, isLoading }: IProps) => {
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetEventItemModal())
    }

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const eventDangerClasses =
        'flex flex-row items-center gap-2 p-1 bg-light-lighter cursor-pointer'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Последние события</p>
            <hr className={hrClasses} />
            <div className='flex flex-col h-[280px] overflow-auto gap-2'>
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
                                    <EventIcon />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='leading-5'>
                                        {item.type === 5
                                            ? 'Рассылка пакетов отключения пользователей от Wifi-сети'
                                            : 'неизвестно'}
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
