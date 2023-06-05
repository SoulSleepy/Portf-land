import cn from 'classnames'
import { CheckboxOffIcon, CheckboxOnIcon } from '../../Icons/Icons'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

interface IProps {
    setAccept: (value: boolean) => void
}

export const Agreement = ({ setAccept }: IProps) => {
    const { t } =  useTranslation('login')
    const [check, setCheck] = useState(false)

    const acceptFn = (value: boolean) => {
        if ( check ) {
            setAccept(value)
        }
    }

    return (
        <div className='flex flex-col bg-light rounded-xl p-3 shadow-dark gap-2 z-10 w-[600px] h-[600px]'>
            <p className='flex font-medium h-10 items-center text-lg border-b-[1px] pb-1'>
                {t('user agreement')}
            </p>
            <div className='flex flex-col gap-1 overflow-auto pr-1'>
                <p className='font-medium'>
                    {t("end user license agreement of the software and hardware complex 'GAK-BOX'")}
                </p>
                <p className='font-bold'>1. {t('general provisions')}</p>
                <p className='pl-2'>
                    <b>1.1.</b> {t('1.1')}
                </p>
                <p className='pl-2'>
                    <b>1.2.</b> {t('1.2')}
                </p>
                <p className='pl-2'>
                    <b>1.3.</b> {t('1.3')}
                </p>
                <p className='font-bold'>2. {t('proper use')}</p>
                <p className='pl-2'>
                    <b>2.1.</b> {t('2.1')}
                </p>
                <p className='pl-2'>
                    <b>2.2.</b> {t('2.2')}
                </p>
                <p className='pl-2'>
                    <b>2.3.</b> {t('2.3')}
                </p>
                <p className='pl-2'>
                    <b>2.4.</b> {t('2.4')}
                </p>
                <p className='pl-2'>
                    <b>2.5.</b> {t('2.5')}
                </p>
                <p className='font-bold'>3. {t('copyright')}</p>
                <p className='pl-2'>
                    <b>3.1.</b> {t('3.1')}
                </p>
                <p className='pl-2'>
                    <b>3.2.</b> {t('3.2')}
                </p>
                <p className='pl-2'>
                    <b>3.3.</b> {t('3.3')}
                </p>
                <p className='font-bold'>4. {t('limited warranty')}</p>
                <p className='pl-2'>
                    <b>4.1.</b> {t('4.1')}
                </p>
                <p className='pl-2'>
                    <b>4.2.</b> {t('4.2')}
                </p>
                <p className='pl-2'>
                    <b>4.3.</b> {t('4.3')}
                </p>
                <p className='pl-2'>
                    <b>4.4.</b> {t('4.4')}
                </p>
                <p className='font-bold'>5. {t('liability')}</p>
                <p className='pl-2'>
                    <b>5.1.</b> {t('5.1')}
                </p>
                <p className='pl-2'>
                    <b>5.2.</b> {t('5.2')}
                </p>
                <p className='font-bold'>6. {t('other provisions')}</p>
                <p className='pl-2'>
                    <b>6.1.</b> {t('6.1')}
                </p>
                <p className='pl-2'>
                    <b>6.2.</b> {t('6.2')}
                </p>
                <p className='pl-3'>
                    <b>6.2.1.</b> {t('6.2.1')}
                </p>
                <p className='pl-3'>
                    <b>6.2.2.</b> {t('6.2.2')}
                </p>
                <p className='pl-3'>
                    <b>6.2.3.</b> {t('6.2.3')}
                </p>
                <p className='pl-2'>
                    <b>6.3.</b> {t('6.3')}
                </p>
            </div>
            <div className='flex flex-row gap-2 items-center border-t-[1px] pt-3'>
                <button
                    type='button'
                    className='flex h-[26px] w-[26px] items-center justify-center hover:bg-light-lighter'
                    onClick={() => setCheck(!check)}
                >
                    {check ? <CheckboxOnIcon /> : <CheckboxOffIcon />}
                </button>
                <p>{t('i accept the terms of the user agreement')}</p>
                <button
                    onClick={() => acceptFn(true)}
                    className={cn(
                        'ml-2 flex bg-light-lighter h-[30px] w-[90px] items-center justify-center rounded-sm outline outline-0 hover:outline-1 hover:font-medium',
                        {
                            'hover:outline-0 hover:font-normal hover:cursor-default':
                                !check,
                        }
                    )}
                >
                    {t('further')}
                </button>
            </div>
        </div>
    )
}
