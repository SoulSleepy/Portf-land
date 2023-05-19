import { UseFormRegister } from "react-hook-form"
import { IWanSettingsForm } from "../Provider"
import { useTranslation } from "next-i18next"

interface IProps {
    register: UseFormRegister<IWanSettingsForm>
}

export const Pppoe = ({register}: IProps) => {
    const { t } = useTranslation('settings')

    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 hover:outline-2 focus:outline-2 dark:bg-darkD dark:outline-text-lightD outline-text-light'
    const labelClasses =
        'bg-light dark:bg-darkD text-sm absolute -top-[13px] left-1 leading-[17px]'

    return (
        <div className='flex flex-col gap-6'>
            <div className='relative'>
                <label className={labelClasses}>{t('name')}</label>
                <input
                    className={inputClasses}
                    type='text'
                    {...register('namePppoe')}
                />
            </div>
            <div className='relative'>
                <label className={labelClasses}>{t('password')}</label>
                <input
                    className={inputClasses}
                    type='text'
                    {...register('passwordPppoe')}
                />
            </div>
        </div>
    )
}
