import { toDate } from 'helpers/softFunctions'
import { useLazyGetUserLogQuery } from 'state/rtk/users.rtk'
import { useEffect } from 'react'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

interface IProps {
    userId: number
}

export const UserEvents = ({ userId }: IProps) => {
    const { t } = useTranslation('users')

    const [getUserLog, { data, isLoading }] = useLazyGetUserLogQuery()

    useEffect(() => {
        getUserLog(userId)
    }, [userId])

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2 dark:bg-darkD dark:text-text-lightD'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const tableItemClasses = 'border-r-[1px] border-b-[1px] p-1 h-8'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('recent events')}</p>
            <hr className={hrClasses} />
            <div className='flex flex-col'>
                <div className='grid grid-cols-4 items-center text-sm font-medium border-t-[1px] border-l-[1px]'>
                    <p className={tableItemClasses}>{t('time')}</p>
                    <p className={tableItemClasses}>{t('login')}</p>
                    <p className={tableItemClasses}>{t('event')}</p>
                    <p className={tableItemClasses}>{t('parameters')}</p>
                </div>
                <Loader isLoading={isLoading}>
                    {data?.map((item) => {
                        return (
                            <div
                                key={item.time}
                                className='grid grid-cols-4 items-center text-sm border-l-[1px]'
                            >
                                <p className={tableItemClasses}>
                                    {toDate(item.time)}
                                </p>
                                <p className={tableItemClasses}>{item.user}</p>
                                <p className={tableItemClasses}>
                                    {item.action}
                                </p>
                                <p className={tableItemClasses}>
                                    {item.params.time}
                                </p>
                            </div>
                        )
                    })}
                </Loader>
            </div>
        </div>
    )
}
