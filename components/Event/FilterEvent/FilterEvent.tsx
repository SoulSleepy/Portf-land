import { useForm, SubmitHandler } from 'react-hook-form'
import { CustomSelect } from 'helpers/CustomSelect'
import { useEffect, useState } from 'react'
import { useGetDevicesQuery } from 'state/rtk/dangerAndEvent.rtk'
import { useFilter } from 'helpers/hooks/useFilter'
import { toUnix } from 'helpers/softFunctions'
import { IFilter, IFilterDevicesItem } from 'types/types'

interface IEventFilterForm {
    device: string
    startDate: string
    finishDate: string
}

export const FilterEvent = () => {

    const [selectOptions, setSelectOptions] = useState(['всe'])

    const { setFilterData, resetFilter } = useFilter()

    const { data: dataFilter, isLoading } = useGetDevicesQuery()

    useEffect(() => {
        if (dataFilter) {
            console.log('Сработал!')
            setSelectOptions([
                ...selectOptions,
                ...dataFilter?.map(({ name }) => name),
            ])
        }
    }, [dataFilter])

    const { register, reset, handleSubmit, setValue } = useForm<IEventFilterForm>({
        mode: 'onBlur',
        defaultValues: {
            device: 'все',
        },
    })

    const btnFilter =
        'flex flex-col items-center justify-center cursor-pointer h-8 w-full outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter dark:bg-light-lighterD rounded-sm'
    const inputDate =
        'dark:bg-darkD dark:outline-text-lightD outline-none rounded-md h-[30px] w-full cursor-pointer outline-1 hover:outline-2 focus:outline-2 outline-text-light'
    const labelDate =
        'bg-light dark:bg-darkD font-medium absolute -top-[13px] left-1 leading-[17px]'

    const onChangeValue = (value: string) => {
        setValue('device', value)
    }

    const onSubmit: SubmitHandler<IEventFilterForm> = (data) => {
        const { device, finishDate, startDate } = data
        const result = dataFilter?.find(
            (item: IFilterDevicesItem) => item.name === device
        )
        const payload: IFilter = {}
        if (startDate && finishDate) {
            payload.date = [toUnix(startDate), toUnix(finishDate)]
        }
        if (result) {
            payload.device = {
                entityId: result.entityId,
                entityType: result.entityType,
            }
        }
        setFilterData(payload)
    }

    const toDefaultValue = () => {
        resetFilter()
        reset()
        setFilterData({})
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            {!isLoading && (
                <CustomSelect
                    changeValue={onChangeValue}
                    defaultValue='все'
                    selectName='Устройства'
                    selectOptions={selectOptions}
                />
            )}
            <div className='flex flex-col gap-6 mt-4'>
                <div className='relative'>
                    <label className={labelDate}>От</label>
                    <input
                        className={inputDate}
                        type='date'
                        {...register('startDate')}
                    />
                </div>
                <div className='relative'>
                    <label className={labelDate}>До</label>
                    <input
                        className={inputDate}
                        type='date'
                        {...register('finishDate')}
                    />
                </div>
            </div>
            <div className='flex flex-row gap-2 justify-around'>
                <button className={btnFilter} type='submit'>
                    Применить
                </button>
                <button
                    className={btnFilter}
                    type='button'
                    onClick={() => toDefaultValue()}
                >
                    Сбросить
                </button>
            </div>
        </form>
    )
}
