import { ShowSelectIcon } from 'components/Icons/Icons'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { useTheme } from '../hooks/useTheme'

interface IItemSelectOptions {
    name: string
    value: string
}

interface IProps {
    selectOptions: string[] | IItemSelectOptions[]
    selectName: string
    defaultValue: string
    changeValue: (value: string) => void
}

const toSelectOptions = (selectOptions: IProps['selectOptions']) => {
    return selectOptions.map((item) =>
        typeof item === 'object'
            ? item
            : {
                  name: item,
                  value: item,
              }
    )
}

export const CustomSelect = ({
    selectOptions,
    selectName,
    changeValue,
    defaultValue,
}: IProps) => {
    const { theme } = useTheme()
    const arrOptions = toSelectOptions(selectOptions)
    const [activeValue, setActiveValue] = useState(arrOptions[0].name)
    const [toggleSelect, setToggleSelect] = useState(false)
    const iconClasses = cn('absolute top-[2px] right-0', {
        'rotate-180': toggleSelect,
    })
    const inputClasses =
        'outline-none bg-light dark:bg-darkDD rounded-md h-[30px] pl-1 w-full cursor-pointer outline-1 hover:outline-2 outline-text-light dark:outline-text-lightD'
    const labelClasses =
        'bg-light dark:bg-darkDD text-sm absolute -top-[13px] left-1 leading-[17px]'
    const dropClasses =
        'absolute z-10 top-[35px] flex flex-col p-1 gap-1 min-h-min max-h-48 w-full outline outline-1 hover:outline-2 outline-text-light rounded-md bg-light dark:bg-darkDD overflow-auto '

    const toggleShowSelect = () => {
        setToggleSelect(!toggleSelect)
    }

    const onChangeValue = (value: IItemSelectOptions) => {
        changeValue(value.value)
        setActiveValue(value.name)
        setToggleSelect(!toggleSelect)
    }

    useEffect(() => {
        setActiveValue(defaultValue)
    }, [defaultValue])

    return (
        <div className='relative'>
            <div
                onClick={toggleShowSelect}
                className='relative flex flex-row items-center gap-2 cursor-pointer'
            >
                <label className={labelClasses}>{selectName}</label>
                <input
                    className={inputClasses}
                    value={activeValue}
                    defaultValue={defaultValue}
                    readOnly
                />
                <div className={iconClasses}>
                    <ShowSelectIcon fill={theme === 'dark' ? 'white' : 'black'}/>
                </div>
            </div>
            {toggleSelect && (
                <div className={dropClasses}>
                    {arrOptions.map((item) => (
                        <div
                            key={item.name}
                            className={cn(
                                'flex flex-row gap-2 h-full w-full items-center cursor-pointer hover:bg-light-lighter dark:hover:bg-light-lighterD',
                                {
                                    ['bg-light-lighter dark:bg-light-lighterD']:
                                        item.name === activeValue,
                                }
                            )}
                            onClick={() => onChangeValue(item)}
                        >
                            <input
                                className='hidden'
                                name='sort'
                                type='radio'
                                value={item.name}
                            />
                            <label className='cursor-pointer'>{item.name}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
