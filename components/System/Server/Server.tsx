import { useGetServerInfoQuery } from 'state/rtk/system.rtk'
import cn from 'classnames'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

export const Server = () => {
    const { t } = useTranslation('system')
    const { data, isLoading } = useGetServerInfoQuery()

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const btnClasses =
        'flex flex-col items-center justify-center cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter dark:bg-light-lighterD rounded-sm p-3'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('connection to server')}</p>
            <hr className={hrClasses} />
            <Loader isLoading={isLoading}>
                {false ? (
                    <div className='flex flex-col gap-5 justify-between mt-2 h-[88px]'>
                        <div className='flex flex-row justify-between h-[30px] items-center'>
                            <p>IP:</p>
                            {isLoading ? <p>loading</p> : <p>{data?.ip}</p>}
                        </div>
                        <div className='flex flex-row justify-between items-center h-[30px]'>
                            <p>Status:</p>
                            <p>Не в сети</p>
                        </div>
                    </div>
                ) : (
                    <p>
                        {t('text1')}
                    </p>
                )}
            </Loader>
            <button className={cn(btnClasses, 'h-8 w-[120px] mt-2')}>
                {t('connect')}
            </button>
        </div>
    )
}
