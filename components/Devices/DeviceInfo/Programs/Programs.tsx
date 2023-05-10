import Image from 'next/image'
import devicesIcon from '../../../../images/devicesIcon.svg'
import { useLazyGetDeviceProgramsQuery } from '@/state/rtk/devices.rtk'
import { useEffect } from 'react'
import { DevicesIcon } from '@/components/Icons/Icons'
import { toDate } from '@/helpers/softFunctions'

const programs = [
    {
        id: 1,
        name: 'Пакет драйверов Windows-SEGGER (J-LinkCDC)',
        version: '2.30.0.2',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'SEGGER',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 2,
        name: 'Пакет драйверов Windows-SEGGER (J-LinkCDC)',
        version: '2.30.0.2',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'segger',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 3,
        name: 'AMD Software',
        version: '21.3.1',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'Advanced Micro Devices, Inc.',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 4,
        name: 'Пакет драйверов Windows-SEGGER (J-LinkCDC)',
        version: '2.30.0.2',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'SEGGER',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 5,
        name: 'Git version 2.30.0.2',
        version: '2.30.0.2',
        location: 'C:Program FilesGit ',
        publisher: 'The Git Development',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 6,
        name: 'Пакет драйверов Windows-SEGGER (J-LinkCDC)',
        version: '2.30.0.2',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'Holtek Semiconductor',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 7,
        name: 'Пакет драйверов Windows-SEGGER (J-LinkCDC)',
        version: '2.30.0.2',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'SEGGER',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 8,
        name: 'Microsoft Azure Compute Emulator - v2.9.7',
        version: '2.9.8999.43',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'Microsoft Corporation',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 9,
        name: 'Mozilla Firefox (x64 ru)',
        version: '101.0.1',
        location: 'C:Program FilesMozilla Firefox ',
        publisher: 'Mozilla',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 10,
        name: 'Git version 2.30.0.2',
        version: '2.30.0.2',
        location: 'C:Program FilesGit ',
        publisher: 'The Git Development',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 11,
        name: 'Пакет драйверов Windows-SEGGER (J-LinkCDC)',
        version: '2.30.0.2',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'Holtek Semiconductor',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 12,
        name: 'Пакет драйверов Windows-SEGGER (J-LinkCDC)',
        version: '2.30.0.2',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'SEGGER',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 13,
        name: 'Microsoft Azure Compute Emulator - v2.9.7',
        version: '2.9.8999.43',
        location: 'C:UsersOdinAppDataLocalTemp ',
        publisher: 'Microsoft Corporation',
        date: '09.06.2022, 10:50:51',
    },
    {
        id: 14,
        name: 'Mozilla Firefox (x64 ru)',
        version: '101.0.1',
        location: 'C:Program FilesMozilla Firefox ',
        publisher: 'Mozilla',
        date: '09.06.2022, 10:50:51',
    },
]

interface IProps {
    deviceId: number
}

export const Programs = ({ deviceId }: IProps) => {
    const [getPrograms, { data, isLoading }] = useLazyGetDeviceProgramsQuery()

    useEffect(() => {
        if (deviceId) {
            getPrograms(deviceId)
        }
    }, [deviceId])

    const tableTitleClasses = 'border-r-[1px] border-b-[1px] pl-1 pt-[3px] h-7'
    const tableItemClasses =
        ' flex items-center border-r-[1px] border-b-[1px] p-1 h-8 truncate ...'

    return (
        <div className='flex flex-col bg-light border shadow-dark overflow-auto h-[390px] relative'>
            <div className='grid grid-cols-5 items-center text-sm font-medium text-text-light border-t-[1px] border-l-[1px] sticky top-0 bg-light-lighter'>
                <p className={tableTitleClasses}>Программа</p>
                <p className={tableTitleClasses}>Версия</p>
                <p className={tableTitleClasses}>Расположение</p>
                <p className={tableTitleClasses}>Издатель</p>
                <p className={tableTitleClasses}>Дата</p>
            </div>
            {data?.length ? (
                data ? (
                    data.map((item) => {
                        return (
                            <div
                                key={item.name}
                                className='grid grid-cols-5 items-center text-sm text-text-light border-l-[1px]'
                            >
                                <div className='flex flex-row border-r-[1px] border-b-[1px] pl-1 pt-[3px] h-8 truncate ...'>
                                    <div>
                                        <DevicesIcon />
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                                <p className={tableItemClasses}>
                                    {item.version}
                                </p>
                                <p className={tableItemClasses}>
                                    {item.location}
                                </p>
                                <p className={tableItemClasses}>
                                    {item.publisher}
                                </p>
                                <p className={tableItemClasses}>{item.instTst}</p>
                            </div>
                        )
                    })
                ) : (
                    <p>loading</p>
                )
            ) : (
                <p className='flex flex-col items-center justify-center text-2xl h-full'>
                    Неизвестно
                </p>
            )}
        </div>
    )
}
