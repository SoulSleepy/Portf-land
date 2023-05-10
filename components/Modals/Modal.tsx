import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IProps {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

export const Modal = ({ children, isOpen, onClose }: IProps) => {
    if (!isOpen) {
        return null
    }

    return createPortal(
        <div
            className='flex justify-center items-center fixed z-20 top-0 right-0 bottom-0 left-0 bg-modalBg'
            onClick={onClose}
        >
            {children}
        </div>,
        document.getElementById('modal-root') as HTMLElement
    )
}
