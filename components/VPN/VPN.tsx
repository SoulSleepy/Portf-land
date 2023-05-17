export const VPN = () => {
    const blockClasses = 'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses = 'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'
    const btnClasses = 'flex flex-col items-center justify-center px-2 h-8 cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter dark:bg-light-lighterD rounded-sm' 

    return (
        <div className='grid grid-cols-2 gap-4 text-text-light'>
            <div className={blockClasses}>
                <p className={titleClasses}>VPN сервер</p>
                <hr className={hrClasses} />
                <div className='flex flex-col items-start gap-2'>
                    <p className='font-medium'>Описание</p>
                    <p>Какое то описание</p>
                    <button className={btnClasses}>Генерировать ключи</button>
                </div>
            </div>
            <div className={blockClasses}>
                <p className={titleClasses}>VPN клиент</p>
                <hr className={hrClasses} />
                <div className='flex flex-col items-start gap-3'>
                    <div className='flex flex-col items-start gap-2'>
                        <p className='font-medium'>Пути для конфигурации сертификатов</p>
                        <p>/etc/openvpn/remoteclient/ca.crt</p>
                        <p>/etc/openvpn/remoteclient/client.crt</p>
                        <p>/etc/openvpn/remoteclient/client.key</p>
                    </div>
                    <hr className={hrClasses} />
                    <div className='flex flex-col items-start gap-2'>
                        <button className={btnClasses}>Загрузить на сервер конфигурацию</button>
                        <button className={btnClasses}>Загрузить сертификат центра сертификации</button>
                        <button className={btnClasses}>Загрузить клиентский сертификат</button>
                        <button className={btnClasses}>Загрузить клиентский ключ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
