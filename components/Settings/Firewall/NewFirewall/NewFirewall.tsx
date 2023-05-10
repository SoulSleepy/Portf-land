import { INewFirewallForm } from 'types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import addIcon from '../../../../images/addIcon.svg'
import { useGetNewFirewallMutation } from 'state/rtk/settings.rtk'

export const NewFirewall = () => {
    const [ setNewFirewall ] = useGetNewFirewallMutation()

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
            <button className='hover:scale-110' type='submit'>
                <Image src={addIcon} width={30} height={30} alt='add' />
            </button>
        </form>
    )
}
