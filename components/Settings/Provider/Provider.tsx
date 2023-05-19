import { CustomSelect } from 'helpers/CustomSelect'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useGetNetworkInfoQuery } from 'state/rtk/settings.rtk'
import { Pppoe } from './Pppoe'
import { Static } from './Static'
import { useAppDispatch } from 'state/store'
import { openSetProviderSettingsModal } from 'state/slices/modals.slice'
import { SetProviderSettingsModal } from 'components/Modals/setProviderSettingsModal'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'
import { providerOptions } from 'helpers/consts'

export interface IWanSettingsForm {
    namePppoe?: string
    passwordPppoe?: string
    gatewayStatic?: string
    ipStatic?: string
    maskStatic?: string
    dnsStatic?: string
    state: string
}

export const Provider = () => {
    const { t } = useTranslation('settings')
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

    const [
        state,
        namePppoe,
        passwordPppoe,
        gatewayStatic,
        ipStatic,
        maskStatic,
        dnsStatic,
    ] = watch([
        'state',
        'namePppoe',
        'passwordPppoe',
        'gatewayStatic',
        'ipStatic',
        'maskStatic',
        'dnsStatic',
    ])
    const renameValue = (name: string) => {
        return providerOptions.find((item) => item.value === name)
            ?.name as string
    }

    const onSubmit: SubmitHandler<IWanSettingsForm> = (data) => {
        dispatch(openSetProviderSettingsModal())
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-8 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const btn =
        'bg-light-lighter dark:bg-light-lighterD rounded-sm h-[34px] w-full cursor-pointer hover:border'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('provider')}</p>
            <hr className={hrClasses} />
            <Loader isLoading={isLoading}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-6 mt-4'>
                        <CustomSelect
                            selectName={t('protocols')}
                            defaultValue={renameValue(state)}
                            selectOptions={providerOptions}
                            changeValue={changeValue}
                        />
                        {state === 'pppoe' && <Pppoe register={register} />}
                        {state === 'static' && <Static register={register} />}
                        <button className={btn} type='submit'>
                            {t('apply')}
                        </button>
                    </div>
                </form>
            </Loader>
            <SetProviderSettingsModal
                settings={{
                    state,
                    namePppoe,
                    passwordPppoe,
                    gatewayStatic,
                    ipStatic,
                    maskStatic,
                    dnsStatic,
                }}
            />
        </div>
    )
}
