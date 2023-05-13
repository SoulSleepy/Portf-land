import { IFirewallItem, INewFirewallForm } from 'types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import cn from 'classnames'
import {
    useSetDellFirewallMutation,
    useSetEditSettingsFirewallMutation,
} from 'state/rtk/settings.rtk'
import { useAppDispatch } from 'state/store'
import { openAddWhiteIpModal } from 'state/slices/modals.slice'
import { AddWhiteIpModal } from 'components/Modals/AddWhiteIpModal'
import { useEffect, useState } from 'react'
import { IpsItems } from './IpsItems'
import {
    EditIcon,
    HideIpsIcon,
    PlusIcon,
    PlusRombIcon,
    ShowIpsIcon,
} from 'components/Icons/Icons'
import { getNoun } from 'helpers/softFunctions'

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
            const length = Object.values(src_neigh).length
            setIpValues(length + getNoun(length, ' адрес', ' адреса', ' адресов'))
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
            <div className='flex flex-row gap-2 items-center relative'>
                <button
                    type='button'
                    className='scale-[1.2] hover:scale-[1.3]'
                    onClick={() => setOpenIps(!openIps)}
                >
                    {!openIps ? <ShowIpsIcon /> : <HideIpsIcon />}
                </button>
                <input
                    type='text'
                    value={ipValues}
                    className={cn(inputClasses, 'w-[160px]')}
                    onClick={() => setOpenIps(!openIps)}
                    readOnly
                />
                {openIps && src_neigh && (
                    <IpsItems src_neigh={src_neigh} setOpen={setOpenIps} />
                )}
                <button
                    className='scale-[1.2] hover:scale-[1.3]'
                    type='button'
                    onClick={() => dispatch(openAddWhiteIpModal())}
                >
                    <PlusIcon />
                </button>
            </div>
            <div className='flex flex-col items-end'>
                <button
                    className='hover:scale-110'
                    type='button'
                    onClick={() => deleteItem(real_name)}
                >
                    <PlusRombIcon />
                </button>
                <button className='hover:scale-110' type='submit'>
                    <EditIcon />
                </button>
            </div>
            <AddWhiteIpModal body={{ dest_ip, dest_port, name, src_dport }} />
        </form>
    )
}
