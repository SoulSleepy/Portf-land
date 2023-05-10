import { IFirewallItem } from "types/types"
import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import cn from 'classnames'
import Image from "next/image"
import editIcon from '../../../../images/editIcon.svg'
import deleteIcon from '../../../../images/deleteIcon.svg'
import addIcon from '../../../../images/addIcon.svg'
import { useGetDellFirewallMutation } from "state/rtk/settings.rtk"


export const FirewallList:FC<IFirewallItem> = (props) => {
    const [dellFirewallItem] = useGetDellFirewallMutation()

    const {anonymous,dest,dest_ip,dest_port,device,src,index,name,real_name,src_dport,target,type} = props

    const { register, reset, handleSubmit, formState, watch, setValue } =
        useForm<any>({
            mode: 'onBlur',
        })

        const onSubmit: SubmitHandler<any> = (data) => {
            console.log(data)
        }

        const deleteItem = (name: string) => {
            const params = {[name]: name}
            console.log(params);
        }

        const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 ml-1 cursor-pointer outline-1 hover:outline-2 outline-text-light'

    return (
        <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-[1fr_1.8fr_1fr_1.2fr_2fr_0.2fr] p-1 gap-3 bg-light-lighter items-center'
    >
        <input
            type='text'
            {...register('name')}
            defaultValue={name}
            className={cn(inputClasses, 'w-[80px]')}
        />
        <p>{device}</p>
        <input
            type='text'
            {...register('src_dport')}
            className={cn(inputClasses, 'w-[80px]')}
            defaultValue={src_dport}
        />
        <input
            type='text'
            {...register('dest_port')}
            className={cn(inputClasses, 'w-[80px]')}
            defaultValue={dest_port}
        />
        <div className='flex flex-row gap-2 items-center'>
            <input
                type='text'
                defaultValue={'нет адресов'}
                className={cn(inputClasses, 'w-[160px]')}
            />
            <button className='hover:scale-110'>
                <Image
                    src={addIcon}
                    width={30}
                    height={30}
                    alt='add'
                />
            </button>
        </div>
        <div className='flex flex-col items-end'>
            <button
                className='hover:scale-125'
                type='button'
                onClick={() => deleteItem(real_name)}
            >
                <Image
                    src={deleteIcon}
                    width={20}
                    height={20}
                    alt='delete'
                />
            </button>
            <button
                className='hover:scale-125'
                type='submit'
            >
                <Image
                    src={editIcon}
                    width={20}
                    height={20}
                    alt='edit'
                />
            </button>
        </div>
    </form>
    )
}