import { DevicesIcon } from '@/components/Icons/Icons'
import { useForm, useController, SubmitHandler } from 'react-hook-form'

const selectOptions = ['все', 'name-1', 'name-2', 'name-3', 'name-4', 'name-5']

export const Filter = () => {
    const { register, control, reset, handleSubmit, formState } = useForm<any>({
        mode: 'onBlur',
        defaultValues: {
            device: 'все',
        },
    })

    const { field } = useController({ name: 'device', control })

    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select
                className='h-[30px] w-full cursor-pointer hover:border-2 border-text-light border outline-0 rounded-md'
                {...register('device')}
            >
                {selectOptions.map((value) => {
                    return (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    )
                })}
            </select>
            <button
                className='bg-light-lighter rounded-sm h-8 w-32 hover:border'
                type='submit'
                value=''
            >
                Применить
            </button>
            <button
                className='bg-light-lighter rounded-sm h-8 w-32 hover:border'
                type='button'
                value=''
            >
                Сбросить
            </button>
        </form>
    )
}
