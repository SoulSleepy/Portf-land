import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { closeResetRouterModal } from 'state/slices/modals.slice'
import { useLazyGetResetQuery } from 'state/rtk/system.rtk'
import { useTranslation } from 'next-i18next'
import { useLazyLogoutUserQuery } from 'state/rtk/auth.rtk'


export const ResetRouterModal = () => {
    const { t } = useTranslation('modals')
    const [getReset] = useLazyGetResetQuery()
    const [postLogoutUser] = useLazyLogoutUserQuery()

    const dispatch = useAppDispatch()
    const { isOpenResetRouter } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeResetRouterModal())
    }

    const resetRouter = () => {
        postLogoutUser()
        getReset()
        onClose()
    }

    const btnClasses = 'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenResetRouter} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light rounded-md text-text-light dark:text-text-lightD dark:bg-darkD'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>{t('are you sure?')}</p>
                <div className='flex flex-row gap-2'>
                    <button className={btnClasses} onClick={resetRouter}>{t('yes')}</button>
                    <button className={btnClasses} onClick={onClose}>{t('no')}</button>
                </div>
            </div>
        </Modal>
    )
}