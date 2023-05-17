import { INewFirewallForm } from 'types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useGetNewFirewallMutation } from 'state/rtk/settings.rtk'
import { PlusIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'

export const NewFirewall = () => {
    const { theme } = useTheme()
    const [setNewFirewall] = useGetNewFirewallMutation()

    const inputClasses =
        'flex items-center text-sm h-8 w-[140px] outline outline-1 hover:outline-2 focus:outline-2 rounded-lg pl-2 bg-transparent'

    const { register, handleSubmit } = useForm<INewFirewallForm>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<INewFirewallForm> = (data) => {
        setNewFirewall(data)
        console.log(data)
    }

    return (
        <form
            className='flex flex-row justify-between'
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                className={inputClasses}
                placeholder='Название'
                {...register('name')}
            />
            <input
                className={inputClasses}
                placeholder='Внутренний порт'
                {...register('dest_port')}
            />
            <input
                className={inputClasses}
                placeholder='Внешний порт'
                {...register('src_dport')}
            />
            <input
                className={inputClasses}
                placeholder='IP назначение'
                {...register('dest_ip')}
            />
            <input
                className={inputClasses}
                placeholder='Расширенный IP'
                {...register('src_ip')}
            />
            <button className='scale-[1.2] hover:scale-[1.3]' type='submit'>
                <PlusIcon fill={theme === 'dark' ? '#bebebe' : '#6C7281'} />
            </button>
        </form>
    )
}
