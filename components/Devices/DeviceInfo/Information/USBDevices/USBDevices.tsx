import { IAgentInfoUsbDevice } from 'types/types'

interface IProps {
    usbDevices: IAgentInfoUsbDevice[]
}

export const USBDevices = ({ usbDevices }: IProps) => {
    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Устройства USB</p>
            <hr className={hrClasses} />
            <div className='grid grid-cols-2 gap-2'>
                {usbDevices.map((item) => {
                    return (
                        <div
                            key={item.name}
                            className='flex flex-col justify-between bg-light-lighter dark:bg-light-lighterD p-1 w-full'
                        >
                            <p className='font-medium'>{item.name}</p>
                            <p className='text-sm'>{item.location}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
