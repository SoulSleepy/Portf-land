import Image from 'next/image'
import bgImage from '../../images/bg.png'
import { useState } from 'react'
import { Agreement } from './Agreement'
import { Registration } from './Registration'

export const Activate = () => {
    const [accept, setAccept] = useState(false)

    return (
        <div className='text-text-light flex h-screen justify-center items-center relative'>
            <Image
                className='absolute h-full w-full blur-[5px] object-cover'
                src={bgImage}
                alt='background'
            />
            {accept ? <Registration /> : <Agreement setAccept={setAccept}/>}
        </div>
    )
}
