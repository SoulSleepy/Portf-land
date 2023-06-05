import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { closeDeleteUserModal } from 'state/slices/modals.slice'
import { useGetDeleteUserMutation } from 'state/rtk/users.rtk'
import { useTranslation } from 'next-i18next'

interface IProps {
    id: number
}

export const DeleteUserModal = ({ id }: IProps) => {
    const { t } = useTranslation('modals')

    const [getDeleteUser] = useGetDeleteUserMutation()

    const dispatch = useAppDispatch()
    const { isOpenDeleteUser } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeDeleteUserModal())
    }
    
    const deleteUser = () => {
        getDeleteUser(id)
        onClose()
    }


    const btnClasses = 'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenDeleteUser} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light dark:bg-darkD rounded-md text-text-light dark:text-text-lightD'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>{t('are you sure?')}</p>
                <div className='flex flex-row gap-2'>
                    <button className={btnClasses} onClick={deleteUser}>{t('yes')}</button>
                    <button className={btnClasses} onClick={onClose}>{t('no')}</button>
                </div>
            </div>
        </Modal>
    )
}
