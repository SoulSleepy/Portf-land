import { UserIcon } from '@/components/Icons/Icons'
import { IAgentInfoUser } from 'types/types'

interface IProps {
    users: IAgentInfoUser[]
}

export const UsersDevice = ({ users }: IProps) => {
    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Пользователи</p>
            <hr className={hrClasses} />
            <div className='grid grid-cols-2 gap-2 font-medium'>
                {users.map((item) => {
                    return (
                        <div className='flex flex-row items-center gap-2 bg-light-lighter h-8 w-full pl-1'>
                            <UserIcon />
                            <p className=''>
                                {item.login}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
