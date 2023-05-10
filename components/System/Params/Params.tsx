import { useGetAdminOutsideQuery } from 'state/rtk/system.rtk'
import cn from 'classnames'

export const Params = () => {
    const { data, isLoading } = useGetAdminOutsideQuery()

    const blockClasses = 'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium items-center'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const settingsBtnClasses =
        'flex hover:bg-light-lighter hover:font-medium outline outline-0 hover:outline-1 h-10 w-[100px] items-center justify-center rounded-sm'
    const activeSettingsBtnClasses = 'bg-light-lighter font-medium outline-1'
    const adminBtn = (value: string) => {
        return cn(settingsBtnClasses, {
            activeSettingsBtnClasses: data == value,
        })
    }
    console.log(data);
    
    return (
        <div className={blockClasses}>
            <div className='flex flex-col gap-[14px]'>
                <div className='flex flex-row justify-between'>
                    <p className={titleClasses}>Агент</p>
                    <a download='agent.exe' href='http://192.168.1.253:8080/agent.exe'
                        className={cn(settingsBtnClasses, 'bg-light-lighter')}
                    >
                        Скачать
                    </a>
                </div>
                <hr className={hrClasses} />
                <div className='flex flex-row justify-between'>
                    <p className={titleClasses}>Стартовая страница</p>
                    <div className='flex flex-row gap-3 '>
                        <button
                            className={cn(
                                settingsBtnClasses,
                                activeSettingsBtnClasses
                            )}
                        >
                            Dashboard
                        </button>
                        <button className={settingsBtnClasses}>
                            Карта сети
                        </button>
                    </div>
                </div>
                <hr className={hrClasses} />
                <div className='flex flex-row justify-between'>
                    <p className={titleClasses}>Внешний доступ к админке</p>
                    <p className='flex h-10 items-center'>Временно не доступно</p>
                    {/* <div className='flex flex-row gap-3 h-10 items-center'>
                        <button className={adminBtn('active')}>Да</button>
                        <button className={adminBtn('inactive')}>Нет</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
