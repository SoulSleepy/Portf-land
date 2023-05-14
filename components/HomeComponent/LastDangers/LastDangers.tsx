import { IGetDangerInfo, ITaskItem } from 'types/types'
import { DangerIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { GetDangerItemModal } from 'components/Modals/GetDangerItemModal'
import { useAppDispatch } from 'state/store'
import { openGetTaskItemModal } from 'state/slices/modals.slice'
import { useState } from 'react'
import { useTheme } from 'helpers/hooks/useTheme'

interface IProps {
    dangerList: ITaskItem[]
    isLoading: boolean
}

export const LastDangers = ({ dangerList, isLoading }: IProps) => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetTaskItemModal())
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2 h-[337px]'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const eventDangerClasses =
        'flex flex-row items-center gap-2 p-1 bg-light-lighter dark:bg-light-lighterD cursor-pointer'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Последние уязвимости</p>
            <hr className={hrClasses} />
            <div className='flex flex-col h-[250px] overflow-auto gap-2'>
                {isLoading ? (
                    <p className='Loading'></p>
                ) : (
                    dangerList.map((item) => {
                        return (
                            <div
                                className={eventDangerClasses}
                                key={item.id}
                                onClick={() => openModal(item.id)}
                            >
                                <DangerIcon fill={theme === 'dark' ? 'white': '#6C7281'}/>
                                <div className='flex flex-col gap-1'>
                                    <p className='leading-5'>
                                        Найдено уязвимое ПО
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
            <GetDangerItemModal id={taskId}/>
        </div>
    )
}
