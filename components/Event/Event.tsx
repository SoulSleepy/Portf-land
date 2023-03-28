import { ClockIcon, DevicesIcon } from 'components/Icons/Icons'
import Image from 'next/image'
import eventIcon from '../../images/eventIcon.svg'

interface IeventItem {
    id: number
    nameEvent: string
    device: string
    date: string
    number: number
}

const dangerItem: IeventItem[] = [
    {
        id: 1,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '08:27 31.05.2022',
        number: 55,
    },
    {
        id: 2,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '08:28 31.05.2022',
        number: 56,
    },
    {
        id: 3,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '08:27 31.05.2022',
        number: 57,
    },
    {
        id: 4,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '11:23 31.05.2022',
        number: 58,
    },
    {
        id: 5,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '11:41 31.05.2022',
        number: 59,
    },
    {
        id: 6,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '11:42 31.05.2022',
        number: 60,
    },
    {
        id: 7,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '18:08 10.06.2022',
        number: 61,
    },
    {
        id: 8,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '10:09 14.06.2022',
        number: 62,
    },
    {
        id: 9,
        nameEvent: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        device: 'GAK-BOX',
        date: '10:37 16.05.2022',
        number: 63,
    },
]

export const Event = () => {
    const blockClasses = 'flex flex-col bg-white rounded-xl p-3 shadow-md gap-2'
    const hrClasses = 'border-none bg-text h-[1.5px] w-full'

    return (
        <div className='grid grid-cols-[2fr_1fr] gap-3 text-text-light'>
            <div className={blockClasses}>
                <div className='flex flex-col gap-2 h-[555px] overflow-hidden hover:overflow-auto'>
                    {dangerItem.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className='flex flex-row gap-2 hover:bg-light-lighter'
                            >
                                <Image
                                    src={eventIcon}
                                    alt='danger'
                                    height={47}
                                    width={47}
                                />
                                <div className='flex flex-col gap-2'>
                                    <p className='font-medium text-lg'>
                                        {item.nameEvent}
                                    </p>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex flex-row gap-2'>
                                            <ClockIcon />
                                            <p>{item.date}</p>
                                        </div>
                                        <div className='flex flex-row gap-2'>
                                            <DevicesIcon />
                                            <p>{item.device}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='flex ml-auto pr-1 items-center'>
                                    #{item.number}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={blockClasses}>
                <p className='flex font-medium h-10 items-center'>Фильтр</p>
                <hr className={hrClasses} />
            </div>
        </div>
    )
}
