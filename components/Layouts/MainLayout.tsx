import { FC, ReactNode, useEffect, useState } from 'react'
import { NavBar } from '../NavBar'
import { ThemeButton } from 'helpers/ThemeButton'
import Image from 'next/image'
import bgImage from '../../images/bg.png'
import { LangButton } from 'helpers/LangButton'
import { Loader } from '../Loader'
import { useRouter } from 'next/router'

interface IProps {
    children: ReactNode
}

const MainLayout: FC<IProps> = ({ children }) => {
    const [test, setTest] = useState(true)
    const { pathname } = useRouter()

    useEffect(() => {
        if (pathname === '/') setTest(localStorage.isAuth !== 'true')
    }, [pathname])

    return (
        <div className='h-full flex flex-row justify-start relative'>
            <NavBar />
            <Image
                className='brightness-200 dark:brightness-100 absolute h-full w-full z-0 blur-[5px] object-cover'
                src={bgImage}
                alt='background'
            />
            <main className='bg-transparent flex-1 pt-10 pb-7 px-9 text-white border-1 border-dashed z-10'>
                <div className='absolute top-0 flex flex-row gap-3 items-center justify-center p-1'>
                    <ThemeButton /> <LangButton />
                </div>
                <Loader isLoading={test}>{children}</Loader>
            </main>
        </div>
    )
}

export default MainLayout
