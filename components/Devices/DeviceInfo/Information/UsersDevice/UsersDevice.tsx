import { UserIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { useTranslation } from 'next-i18next'
import { IAgentInfoUser } from 'types/types'

interface IProps {
    users: IAgentInfoUser[]
}

export const UsersDevice = ({ users }: IProps) => {
    const { t } = useTranslation('devices')
    const { theme } = useTheme()

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('users')}</p>
            <hr className={hrClasses} />
            <div className='grid grid-cols-2 gap-2 font-medium'>
                {users.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-row items-center gap-2 bg-light-lighter dark:bg-light-lighterD h-8 w-full pl-1'
                        >
                            <UserIcon
                                fill={theme === 'dark' ? '#bebebe' : '#6C7281'}
                            />
                            <p>{item.login}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
