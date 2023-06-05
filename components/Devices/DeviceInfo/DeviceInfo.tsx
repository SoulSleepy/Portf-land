import cn from 'classnames'
import { useState } from 'react'
import { Dangers } from './Dangers'
import { Information } from './Information'
import { Programs } from './Programs'
import { Events } from './Events'
import { IDeviceItem } from 'types/types'
import { DevicesIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { useTranslation } from 'next-i18next'

interface IDeviceInfoItem {
    information: JSX.Element
    programs: JSX.Element
    dangers: JSX.Element
    events: JSX.Element
}

export const DeviceInfo = ({ device }: { device: IDeviceItem }) => {
    const { t } = useTranslation('devices')
    const { theme } = useTheme()
    const [activeBtn, setActiveBtn] =
        useState<keyof IDeviceInfoItem>('information')

    const deviceInfoItems: IDeviceInfoItem = {
        information: <Information deviceId={device.id} />,
        programs: <Programs deviceId={device.id} />,
        dangers: <Dangers deviceId={device.id} />,
        events: <Events deviceId={device.id} />,
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const btnTitleClasses =
        'border-b text-center h-7 hover:border-b-2 hover:font-medium cursor-pointer text-lg'
    const activeBtnClasses = 'border-b-2 font-medium dark:text-light'

    return (
        <div className='flex flex-col gap-3'>
            <div className={blockClasses}>
                <div className='flex flex-row gap-3'>
                    <div className='flex items-center pl-1 scale-125'>
                        <DevicesIcon fill={theme === 'dark' ? '#bebebe' : '#6C7281'} />
                    </div>
                    <div className='flex flex-col leading-3'>
                        <p className='font-medium text-xl'>{device.name}</p>
                        <p className='text-base'>{device.ip}</p>
                        <p className='text-base'>{device.mac}</p>
                    </div>
                    {device.agent &&
                        (device.online === true ? (
                            <p className='ml-auto text-primary'>
                                {t('agent running')}
                            </p>
                        ) : (
                            <p className='ml-auto text-primary'>
                                {t('agent installed')}
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
                        {t('information')}
                    </button>
                    {device.agent && (
                        <button
                            className={cn(btnTitleClasses, {
                                [activeBtnClasses]: activeBtn === 'programs',
                            })}
                            onClick={() => setActiveBtn('programs')}
                        >
                            {t('programs')}
                        </button>
                    )}
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: activeBtn === 'dangers',
                        })}
                        onClick={() => setActiveBtn('dangers')}
                    >
                        {t('vulns')}
                    </button>
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: activeBtn === 'events',
                        })}
                        onClick={() => setActiveBtn('events')}
                    >
                        {t('events')}
                    </button>
                </div>
            </div>
            {deviceInfoItems[activeBtn]}
        </div>
    )
}
