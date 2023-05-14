import { eventTypeObj } from 'helpers/consts'

interface IProps {
    type: number
}

export const EventItemInfo = ({ type }: IProps) => {
    const description = eventTypeObj[type]
    return (
        <div className='flex flex-col gap-3'>
            {description?.details.map((item: any) => {
                return (
                    <div key={item.subtitle} className='flex flex-col gap-1'>
                        <p className='font-medium text-lg'>{item.subtitle}</p>
                        <p>{item.description}</p>
                        {item.list && <div className='flex flex-col'>{item.list.map((item: any) => {
                            return (
                                <p key={item}>{item}</p>
                            )
                        })}</div>}
                    </div>
                )
            })}
        </div>
    )
}
