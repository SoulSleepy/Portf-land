import { useEffect, useState, ChangeEventHandler } from 'react'
import cn from 'classnames'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CustomSelect } from 'helpers/CustomSelect'
import { useGetDevicesQuery } from 'state/rtk/dangerAndEvent.rtk'
import { useFilter } from 'helpers/hooks/useFilter'
import { IFilter, IFilterDevicesItem } from 'types/types'
import { toUnix } from 'helpers/softFunctions'

const dangerLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interface IDangerFilterForm {
    device: string
    min: number
    max: number
    startDate: string
    finishDate: string
}

interface IProps {
    isClosed: boolean
}

export const FilterDanger = ({ isClosed }: IProps) => {
    const [selectOptions, setSelectOptions] = useState(['всe'])
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(10)

    const { setFilterData, resetFilter } = useFilter()

    const { data: dataFilter, isLoading } = useGetDevicesQuery()

    useEffect(() => {
        toDefaultValue()
    }, [isClosed])

    useEffect(() => {
        if (dataFilter) {
            console.log('Сработал!')
            setSelectOptions([
                ...selectOptions,
                ...dataFilter?.map(({ name }) => name),
            ])
        }
    }, [dataFilter])

    const { register, reset, handleSubmit, watch, setValue } =
        useForm<IDangerFilterForm>({
            mode: 'onBlur',
            defaultValues: {
                device: 'все',
                min: 0,
                max: 10,
            },
        })

    const defaultValueDevice = watch('device')
    const onChangeValue = (value: string) => {
        setValue('device', value)
    }

    const handleMin: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const newValue = Number(target.value)
        if (maxValue - minValue >= 0 && maxValue <= 10) {
            if (newValue > maxValue) {
            } else {
                setMinValue(newValue)
            }
        } else {
            if (newValue < minValue) {
                setMinValue(newValue)
            }
        }
        setValue('min', newValue)
    }
    const handleMax: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const newValue = Number(target.value)
        if (maxValue - minValue >= 0 && maxValue <= 10) {
            if (newValue < minValue) {
            } else {
                setMaxValue(newValue)
            }
        } else {
            if (newValue > maxValue) {
                setMaxValue(newValue)
            }
        }
        setValue('max', newValue)
    }

    const onSubmit: SubmitHandler<IDangerFilterForm> = (data) => {
        const { device, finishDate, max, min, startDate } = data
        const result = dataFilter?.find(
            (item: IFilterDevicesItem) => item.name === device
        )
        const payload: IFilter = {
            isClosed,
        }
        if (min && max) {
            payload.crt = [min, max]
        }
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
        setMinValue(0)
        setMaxValue(10)
        setFilterData({ isClosed })
    }

    const inputClasses =
        'absolute -top-1 h-1 w-full bg-transparent appearance-none pointer-events-none'
    const btnFilter =
        'flex flex-col items-center justify-center cursor-pointer h-8 w-full outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter dark:bg-light-lighterD rounded-sm'
    const inputDate =
        'dark:bg-darkD outline-none rounded-md h-[30px] w-full cursor-pointer outline-1 hover:outline-2 focus:outline-2 outline-text-light dark:outline-text-lightD'
    const labelDate =
        'bg-light dark:bg-darkD font-medium absolute -top-[13px] left-1 leading-[17px]'

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            {!isLoading && (
                <CustomSelect
                    changeValue={onChangeValue}
                    defaultValue={defaultValueDevice}
                    selectName='Устройства'
                    selectOptions={selectOptions}
                />
            )}
            <div className='flex flex-col gap-2'>
                <p className=''>Критичность</p>
                <div className='flex flex-col'>
                    <div className='relative h-1 rounded-md bg-text-light'>
                        <div
                            className='absolute h-1 bg-primary'
                            style={{
                                left: minValue * 10 + '%',
                                right: (10 - maxValue) * 10 + '%',
                            }}
                        ></div>
                    </div>
                    <div className='relative'>
                        <input
                            onChange={handleMin}
                            className={inputClasses}
                            type='range'
                            min={0}
                            max={10}
                            value={minValue}
                        />
                        <input
                            onChange={handleMax}
                            className={inputClasses}
                            type='range'
                            min={0}
                            max={10}
                            value={maxValue}
                        />
                        <div className='flex flex-row justify-between mt-2'>
                            {dangerLevel.map((item) => {
                                return (
                                    <div
                                        key={item}
                                        className={cn('w-[14px] text-center', {
                                            ['scale-125 font-semibold text-primary']:
                                                item === minValue ||
                                                item === maxValue,
                                        })}
                                    >
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
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
