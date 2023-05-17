import { CustomSelect } from 'helpers/CustomSelect'
import cn from 'classnames'
import {
    useGetSystemInfoQuery,
    useLazyGetChangeUpdateQuery,
    useLazyGetSystemVersionQuery,
} from 'state/rtk/system.rtk'
import { useEffect, useState } from 'react'
import { Loader } from 'components/Loader'

const updateOptions = [
    { name: 'Ручное', value: 'man' },
    { name: 'Автоматическое', value: 'auto' },
]

const timeOptions = [
    { name: '6:00 - 7:00', value: '6,7' },
    { name: '12:00 - 13:00', value: '12,13' },
    { name: '18:00 - 19:00', value: '18,19' },
    { name: '00:00 - 01:00', value: '0,1' },
]

export const Update = () => {
    const [updateValue, setUpadateValue] = useState('man')
    const [timeValue, setTimeValue] = useState('6,7')
    const [loadUpdate, setLoadUpdate] = useState('')

    const { data: dataInfo, isLoading: isLoadInfo } = useGetSystemInfoQuery()
    const [getVersion, { data: dataVersion, isLoading: isLoadVersion }] =
        useLazyGetSystemVersionQuery()
    const [getChangeUpdate] = useLazyGetChangeUpdateQuery()

    useEffect(() => {
        if (dataInfo) {
            setUpadateValue(dataInfo['update-settings'].updating)
            dataInfo['update-settings'].times && setTimeValue(dataInfo['update-settings'].times?.join() as string)
        }
    }, [dataInfo])

    useEffect(() => {
        if (dataVersion) {
            if (dataVersion?.version !== dataInfo?.version) {
                setLoadUpdate(`Доступно обновление - ${dataVersion?.version}`)
            } else setLoadUpdate('Обновлений нет')
        }
    }, [dataVersion])

    const version = () => {
        if (loadUpdate !== 'Идет проверка') {
            getVersion()
            setLoadUpdate('Идет проверка')
        }
    }

    const renameUpdateValue = (name: string) => {
        return updateOptions.find((item) => item.value === name)?.name as string
    }

    const renameTimeValue = (name: string) => {
        return timeOptions.find((item) => item.value === name)?.name as string
    }

    const saveSystem = () => {
        const paramsAuto = {
            times: timeValue.split(',').map((item) => +item),
            updating: updateValue,
        }
        const paramsMan = { updating: updateValue }
        if (updateValue === 'auto') {
            getChangeUpdate(paramsAuto)
        } else getChangeUpdate(paramsMan)
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const settingsBtnClasses =
        'flex bg-light-lighter dark:bg-light-lighterD hover:font-medium outline outline-0 hover:outline-1 h-10 w-[100px] items-center justify-center rounded-sm'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <div className={titleClasses}>
                Версия системы -
                <Loader size={75} isLoading={isLoadInfo}>
                    <p className='ml-1'>{dataInfo?.version}</p>
                </Loader>
            </div>
            <div className='flex flex-col h-[75px] gap-[7px]'>
                <div className='flex flex-row gap-3 items-center h-[45px]'>
                    <CustomSelect
                        selectName='Обновление'
                        selectOptions={updateOptions}
                        defaultValue={renameUpdateValue(updateValue)}
                        changeValue={setUpadateValue}
                    />
                    {updateValue === 'man' ? (
                        <button
                            className={cn(settingsBtnClasses, 'h-9 w-[190px]', {
                                'cursor-default opacity-50 outline-none hover:font-normal':
                                    loadUpdate === 'Идет проверка',
                            })}
                            onClick={version}
                        >
                            Проверить обновления
                        </button>
                    ) : (
                        <CustomSelect
                            selectName='Время обновления'
                            selectOptions={timeOptions}
                            defaultValue={renameTimeValue(timeValue)}
                            changeValue={setTimeValue}
                        />
                    )}
                </div>
                {updateValue === 'man' ? (
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <div className='flex items-center h-10'><Loader size={75} isLoading={loadUpdate === 'Идет проверка'}><p className='font-medium'>{loadUpdate}</p></Loader></div>
                        {loadUpdate.length <= 14 ? null : (
                            <button className={cn(settingsBtnClasses, 'h-9')}>
                                Обновить
                            </button>
                        )}
                    </div>
                ) : null}
            </div>
            <hr className={hrClasses} />
            <button className={settingsBtnClasses} onClick={saveSystem}>
                Сохранить
            </button>
        </div>
    )
}
