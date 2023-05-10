import { INetworkWanForm } from "types/types"
import { UseFormRegister } from "react-hook-form"

interface IProps {
    register: UseFormRegister<INetworkWanForm>
}

export const Static = ({register}: IProps) => {

    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 hover:outline-2 focus:outline-2 outline-text-light'
    const labelClasses =
        'bg-light text-sm absolute -top-[13px] left-1 leading-[17px]'

    return (
        <div className='flex flex-col gap-6'>
            <div className='relative'>
                <label className={labelClasses}>Gateway</label>
                <input
                    className={inputClasses}
                    type='text'
                    {...register('gatewayStatic')}
                />
            </div>
            <div className='relative'>
                <label className={labelClasses}>IP</label>
                <input
                    className={inputClasses}
                    type='text'
                    {...register('ipStatic')}
                />
            </div>
            <div className='relative'>
                <label className={labelClasses}>Маска</label>
                <input
                    className={inputClasses}
                    type='text'
                    {...register('maskStatic')}
                />
            </div>
            <div className='relative flex flex-col gap-3'>
                <p className=''>DNS</p>
                <input
                    className={inputClasses}
                    type='text'
                    {...register('dnsStatic')}
                />
            </div>
        </div>
    )
}
