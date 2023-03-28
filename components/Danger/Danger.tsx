import cn from 'classnames'
import { useState } from 'react'
import { Completed } from './Completed'
import { Filter } from './Filter'
import { InWork } from './InWork'

export const Danger = () => {
    const [activeBtn, setActiveBtn] = useState('inWork')

    const blockClasses = 'flex flex-col bg-white rounded-xl p-3 shadow-md gap-2'
    const btnTitleClasses =
        'border-b text-center h-7 hover:border-b-2 hover:font-medium cursor-pointer'
    const activeBtnClasses = 'border-b-2 font-medium'
    const hrClasses = 'border-none bg-text h-[1.5px] w-full'

    return (
        <div className='grid grid-cols-[2fr_1fr] gap-3 text-text-light'>
            <div className={blockClasses}>
                <div className='grid grid-cols-2'>
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: activeBtn === 'inWork',
                        })}
                        onClick={() => setActiveBtn('inWork')}
                    >
                        В работе
                    </button>
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: activeBtn === 'completed',
                        })}
                        onClick={() => setActiveBtn('completed')}
                    >
                        Завершенные
                    </button>
                </div>
                {activeBtn === 'inWork' ? <InWork /> : <Completed />}
            </div>
            <div className={blockClasses}>
                <p className='flex font-medium h-10 items-center'>Фильтр</p>
                <hr className={hrClasses} />
                <div>
                    <Filter />
                </div>
            </div>
        </div>
    )
}
