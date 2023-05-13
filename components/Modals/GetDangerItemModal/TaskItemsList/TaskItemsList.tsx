import { IGetDangerCvec } from "types/types"
import cn from 'classnames'
import {
    HideIpsIcon,
    ShowIpsIcon,
    TaskItemIcon,
} from 'components/Icons/Icons'

import { useState } from "react"
import { TaskItemInfo } from "./TaskItemInfo"

interface IProps {
    cves: IGetDangerCvec[]
}

export const TaskItemsList = ({cves}: IProps) => {
    const [show, setShow] = useState('')


    return (
        <div className='rounded-md bg-light-lighter'>
            {cves?.map((item) => {
                return (
                    <div
                        key={item.name}
                        className={cn('flex flex-col gap-1 h-10', {
                            'h-80': item.name === show,
                        })}
                    >
                        <div
                            className={cn(
                                'flex flex-row items-center gap-3 border-b-2 h-9 p-1',
                                {
                                    'border-none': show === item.name,
                                }
                            )}
                        >
                            <TaskItemIcon
                                fill={
                                    +item.securityMetrics.num > 7
                                        ? '#8f2828'
                                        : '#b76a3b'
                                }
                            />
                            <div className='flex flex-row justify-between w-full'>
                                <p>{item.title.ru}</p>
                                <p className=''>{item.name}</p>
                            </div>
                            <button
                                type='button'
                                className='hover:scale-110'
                                onClick={
                                    show !== item.name
                                        ? () => setShow(item.name)
                                        : () => setShow('')
                                }
                            >
                                {show !== item.name ? (
                                    <HideIpsIcon />
                                ) : (
                                    <ShowIpsIcon />
                                )}
                            </button>
                        </div>
                        {show === item.name && <TaskItemInfo item={item}/>}
                    </div>
                )
            })}
        </div>
    )
}
