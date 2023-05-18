import { closeSetWifi24SettingsModal } from 'state/slices/modals.slice'
import { Modal } from '../Modal'
import { useAppDispatch, useAppSelector } from 'state/store'
import { IWiFiForm } from 'types/types'
import { useSetWifiSettingsMutation } from 'state/rtk/settings.rtk'

interface IProps {
    params: IWiFiForm
}

export const SetWifi24SettingsModal = ({params}: IProps) => {

    const [getChangeSettingWifi] = useSetWifiSettingsMutation()

    const dispatch = useAppDispatch()
    const { isOpenSetWifi24Settings } = useAppSelector((store) => store.modals)
    const onClose = () => {
        dispatch(closeSetWifi24SettingsModal())
    }

    const changeSettingWifi = () => {
        getChangeSettingWifi(params)
        onClose()
    }

    const btnClasses = 'flex items-center justify-center h-8 w-[100px] hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Modal isOpen={isOpenSetWifi24Settings} onClose={onClose}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light  rounded-md text-text-light dark:text-text-lightD dark:bg-darkD'
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