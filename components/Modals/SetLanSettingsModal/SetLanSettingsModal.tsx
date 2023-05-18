import { closeSetLanSettingsModal } from 'state/slices/modals.slice'
import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { INetworkForm } from 'types/types'
import {
    useLazySetDHCPSettingsQuery,
    useLazySetLanSettingsQuery,
} from 'state/rtk/settings.rtk'

interface IProps {
    params: INetworkForm
}

export const SetLanSettingsModal = ({ params }: IProps) => {
    const [setDHCPSettings] = useLazySetDHCPSettingsQuery()
    const [setLanSettings] = useLazySetLanSettingsQuery()

    const dispatch = useAppDispatch()

    const { isOpenSetLanSettings } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeSetLanSettingsModal())
    }

    const setLan = () => {
        const paramsDHCP = { min: params.minDHCP, max: params.maxDHCP }
        const paramsLan = {
            gateway: params.gateway,
            dns: params.dns,
            ip: params.ipLan,
            mask: params.mask,
        }
        setDHCPSettings(paramsDHCP)
        setLanSettings(paramsLan)
        onClose()
    }

    const btnClasses =
        'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenSetLanSettings} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light rounded-md text-text-light dark:text-text-lightD dark:bg-darkD'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>
                    Вы уверены?
                </p>
                <div className='flex flex-row gap-2'>
                    <button className={btnClasses} onClick={() => setLan()}>
                        Да
                    </button>
                    <button className={btnClasses} onClick={onClose}>
                        Нет
                    </button>
                </div>
            </div>
        </Modal>
    )
}
