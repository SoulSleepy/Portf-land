import {
    ChangeModeIcon,
    CloseModeIcon,
    SaveModeIcon,
} from 'components/Icons/Icons'
import {
    useChangeNewResumeDeviceMutation,
    useLazyGetDeviceInfoQuery,
} from 'state/rtk/devices.rtk'
import { CustomSelect } from 'helpers/CustomSelect'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IInfo, INewResumeDeviceForm } from 'types/types'
import { useTheme } from 'helpers/hooks/useTheme'
import { useRouter } from 'next/router'

interface IProps {
    resume: IInfo | null
    id: number | null
}

export const Resume = ({ resume, id }: IProps) => {
    const [getDeviceInfo] = useLazyGetDeviceInfoQuery()
    const { push } = useRouter()
    const { theme } = useTheme()
    const { t } = useTranslation('devices')
    const [changing, setChanging] = useState(false)
    const [changeResume] = useChangeNewResumeDeviceMutation()

    const { register, reset, handleSubmit, formState, watch, setValue } =
        useForm<INewResumeDeviceForm>({
            mode: 'onBlur',
        })

    useEffect(() => {
        if (resume) {
            setValue('id', id as number)
            setValue('name', resume.name)
            setValue('type', resume.type)
        }
    }, [resume])

    const typeValue = watch('type')

    const changeDeviceType = (value: string) => {
        setValue('type', +value)
    }

    const onSubmit: SubmitHandler<INewResumeDeviceForm> = (data) => {
        if (changing) {
            changeResume(data)
            setChanging(false)
            setTimeout(() => getDeviceInfo(id as number), 800)
            setTimeout(() => push(`/devices?id=${data.id}`, '/devices'), 1000)
        } else setChanging(true)
    }

    const renameValue = (name: string) => {
        return t(
            deviceType.find((item: any) => item.value == name)?.name as string
        )
    }

    const deviceType: any = [
        { name: `${t('unknown')}`, value: 0 },
        { name: `${t('station')}`, value: 1 },
        { name: `${t('server')}`, value: 2 },
        { name: `${t('printer')}`, value: 3 },
        { name: `${t('router')}`, value: 4 },
        { name: `${t('ip_telephony')}`, value: 5 },
        { name: `${t('camera')}`, value: 6 },
        { name: `${t('tv')}`, value: 7 },
        { name: `${t('tv_box')}`, value: 8 },
        { name: `${t('wifi')}`, value: 9 },
        { name: `${t('phone')}`, value: 10 },
        { name: `${t('security')}`, value: 11 },
        { name: `${t('cash')}`, value: 12 },
        { name: `${t('bluetooth')}`, value: 13 },
    ]

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 dark:bg-darkD hover:outline-2 focus:outline-2 dark:outline-text-lightD outline-text-light'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <div className='flex flex-row justify-between'>
                    <p className={titleClasses}>{t('summary')}</p>
                    {changing ? (
                        <div className='flex flex-row gap-2'>
                            <button className='hover:scale-110' type='submit'>
                                <SaveModeIcon
                                    fill={
                                        theme === 'dark' ? 'white' : '#6C7281'
                                    }
                                />
                            </button>
                            <button
                                className='hover:scale-110'
                                type='button'
                                onClick={() => setChanging(false)}
                            >
                                <CloseModeIcon
                                    fill={
                                        theme === 'dark' ? 'white' : '#6C7281'
                                    }
                                />
                            </button>
                        </div>
                    ) : (
                        <button className='hover:scale-110' type='submit'>
                            <ChangeModeIcon
                                fill={theme === 'dark' ? 'white' : '#6C7281'}
                            />
                        </button>
                    )}
                </div>
                <hr className={hrClasses} />
                <div className='flex flex-row justify-between h-[110px] mt-3'>
                    <div className='flex flex-col justify-between'>
                        <p>{t('name')}</p>
                        <p>{t('type')}</p>
                        <p>{t('OS')}</p>
                    </div>
                    {changing ? (
                        <div className='flex flex-col justify-between items-end'>
                            <input
                                className={inputClasses}
                                type='text'
                                {...register('name')}
                            />
                            <CustomSelect
                                defaultValue={renameValue(String(typeValue))}
                                selectName={''}
                                selectOptions={deviceType}
                                changeValue={changeDeviceType}
                            />
                            <p>{resume?.os}</p>
                        </div>
                    ) : (
                        <div className='flex flex-col justify-between items-end'>
                            <p>{resume?.name}</p>
                            <p>
                                {deviceType.map((item: any) => {
                                    if (resume?.type === item.value)
                                        return item.name
                                })}
                            </p>
                            <p>{resume?.os}</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}
