import { IDevicesLocalNetwork } from 'types/types'

interface IProps {
    deviceOnline: IDevicesLocalNetwork
    isLoading: boolean
}

export const DeviceOnline = ({ deviceOnline, isLoading }: IProps) => {
    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const devicesOnlineClasses =
        'relative flex items-center justify-center h-14 w-14 rounded-[28px] bg-light-lighter border-2'
    const newDevice =
        'absolute flex items-center justify-center h-7 w-7 -top-2 -right-1 bg-light-lighter border rounded-[20px]'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Устройства в сети</p>
            <hr className={hrClasses} />
            <div className='flex flex-row h-[110px] items-center justify-center gap-14'>
                <div className='flex flex-col items-center'>
                    <div className={devicesOnlineClasses}>
                        {!isLoading && deviceOnline.cable.new > 0 && (
                            <p className={newDevice}>
                                {deviceOnline.cable.new}
                            </p>
                        )}
                        <p className='text-xl font-medium'>
                            {!isLoading && deviceOnline.cable.count}
                        </p>
                    </div>
                    <p>Кабель</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className={devicesOnlineClasses}>
                        {!isLoading && deviceOnline.wifi.new > 0 && (
                            <p className={newDevice}>{deviceOnline.wifi.new}</p>
                        )}
                        <p className='text-xl font-medium'>
                            {!isLoading && deviceOnline.wifi.count}
                        </p>
                    </div>
                    <p>Wi-Fi</p>
                </div>
            </div>
        </div>
    )
}
