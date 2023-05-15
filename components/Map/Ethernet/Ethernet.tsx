import { useTheme } from "helpers/hooks/useTheme"
import { DevicesIcon } from "components/Icons/Icons"
import { IMapItem } from "types/types"

interface IProps {
    data: IMapItem[]
}

export const Ethernet = ({data}: IProps) => {
    const { theme } = useTheme()

    const blockDevicesClasses = 'grid grid-cols-3 gap-2 '
    const borderBlockClasses = 'border-white border border-solid rounded-md'
    const devicePortClasses =
        'flex flex-col gap-1 w-[150px] h-20 mt-2 overflow-hidden hover:overflow-auto text-sm text-text-lightD'

    return (
        <div className={borderBlockClasses}>
            <p className='font-medium pt-1 pl-3 text-lg'>Ethernet</p>
            <div className={blockDevicesClasses}>
                {data?.map((item) => {
                        if (!item.wired)
                            return (
                                <div
                                    key={item.id}
                                    className='flex flex-row items-center gap-2 p-2 hover:bg-mapItemBG cursor-pointer'
                                >
                                    <DevicesIcon fill='white'/>
                                    <div className='flex flex-col gap-1'>
                                        <p className='font-medium h-12'>
                                            {item.name}
                                        </p>
                                        <p className='text-sm'>{item.ip}</p>
                                        <div className={devicePortClasses}>
                                            {Object.keys(item.ports).length ? (
                                                Object.keys(item.ports).map(
                                                    (port) => {
                                                        return (
                                                            <p className='px-1 py-[2px] w-20 hover:bg-light-lighterD' key={port}>
                                                                {port}
                                                            </p>
                                                        )
                                                    }
                                                )
                                            ) : (
                                                <p>нет</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                )}
            </div>
        </div>
    )
}
