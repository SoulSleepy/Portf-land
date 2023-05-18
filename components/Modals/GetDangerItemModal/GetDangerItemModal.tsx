import { closeGetTaskItemModal } from 'state/slices/modals.slice'
import { useAppDispatch, useAppSelector } from 'state/store'
import { useEffect } from 'react'
import { Modal } from '../Modal'
import { useLazyGetTaskItemQuery } from 'state/rtk/dangerAndEvent.rtk'
import { ClockIcon, DangerIcon, DevicesIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { TaskItemsList } from './TaskItemsList'
import { IGetDangerCvec } from 'types/types'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'

interface IProps {
    id: number
}

export const GetDangerItemModal = ({ id }: IProps) => {
    const { theme } = useTheme()
    const [getTaskItem, { data, isLoading }] = useLazyGetTaskItemQuery()

    useEffect(() => {
        if (isOpenGetTaskItem) {
            getTaskItem(id)
        }
    }, [id])

    const dispatch = useAppDispatch()
    const { isOpenGetTaskItem } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeGetTaskItemModal())
    }

    const blockClasses =
        'flex bg-light rounded-xl p-3 shadow-dark gap-2 text-text-light dark:text-text-lightD dark:bg-darkDD'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full '

    return (
        <Modal isOpen={isOpenGetTaskItem} onClose={onClose}>
            <div
                className={blockClasses}
                onClick={(event) => event.stopPropagation()}
            >
                <Loader isLoading={isLoading}>
                    <div className='overflow-auto h-[80vh] w-[1200px] pr-2'>
                        <div className='flex flex-row gap-3 items-center '>
                            <div className='scale-150 px-2'>
                                <DangerIcon
                                    fill={
                                        theme === 'dark' ? '#bebebe' : '#6C7281'
                                    }
                                />
                            </div>
                            <p className={titleClasses}>
                                {'Найдено уязвимое ПО ' + data?.body.title}
                            </p>
                            <p className='ml-auto'>#{data?.id}</p>
                        </div>
                        <hr className={hrClasses} />
                        <div className='flex flex-row gap-4 items-center justify-between h-10'>
                            <div className='flex flex-row gap-2'>
                                <p>Устройство</p>
                                <DevicesIcon
                                    fill={
                                        theme === 'dark' ? '#bebebe' : '#6C7281'
                                    }
                                />
                                <p>{data?.deviceInfo.name}</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <p>Время создания</p>
                                <ClockIcon
                                    fill={
                                        theme === 'dark' ? '#bebebe' : '#6C7281'
                                    }
                                />
                                <p>{toDate(data?.createTst as number)}</p>
                            </div>
                        </div>
                        <TaskItemsList
                            cves={data?.body.cves as IGetDangerCvec[]}
                        />
                    </div>
                </Loader>
            </div>
        </Modal>
    )
}
