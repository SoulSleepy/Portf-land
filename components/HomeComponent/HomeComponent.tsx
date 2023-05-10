import { Internet } from './Internet'
import { HomeWeb } from './HomeWeb'
import { Speed } from './Speed'
import { Ports } from './Ports'
import { DeviceOnline } from './DeviceOnline'
import { LastDangers } from './LastDangers'
import { LastEvents } from './LastEvents'
import { useGetHomeInfoQuery } from 'state/rtk/home.rtk'
import { IDevicesLocalNetwork, IIncidentsItem, IPortLocalNetwork, ITaskItem } from 'types/types'

export const HomeComponent = () => {
    const { data, isLoading } = useGetHomeInfoQuery()
    console.log(data);
    

    return (
        <div className='flex flex-col gap-4 text-text-light'>
            <div className='grid grid-cols-2 gap-4'>
                <Internet />
                <div className='grid gap-4'>
                    <HomeWeb />
                    <Speed />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-4'>
                    <Ports isLoading={isLoading} ports={data?.localNetwork?.ports as IPortLocalNetwork[]}/>
                    <DeviceOnline
                        isLoading={isLoading}
                        deviceOnline={
                            data?.localNetwork?.devices as IDevicesLocalNetwork
                        }
                    />
                </div>
                <LastEvents isLoading={isLoading} eventList={data?.incidents as IIncidentsItem[]}/>
                <LastDangers isLoading={isLoading} dangerList={data?.tasks as ITaskItem[]}/>
            </div>
        </div>
    )
}
