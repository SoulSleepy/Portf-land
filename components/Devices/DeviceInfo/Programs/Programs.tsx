import { useLazyGetDeviceProgramsQuery } from 'state/rtk/devices.rtk'
import { useEffect } from 'react'
import { ProgrammNoIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { useTranslation } from 'next-i18next'
import { Loader } from 'components/Loader'

interface IProps {
    deviceId: number
}

export const Programs = ({ deviceId }: IProps) => {
    const { t } = useTranslation('devices')
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
                <p className={tableTitleClasses}>{t('program')}</p>
                <p className={tableTitleClasses}>{t('version')}</p>
                <p className={tableTitleClasses}>{t('location')}</p>
                <p className={tableTitleClasses}>{t('publisher')}</p>
                <p className={tableTitleClasses}>{t('date')}</p>
            </div>
            <Loader isLoading={isLoading}>
                {data ? (
                    data?.map((item) => {
                        return (
                            <div
                                key={item.name}
                                className='grid grid-cols-5 items-center text-sm text-text-light dark:text-text-lightD border-l-[1px]'
                            >
                                <div className='flex flex-row gap-1 border-r-[1px] border-b-[1px] pl-1 pt-[3px] h-8 truncate ...'>
                                    <div>
                                        {item.icon ? (
                                            <img
                                                className='max-w-fit'
                                                height={24}
                                                width={24}
                                                src={`data:image/png;base64,${item.icon}`}
                                                alt='icon'
                                            />
                                        ) : (
                                            <ProgrammNoIcon
                                                fill={
                                                    theme === 'dark'
                                                        ? '#bebebe'
                                                        : '#6C7281'
                                                }
                                            />
                                        )}
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
                                <p className={tableItemClasses}>
                                    {item.instTst}
                                </p>
                            </div>
                        )
                    })
                ) : (
                    <p className='flex flex-col items-center justify-center text-2xl h-full'>
                        {t('unknown')}
                    </p>
                )}
            </Loader>
        </div>
    )
}
