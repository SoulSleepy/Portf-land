import { closeSetWifi5SettingsModal } from 'state/slices/modals.slice'
import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { IWiFiForm } from 'types/types'
import { useSetWifiSettingsMutation } from 'state/rtk/settings.rtk'

interface IProps {
    params: IWiFiForm
}

export const SetWifi5SettingsModal = ({params}: IProps) => {

    const [getChangeSettingWifi] = useSetWifiSettingsMutation()

    const dispatch = useAppDispatch()
    const { isOpenSetWifi5Settings } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeSetWifi5SettingsModal())
    }

    const changeSettingWifi = () => {
        getChangeSettingWifi(params)
        onClose()
    }

    const btnClasses = 'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenSetWifi5Settings} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light rounded-md text-text-light'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>Вы уверены?</p>
                <div className='flex flex-row gap-2'>
                    <button className={btnClasses} onClick={() => changeSettingWifi()}>Да</button>
                    <button className={btnClasses} onClick={onClose}>Нет</button>
                </div>
            </div>
        </Modal>
    )
}