import { IRegisterItems } from 'types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loader } from 'components/Loader'
import { useLazySetAnketaServerQuery } from 'state/rtk/system.rtk'
import { useTranslation } from 'next-i18next'

interface IProps {
    items: IRegisterItems[]
    isLoading: boolean
    onClose: () => void
}

export const ConnectServer2 = ({ items, isLoading, onClose }: IProps) => {
    const { t } = useTranslation('modals')
    const [setAnketa, { isLoading: isLoad }] = useLazySetAnketaServerQuery()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<any>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<any> = (data) => {
        const anketa = items.map((item) => {
            return {
                name: item.name,
                title: item.title,
                type: item.type,
                value: data[item.name],
            }
        })
        setAnketa(anketa)
        onClose()
    }

    const inputClasses =
        'flex items-center h-10 w-[250px] outline outline-1 hover:outline-2 focus:outline-2 rounded-lg pl-2 bg-transparent'
    const labelClasses =
        ' z-10 absolute -top-[12px] text-sm left-2 bg-light dark:bg-darkDD rounded-xl px-2'
    const btnClasses =
        'flex mt-2 items-center justify-center h-8 w-[250px] uppercase hover:font-medium outline outline-0 bg-light-lighter dark:bg-light-lighterD hover:outline-1 rounded-sm'

    return (
        <Loader isLoading={isLoading}>
            <div
                className='flex flex-col p-5 items-center gap-5 bg-light dark:bg-darkDD rounded-md text-text-light dark:text-text-lightD'
                onClick={(event) => event.stopPropagation()}
            >
                <p className='font-medium text-xl tracking-wider'>
                    Подключение к серверу службы ИБ
                </p>
                <form
                    className='flex flex-col gap-6 mt-3'
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete='off'
                >
                    {items?.map((item) => {
                        return (
                            <div className='relative z-10'>
                                <input
                                    type={item.type}
                                    className={inputClasses}
                                    {...register(item.name)}
                                />
                                <label className={labelClasses}>
                                    {item.title}
                                </label>
                            </div>
                        )
                    })}
                    <div className='relative'>
                        <button className={btnClasses} type='submit'>
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </Loader>
    )
}
