import { toDate } from "@/helpers/softFunctions"
import { useLazyGetUserLogQuery } from "@/state/rtk/users.rtk"
import { useEffect } from "react"

interface IProps {
    userId: number
}

export const UserEvents = ({userId}: IProps) => {
    const [getUserLog, {data, isLoading}] = useLazyGetUserLogQuery()

    useEffect(() => {
        getUserLog(userId)
    }, [userId])

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const tableItemClasses = 'border-r-[1px] border-b-[1px] p-1 h-8'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Поcледние события</p>
            <hr className={hrClasses} />
            <div className='flex flex-col'>
                <div className='grid grid-cols-4 items-center text-sm font-medium text-text-light border-t-[1px] border-l-[1px]'>
                    <p className={tableItemClasses}>Время</p>
                    <p className={tableItemClasses}>Логин</p>
                    <p className={tableItemClasses}>Событие</p>
                    <p className={tableItemClasses}>Параметры</p>
                </div>
                {isLoading ? <p>loading</p> : data?.map((item) => {
                    return (
                        <div
                            key={item.time}
                            className='grid grid-cols-4 items-center text-sm text-text-light border-l-[1px]'
                        >
                            <p className={tableItemClasses}>{toDate(item.time)}</p>
                            <p className={tableItemClasses}>{item.user}</p>
                            <p className={tableItemClasses}>{item.action}</p>
                            <p className={tableItemClasses}>{item.params.time}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
