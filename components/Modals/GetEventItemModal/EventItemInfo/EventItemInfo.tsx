import { useTranslation } from 'next-i18next'
import json from '../../../../public/locales/ru/modals.json'

interface IProps {
    type: number
}

export const EventItemInfo = ({ type }: IProps) => {
    const { t } = useTranslation('modals')

    const description = json.list[type]

    return (
        <div className='flex flex-col gap-3'>
            {description?.details.map((item: any, index: number) => {
                return (
                    <div key={index} className='flex flex-col gap-1'>
                        <p className='font-medium text-lg'>
                            {t(`list.${type}.details.${index}.subtitle`)}
                        </p>
                        {description.details[index].list ? (
                            description.details[index].list.map(
                                (item: any, key: number) => {
                                    return (
                                        <p key={key}>
                                            {t(
                                                `list.${type}.details.${index}.list.${key}`
                                            )}
                                        </p>
                                    )
                                }
                            )
                        ) : Array.isArray(
                              description.details[index].description
                          ) ? (
                            description.details[index].description?.map(
                                (item: any, key: number) => {
                                    return (
                                        <p key={key}>
                                            {t(
                                                `list.${type}.details.${index}.description.${key}`
                                            )}
                                        </p>
                                    )
                                }
                            )
                        ) : (
                            <p>
                                {t(`list.${type}.details.${index}.description`)}
                            </p>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
