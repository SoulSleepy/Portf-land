import { closeSetProviderSettingsModal } from 'state/slices/modals.slice'
import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { IWanSettingsForm } from 'components/Settings/Provider/Provider'
import { useLazySetWanSettingsQuery } from 'state/rtk/settings.rtk'

interface IProps {
    settings: IWanSettingsForm
}

export const SetProviderSettingsModal = ({ settings }: IProps) => {
    const [setWanSettings] = useLazySetWanSettingsQuery()

    const dispatch = useAppDispatch()

    const { isOpenSetProviderSettings } = useAppSelector(
        (store) => store.modals
    )
    const onClose = () => {
        dispatch(closeSetProviderSettingsModal())
    }

    const setProvider = () => {
        const paramsDHCPandUnmanaged = { state: settings.state }
        const paramsPppoe = {
            state: settings.state,
            params: {
                login: settings.namePppoe,
                password: settings.passwordPppoe,
            },
        }
        const paramsStatic = {
            state: settings.state,
            params: {
                gateway: settings.gatewayStatic,
                ip: settings.ipStatic,
                mask: settings.maskStatic,
                dns: settings.maskStatic,
            },
        }
        if ( settings.state === 'dhcp' || settings.state === 'um' ) {
            setWanSettings(paramsDHCPandUnmanaged)
        } else if (settings.state === 'pppoe') {
            setWanSettings(paramsPppoe)
        } else setWanSettings(paramsStatic)
        onClose()
    }

    const btnClasses =
        'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenSetProviderSettings} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light rounded-md text-text-light'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>
                    Вы уверены?
                </p>
                <div className='flex flex-row gap-2'>
                    <button
                        className={btnClasses}
                        onClick={() => setProvider()}
                    >
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
