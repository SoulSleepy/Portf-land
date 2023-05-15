import Image from 'next/image'
import routerPng from '../../images/router.png'
import { DevicesIcon } from '../Icons/Icons'
import { useGetMapListQuery } from '@/state/rtk/map'
import { Ethernet } from './Ethernet'
import { WifiMap } from './WifiMap'
import { IMapItem } from '@/types/types'

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
    const {data, isLoading, isError} = useGetMapListQuery()

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
                        {/* {isLoading ? <p>loading</p> : data?.map((item) => {
                            return (
                                <p
                                    key={item.id}
                                    className='border-[0.5px] rounded p-1'
                                >
                                    {item.number}
                                </p>
                            )
                        })} тут надо добавить блок портов под external но их нет пока что*/} 
                    </div>
                </div>
            </div>
            {isLoading ? <p>loading</p> : <div className='grid grid-cols-2 gap-4 min-h-[435px]'>
                <Ethernet data={data as IMapItem[]}/>
                <WifiMap data={data as IMapItem[]}/>
            </div>}
        </div>
    )
}
