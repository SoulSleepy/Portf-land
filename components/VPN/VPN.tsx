import { useTranslation } from "next-i18next"

export const VPN = () => {
    const { t } = useTranslation('vpn')
    
    const blockClasses = 'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const btnClasses = 'flex flex-col items-center justify-center px-2 h-8 cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter dark:bg-light-lighterD rounded-sm' 

    return (
        <div className='grid grid-cols-2 gap-4 text-text-light'>
            <div className={blockClasses}>
                <p className={titleClasses}>VPN {t('server')}</p>
                <hr className={hrClasses} />
                <div className='flex flex-col items-start gap-2'>
                    <p className='font-medium'>{t('description')}</p>
                    <p>Какое то описание</p>
                    <button className={btnClasses}>{t('generate keys')}</button>
                </div>
            </div>
            <div className={blockClasses}>
                <p className={titleClasses}>VPN {t('client')}</p>
                <hr className={hrClasses} />
                <div className='flex flex-col items-start gap-3'>
                    <div className='flex flex-col items-start gap-2'>
                        <p className='font-medium'>{t('paths for configuring certificates')}</p>
                        <p>/etc/openvpn/remoteclient/ca.crt</p>
                        <p>/etc/openvpn/remoteclient/client.crt</p>
                        <p>/etc/openvpn/remoteclient/client.key</p>
                    </div>
                    <hr className={hrClasses} />
                    <div className='flex flex-col items-start gap-2'>
                        <button className={btnClasses}>{t('load configuration to server')}</button>
                        <button className={btnClasses}>{t('load root certificate')}</button>
                        <button className={btnClasses}>{t('load client certificate')}</button>
                        <button className={btnClasses}>{t('load client key')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
