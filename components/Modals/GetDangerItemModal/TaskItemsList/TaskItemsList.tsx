import { IGetDangerCvec } from 'types/types'
import cn from 'classnames'
import { HideIpsIcon, ShowIpsIcon, TaskItemIcon } from 'components/Icons/Icons'

import { useState } from 'react'
import { TaskItemInfo } from './TaskItemInfo'
import { useTheme } from 'helpers/hooks/useTheme'

interface IProps {
    cves: IGetDangerCvec[]
}

export const TaskItemsList = ({ cves }: IProps) => {
    const { theme } = useTheme()
    const [show, setShow] = useState('')

    return (
        <div className='rounded-md bg-light-lighter dark:bg-light-lighterD'>
            {cves?.map((item) => {
                return (
                    <div
                        onClick={
                            show !== item.name
                                ? () => setShow(item.name)
                                : () => setShow('')
                        }
                        key={item.name}
                        className={cn('cursor-pointer flex flex-col gap-1 h-10', {
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
                                <p>{item.name}</p>
                            </div>
                            <button type='button' className='hover:scale-110'>
                                {show !== item.name ? (
                                    <HideIpsIcon
                                        fill={
                                            theme === 'dark'
                                                ? '#bebebe'
                                                : '#6C7281'
                                        }
                                    />
                                ) : (
                                    <ShowIpsIcon
                                        fill={
                                            theme === 'dark'
                                                ? '#bebebe'
                                                : '#6C7281'
                                        }
                                    />
                                )}
                            </button>
                        </div>
                        {show === item.name && <TaskItemInfo item={item} />}
                    </div>
                )
            })}
        </div>
    )
}
