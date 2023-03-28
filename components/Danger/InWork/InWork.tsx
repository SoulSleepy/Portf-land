import { ClockIcon, DevicesIcon } from 'components/Icons/Icons'
import Image from 'next/image'
import dangerLevelIcon from '../../../images/dangerLevelIcon.svg'

interface IdangerItem {
    id: number
    nameDanger: string
    levelDanger: number
    device: string
    date: string
    number: number
}

const dangerItem: IdangerItem[] = [
    {
        id: 1,
        nameDanger: 'Найдено уязвимое ПО OpenSSH 7.9 pl',
        levelDanger: 9.3,
        device: 'GAK-BOX',
        date: '08:27 31.05.2022',
        number: 177,
    },
    {
        id: 2,
        nameDanger: 'Найдено уязвимое ПО Nginx 1.14.2',
        levelDanger: 7.8,
        device: 'GAK-BOX',
        date: '08:28 31.05.2022',
        number: 178,
    },
    {
        id: 3,
        nameDanger: 'Найдено уязвимое ПО OpenSSH 8.4 pl',
        levelDanger: 9.3,
        device: 'GAK-BOX',
        date: '08:27 31.05.2022',
        number: 179,
    },
    {
        id: 4,
        nameDanger: 'Найдено уязвимое Http_server 2.4.46',
        levelDanger: 6.8,
        device: 'GAK-BOX',
        date: '11:23 31.05.2022',
        number: 180,
    },
    {
        id: 5,
        nameDanger: 'Найдено уязвимое ПО Samba 4.6.2',
        levelDanger: 10,
        device: 'GAK-BOX',
        date: '11:41 31.05.2022',
        number: 181,
    },
    {
        id: 6,
        nameDanger: 'Найдено уязвимое ПО OpenSSH 7.9 pl',
        levelDanger: 10,
        device: 'GAK-BOX',
        date: '11:42 31.05.2022',
        number: 182,
    },
    {
        id: 7,
        nameDanger: 'Найдено уязвимое ПО Nginx 1.14.2',
        levelDanger: 9.3,
        device: 'GAK-BOX',
        date: '18:08 10.06.2022',
        number: 183,
    },
    {
        id: 8,
        nameDanger: 'Найдено уязвимое ПО OpenSSH 8.4 pl',
        levelDanger: 7.8,
        device: 'GAK-BOX',
        date: '10:09 14.06.2022',
        number: 184,
    },
    {
        id: 9,
        nameDanger: 'Найдено уязвимое ПО OpenSSH 7.9 pl',
        levelDanger: 9.3,
        device: 'GAK-BOX',
        date: '10:37 16.05.2022',
        number: 185,
    },
]

export const InWork = () => {
    return (
        <div className='flex flex-col gap-2 h-[525px] overflow-hidden hover:overflow-auto'>
            {dangerItem.map((item) => {
                return (
                    <div key={item.id} className='flex flex-row gap-2 hover:bg-light-lighter'>
                        <div className='flex flex-col items-center justify-center relative'>
                            <Image
                                src={dangerLevelIcon}
                                alt='danger'
                                height={47}
                                width={47}
                            />
                            <p className='absolute top-[27px] font-medium'>
                                {item.levelDanger}
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium text-lg'>
                                {item.nameDanger}
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
                        <p className='flex ml-auto pr-1 items-center'>#{item.number}</p>
                    </div>
                )
            })}
        </div>
    )
}
