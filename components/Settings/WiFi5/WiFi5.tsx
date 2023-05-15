import { useGetWiFiInfoQuery } from 'state/rtk/settings.rtk'
import { IWiFiForm } from 'types/types'
import { CustomSelect } from 'helpers/CustomSelect'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import showInputIcon from '../../../images/showInputIconB.svg'
import hideInputIcon from '../../../images/hideInputIconB.svg'
import { openSetWifi5SettingsModal } from 'state/slices/modals.slice'
import { useAppDispatch } from 'state/store'
import { SetWifi5SettingsModal } from 'components/Modals/SetWifi5SettingsModal'

const channels5 = [
    '34',
    '36',
    '38',
    '40',
    '42',
    '44',
    '46',
    '48',
    '50',
    '52',
    '54',
    '56',
    '58',
    '60',
    '62',
    '64',
    '100',
    '104',
    '108',
    '112',
    '116',
    '120',
    '124',
    '128',
    '132',
    '136',
    '140',
    '147',
    '149',
    '150',
    '152',
    '153',
    '155',
    '157',
    '159',
    '160',
    '161',
    '163',
    '165',
    '167',
    '171',
    '173',
    '177',
    '180',
]

const widthChannel = [
    { name: '20 Mhz', value: '20' },
    { name: '40 Mhz', value: '40' },
    { name: '80 Mhz', value: '80' },
]

export const WiFi5 = () => {
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
        return widthChannel.find((item) => item.value == name)?.name as string
    }

    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-8 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 hover:outline-2 focus:outline-2 outline-text-light'
    const labelClasses =
        'bg-light text-sm absolute -top-[13px] left-1 leading-[17px]'
    const btn =
        'bg-light-lighter rounded-sm h-[34px] w-full cursor-pointer hover:border'

    if (isLoading) return <div> Loading </div>

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Wi-Fi 5</p>
            <hr className={hrClasses} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6 mt-4'>
                    <div className='relative'>
                        <label className={labelClasses}>Название сети</label>
                        <input
                            className={inputClasses}
                            type='text'
                            {...register('essid')}
                        />
                    </div>
                    <div className='relative'>
                        <label className={labelClasses}>Пароль</label>
                        <input
                            className={inputClasses}
                            type={show ? 'text' : 'password'}
                            {...register('passwd')}
                        />
                        <Image
                            className='absolute cursor-pointer right-1 top-1'
                            onClick={() => setShow(!show)}
                            src={show ? showInputIcon : hideInputIcon}
                            alt='showpass'
                        />
                    </div>
                    <CustomSelect
                        defaultValue={channel}
                        selectName={'Канал'}
                        selectOptions={channels5}
                        changeValue={changeValueChannel}
                    />
                    <CustomSelect
                        defaultValue={renameValue(width)}
                        selectName={'Ширина'}
                        selectOptions={widthChannel}
                        changeValue={changeValueWidth}
                    />
                    <button className={btn} type='submit'>
                        Применить
                    </button>
                </div>
            </form>
            <SetWifi5SettingsModal
                params={{ channel, width, essid, passwd, range }}
            />
        </div>
    )
}
