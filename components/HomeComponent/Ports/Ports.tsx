import Image from 'next/image'
import lanPortOnIcon from '../../../images/lanPortOnIcon.svg'
import lanPortOffIcon from '../../../images/lanPortOffIcon.svg'
import netIcon from '../../../images/netIcon.svg'
import { IPortLocalNetwork } from '@/types/types'
import cn from 'classnames'

interface IProps {
    ports: IPortLocalNetwork[]
    isLoading: boolean
}

export const Ports = ({ ports, isLoading }: IProps) => {
    const blockClasses =
        'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'
    const portClasses =
        'flex flex-col items-center justify-center h-[78px] bg-light-lighter rounded-sm'

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
                            <div className={portClasses}>
                                <Image
                                    src={
                                        item.link
                                            ? lanPortOnIcon
                                            : lanPortOffIcon
                                    }
                                    alt='lanPort'
                                    width={35}
                                    height={35}
                                />
                                {item.type === 'wan' ? (
                                    <Image
                                        className='mt-[-10px]'
                                        src={netIcon}
                                        alt='netIcon'
                                        width={20}
                                        height={20}
                                    />
                                ) : null}
                                <p
                                    className={cn('uppercase', {
                                        'mt-[10px]': item.type === 'ethernet',
                                    })}
                                >
                                    {item.type === 'ethernet' ? 'lan' : 'wan'}
                                </p>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
