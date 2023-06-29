import { DevicesIcon } from 'components/Icons/Icons'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { IMapItem } from 'types/types'

interface IProps {
    data: IMapItem[]
}

export const WifiMap = ({ data }: IProps) => {
    const { push } = useRouter()
    const { t } = useTranslation('map')

    const onToDevice = (value: number) => {
        push(`/devices?id=${value}`, '/devices')
    }

    const blockDevicesClasses = 'grid grid-cols-3 gap-2 '
    const borderBlockClasses = 'border-white border border-solid rounded-md'
    const devicePortClasses =
        'flex flex-col gap-1 w-20 h-16 mt-2 overflow-hidden hover:overflow-auto text-sm text-text-light text-text-lightD'

    return (
        <div className={borderBlockClasses}>
            <p className='font-medium pt-1 pl-3 text-lg'>Wi-Fi</p>
            <div className={blockDevicesClasses}>
                {data?.map((item) => {
                    if (item.wired)
                        return (
                            <div
                                key={item.id}
                                className='flex flex-row items-center gap-2 p-2 hover:bg-mapItemBG cursor-pointer'
                            >
                                <DevicesIcon fill='white' />
                                <div className='flex flex-col gap-1'>
                                    <p
                                        className='font-medium hover:text-graph cursor-pointer hover:underline hover:underline-offset-8 transition-all'
                                        onClick={() => onToDevice(item.id)}
                                    >
                                        {item.name}
                                    </p>
                                    <p className='text-sm'>{item.ip}</p>
                                    <div className={devicePortClasses}>
                                        {Object.keys(item.ports).length ? (
                                            Object.keys(item.ports).map(
                                                (port) => {
                                                    return (
                                                        <p
                                                            className='px-1 py-[2px] w-20 hover:bg-light-lighterD dark:hover:bg-text'
                                                            key={port}
                                                        >
                                                            {port}
                                                        </p>
                                                    )
                                                }
                                            )
                                        ) : (
                                            <p>{t('no')}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}
