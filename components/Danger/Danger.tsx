import cn from 'classnames'
import { useState } from 'react'
import { Completed } from './Completed'
import { FilterDanger } from './FilterDanger'
import { InWork } from './InWork'
import { useTranslation } from 'next-i18next'

export const Danger = () => {
    const { t } = useTranslation('vulns')
    const [activeBtn, setActiveBtn] = useState(false)

    const blockClasses =
        'flex flex-col bg-light rounded-xl max-md:p-2 p-3 shadow-dark gap-2 dark:bg-darkD dark:text-text-lightD'
    const btnTitleClasses =
        'border-b text-center h-7 hover:border-b-2 hover:font-medium cursor-pointer max-md:text-base text-lg'
    const activeBtnClasses = 'border-b-2 font-medium dark:text-light'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full mb-3'

    return (
        <div className='grid max-md: grid-cols-[2.4fr_1fr] gap-3 text-text-light h-[670px]'>
            <div className={blockClasses}>
                <div className='grid grid-cols-2'>
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: !activeBtn,
                        })}
                        onClick={() => setActiveBtn(false)}
                    >
                        {t('in progress')}
                    </button>
                    <button
                        className={cn(btnTitleClasses, {
                            [activeBtnClasses]: activeBtn,
                        })}
                        onClick={() => setActiveBtn(true)}
                    >
                        {t('completed')}
                    </button>
                </div>
                {!activeBtn ? <InWork /> : <Completed />}
            </div>
            <div className={blockClasses}>
                <p className='flex font-medium max-md:h-8 h-10 items-center max-md:text-base text-lg'>
                    {t('filter')}
                </p>
                <hr className={hrClasses} />
                <FilterDanger isClosed={activeBtn} />
            </div>
        </div>
    )
}
