import { useLazyGetDeviceProgramsQuery } from 'state/rtk/devices.rtk'
import { useEffect } from 'react'
import { DevicesIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'

interface IProps {
    deviceId: number
}

export const Programs = ({ deviceId }: IProps) => {
    const { theme } = useTheme()
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
        <div className='flex flex-col bg-light dark:bg-darkD border shadow-dark overflow-auto h-[530px] relative'>
            <div className='grid grid-cols-5 items-center text-sm font-medium text-text-light dark:text-text-lightD border-t-[1px] border-l-[1px] sticky top-0 bg-light-lighter dark:bg-darkDD'>
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
                                className='grid grid-cols-5 items-center text-sm text-text-light dark:text-text-lightD border-l-[1px]'
                            >
                                <div className='flex flex-row gap-1 border-r-[1px] border-b-[1px] pl-1 pt-[3px] h-8 truncate ...'>
                                    <div>
                                        <DevicesIcon fill={theme === 'dark' ? '#bebebe' : '#6C7281'}/>
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
