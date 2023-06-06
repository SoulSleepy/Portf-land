import { ClockIcon, DangerLevelIcon, DevicesIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { useFilter } from 'helpers/hooks/useFilter'
import { useGetDangerListQuery } from 'state/rtk/dangerAndEvent.rtk'
import { openGetTaskItemModal } from 'state/slices/modals.slice'
import { useAppDispatch } from 'state/store'
import { useState } from 'react'
import { GetDangerItemModal } from 'components/Modals/GetDangerItemModal'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import cn from 'classnames'

export const Completed = () => {
    const { push } = useRouter()
    const { t } = useTranslation('vulns')
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetTaskItemModal())
    }
    const onToDevice = (value: number) => {
        push(`/devices?id=${value}`, '/devices')
    }

    const { filter } = useFilter()
    const { data, isLoading } = useGetDangerListQuery(filter)

    return (
        <div className='flex flex-col gap-2 h-[610px] overflow-auto'>
            <Loader isLoading={isLoading}>
                {data?.length ? (
                    data?.map((item) => {
                        return (
                            <div
                                onClick={() => openModal(item.id)}
                                key={item.id}
                                className='flex flex-row gap-4 hover:bg-light-lighter dark:hover:bg-light-lighterD cursor-pointer'
                            >
                                <div className='flex flex-col items-center justify-center relative pl-3 w-[30px]'>
                                    <div className=' scale-[2.0] absolute'>
                                        <DangerLevelIcon
                                            fill={
                                                theme === 'dark'
                                                    ? 'white'
                                                    : 'black'
                                            }
                                        />
                                    </div>
                                    <p
                                        className={cn(
                                            'absolute top-[31px] font-medium',
                                            { 'text-[red]': +item.crt >= 7 },
                                            { 'text-[orange]': +item.crt < 7 }
                                        )}
                                    >
                                        {item.crt}
                                    </p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='font-medium text-lg h-[28px]'>
                                        {item.titles?.ru}
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
                                            <p>{toDate(item.createTst)}</p>
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
                                                className='hover:text-graph cursor-pointer hover:underline hover:underline-offset-8'
                                                onClick={() =>
                                                    onToDevice(
                                                        item?.deviceInfo
                                                            .entityId as number
                                                    )
                                                }
                                            >
                                                {item?.deviceInfo.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className='flex ml-auto pr-2 items-center'>
                                    #{item.id}
                                </p>
                            </div>
                        )
                    })
                ) : (
                    <p className='flex flex-col items-center justify-center text-2xl h-full'>
                        {t('no vulnerabilities found')}
                    </p>
                )}
            </Loader>
            <GetDangerItemModal id={taskId} />
        </div>
    )
}
