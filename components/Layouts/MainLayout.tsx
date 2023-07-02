import { FC, ReactNode } from 'react'
import { NavBar } from '../NavBar'
import { ThemeButton } from 'helpers/ThemeButton'
import Image from 'next/image'
import bgImage from '../../images/bg.png'
import { LangButton } from 'helpers/LangButton'
import { Loader } from '../Loader'
import { useAppSelector } from 'state/store'

interface IProps {
    children: ReactNode
}

const MainLayout: FC<IProps> = ({ children }) => {
    const { authUser } = useAppSelector((store) => store.auth)

    return (
        <Loader isLoading={authUser !== true}>
            <div className='h-full flex flex-row justify-start relative'>
                <NavBar />
                <Image
                    className='max-md:fixed brightness-200 dark:brightness-100 absolute h-full w-full z-0 blur-[5px] object-cover'
                    src={bgImage}
                    alt='background'
                />
                <main className='max-md:absolute max-md:pl-24 max-md:pr-4 flex-1 pt-10 pb-7 pl-9 pr-9 text-white border-1 border-dashed z-10'>
                    <div className='absolute dark:hover:bg-darkD hover:bg-light dark:text-light text-light-lighterD h-[34px] w-32 rounded-b-lg top-0 flex flex-row gap-3 items-center justify-between px-2 py-1'>
                        <ThemeButton /> <LangButton /> 
                    </div>
                    {children}
                </main>
            </div>
        </Loader>
    )
}

export default MainLayout
