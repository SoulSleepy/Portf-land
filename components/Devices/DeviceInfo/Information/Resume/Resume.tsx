import { useTranslation } from 'next-i18next'
import { IInfo } from 'types/types'

interface IProps {
    resume: IInfo | null
}

export const Resume = ({ resume }: IProps) => {
    const { t } = useTranslation('devices')

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('summary')}</p>
            <hr className={hrClasses} />
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                    <p>{t('name')}</p>
                    <p>{t('type')}</p>
                    <p>{t('OS')}</p>
                </div>
                <div className='text-right'>
                    <p>{resume?.name}</p>
                    <p>{resume?.type === 4 ? t('router') : t('unknown')}</p>
                    <p>{resume?.os}</p>
                </div>
            </div>
        </div>
    )
}
