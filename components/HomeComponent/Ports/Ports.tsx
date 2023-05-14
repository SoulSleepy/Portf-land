import { IPortLocalNetwork } from 'types/types'
import { LanPortIcon, NetIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'

interface IProps {
    ports: IPortLocalNetwork[]
    isLoading: boolean
}

export const Ports = ({ ports, isLoading }: IProps) => {
    const { theme } = useTheme()

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const portClasses =
        'relative flex flex-col items-center justify-center h-[78px] bg-light-lighter dark:bg-light-lighterD rounded-sm'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Сетевые порты</p>
            <hr className={hrClasses} />
            <div className='grid grid-cols-4 gap-2'>
                {isLoading ? (
                    <div className='h-[78px]'>loading</div>
                ) : (
                    ports.map((item) => {
                        return (
                            <div key={item.port} className={portClasses}>
                                <div className='scale-[0.08] h-[35px] mt-[-15px]'>
                                    <LanPortIcon
                                        fill={item.link ? 'green' : 'red'}
                                    />
                                </div>
                                <p className=' uppercase mt-[25px]'>
                                    {item.type === 'ethernet' ? 'lan' : 'wan'}
                                </p>
                                {item.type === 'wan' && (
                                    <div className='absolute bottom-6 mt-[-10px] scale-90'>
                                        <NetIcon
                                            fill={
                                                theme === 'dark'
                                                    ? 'white'
                                                    : 'black'
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
