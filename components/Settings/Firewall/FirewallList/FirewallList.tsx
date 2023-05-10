import { IFirewallItem, INewFirewallForm, SrcNeighIp } from 'types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import cn from 'classnames'
import Image from 'next/image'
import editIcon from '../../../../images/editIcon.svg'
import deleteIcon from '../../../../images/deleteIcon.svg'
import addIcon from '../../../../images/addIcon.svg'
import {
    useSetDellFirewallMutation,
    useSetEditSettingsFirewallMutation,
} from 'state/rtk/settings.rtk'
import { useAppDispatch } from 'state/store'
import { openAddWhiteIpModal } from 'state/slices/modals.slice'
import { AddWhiteIpModal } from 'components/Modals/AddWhiteIpModal'
import { useEffect, useState } from 'react'
import { IpsItems } from './IpsItems'

export const FirewallList = ({
    src_neigh,
    dest_ip,
    dest_port,
    device,
    name,
    real_name,
    src_dport,
}: IFirewallItem) => {

    const [ipValues, setIpValues] = useState('Нет адресов')
    const [openIps, setOpenIps] = useState(false)

    const [dellFirewallItem] = useSetDellFirewallMutation()
    const [editFirewallItem] = useSetEditSettingsFirewallMutation()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (src_neigh) {
            setIpValues(Object.values(src_neigh).length + ' адресов')
        }
    }, [src_neigh])

    const { register, reset, handleSubmit, formState, watch, setValue } =
        useForm<INewFirewallForm>({
            mode: 'onBlur',
        })

    const onSubmit: SubmitHandler<INewFirewallForm> = (data) => {
        const params = {
            [real_name]: {
                dest_port: data.dest_port,
                name: data.name,
                src_dport: data.src_dport,
            },
        }
        editFirewallItem(params)
    }

    const deleteItem = (name: string) => {
        const params = { [name]: name }
        dellFirewallItem(params)
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
            <div className='flex flex-row gap-2 items-center relative' >
                <input
                    type='text'
                    value={ipValues}
                    className={cn(inputClasses, 'w-[160px]')}
                    onClick={() => setOpenIps(!openIps)}
                    readOnly
                />
                {openIps && src_neigh && <IpsItems src_neigh={src_neigh}/>}
                <button
                    className='hover:scale-110'
                    type='button'
                    onClick={() => dispatch(openAddWhiteIpModal())}
                >
                    <Image src={addIcon} width={30} height={30} alt='add' />
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
                <button className='hover:scale-125' type='submit'>
                    <Image src={editIcon} width={20} height={20} alt='edit' />
                </button>
            </div>
            <AddWhiteIpModal body={{ dest_ip, dest_port, name, src_dport }} />
        </form>
    )
}
