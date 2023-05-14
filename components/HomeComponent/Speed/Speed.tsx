import {
    homeApi,
    useLazyGetSpeedNetQuery,
    useLazyGetSpeedTestQuery,
} from 'state/rtk/home.rtk'
import { useEffect, useState } from 'react'
import { UpdateIcon } from 'components/Icons/Icons'
import cn from 'classnames'
import { useTheme } from 'helpers/hooks/useTheme'

export const Speed = () => {
    const { theme } = useTheme()
    const [test, setTest] = useState(false)

    const [getSpeedResult, { data, isLoading }] = useLazyGetSpeedNetQuery()
    const [startSpeedTest] = useLazyGetSpeedTestQuery()

    useEffect(() =>{
        getSpeedResult()
    }, [test])

    const testSpeed = () => {
        if (test === false) {
            startSpeedTest()
            setTest(true)
            setTimeout(setTest, 45000, false)
        }
    }

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const dotClasses = 'w-1 h-1 bg-text-light rounded-[2px] dark:bg-text-lightD'
    const updateBtnClasses =
        'dark:bg-light-lighterD flex items-center justify-center bg-light-lighter rounded-[20px] h-[40px] w-[40px] hover:border ml-auto'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Скорость интернет соединения</p>
            <hr className={hrClasses} />
            <div className='flex flex-row gap-2 items-center'>
                <div className='flex flex-row gap-3 items-center h-[45px]'>
                    <div className='w-14'>
                        <p className='text-xs uppercase'>
                            <b>PING</b> MS
                        </p>
                        <p className='font-medium text-xl'>
                            {isLoading ? '...' : data?.ping}
                        </p>
                    </div>
                    <div className={dotClasses} />
                    <div className='w-20'>
                        <p className='text-xs uppercase'>
                            <b>Прием</b> MBPS
                        </p>
                        <p className='font-medium text-xl'>
                            {isLoading ? '...' : data?.download}
                        </p>
                    </div>
                    <div className={dotClasses} />
                    <div className='w-28'>
                        <p className='text-xs uppercase'>
                            <b>Передача</b> MBPS
                        </p>
                        <p className='font-medium text-xl'>
                            {isLoading ? '...' : data?.upload}
                        </p>
                    </div>
                </div>
                <button
                    className={cn(
                        updateBtnClasses,
                        {
                            'rotate-[360deg] transition-transform duration-500':
                                !test,
                        },
                        {'cursor-default opacity-30 hover:border-0': test === true}
                    )}
                    onClick={() => testSpeed()}
                >
                    <UpdateIcon fill={theme === 'dark' ? 'white' : '#6C7281'}/>
                </button>
            </div>
        </div>
    )
}
