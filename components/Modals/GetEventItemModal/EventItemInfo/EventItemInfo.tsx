import { useTranslation } from 'next-i18next'
import json from '../../../../public/locales/ru/modals.json'
import { IModalsEvent } from 'types/types'

interface IProps {
    type: number
}

export const EventItemInfo = ({ type }: IProps) => {
    const { t } = useTranslation('modals')
    const { list }: IModalsEvent = json
    const {details} = list[type]

    return (
        <div className='flex flex-col gap-3'>
            {details.map((_, index) => {
                return (
                    <div key={index} className='flex flex-col gap-1'>
                        <p className='font-medium text-lg'>
                            {t(`list.${type}.details.${index}.subtitle`)}
                        </p>
                        {details[index].list ? (
                            details[index].list?.map(
                                (_, key) => {
                                    return (
                                        <p key={key}>
                                            {t(
                                                `list.${type}.details.${index}.list.${key}`
                                            )}
                                        </p>
                                    )
                                }
                            )
                        ) : Array.isArray(details[index].description) ? ((details[index].description as string[]).map((_, key) => {
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
