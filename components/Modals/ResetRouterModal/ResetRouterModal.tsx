import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { closeResetRouterModal } from 'state/slices/modals.slice'
import { useLazyGetResetQuery } from 'state/rtk/system.rtk'


export const ResetRouterModal = () => {

    const [getReset] = useLazyGetResetQuery()

    const dispatch = useAppDispatch()
    const { isOpenResetRouter } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeResetRouterModal())
    }

    const resetRouter = () => {
        getReset()
        onClose()
    }

    const btnClasses = 'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenResetRouter} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light rounded-md text-text-light'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>Вы уверены?</p>
                <div className='flex flex-row gap-2'>
                    <button className={btnClasses} onClick={() => resetRouter()}>Да</button>
                    <button className={btnClasses} onClick={onClose}>Нет</button>
                </div>
            </div>
        </Modal>
    )
}