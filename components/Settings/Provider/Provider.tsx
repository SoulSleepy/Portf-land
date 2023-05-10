import { CustomSelect } from 'helpers/CustomSelect'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useGetNetworkInfoQuery } from 'state/rtk/settings.rtk'
import { Pppoe } from './Pppoe'
import { Static } from './Static'
import { useAppDispatch } from '@/state/store'
import { openSetProviderSettingsModal } from '@/state/slices/modals.slice'
import { SetProviderSettingsModal } from '@/components/Modals/setProviderSettingsModal'

export interface IWanSettingsForm {
    namePppoe?: string
    passwordPppoe?: string
    gatewayStatic?: string
    ipStatic?: string
    maskStatic?: string
    dnsStatic?: string
    state: string
}

const providerOptions = [
    { name: 'DHCP client', value: 'dhcp' },
    { name: 'Unmanaged', value: 'um' },
    { name: 'PPPoE', value: 'pppoe' },
    { name: 'Static address', value: 'static' },
]

export const Provider = () => {
    const { data, isLoading } = useGetNetworkInfoQuery()
    const dispatch = useAppDispatch()

    const { register, reset, handleSubmit, watch, setValue } =
        useForm<IWanSettingsForm>({
            mode: 'onBlur',
        })

    useEffect(() => {
        if (data) {
            setValue('state', data.wan.state)
        }
    }, [data])

    const changeValue = (value: string) => {
        setValue('state', value)
    }

    const [state, namePppoe, passwordPppoe, gatewayStatic, ipStatic, maskStatic, dnsStatic] = watch(['state', 'namePppoe', 'passwordPppoe', 'gatewayStatic', 'ipStatic', 'maskStatic', 'dnsStatic'])
    const renameValue = (name: string) => {
        return providerOptions.find((item) => item.value === name)
            ?.name as string
    }

    const onSubmit: SubmitHandler<IWanSettingsForm> = (data) => {
        console.log(data);
        
        dispatch(openSetProviderSettingsModal())
    }

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const btn =
        'bg-light-lighter rounded-sm h-[34px] w-full cursor-pointer hover:border'

    if (isLoading) return <div> Loading </div>

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Провайдер</p>
            <hr className={hrClasses} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6 mt-4'>
                    <CustomSelect
                        selectName='Протоколы'
                        defaultValue={renameValue(state)}
                        selectOptions={providerOptions}
                        changeValue={changeValue}
                    />
                    {state === 'pppoe' && <Pppoe register={register} />}
                    {state === 'static' && (
                        <Static register={register} />
                    )}
                    <button className={btn} type='submit'>
                        Применить
                    </button>
                </div>
            </form>
            <SetProviderSettingsModal settings={{state, namePppoe, passwordPppoe, gatewayStatic, ipStatic, maskStatic, dnsStatic}}/>
        </div>
    )
}
