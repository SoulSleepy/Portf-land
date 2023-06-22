import { useGetAdminOutsideQuery } from 'state/rtk/system.rtk'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import { AGENT_URL } from 'state/rtk/config'

export const Params = () => {
    const { t } = useTranslation('system')
    // const { data, isLoading } = useGetAdminOutsideQuery()
    // не работает как надо Витя сказал пока убрать.

    // const adminBtn = (value: string) => {
    //     return cn(settingsBtnClasses, {
    //         activeSettingsBtnClasses: data == value,
    //     })
    // }
    // console.log(data);

    const blockClasses = 'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium items-center text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const settingsBtnClasses =
        'flex hover:bg-light-lighter dark:hover:bg-light-lighterD hover:font-medium outline outline-0 hover:outline-1 h-10 w-[100px] items-center justify-center rounded-sm'
    const activeSettingsBtnClasses = 'bg-light-lighter dark:bg-light-lighterD font-medium outline-1'

    return (
        <div className={blockClasses}>
            <div className='flex flex-col gap-[14px]'>
                <div className='flex flex-row justify-between'>
                    <p className={titleClasses}>{t('agent')}</p>
                    <a download href={`${AGENT_URL}agent.exe`}
                        className={cn(settingsBtnClasses, 'bg-light-lighter dark:bg-light-lighterD')}
                    >
                        {t('download')}
                    </a>
                </div>
                <hr className={hrClasses} />
                <div className='flex flex-row justify-between'>
                    <p className={titleClasses}>{t('start page')}</p>
                    <div className='flex flex-row gap-3 '>
                        <button
                            className={cn(
                                settingsBtnClasses,
                                activeSettingsBtnClasses
                            )}
                        >
                            {t('dashboard')}
                        </button>
                        <button className={settingsBtnClasses}>
                            {t('network map')}
                        </button>
                    </div>
                </div>
                <hr className={hrClasses} />
                {/* <div className='flex flex-row justify-between'>
                    <p className={titleClasses}>{t('external access to admin panel')}</p>
                    <div className='flex flex-row gap-3 h-10 items-center'>
                        <button className={adminBtn('active')}>Да</button>
                        <button className={adminBtn('inactive')}>Нет</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
