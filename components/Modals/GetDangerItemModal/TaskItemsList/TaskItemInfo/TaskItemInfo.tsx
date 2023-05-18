import { IGetDangerCvec } from 'types/types'
import cn from 'classnames'
import { TaskDescriptionIcon } from 'components/Icons/Icons'
import Link from 'next/link'
import { useState } from 'react'
import { toCVSS3 } from 'helpers/softFunctions'
import { useTheme } from 'helpers/hooks/useTheme'

interface IProps {
    item: IGetDangerCvec
}

export const TaskItemInfo = ({ item }: IProps) => {
    const { theme } = useTheme()
    const [activeDes, setActiveDes] = useState(0)
    const [openDescription, setOpenDescription] = useState(false)

    return (
        <div className='flex flex-col gap-1 p-2'>
            <div className='flex flex-row justify-between h-9 text-lg'>
                <p>Метрика риска</p>
                <p>Тип уязвимости</p>
            </div>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-row gap-4'>
                    <p className='uppercase'>
                        {item.securityMetrics.version +
                            ':' +
                            item.securityMetrics.str}
                    </p>
                    <p
                        className={cn('font-medium text-[#8f2828]', {
                            'text-[#b76a3b]': +item.securityMetrics.num < 7,
                        })}
                    >
                        {item.securityMetrics.num}
                    </p>
                    <div
                        className='cursor-pointer relative'
                        onClick={() => setOpenDescription(!openDescription)}
                    >
                        <TaskDescriptionIcon fill={theme === 'dark' ? '#bebebe' : '#6C7281'}/>
                        {openDescription && (
                            <div className='absolute -top-[80px] left-7 p-1 bg-text-light dark:bg-text-lightD text-light dark:text-darkD flex flex-col w-[430px] rounded-md'>
                                {toCVSS3(item.securityMetrics.str).map(
                                    (elem) => {
                                        return <p className='text-sm'>{elem}</p>
                                    }
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-1 ml-auto'>
                    {item.typesOfVuln.map((item) => {
                        return (
                            <Link
                                className='hover:text-graph'
                                target='_blank'
                                href={`https://cwe.mitre.org/data/definitions/${parseInt(
                                    item.name.replace(/[^\d]/g, '')
                                )}.html`}
                                key={item.name}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className='grid grid-cols-[1fr_3fr] border-2 rounded-sm h-[195px] bg-light dark:bg-darkD'>
                <div className='flex flex-col gap-2 overflow-auto border-r-2 p-2'>
                    {item.descs.map((item, index) => {
                        return (
                            <p
                                key={index}
                                onClick={() => setActiveDes(index)}
                                className={cn(
                                    'uppercase cursor-pointer hover:bg-light-lighter dark:hover:bg-light-lighterD',
                                    {
                                        'font-medium border-r-2 border-primary bg-light-lighter dark:bg-light-lighterD':
                                            activeDes === index,
                                    }
                                )}
                            >
                                {item.source_name + ' (' + item.lang + ')'}
                            </p>
                        )
                    })}
                </div>
                <div className='p-2 flex flex-col justify-between gap-4 overflow-auto'>
                    {item.descs.map((item, index) => {
                        if (index === activeDes)
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col gap-2'
                                >
                                    <p className='text-lg font-medium'>
                                        {item.source_name}
                                    </p>
                                    <p>{item.desc}</p>
                                </div>
                            )
                    })}
                    <div className='flex flex-col'>
                        <p className='font-medium mb-1'>Источники</p>
                        {item.urls.map((item) => {
                            return (
                                <Link
                                    key={item}
                                    className='hover:text-graph'
                                    href={item}
                                    target='_blank'
                                >
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
