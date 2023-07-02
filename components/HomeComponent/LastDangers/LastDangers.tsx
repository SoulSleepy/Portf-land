import { ITaskItem } from 'types/types'
import { DangerIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { GetDangerItemModal } from 'components/Modals/GetDangerItemModal'
import { useAppDispatch } from 'state/store'
import { openGetTaskItemModal } from 'state/slices/modals.slice'
import { useState } from 'react'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

interface IProps {
    dangerList: ITaskItem[]
    isLoading: boolean
}

export const LastDangers = ({ dangerList, isLoading }: IProps) => {
    const { t } = useTranslation('home')
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [taskId, setTaskId] = useState(0)

    const openModal = (value: number) => {
        setTaskId(value)
        dispatch(openGetTaskItemModal())
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl max-sm:p-2 p-3 shadow-dark gap-2 h-[322px]'
    const titleClasses = 'flex font-medium max-sm:h-6 h-8 items-center max-sm:text-base text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const eventDangerClasses =
        'flex flex-row items-center gap-2 p-1 bg-light-lighter dark:bg-light-lighterD cursor-pointer'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('recent vulnerabilities')}</p>
            <hr className={hrClasses} />
            <div className='flex flex-col h-[250px] overflow-auto gap-2'>
                <Loader size={75} isLoading={isLoading}>
                    {dangerList?.length ? (
                        dangerList?.map((item) => {
                            return (
                                <div
                                    className={eventDangerClasses}
                                    key={item.id}
                                    onClick={() => openModal(item.id)}
                                >
                                    <DangerIcon
                                        fill={
                                            theme === 'dark'
                                                ? 'white'
                                                : '#6C7281'
                                        }
                                    />
                                    <div className='flex flex-col gap-1'>
                                        <p className='leading-5'>
                                            {t('vulnerable software found')}
                                        </p>
                                        <p className='text-sm'>
                                            {toDate(item.createTst)}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <p className='max-sm:text-base text-lg flex items-center justify-center h-full'>
                            {t('no vulnerabilities')}
                        </p>
                    )}
                </Loader>
            </div>
            <GetDangerItemModal id={taskId} />
        </div>
    )
}
