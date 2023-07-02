import Image from 'next/image'
import routerPng from '../../images/router.png'
import { useGetMapListQuery } from 'state/rtk/map'
import { Ethernet } from './Ethernet'
import { WifiMap } from './WifiMap'
import { IMapItem } from 'types/types'
import { Loader } from '../Loader'

export const Map = () => {
    const { data, isLoading, isError } = useGetMapListQuery()

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex max-sm:flex-col flex-row justify-between items-center px-8'>
                <div>
                    <p>internal</p>
                </div>
                <div>
                    <Image src={routerPng} alt='router' />
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <p>VPN</p>
                    <p>external</p>
                    <div className='grid grid-cols-3 gap-1 max-md:w-36 w-44'>
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
            <Loader isLoading={isLoading}>
                <div className='grid max-sm:grid-cols-1 grid-cols-2 max-md:gap-2 gap-4 min-h-[435px]'>
                    <Ethernet data={data as IMapItem[]} />
                    <WifiMap data={data as IMapItem[]} />
                </div>
            </Loader>
        </div>
    )
}
