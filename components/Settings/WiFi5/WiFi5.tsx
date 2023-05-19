import { useGetWiFiInfoQuery } from 'state/rtk/settings.rtk'
import { IWiFiForm } from 'types/types'
import { CustomSelect } from 'helpers/CustomSelect'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { openSetWifi5SettingsModal } from 'state/slices/modals.slice'
import { useAppDispatch } from 'state/store'
import { SetWifi5SettingsModal } from 'components/Modals/SetWifi5SettingsModal'
import { channels5, widthChannel5 } from 'helpers/consts'
import { HideInputIcon, ShowInputIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'
import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'

export const WiFi5 = () => {
    const { t } = useTranslation('settings')
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)
    const { data, isLoading } = useGetWiFiInfoQuery()

    const { register, reset, handleSubmit, formState, watch, setValue } =
        useForm<IWiFiForm>({
            mode: 'onBlur',
            defaultValues: {
                range: '5',
            },
        })

    useEffect(() => {
        if (data) {
            setValue('essid', data[5].ssid)
            setValue('passwd', data[5].password)
            setValue('channel', data[5].channel)
            setValue('width', data[5].width)
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
        dispatch(openSetWifi5SettingsModal())
    }

    const renameValue = (name: string) => {
        return widthChannel5.find((item) => item.value == name)?.name as string
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-8 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer dark:bg-darkD outline-1 hover:outline-2 focus:outline-2 outline-text-light dark:outline-text-lightD'
    const labelClasses =
        'bg-light dark:bg-darkD text-sm absolute -top-[13px] left-1 leading-[17px]'
    const btn =
        'bg-light-lighter dark:bg-light-lighterD rounded-sm h-[34px] w-full cursor-pointer hover:border'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Wi-Fi 5</p>
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
                            selectOptions={channels5}
                            changeValue={changeValueChannel}
                        />
                        <CustomSelect
                            defaultValue={renameValue(width)}
                            selectName={t('width')}
                            selectOptions={widthChannel5}
                            changeValue={changeValueWidth}
                        />
                        <button className={btn} type='submit'>
                            {t('apply')}
                        </button>
                    </div>
                </form>
            </Loader>
            <SetWifi5SettingsModal
                params={{ channel, width, essid, passwd, range }}
            />
        </div>
    )
}
