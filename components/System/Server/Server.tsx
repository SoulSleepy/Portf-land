import { useGetServerInfoQuery } from 'state/rtk/system.rtk'
import cn from 'classnames'

export const Server = () => {
    const { data, isLoading} = useGetServerInfoQuery()

    const blockClasses = 'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const btnClasses =
        'flex flex-col items-center justify-center cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter rounded-sm p-3'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Подключение к серверу ИБ</p>
            <hr className={hrClasses} />
            <div className='flex flex-col gap-5 justify-between mt-2'>
                <div className='flex flex-row justify-between h-[30px] items-center'>
                    <p>IP:</p>
                    {isLoading ? <p>loading</p> : <p>{data?.ip}</p>}
                </div>
                <div className='flex flex-row justify-between items-center h-[30px]'>
                    <p>Status:</p>
                    <p>Не в сети</p>
                </div>
            </div>
            <button className={cn(btnClasses, 'h-8 w-[120px] mt-2')}>
                Отключиться
            </button>
        </div>
    )
}
