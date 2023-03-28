import Image from 'next/image'
import wifiIcon from '../../images/wifiIcon.svg'
import updateIcon from '../../images/updateIcon.svg'
import lanPortOnIcon from '../../images/lanPortOnIcon.svg'
import lanPortOffIcon from '../../images/lanPortOffIcon.svg'
import netIcon from '../../images/netIcon.svg'
import { EventIcon, DangerIcon } from '../Icons/Icons'

interface ILists {
    id: number
    text: string
    date: string
}

const eventList: ILists[] = [
    {
        id: 1,
        text: 'Был введен неправильный пароль админ-панели',
        date: '10:50 23.03.2023',
    },
    {
        id: 2,
        text: 'Был введен неправильный пароль админ-панели',
        date: '10:20 23.03.2023',
    },
    {
        id: 3,
        text: 'Был введен неправильный пароль админ-панели',
        date: '18:30 20.03.2023',
    },
    {
        id: 4,
        text: 'Рассылка пакетов отключения пользователей от Wi-Fi сети',
        date: '12:10 19.03.2023',
    },
]
const dangerList: ILists[] = [
    {
        id: 1,
        text: 'Найдено уязвимое ПО',
        date: '11:50 22.03.2023',
    },
    {
        id: 2,
        text: 'Найдено уязвимое ПО',
        date: '19:20 19.03.2023',
    },
    {
        id: 3,
        text: 'Найдено уязвимое ПО',
        date: '8:30 17.03.2023',
    }
]

export const HomeComponent = () => {

    const blockClasses = 'flex flex-col bg-white rounded-xl p-3 shadow-md gap-2'
    const titleClasses = 'flex font-medium h-10 items-center'
    const hrClasses = 'border-none bg-text h-[1.5px] w-full'
    const btnClasses = 'bg-light-lighter rounded-sm h-8 w-32 hover:border ml-auto'
    const dotClasses = 'w-1 h-1 bg-text-light rounded-[2px]'
    const updateBtnClasses =
        'flex items-center justify-center bg-light-lighter rounded-[20px] h-[40px] w-[40px] hover:border ml-auto'
    const portClasses =
        'flex flex-col items-center justify-center h-[78px] bg-light-lighter rounded-sm'
    const devicesOnlineClasses =
        'flex items-center justify-center h-14 w-14 rounded-[28px] bg-light-lighter'
    const eventDangerClasses = 'flex flex-row items-center gap-2 p-1 bg-light-lighter'

    return (
        <div className='flex flex-col gap-4 text-text-light'>
            <div className='grid grid-cols-2 gap-4'>
                <div className={blockClasses}>
                    <p className={titleClasses}>Интернет</p>
                    <hr className={hrClasses} />
                </div>
                <div className='grid gap-4'>
                    <div className={blockClasses}>
                        <p className={titleClasses}>Домашняя сеть</p>
                        <hr className={hrClasses} />
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row h-12 gap-2 items-center'>
                                <div className='flex flex-row gap-5'>
                                    <Image
                                        src={wifiIcon}
                                        alt=''
                                        width={45}
                                        height={45}
                                    />
                                    <div className='w-32'>
                                        <p className='font-medium text-xl'>
                                            GAK-Link 2.4
                                        </p>
                                        <p className='text-sm'>
                                            2.4 Ггц, канал 11
                                        </p>
                                    </div>
                                </div>
                                <button className={btnClasses}>
                                    Выключить
                                </button>
                            </div>
                            <div className='flex flex-row h-12 gap-2 items-center'>
                                <div className='flex flex-row gap-5'>
                                    <Image
                                        src={wifiIcon}
                                        alt=''
                                        width={45}
                                        height={45}
                                    />
                                    <div className='w-32'>
                                        <p className='font-medium text-xl'>
                                            GAK-Link 5
                                        </p>
                                        <p className='text-sm'>
                                            5 Ггц, канал 36
                                        </p>
                                    </div>
                                </div>
                                <button className={btnClasses}>
                                    Выключить
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={blockClasses}>
                        <p className={titleClasses}>
                            Скорость интернет соединения
                        </p>
                        <hr className={hrClasses} />
                        <div className='flex flex-row gap-2'>
                            <div className='flex flex-row gap-3 items-center'>
                                <div className='w-14'>
                                    <p className='text-xs'>
                                        <b>PING</b> MS
                                    </p>
                                    <p className='font-medium text-xl'>1.56</p>
                                </div>
                                <div className={dotClasses} />
                                <div className='w-20'>
                                    <p className='text-xs'>
                                        <b>Прием</b> MBPS
                                    </p>
                                    <p className='font-medium text-xl'>38.7</p>
                                </div>
                                <div className={dotClasses} />
                                <div className='w-24'>
                                    <p className='text-xs'>
                                        <b>Передача</b> MBPS
                                    </p>
                                    <p className='font-medium text-xl'>38.7</p>
                                </div>
                            </div>
                            <button className={updateBtnClasses}>
                                <Image
                                    src={updateIcon}
                                    alt='update'
                                    width={30}
                                    height={30}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className={blockClasses}>
                        <p className={titleClasses}>Сетевые порты</p>
                        <hr className={hrClasses} />
                        <div className='grid grid-cols-4 gap-2'>
                            <div className={portClasses}>
                                <Image
                                    src={lanPortOnIcon}
                                    alt='lanPort'
                                    width={35}
                                    height={35}
                                />
                                <Image
                                    className='mt-[-10px]'
                                    src={netIcon}
                                    alt='netIcon'
                                    width={20}
                                    height={20}
                                />
                                <p>WAN</p>
                            </div>
                            <div className={portClasses}>
                                <Image
                                    src={lanPortOnIcon}
                                    alt='lanPort'
                                    width={35}
                                    height={35}
                                />
                                <p className='mt-[10px]'>LAN</p>
                            </div>
                            <div className={portClasses}>
                                <Image
                                    src={lanPortOffIcon}
                                    alt='lanPort'
                                    width={35}
                                    height={35}
                                />
                                <p className='mt-[10px]'>LAN</p>
                            </div>
                            <div className={portClasses}>
                                <Image
                                    src={lanPortOffIcon}
                                    alt='lanPort'
                                    width={35}
                                    height={35}
                                />
                                <p className='mt-[10px]'>LAN</p>
                            </div>
                        </div>
                    </div>
                    <div className={blockClasses}>
                        <p className={titleClasses}>Устройства в сети</p>
                        <hr className={hrClasses} />
                        <div className='flex flex-row justify-center gap-12'>
                            <div className='flex flex-col items-center'>
                                <div className={devicesOnlineClasses}>
                                    <p className='text-xl font-medium'>22</p>
                                </div>
                                <p>Кабель</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className={devicesOnlineClasses}>
                                    <p className='text-xl font-medium'>34</p>
                                </div>
                                <p>Wi-Fi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={blockClasses}>
                    <p className={titleClasses}>Последние события</p>
                    <hr className={hrClasses} />
                    <div className='flex flex-col gap-2'>
                        {eventList.map((item) => {
                            return (
                                <div className={eventDangerClasses} key={item.id}>
                                    <EventIcon />
                                    <div className='flex flex-col gap-1'>
                                        <p className='leading-5'>
                                            {item.text}
                                        </p>
                                        <p className='text-sm'>
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={blockClasses}>
                    <p className={titleClasses}>Последние уязвимости</p>
                    <hr className={hrClasses} />
                    <div className='flex flex-col gap-2'>
                        {dangerList.map((item) => {
                            return (
                                <div className={eventDangerClasses} key={item.id}>
                                    <DangerIcon />
                                    <div className='flex flex-col gap-1'>
                                        <p className='leading-5'>
                                            {item.text}
                                        </p>
                                        <p className='text-sm'>
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
