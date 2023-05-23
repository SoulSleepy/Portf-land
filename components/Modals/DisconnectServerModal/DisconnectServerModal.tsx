import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { closeDisconnectServerModal } from 'state/slices/modals.slice'
import {
    useLazyGetDisconnectServerQuery,
} from 'state/rtk/system.rtk'
import { Loader } from 'components/Loader'

export const DisconnectServerModal = () => {
    const [disconnect, { data, isLoading }] = useLazyGetDisconnectServerQuery()

    const dispatch = useAppDispatch()
    const { isOpenDisconnectServer } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeDisconnectServerModal())
    }

    const serverOff = () => {
        disconnect()
        onClose()
    }

    const btnClasses =
        'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenDisconnectServer} onClose={onClose}>
            <Loader isLoading={isLoading}>
                <div
                    className='flex flex-col p-5 items-center gap-5 bg-light dark:bg-darkD rounded-md text-text-light dark:text-text-lightD'
                    onClick={(event) => event.stopPropagation()}
                >
                    <p className='font-medium text-xl tracking-wider'>
                        Вы уверены?
                    </p>
                    <div className='flex flex-row gap-2'>
                        <button
                            className={btnClasses}
                            onClick={() => serverOff()}
                        >
                            Да
                        </button>
                        <button className={btnClasses} onClick={onClose}>
                            Нет
                        </button>
                    </div>
                </div>
            </Loader>
        </Modal>
    )
}
