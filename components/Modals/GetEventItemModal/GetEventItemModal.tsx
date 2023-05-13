import { closeGetEventItemModal } from 'state/slices/modals.slice'
import { useAppDispatch, useAppSelector } from 'state/store'
import { useEffect } from 'react'
import { Modal } from '../Modal'
import { useLazyGetEventItemQuery } from 'state/rtk/dangerAndEvent.rtk'
import {
    ClockIcon,
    DevicesIcon,
    EventIcon,
} from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { EventItemInfo } from './EventItemInfo'

interface IProps {
    id: number
}

export const GetEventItemModal = ({ id }: IProps) => {
    const [getEventItem, { data, isLoading }] = useLazyGetEventItemQuery()

    useEffect(() => {
        if (isOpenGetEventItem) {
            getEventItem(id)
        }
    }, [id])

    const dispatch = useAppDispatch()
    const { isOpenGetEventItem } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeGetEventItemModal())
    }

    const blockClasses =
        'flex bg-light rounded-xl p-3 shadow-dark gap-2 text-text-light'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'

    return (
        <Modal isOpen={isOpenGetEventItem} onClose={onClose}>
            <div
                className={blockClasses}
                onClick={(event) => event.stopPropagation()}
            >
                {isLoading ? (
                    <p>loading</p>
                ) : (
                    <div className='overflow-auto h-[80vh] w-[1200px] pr-2'>
                        <div className='flex flex-row gap-3 items-center '>
                            <div className='scale-150 px-2'>
                                <EventIcon />
                            </div>
                            <p className={titleClasses}>
                                {data?.entityType === 1 ? 'Рассылка пакетов отключения пользователей от Wifi-сети' : 'неизвестно'}
                            </p>
                            <p className='ml-auto'>#{data?.id}</p>
                        </div>
                        <hr className={hrClasses} />
                        <div className='flex flex-row gap-4 items-center justify-between h-10'>
                            <div className='flex flex-row gap-2'>
                                <p>Устройство</p>
                                <DevicesIcon fill='#6C7281' />
                                <p>{data?.deviceInfo.name}</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <p>Время создания</p>
                                <ClockIcon fill='#6C7281' />
                                <p>{toDate(data?.createTst as number)}</p>
                            </div>
                        </div>
                        <EventItemInfo />
                    </div>
                )}
            </div>
        </Modal>
    )
}