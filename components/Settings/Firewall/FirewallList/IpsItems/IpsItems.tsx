import { useSetDellFirewallMutation } from 'state/rtk/settings.rtk'
import { DeleteIcon } from 'components/Icons/Icons'
import { SrcNeighIp } from 'types/types'

interface IProps {
    src_neigh: SrcNeighIp[]
    setOpen: (value: boolean) => void
}

export const IpsItems = ({ src_neigh, setOpen }: IProps) => {
    const [setDelIpFirewall] = useSetDellFirewallMutation()

    const delIp = (name: string) => {
        const params = { [name]: name }
        setDelIpFirewall(params)
        setOpen(false)
    }

    return (
        <div className='p-1 absolute -bottom-[2px] left-8 flex flex-col gap-1 z-20 h-[100px] w-[200px] outline outline-1 hover:outline-2 bg-light rounded-md'>
            <div className='overflow-auto pr-2 z-30'>
                {Object.entries(src_neigh).map((item) => {
                    return (
                        <div
                            key={item[0]}
                            className='flex flex-row justify-between items-center h-8 w-full gap-2 hover:bg-light-lighter'
                        >
                            <p className='pl-1 text-lg'>
                                {typeof item[1] === 'string' ? item[1] : '*'}
                            </p>
                            <button
                                className='hover:scale-110'
                                onClick={() => delIp(item[0])}
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
