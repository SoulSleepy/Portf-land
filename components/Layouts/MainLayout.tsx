import { FC, ReactNode } from 'react'
import { NavBar } from '../NavBar'

interface Props {
    children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className='h-full flex flex-row justify-start relative'>
            <NavBar />
            <main className='bg-primary flex-1 p-7 text-white border-1 border-dashed'>{children}</main>
        </div>
    )
}

export default MainLayout
