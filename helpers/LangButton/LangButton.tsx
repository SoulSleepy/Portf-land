import Link from 'next/link'
import { useRouter } from 'next/router'

export const LangButton = () => {
    const { pathname, locale } = useRouter()
    return (
        <div className='text-lg uppercase h-8'>
            {locale === 'ru' ? (
                <Link href={pathname} locale={'en'}>
                    English
                </Link>
            ) : (
                <Link href={pathname} locale={'ru'}>
                    Русский
                </Link>
            )}
        </div>
    )
}
