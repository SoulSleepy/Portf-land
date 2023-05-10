import { useEffect } from 'react'
import cn from 'classnames'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
    useGetDHCPQuery,
    useGetNetworkInfoQuery,
    useLazySetDHCPSettingsQuery,
    useLazySetLanSettingsQuery,
} from 'state/rtk/settings.rtk'
import Image from 'next/image'
import upIpIcon from '../../../images/upIpIcon.svg'
import downIpIcon from '../../../images/downIpIcon.svg'
import { INetworkForm } from 'types/types'
import { openSetLanSettingsModal } from 'state/slices/modals.slice'
import { useAppDispatch } from '@/state/store'
import { SetLanSettingsModal } from '@/components/Modals/SetLanSettingsModal'

export const Lan = () => {
    const { data: dataLan, isLoading: isLoadLan } = useGetNetworkInfoQuery()
    const { data: dataDHCP, isLoading: isLoadDHCP } = useGetDHCPQuery()

    const dispatch = useAppDispatch()

    const [setDHCPSettings] = useLazySetDHCPSettingsQuery()
    const [setLanSettings] = useLazySetLanSettingsQuery()

    const { register, handleSubmit, watch, setValue } = useForm<INetworkForm>({
        mode: 'onBlur',
    })

    useEffect(() => {
        if (dataLan && dataDHCP) {
            setValue('gateway', dataLan.lan.gateway)
            setValue('ipLan', dataLan.lan.ip)
            setValue('mask', dataLan.lan.mask)
            setValue('dns', dataLan.lan.dns)
            setValue('minDHCP', +dataDHCP.min)
            setValue('maxDHCP', +dataDHCP.max)
        }
    }, [dataLan, dataDHCP])

    const [minDHCP, maxDHCP, gateway, ipLan, mask, dns] = watch([
        'minDHCP',
        'maxDHCP',
        'gateway',
        'ipLan',
        'mask',
        'dns',
    ])
    const upIpValue = (value: number, valueName: keyof INetworkForm) => {
        setValue(valueName, +value + 1)
    }
    const downIpValue = (value: number, valueName: keyof INetworkForm) => {
        setValue(valueName, +value - 1)
    }

    const onSubmit: SubmitHandler<INetworkForm> = (data) => {
        dispatch(openSetLanSettingsModal())
    }

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 hover:outline-2 focus:outline-2 outline-text-light'
    const labelClasses =
        'bg-light text-sm absolute -top-[13px] left-1 leading-[17px]'
    const btn =
        'bg-light-lighter rounded-sm h-[34px] w-full cursor-pointer hover:border'
    const btnIp = 'flex items-center justify-center text-2xl hover:scale-110'

    if (isLoadLan && isLoadDHCP) return <div> Loading </div>
    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Локальная Сеть</p>
            <hr className={hrClasses} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6 mt-4'>
                    <div className='relative'>
                        <label className={labelClasses}>Gateway</label>
                        <input
                            className={inputClasses}
                            placeholder='192.168.1.1 (wan)'
                            type='text'
                            {...register('gateway')}
                        />
                    </div>
                    <div className='relative'>
                        <label className={labelClasses}>IP</label>
                        <input
                            className={inputClasses}
                            type='text'
                            {...register('ipLan')}
                        />
                    </div>
                    <div className='relative'>
                        <label className={labelClasses}>Маска сети</label>
                        <input
                            className={inputClasses}
                            type='text'
                            {...register('mask')}
                        />
                    </div>
                    <p className='-mb-3'>DHCP</p>
                    <div className='relative'>
                        <label className={labelClasses}>C</label>
                        <p className='absolute top-[3px] left-1 text-[#9f9f9f]'>
                            {dataDHCP?.ip}
                        </p>
                        <input
                            className={cn(
                                inputClasses,
                                'pl-[85px] font-medium'
                            )}
                            type='text'
                            {...register('minDHCP')}
                        />
                        <div className='absolute top-[3px] left-[125px] flex flex-row'>
                            <button
                                type='button'
                                className={btnIp}
                                onClick={() => downIpValue(minDHCP, 'minDHCP')}
                            >
                                <Image src={downIpIcon} alt='downIp' />
                            </button>
                            <button
                                type='button'
                                className={btnIp}
                                onClick={() => upIpValue(minDHCP, 'minDHCP')}
                            >
                                <Image src={upIpIcon} alt='upIp' />
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <label className={labelClasses}>По</label>
                        <p className='absolute top-[3px] left-1 text-[#9f9f9f]'>
                            {dataDHCP?.ip}
                        </p>
                        <input
                            className={cn(
                                inputClasses,
                                'pl-[85px] font-medium'
                            )}
                            type='text'
                            {...register('maxDHCP')}
                        />
                        <div className='absolute top-[3px] left-[125px] flex flex-row'>
                            <button
                                type='button'
                                className={btnIp}
                                onClick={() => downIpValue(maxDHCP, 'maxDHCP')}
                            >
                                <Image src={downIpIcon} alt='downIp' />
                            </button>
                            <button
                                type='button'
                                className={btnIp}
                                onClick={() => upIpValue(maxDHCP, 'maxDHCP')}
                            >
                                <Image src={upIpIcon} alt='upIp' />
                            </button>
                        </div>
                    </div>
                    <p className='-mb-3'>DNS</p>
                    <input
                        className={inputClasses}
                        type='text'
                        {...register('dns')}
                    />
                    <button className={btn} type='submit'>
                        Применить
                    </button>
                </div>
            </form>
            <SetLanSettingsModal params={{minDHCP, maxDHCP, gateway, ipLan, mask, dns}} />
        </div>
    )
}
