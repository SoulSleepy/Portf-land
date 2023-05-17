import { toDate } from '@/helpers/softFunctions'
import { IAgentInfoMain } from 'types/types'

interface IProps {
    main: IAgentInfoMain
}

export const Basic = ({ main }: IProps) => {
    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Основное</p>
            <hr className={hrClasses} />
            <div className='flex flex-row justify-between'>
                <div className='grid grid-rows-4 gap-1'>
                    <p>ОС</p>
                    <p>Домен/Имя</p>
                    <p>Хост</p>
                    <p>Модель</p>
                </div>
                <div className='grid grid-rows-4 gap-1 text-right'>
                    <div>
                        <p>{main.os}</p>
                        <p className='text-sm'>
                            Установлено{toDate(main.dateInst)}
                        </p>
                    </div>
                    <p>{main.machineName}</p>
                    <p>{main.hostname}</p>
                    <div>
                        <p>{main.vendor}</p>
                        <p className='text-sm'>{main.model}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
