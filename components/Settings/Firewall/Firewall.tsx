import { useGetSettingsFirewallQuery } from 'state/rtk/settings.rtk'
import { NewFirewall } from './NewFirewall'
import { FirewallList } from './FirewallList/FirewallList'


export const Firewall = () => {
    const { data, isLoading } = useGetSettingsFirewallQuery()

    const blockClasses = 'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light h-[1.5px] w-full'

    if (isLoading) return <div> Loading </div>
    return (
        <div className={blockClasses}>
            <div className='grid grid-cols-[1fr_1.8fr_1fr_1.2fr_2fr_0.2fr] gap-3'>
                <p className={titleClasses}>Правило</p>
                <p className={titleClasses}>Устройство</p>
                <p className={titleClasses}>Внешний порт</p>
                <p className={titleClasses}>Исходный порт</p>
                <p className={titleClasses}>Белый список IP-адресов</p>
            </div>
            <hr className={hrClasses} />
            <div className='flex flex-col gap-1'>
                {!data ? <p>Правила отсутствуют</p> : data?.map(([key, item]) => {
                    return (
                        <FirewallList key={key}  {...item}/>
                    )
                })}
            </div>
            <hr className={hrClasses} />
            <NewFirewall />
        </div>
    )
}
