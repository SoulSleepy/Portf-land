import { Firewall } from './Firewall'
import { Lan } from './Lan'
import { Provider } from './Provider'
import { WiFi24 } from './WiFi24'
import { WiFi5 } from './WiFi5'

export const Settings = () => {
    return (
        <div className='flex flex-col gap-4 text-text-light dark:text-text-lightD'>
            <div className='grid grid-cols-4 gap-4 h-[525px]'>
                <WiFi24 />
                <WiFi5 />
                <Lan />
                <Provider />
            </div>
            <Firewall />
        </div>
    )
}
