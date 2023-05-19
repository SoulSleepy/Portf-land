import { Loader } from 'components/Loader'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'
import { useGetGrahpicQuery } from 'state/rtk/home.rtk'

interface IGrafhData {
    date: string
    out: number
    in: number
}

export const Internet = () => {
    const { t } = useTranslation('home')
    const { data, isLoading, isError } = useGetGrahpicQuery()
    const [renderData, setRenderData] = useState([] as IGrafhData[])

    useEffect(() => {
        if(data && !isError) {
            const newData: IGrafhData[] = data
            ?.map((item, index) => ({
                date: `${index}`,
                out: item.out / 1024,
                in: item.in / 1024,
            }))
            .filter((_, idx) => idx % 5 === 0)
            setRenderData(newData)
        }
    }, [data])

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-8 items-center text-lg'
    const hrClasses =
        'border-none dark:bg-text-lightD bg-text-light h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('internet')}</p>
            <hr className={hrClasses} />
            <div className='flex flex-col gap-1 h-[260px]'>
                <div className='flex flex-row justify-between'>
                    <p>{t('traffic')} Mbit/s</p>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-row gap-1 items-center'>
                            <div className='h-[2px] w-7 bg-graph'></div>
                            <p className='text-graph'>{t('reception')}</p>
                        </div>
                        <div className='flex flex-row gap-1 items-center'>
                            <div className='h-[2px] w-7 bg-graph-upload'></div>
                            <p className='text-graph-upload'>{t('transmission')}</p>
                        </div>
                    </div>
                </div>
                <Loader isLoading={isLoading}>
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
                </Loader>
            </div>
        </div>
    )
}
