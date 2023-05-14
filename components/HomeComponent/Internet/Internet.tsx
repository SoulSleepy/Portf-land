import { XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'
import { useGetGrahpicQuery } from 'state/rtk/home.rtk'

export const Internet = () => {
    const { data, isLoading } = useGetGrahpicQuery()
    const renderData = data
        ?.map((item, index) => ({
            date: `${index}`,
            out: item.out / 1024,
            in: item.in / 1024,
        }))
        .filter((_, idx) => idx % 5 === 0)

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none dark:bg-text-lightD bg-text-light h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>Интернет</p>
            <hr className={hrClasses} />
            {isLoading ? (
                <p>loading</p>
            ) : (
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row justify-between'>
                        <p>Трафик Mbit/s</p>
                        <div className='flex flex-row gap-4'>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='h-[2px] w-7 bg-graph'></div>
                                <p className='text-graph'>Прием</p>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='h-[2px] w-7 bg-graph-upload'></div>
                                <p className='text-graph-upload'>Передача</p>
                            </div>
                        </div>
                    </div>
                    <ResponsiveContainer
                        className='h-[232px]'
                        minWidth='100%'
                        minHeight='232px'
                        height={'100%'}
                    >
                        <LineChart data={renderData}>
                            <XAxis dataKey='date' />
                            <YAxis />
                            <Line
                                type='monotone'
                                dataKey='out'
                                stroke='#8884d8'
                                dot={false}
                            />
                            <Line
                                type='monotone'
                                dataKey='in'
                                stroke='#82ca9d'
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    )
}
