import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { closeAddWhiteIpModal } from 'state/slices/modals.slice'
import { useState } from 'react'
import { useAddSettingsIpFirewallMutation } from 'state/rtk/settings.rtk'
import { IAddIpFirewallForm } from 'types/types'
import { useTranslation } from 'next-i18next'

interface IProps {
    body: IAddIpFirewallForm
}

export const AddWhiteIpModal = ({ body }: IProps) => {
    const { t } = useTranslation('modals')
    const [value, setValue] = useState('')

    const [addIpFirewall] = useAddSettingsIpFirewallMutation()

    const dispatch = useAppDispatch()
    const { isOpenAddWhiteIp } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeAddWhiteIpModal())
    }

    const setIp = (value: string) => {
        const params = { ...body, src_ip: value }
        addIpFirewall(params)
        onClose()
    }

    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 ml-1 cursor-pointer dark:bg-darkD outline-1 hover:outline-2 outline-text-light dark:outline-text-lightD w-full'
    const btnClasses =
        'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenAddWhiteIp} onClose={onClose}>
            <div
                className='flex flex-col p-6 items-center gap-5 bg-light rounded-md text-text-light dark:text-text-lightD dark:bg-darkD'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>{t('enter')} Ip</p>
                <div className='flex flex-col items-center gap-6'>
                    <input
                        type='text'
                        className={inputClasses}
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button
                        className={btnClasses}
                        type='button'
                        onClick={() => setIp(value)}
                    >
                        {t('add')}
                    </button>
                </div>
            </div>
        </Modal>
    )
}
