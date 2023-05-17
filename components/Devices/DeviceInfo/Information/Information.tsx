import { useLazyGetDeviceInfoQuery } from 'state/rtk/devices.rtk'
import { useEffect } from 'react'
import { Resume } from './Resume'
import { UsersDevice } from './UsersDevice'
import { Basic } from './Basic'
import { Ports } from './Ports'
import { Equipment } from './Equipment'
import { USBDevices } from './USBDevices'
import { Loader } from '@/components/Loader'

interface IProps {
    deviceId: number
}

export const Information = ({ deviceId }: IProps) => {
    const [getDeviceInfo, { data, isLoading }] = useLazyGetDeviceInfoQuery()
    console.log(data?.agentInfo?.usbDevices)

    useEffect(() => {
        if (deviceId) {
            getDeviceInfo(deviceId)
        }
    }, [deviceId])

    return (
        <Loader isLoading={isLoading}>
            <div className='flex flex-col gap-3 overflow-auto h-[530px]'>
                <Resume resume={data?.resume ? data?.resume : null} />
                {data?.agentInfo?.users.length && (
                    <UsersDevice users={data?.agentInfo?.users} />
                )}
                {data?.agentInfo?.main && (
                    <Basic main={data?.agentInfo?.main} />
                )}
                <Ports ports={data?.ports ? data?.ports : null} />
                {data?.agentInfo?.eq && (
                    <Equipment equipment={data?.agentInfo?.eq} />
                )}
                {data?.agentInfo?.usbDevices.length && (
                    <USBDevices usbDevices={data?.agentInfo?.usbDevices} />
                )}
            </div>
        </Loader>
    )
}
