import { ITaskItem } from 'types/types'
import { DangerIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'

interface IProps {
    dangerList: ITaskItem[]
    isLoading: boolean
}

export const LastDangers = ({ dangerList, isLoading }: IProps) => {
    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const eventDangerClasses =
        'flex flex-row items-center gap-2 p-1 bg-light-lighter cursor-pointer'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Последние уязвимости</p>
            <hr className={hrClasses} />
            <div className='flex flex-col h-[280px] overflow-auto gap-2'>
                {isLoading ? (
                    <p className='Loading'></p>
                ) : (
                    dangerList.map((item) => {
                        return (
                            <div className={eventDangerClasses} key={item.id}>
                                <DangerIcon />
                                <div className='flex flex-col gap-1'>
                                    <p className='leading-5'>
                                        Найдено уязвимое ПО
                                    </p>
                                    <p className='text-sm'>
                                        {toDate(item.createTst)}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
