import { Update } from './Update'
import { Controls } from './Controls'
import { Params } from './Params'
import { ChangeAuth } from './ChangeAuth'
import { Server } from './Server'

export const System = () => {
    return (
        <div className='flex flex-col gap-4 text-text-light dark:text-text-lightD'>
            <div className='grid grid-cols-[0.9fr_1.3fr_1.8fr] gap-4'>
                <Controls />
                <Update />
                <Params />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <ChangeAuth />
                <Server />
            </div>
        </div>
    )
}
