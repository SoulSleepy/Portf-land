import Image from 'next/image'
import updateIcon from '../../../images/updateIcon.svg'
import resetIcon from '../../../images/resetIcon.svg'
import { ResetRouterModal } from 'components/Modals/ResetRouterModal'
import { useAppDispatch } from 'state/store'
import { openRebootRouterModal, openResetRouterModal } from 'state/slices/modals.slice'
import { RebootRouterModal } from 'components/Modals/RebootRouterModal'

export const Controls = () => {
    const dispatch = useAppDispatch()
    
    const blockClasses = 'flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2'
    const btnClasses =
        'flex flex-col items-center justify-center h-full cursor-pointer outline outline-0 hover:outline-1 hover:font-medium bg-light-lighter rounded-sm p-3'

    return (
        <div className={blockClasses}>
            <div className={btnClasses}>
                <Image src={updateIcon} alt='reload' />
                <button className='uppercase tracking-wide' onClick={() => dispatch(openRebootRouterModal())}>
                    Перезагрузить
                </button>
            </div>
            <div className={btnClasses} onClick={() => dispatch(openResetRouterModal())}>
                <Image src={resetIcon} alt='reset' />
                <button className='uppercase tracking-wide'>Сбросить</button>
            </div>
            <ResetRouterModal />
            <RebootRouterModal />
        </div>
    )
}
