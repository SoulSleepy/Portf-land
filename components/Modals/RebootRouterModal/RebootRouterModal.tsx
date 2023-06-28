import { useLazyGetRebootQuery } from 'state/rtk/system.rtk'
import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { closeRebootRouterModal } from 'state/slices/modals.slice'
import { useTranslation } from 'next-i18next'
import { useLazyLogoutUserQuery } from '@/state/rtk/auth.rtk'

export const RebootRouterModal = () => {
    const { t } = useTranslation('modals')
    const [getReboot] = useLazyGetRebootQuery()
    const [postLogoutUser] = useLazyLogoutUserQuery()

    const dispatch = useAppDispatch()
    const { isOpenRebootRouter } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeRebootRouterModal())
    }

    const rebootRouter = () => {
        postLogoutUser()
        getReboot()
        onClose()
    }

    const btnClasses = 'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenRebootRouter} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light rounded-md text-text-light dark:text-text-lightD dark:bg-darkD'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>{t('are you sure?')}</p>
                <div className='flex flex-row gap-2'>
                    <button className={btnClasses} onClick={rebootRouter}>{t('yes')}</button>
                    <button className={btnClasses} onClick={onClose}>{t('no')}</button>
                </div>
            </div>
        </Modal>
    )
}