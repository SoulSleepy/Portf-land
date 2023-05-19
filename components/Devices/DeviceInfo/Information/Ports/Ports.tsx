import { useTranslation } from 'next-i18next'
import { IPorts } from 'types/types'

interface IProps {
    ports: IPorts[] | null
}

export const Ports = ({ ports }: IProps) => {
    const { t } = useTranslation('devices')

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const tableItemClasses = 'border-r-[1px] border-b-[1px] pl-1 pt-[3px] h-7'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Порты</p>
            <hr className={hrClasses} />
            <div className='flex flex-col'>
                <div className='grid grid-cols-4 items-center text-sm font-medium text-text-light dark:text-text-lightD  border-t-[1px] border-l-[1px]'>
                    <p className={tableItemClasses}>{t('number')}</p>
                    <p className={tableItemClasses}>{t('device type')}</p>
                    <p className={tableItemClasses}>{t('protocol')}</p>
                    <p className={tableItemClasses}>{t('banner')}</p>
                </div>
                {ports?.map((item) => {
                    return (
                        <div
                            key={item.number}
                            className='grid grid-cols-4 items-center text-sm text-text-light dark:text-text-lightD border-l-[1px]'
                        >
                            <p className={tableItemClasses}>{item.number}</p>
                            <p className={tableItemClasses}>{item.type}</p>
                            <p className={tableItemClasses}>{item.protocol}</p>
                            <p className={tableItemClasses}>{item.banner}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
