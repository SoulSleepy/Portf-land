import {
    ClockIcon,
    DevicesIcon,
    EventIcon,
    HideFilterIcon,
    ShowFilterIcon,
} from 'components/Icons/Icons'
import { FilterEvent } from './FilterEvent'
import { useFilter } from 'helpers/hooks/useFilter'
import { useGetEventListQuery } from 'state/rtk/dangerAndEvent.rtk'
import { toDate } from 'helpers/softFunctions'
import { openGetEventItemModal } from 'state/slices/modals.slice'
import { useState } from 'react'
import { useAppDispatch } from 'state/store'
import { GetEventItemModal } from '../Modals/GetEventItemModal'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from '../Loader'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import cn from 'classnames'

export const Event = () => {
    const { push } = useRouter()
    const { t } = useTranslation('events')
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)
    const [showFilter, setShowFilter] = useState(true)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetEventItemModal())
    }

    const onToDevice = (value: number) => {
        push(`/devices?id=${value}`, '/devices')
    }

    const { filter } = useFilter()
    const { data, isLoading } = useGetEventListQuery(filter)

    const wrapperClasses =
        'max-m:flex grid max-m:flex-col grid-cols-[2.4fr_1fr] gap-3 text-text-light max-s:w-[260px] max-s:h-[800px] h-[670px]'
    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2 dark:bg-darkD dark:text-text-lightD'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full mb-3'

    return (
        <div className={cn(wrapperClasses, { 'max-s:h-[590px]': !showFilter })}>
            <div className={blockClasses}>
                <div className='flex flex-col gap-2 max-m:h-[485px] h-[640px] overflow-auto'>
                    <Loader isLoading={isLoading}>
                        {data?.length ? (
                            data?.map((item) => {
                                return (
                                    <div
                                        onClick={() => openModal(item.id)}
                                        key={item.id}
                                        className='flex max-sm:flex-col flex-row max-sm:gap-2 gap-5 items-center pl-2 hover:bg-light-lighter dark:hover:bg-light-lighterD cursor-pointer'
                                    >
                                        <div className='flex flex-row max-sm:gap-2 gap-5 items-center'>
                                            <div className='max-s:scale-[1.3] max-md:scale-[1.5] scale-[2.0]'>
                                                <EventIcon
                                                    fill={
                                                        theme === 'dark'
                                                            ? 'white'
                                                            : 'black'
                                                    }
                                                />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <p className='font-medium max-m:leading-5 max-m:text-base text-lg'>
                                                    {t(
                                                        `list.${item.type}.title`
                                                    )}
                                                </p>
                                                <div className='flex flex-col gap-1'>
                                                    <div className='flex flex-row gap-2'>
                                                        <ClockIcon
                                                            fill={
                                                                theme === 'dark'
                                                                    ? '#bebebe'
                                                                    : '#6C7281'
                                                            }
                                                        />
                                                        <p>
                                                            {toDate(
                                                                item.createTst
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className='flex flex-row gap-2 h-[34px]'
                                                        onClick={(event) =>
                                                            event.stopPropagation()
                                                        }
                                                    >
                                                        <DevicesIcon
                                                            fill={
                                                                theme === 'dark'
                                                                    ? '#bebebe'
                                                                    : '#6C7281'
                                                            }
                                                        />
                                                        <p
                                                            className='hover:text-graph cursor-pointer hover:underline hover:underline-offset-8 transition-all'
                                                            onClick={() =>
                                                                onToDevice(
                                                                    item
                                                                        ?.deviceInfo
                                                                        .entityId as number
                                                                )
                                                            }
                                                        >
                                                            {
                                                                item.deviceInfo
                                                                    .name
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='flex ml-auto pr-1 items-center'>
                                            #{item.id}
                                        </p>
                                    </div>
                                )
                            })
                        ) : (
                            <p className='flex flex-col items-center justify-center max-md:text-lg text-2xl h-full'>
                                {t('no events found')}
                            </p>
                        )}
                    </Loader>
                </div>
            </div>
            <div
                className={cn(blockClasses, 'max-m:order-[-1]', {
                    'h-[80px]': !showFilter,
                })}
            >
                <div className='flex flex-row justify-between items-center'>
                    <p className='flex font-medium max-md:h-8 h-10 items-center max-md:text-base text-lg'>
                        {t('filter')}
                    </p>
                    <div
                        className='cursor-pointer s:hidden'
                        onClick={() => setShowFilter(!showFilter)}
                    >
                        {!showFilter ? <ShowFilterIcon /> : <HideFilterIcon />}
                    </div>
                </div>
                <hr className={hrClasses} />
                <div className={cn({ hidden: !showFilter })}>
                    <FilterEvent />
                </div>
            </div>
            <GetEventItemModal id={taskId} />
        </div>
    )
}
