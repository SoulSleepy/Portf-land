import { useTranslation } from 'next-i18next'
import json from '../../../../public/locales/ru/modals.json'
import { IEventInfoBody, IModalsEvent } from 'types/types'

interface IProps {
    type: number
    body: IEventInfoBody
}

export const EventItemInfo = ({ type, body }: IProps) => {
    const { t } = useTranslation('modals')
    const { list }: IModalsEvent = json
    const { details } = list[type]
    const paramTranslate = {
        ip: body?.ip,
        login: body?.login,
        password: body?.password,
        host: body?.host,
        tst: body?.tst,
        count: body?.count,
        dhcp_server: body?.dhcp_server,
        asd: body?.asd,
        target_mac: body?.target_mac,
        userAgent: body?.userAgent,
    }
    return (
        <div className='flex flex-col gap-3'>
            {details.map((item, index) => {
                return (
                    <div key={index} className='flex flex-col gap-1'>
                        <p className='font-medium text-lg'>
                            {t(`list.${type}.details.${index}.subtitle`)}
                        </p>
                        {item.list ? (
                            item.list.map((_, key) => {
                                return (
                                    <p key={key}>
                                        {t(
                                            `list.${type}.details.${index}.list.${key}`
                                        )}
                                    </p>
                                )
                            })
                        ) : Array.isArray(item.description) ? (
                            item.description.map((_, key) => {
                                return (
                                    <p key={key}>
                                        {t(
                                            `list.${type}.details.${index}.description.${key}`,
                                            paramTranslate
                                        )}
                                    </p>
                                )
                            })
                        ) : (
                            <p>
                                {t(
                                    `list.${type}.details.${index}.description`,
                                    paramTranslate
                                )}
                            </p>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
