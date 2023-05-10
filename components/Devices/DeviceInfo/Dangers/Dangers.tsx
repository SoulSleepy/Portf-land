import {
    ClockIcon,
    DangerLevelIconIcon,
    DevicesIcon,
} from '@/components/Icons/Icons'
import Image from 'next/image'
import dangerLevelIcon from '../../../../images/dangerLevelIcon.svg'
import { useLazyGetDeviceTasksQuery } from '@/state/rtk/devices.rtk'
import { useEffect } from 'react'
import { toDate } from '@/helpers/softFunctions'

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
]

interface IProps {
    deviceId: number
}

export const Dangers = ({ deviceId }: IProps) => {
    const [getDeviceTasks, { data, isLoading }] = useLazyGetDeviceTasksQuery()

    useEffect(() => {
        if (deviceId) {
            getDeviceTasks(deviceId)
        }
    }, [deviceId])

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'

    return (
        <div className={blockClasses}>
            <div className='flex flex-col gap-2 h-[365px] overflow-auto'>
                {data?.length ? (
                    data ? (
                        data.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className='flex flex-row gap-4 pl-3 hover:bg-light-lighter cursor-pointer'
                                >
                                    <div className='flex flex-col items-center justify-center relative'>
                                        <div className='scale-[2.0]'>
                                            <DangerLevelIconIcon />
                                        </div>
                                        <p className='absolute top-[27px] font-medium text-[black]'>
                                            {item.crt}
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-medium text-lg'>
                                            Найдено уязвимое ПО {item.titleVars.softName}
                                        </p>
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row gap-2'>
                                                <ClockIcon />
                                                <p>{toDate(item.createTst)}</p>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <DevicesIcon />
                                                <p>{item.deviceInfo.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='flex ml-auto pr-1 items-center'>
                                        #{item.id}
                                    </p>
                                </div>
                            )
                        })
                    ) : (
                        <p>loading</p>
                    )
                ) : (
                    <p className='flex flex-col items-center justify-center text-2xl h-full'>
                        Уязвимости отсутствуют
                    </p>
                )}
            </div>
        </div>
    )
}
