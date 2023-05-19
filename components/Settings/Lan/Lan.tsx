import { useEffect } from 'react'
import cn from 'classnames'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useGetDHCPQuery, useGetNetworkInfoQuery } from 'state/rtk/settings.rtk'
import { INetworkForm } from 'types/types'
import { openSetLanSettingsModal } from 'state/slices/modals.slice'
import { useAppDispatch } from 'state/store'
import { SetLanSettingsModal } from 'components/Modals/SetLanSettingsModal'
import { DownIpIcon, UpIpIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

export const Lan = () => {
    const { t } = useTranslation('settings')
    const { theme } = useTheme()
    const { data: dataLan, isLoading: isLoadLan } = useGetNetworkInfoQuery()
    const { data: dataDHCP, isLoading: isLoadDHCP } = useGetDHCPQuery()

    const dispatch = useAppDispatch()

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
        'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-8 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const inputClasses =
        'outline-none dark:bg-darkD rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 hover:outline-2 focus:outline-2 dark:outline-text-lightD outline-text-light'
    const labelClasses =
        'bg-light dark:bg-darkD text-sm absolute -top-[13px] left-1 leading-[17px]'
    const btn =
        'bg-light-lighter dark:bg-light-lighterD rounded-sm h-[34px] w-full cursor-pointer hover:border'
    const btnIp = 'flex items-center justify-center text-2xl hover:scale-110'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('local network')}</p>
            <hr className={hrClasses} />
            <Loader isLoading={isLoadLan && isLoadDHCP}>
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
                            <label className={labelClasses}>{t('network mask')}</label>
                            <input
                                className={inputClasses}
                                type='text'
                                {...register('mask')}
                            />
                        </div>
                        <p className='-mb-3'>DHCP</p>
                        <div className='relative'>
                            <label className={labelClasses}>{t('from')}</label>
                            <p className='absolute top-[3px] left-1 text-[#9f9f9f] dark:text-text-light'>
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
                                    onClick={() =>
                                        downIpValue(minDHCP, 'minDHCP')
                                    }
                                >
                                    <div>
                                        <DownIpIcon
                                            fill={
                                                theme === 'dark'
                                                    ? '#bebebe'
                                                    : '#6C7281'
                                            }
                                        />
                                    </div>
                                </button>
                                <button
                                    type='button'
                                    className={btnIp}
                                    onClick={() =>
                                        upIpValue(minDHCP, 'minDHCP')
                                    }
                                >
                                    <div>
                                        <UpIpIcon
                                            fill={
                                                theme === 'dark'
                                                    ? '#bebebe'
                                                    : '#6C7281'
                                            }
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='relative'>
                            <label className={labelClasses}>{t('to')}</label>
                            <p className='absolute top-[3px] left-1 text-[#9f9f9f] dark:text-text-light'>
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
                                    onClick={() =>
                                        downIpValue(maxDHCP, 'maxDHCP')
                                    }
                                >
                                    <div>
                                        <DownIpIcon
                                            fill={
                                                theme === 'dark'
                                                    ? '#bebebe'
                                                    : '#6C7281'
                                            }
                                        />
                                    </div>
                                </button>
                                <button
                                    type='button'
                                    className={btnIp}
                                    onClick={() =>
                                        upIpValue(maxDHCP, 'maxDHCP')
                                    }
                                >
                                    <div>
                                        <UpIpIcon
                                            fill={
                                                theme === 'dark'
                                                    ? '#bebebe'
                                                    : '#6C7281'
                                            }
                                        />
                                    </div>
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
                            {t('apply')}
                        </button>
                    </div>
                </form>
            </Loader>
            <SetLanSettingsModal
                params={{ minDHCP, maxDHCP, gateway, ipLan, mask, dns }}
            />
        </div>
    )
}
