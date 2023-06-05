import { closeGenerateKeysVPNModal } from 'state/slices/modals.slice'
import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { useLazyGetCheckGenerateQuery, useLazyGetGenerateKeysQuery } from 'state/rtk/vpn.rtk'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'

export const GenerateKeysVPNModal = () => {
    const { t } = useTranslation('modals')

    const [getGenerate, {data}] = useLazyGetGenerateKeysQuery()
    const [checkGenerate] = useLazyGetCheckGenerateQuery()

    const dispatch = useAppDispatch()
    const { isOpenGenerateKeysVPN } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeGenerateKeysVPNModal())
    }
    useEffect(() => {
        if (data) {
            checkGenerate()
        }
    }, [data])

    const generateKeys = () => {
        getGenerate()
        onClose()
    }

    const btnClasses = 'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenGenerateKeysVPN} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light rounded-md text-text-light dark:text-text-lightD dark:bg-darkD'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>{t('are you sure?')}</p>
                <div className='flex flex-row gap-2'>
                    <button className={btnClasses} onClick={generateKeys}>{t('yes')}</button>
                    <button className={btnClasses} onClick={onClose}>{t('no')}</button>
                </div>
            </div>
        </Modal>
    )
}