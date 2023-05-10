import Image from 'next/image'
import cn from 'classnames'
import { useState } from 'react'
import devicesIcon from '../../../images/devicesIcon.svg'
import { Dangers } from './Dangers'
import { Information } from './Information'
import { Programs } from './Programs'
import { Events } from './Events'
import { IDeviceItem } from 'types/types'

interface IDeviceInfoItem {
    information: JSX.Element
    programs: JSX.Element
    dangers: JSX.Element
    events: JSX.Element
}

export const DeviceInfo = ({ device }: { device: IDeviceItem }) => {
    const [activeBtn, setActiveBtn] =
        useState<keyof IDeviceInfoItem>('information')

    const deviceInfoItems: IDeviceInfoItem = {
        information: <Information deviceId={device.id} />,
        programs: <Programs deviceId={device.id} />,
        dangers: <Dangers deviceId={device.id} />,
        events: <Events deviceId={device.id} />,
    }

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const btnTitleClasses =
        'border-b text-center h-7 hover:border-b-2 hover:font-medium cursor-pointer text-lg'
    const activeBtnClasses = 'border-b-2 font-medium'

    return (
        <div className='flex flex-col gap-3'>
            <div className={blockClasses}>
                <div className='flex flex-row gap-3'>
                    <Image
                        src={devicesIcon}
                        width={30}
                        height={30}
                        alt='devices'
                    />
                    <div className='flex flex-col leading-3'>
                        <p className='font-medium text-xl'>{device.name}</p>
                        <p className='text-base'>{device.ip}</p>
                        <p className='text-base'>{device.mac}</p>
                    </div>
                    {device.agent &&
                        (device.online === true ? (
                            <p className='ml-auto text-primary'>
                                Агент запущен
                            </p>
                        ) : (
                            <p className='ml-auto text-primary'>
                                Агент установлен
                            </p>
                        ))}
                </div>
                <div
                    className={cn('grid grid-cols-3 -mb-[12px]', {
                        ['grid-cols-4']: device.agent,
                    })}
                >
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: activeBtn === 'information',
                        })}
                        onClick={() => setActiveBtn('information')}
                    >
                        Информация
                    </button>
                    {device.agent && (
                        <button
                            className={cn(btnTitleClasses, {
                                [activeBtnClasses]: activeBtn === 'programs',
                            })}
                            onClick={() => setActiveBtn('programs')}
                        >
                            Программы
                        </button>
                    )}
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: activeBtn === 'dangers',
                        })}
                        onClick={() => setActiveBtn('dangers')}
                    >
                        Уязвимости
                    </button>
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: activeBtn === 'events',
                        })}
                        onClick={() => setActiveBtn('events')}
                    >
                        События
                    </button>
                </div>
            </div>
            {deviceInfoItems[activeBtn]}
        </div>
    )
}
