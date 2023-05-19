import { useGetWiFiInfoQuery } from 'state/rtk/settings.rtk'
import { IWiFiForm } from 'types/types'
import { CustomSelect } from 'helpers/CustomSelect'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from 'state/store'
import { openSetWifi24SettingsModal } from 'state/slices/modals.slice'
import { SetWifi24SettingsModal } from 'components/Modals/SetWifi24SettingsModal'
import { channels24, widthChannel24 } from 'helpers/consts'
import { HideInputIcon, ShowInputIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

export const WiFi24 = () => {
    const { t } = useTranslation('settings')
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)
    const { data, isLoading } = useGetWiFiInfoQuery()

    const { register, reset, handleSubmit, formState, watch, setValue } =
        useForm<IWiFiForm>({
            mode: 'onBlur',
            defaultValues: {
                range: '2.4',
            },
        })

    useEffect(() => {
        if (data) {
            setValue('essid', data[2.4].ssid)
            setValue('passwd', data[2.4].password)
            setValue('channel', data[2.4].channel)
            setValue('width', data[2.4].width)
        }
    }, [data])

    const changeValueChannel = (value: string) => {
        setValue('channel', value)
    }
    const changeValueWidth = (value: string) => {
        setValue('width', value)
    }

    const [channel, width, essid, passwd, range] = watch([
        'channel',
        'width',
        'essid',
        'passwd',
        'range',
    ])

    const onSubmit: SubmitHandler<IWiFiForm> = (data) => {
        dispatch(openSetWifi24SettingsModal())
    }

    const renameValue = (name: string) => {
        return widthChannel24.find((item) => item.value == name)?.name as string
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-8 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 dark:bg-darkD hover:outline-2 focus:outline-2 dark:outline-text-lightD outline-text-light'
    const labelClasses =
        'bg-light dark:bg-darkD text-sm absolute -top-[13px] left-1 leading-[17px]'
    const btn =
        'bg-light-lighter dark:bg-light-lighterD rounded-sm h-[34px] w-full cursor-pointer hover:border'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Wi-Fi 2.4</p>
            <hr className={hrClasses} />
            <Loader isLoading={isLoading}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-6 mt-4'>
                        <div className='relative'>
                            <label className={labelClasses}>
                                {t('network name')}
                            </label>
                            <input
                                className={inputClasses}
                                type='text'
                                {...register('essid')}
                            />
                        </div>
                        <div className='relative'>
                            <label className={labelClasses}>{t('password')}</label>
                            <input
                                className={inputClasses}
                                type={show ? 'text' : 'password'}
                                {...register('passwd')}
                            />
                            <div
                                className='absolute cursor-pointer right-1 top-[3px]'
                                onClick={() => setShow(!show)}
                            >
                                {show ? (
                                    <ShowInputIcon
                                        fill={
                                            theme === 'dark'
                                                ? '#bebebe'
                                                : '#6C7281'
                                        }
                                    />
                                ) : (
                                    <HideInputIcon
                                        fill={
                                            theme === 'dark'
                                                ? '#bebebe'
                                                : '#6C7281'
                                        }
                                    />
                                )}
                            </div>
                        </div>
                        <CustomSelect
                            defaultValue={channel}
                            selectName={t('channel')}
                            selectOptions={channels24}
                            changeValue={changeValueChannel}
                        />
                        <CustomSelect
                            defaultValue={renameValue(width)}
                            selectName={t('width')}
                            selectOptions={widthChannel24}
                            changeValue={changeValueWidth}
                        />
                        <button className={btn} type='submit'>
                            {t('apply')}
                        </button>
                    </div>
                </form>
            </Loader>
            <SetWifi24SettingsModal
                params={{ channel, width, essid, passwd, range }}
            />
        </div>
    )
}
