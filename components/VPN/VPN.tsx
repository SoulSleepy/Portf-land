import { useTranslation } from "next-i18next"
import { GenerateKeysVPNModal } from "../Modals/GenerateKeysVPNModal"
import { useAppDispatch } from "state/store"
import { openGenerateKeysVPNModal } from "state/slices/modals.slice"
import cn from "classnames"

export const VPN = () => {
    const { t } = useTranslation('vpn')
    const dispatch = useAppDispatch()

    const blockClasses = 'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl max-sm:p-2 p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium max-sm:h-8 h-10 items-center max-sm:text-base text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const btnClasses = 'flex flex-col items-center justify-center px-2 h-8 cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter dark:bg-light-lighterD rounded-sm' 

    return (
        <div className='grid max-lg:grid-cols-1 grid-cols-2 gap-4 text-text-light'>
            <div className={blockClasses}>
                <p className={titleClasses}>VPN {t('server')}</p>
                <hr className={hrClasses} />
                <div className='flex flex-col items-start gap-2'>
                    <p className='font-medium'>{t('description')}</p>
                    <p>Какое то описание</p>
                    <button onClick={() => dispatch(openGenerateKeysVPNModal())} className={btnClasses}>{t('generate keys')}</button>
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
                    <div className='grid grid-rows-4 items-start gap-2'>
                        <button className={cn(btnClasses, 'max-sm:h-14')}>{t('load configuration to server')}</button>
                        <button className={cn(btnClasses, 'max-sm:h-14')}>{t('load root certificate')}</button>
                        <button className={cn(btnClasses, 'max-sm:h-14')}>{t('load client certificate')}</button>
                        <button className={cn(btnClasses, 'max-sm:h-14')}>{t('load client key')}</button>
                    </div>
                </div>
            </div>
            <GenerateKeysVPNModal />
        </div>
    )
}
