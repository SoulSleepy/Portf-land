import { ResetRouterModal } from 'components/Modals/ResetRouterModal'
import { useAppDispatch } from 'state/store'
import {
    openRebootRouterModal,
    openResetRouterModal,
} from 'state/slices/modals.slice'
import { RebootRouterModal } from 'components/Modals/RebootRouterModal'
import { ResetIcon, UpdateIcon } from 'components/Icons/Icons'
import { useTheme } from 'helpers/hooks/useTheme'

export const Controls = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD rounded-xl p-3 shadow-dark gap-2'
    const btnClasses =
        'flex flex-col items-center justify-center h-full cursor-pointer outline outline-0 hover:outline-1 hover:font-medium dark:bg-light-lighterD bg-light-lighter rounded-sm p-3'

    return (
        <div className={blockClasses}>
            <div className={btnClasses}>
                <div>
                    <UpdateIcon
                        fill={theme === 'dark' ? '#bebebe' : '#6C7281'}
                    />
                </div>
                <button
                    className='uppercase tracking-wide'
                    onClick={() => dispatch(openRebootRouterModal())}
                >
                    Перезагрузить
                </button>
            </div>
            <div
                className={btnClasses}
                onClick={() => dispatch(openResetRouterModal())}
            >
                <div>
                    <ResetIcon
                        fill={theme === 'dark' ? '#bebebe' : '#6C7281'}
                    />
                </div>
                <button className='uppercase tracking-wide'>Сбросить</button>
            </div>
            <ResetRouterModal />
            <RebootRouterModal />
        </div>
    )
}
