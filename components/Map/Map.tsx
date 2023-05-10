import Image from 'next/image'
import routerPng from '../../images/router.png'
import { DevicesIcon } from '../Icons/Icons'

interface IExternalPort {
    id: number
    number: number
}

interface IDevices {
    id: number
    name: string
    ip: string
    ports: number[]
}

const externalPort: IExternalPort[] = [
    { id: 1, number: 2244 },
    { id: 2, number: 80 },
    { id: 3, number: 2244 },
    { id: 4, number: 80 },
    { id: 5, number: 55789 },
    { id: 6, number: 9001 },
    { id: 7, number: 11124 },
    { id: 8, number: 9000 },
    { id: 9, number: 55789 },
]

const netDevices: IDevices[] = [
    {
        id: 1,
        name: 'name',
        ip: '192.168.0.1',
        ports: [335, 3432, 90, 30, 342, 4234],
    },
    {
        id: 2,
        name: 'name',
        ip: '192.168.0.1',
        ports: [335, 3432, 90, 30, 342, 4234],
    },
    {
        id: 3,
        name: 'name',
        ip: '192.168.0.1',
        ports: [335, 3432, 90, 30, 342, 4234],
    },
    { id: 4, name: 'name', ip: '192.168.0.1', ports: [335, 3432, 90] },
    { id: 5, name: 'name', ip: '192.168.0.1', ports: [335, 767] },
    { id: 6, name: 'name', ip: '192.168.0.1', ports: [335] },
    {
        id: 7,
        name: 'name',
        ip: '192.168.0.1',
        ports: [335, 3432, 90, 30, 342, 4234],
    },
]

const wifiDevices: IDevices[] = [
    {
        id: 1,
        name: 'name',
        ip: '192.168.0.1',
        ports: [335, 3432, 90, 30, 342, 4234],
    },
    { id: 2, name: 'name', ip: '192.168.0.1', ports: [335] },
    { id: 3, name: 'name', ip: '192.168.0.1', ports: [90, 30, 342, 4234] },
]

export const Map = () => {
    const blockDevicesClasses = 'grid grid-cols-3 gap-2 '
    const borderBlockClasses = 'border-white border border-solid rounded-md'
    const devicePortClasses =
        'flex flex-col gap-1 w-20 h-16 mt-2 overflow-hidden hover:overflow-auto text-sm text-text-light'

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row justify-between items-center px-8'>
                <div>
                    <p>internal</p>
                </div>
                <Image src={routerPng} alt='router' />
                <div className='flex flex-col items-center gap-4'>
                    <p>VPN</p>
                    <p>external</p>
                    <div className='grid grid-cols-3 gap-1 w-44'>
                        {externalPort.map((item) => {
                            return (
                                <p
                                    key={item.id}
                                    className='border-[0.5px] rounded p-1'
                                >
                                    {item.number}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className={borderBlockClasses}>
                    <p className='font-medium pt-1 pl-3'>Ethernet</p>
                    <div className={blockDevicesClasses}>
                        {netDevices.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className='flex flex-row items-center gap-2 p-2 hover:bg-mapItemBG cursor-pointer'
                                >
                                    <DevicesIcon />
                                    <div>
                                        <p className='font-medium'>
                                            {item.name}
                                        </p>
                                        <p className='text-sm'>{item.ip}</p>
                                        <div className={devicePortClasses}>
                                            {item.ports.map((port) => {
                                                return <p key={port}>{port}</p>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={borderBlockClasses}>
                    <p className='font-medium pt-1 pl-3'>Wi-Fi</p>
                    <div className={blockDevicesClasses}>
                        {wifiDevices.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className='flex flex-row items-center gap-2 p-2 hover:bg-mapItemBG cursor-pointer'
                                >
                                    <DevicesIcon />
                                    <div>
                                        <p className='font-medium'>
                                            {item.name}
                                        </p>
                                        <p className='text-sm'>{item.ip}</p>
                                        <div className={devicePortClasses}>
                                            {item.ports.map((port) => {
                                                return <p key={port}>{port}</p>
                                            })}
                                        </div>
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
