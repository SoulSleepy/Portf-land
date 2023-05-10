

export const DHCP = () => {
    const inputClasses =
        'outline-none rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 hover:outline-2 outline-text-light'
    const labelClasses =
        'bg-light text-sm absolute -top-[13px] left-1 leading-[17px]'
    const btn =
        'bg-light-lighter rounded-sm h-[34px] w-full cursor-pointer hover:border'

    return (
        <form>
            <div className='flex flex-col gap-6'>
                <p className='-mb-3'>DHCP</p>
                <div className='relative'>
                    <label className={labelClasses}>C</label>
                    <input
                        className={inputClasses}
                        type='text'
                        {...register('min')}
                    />
                </div>
                <div className='relative'>
                    <label className={labelClasses}>По</label>
                    <input
                        className={inputClasses}
                        type='text'
                        {...register('max')}
                    />
                </div>
            </div>
        </form>
    )
}
