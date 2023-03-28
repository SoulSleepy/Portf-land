export const VPN = () => {
    const blockClasses = 'flex flex-col bg-white rounded-xl p-3 shadow-md gap-2'
    const titleClasses = 'flex font-medium h-10 items-center'
    const hrClasses = 'border-none bg-text h-[1.5px] w-full'
    const btnClasses = 'bg-light-lighter rounded-sm h-8 px-1 hover:border' 

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
