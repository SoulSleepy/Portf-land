import { FC, ReactNode } from 'react'
import { NavBar } from '../NavBar'
import { useState, useEffect } from 'react'
import { ThemeButton } from 'helpers/ThemeButton'
import Image from 'next/image'
import bgImage from '../../images/bg.png'

interface IProps {
    children: ReactNode
}

const MainLayout: FC<IProps> = ({ children }) => {
    return (
        <div className='h-full flex flex-row justify-start relative'>
            <NavBar />
            <Image className='brightness-200 dark:brightness-100 absolute h-full w-full z-0 blur-[5px] object-cover' src={bgImage} alt= 'background'/>
            <main className='bg-transparent flex-1 pt-10 pb-7 px-9 text-white border-1 border-dashed z-10'>
                <ThemeButton />
                {children}
            </main>
        </div>
    )
}

export default MainLayout
