import { ClockIcon, DangerLevelIconIcon, DevicesIcon } from 'components/Icons/Icons'
import { toDate } from 'helpers/softFunctions'
import { useGetDangerListQuery } from 'state/rtk/dangerAndEvent.rtk'
import { useFilter } from 'helpers/hooks/useFilter'


export const InWork = () => {
    
    const { filter } = useFilter()
    const { data, isLoading } = useGetDangerListQuery(filter)
    
    return (
        <div className='flex flex-col gap-2 h-[525px] overflow-auto'>
            {data?.length ? (
                isLoading ? (
                    <p>loading</p>
                ) : (
                    data?.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className='flex flex-row gap-4 hover:bg-light-lighter cursor-pointer'
                            >
                                <div className='flex flex-col items-center justify-center relative pl-3'>
                                    <div className='scale-[2.0]'><DangerLevelIconIcon /></div>
                                    <p className='absolute top-[27px] font-medium text-[black]'>
                                        {item.crt}
                                    </p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='font-medium text-lg'>
                                        {item.titles?.ru}
                                    </p>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex flex-row gap-2'>
                                            <ClockIcon />
                                            <p>{toDate(item.createTst)}</p>
                                        </div>
                                        <div className='flex flex-row gap-2'>
                                            <DevicesIcon />
                                            <p>{item.deviceInfo.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='flex ml-auto pr-2 items-center'>
                                    #{item.id}
                                </p>
                            </div>
                        )
                    })
                )
            ) : (
                <p className='flex flex-col items-center justify-center text-2xl h-full'>
                    Уязвимости отсутствуют
                </p>
            )}
        </div>
    )
}
