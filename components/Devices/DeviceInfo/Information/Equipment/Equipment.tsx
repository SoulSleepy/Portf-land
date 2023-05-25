import { getNoun } from 'helpers/softFunctions'
import { useTranslation } from 'next-i18next'
import { IAgentInfoEq } from 'types/types'

interface IProps {
    equipment: IAgentInfoEq
}

export const Equipment = ({ equipment }: IProps) => {
    const { t } = useTranslation('devices')

    const blockClasses =
        'flex flex-col bg-light dark:bg-darkD dark:text-text-lightD rounded-xl p-3 shadow-dark gap-2'
    const titleClasses = 'flex font-medium h-10 items-center text-lg'
    const hrClasses =
        'border-none bg-text-light dark:bg-text-lightD h-[1.5px] w-full'

    return (
        <div className={blockClasses}>
            <p className={titleClasses}>{t('equipment')}</p>
            <hr className={hrClasses} />
            <div className='grid grid-rows gap-1'>
                {equipment.processorsInfo
                    ? equipment.processorsInfo.map((item) => {
                          return (
                              <div
                                  key={item.ProcessorID}
                                  className='flex justify-between'
                              >
                                  <p>{t('processor')}</p>
                                  <p>{item.Name}</p>
                              </div>
                          )
                      })
                    : <></>}
                {equipment.totalRAM ? (
                    <div className='flex justify-between'>
                        <p>{t('RAM')}</p>
                        <div className='flex flex-col text-right'>
                            <p>{Math.round(equipment.totalRAM / 1048576)} GB</p>
                            <div className='flex flex-row items-center'>
                                <p className='pr-[4px] text-sm'>
                                    {`${equipment.ramInfo.length} ${t(
                                        getNoun(
                                            equipment.ramInfo.length,
                                            'slot1',
                                            'slot2',
                                            'slot5'
                                        )
                                    )}`}
                                </p>
                                {equipment.ramInfo.map((item, index) => {
                                    return (
                                        <div
                                            key={item.SerialNumber}
                                            className='flex flex-row gap-[3px] text-sm'
                                        >
                                            <p>
                                                {Math.round(
                                                    +item.Capacity / 1073741824
                                                )}{' '}
                                                GB
                                            </p>
                                            <p>
                                                {index + 1 !==
                                                equipment.ramInfo.length
                                                    ? '+'
                                                    : ''}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                ) : <></>}
                {equipment.videoInfo
                    ? equipment.videoInfo.map((item, index) => {
                          return (
                              <div key={index} className='flex justify-between'>
                                  <p>{t('video system')}</p>
                                  <div className='flex flex-col text-right'>
                                      <p>{item.Name}</p>
                                      <p className='text-sm'>
                                          {Math.round(
                                              +item.AdapterRAM / 1073741824
                                          )}{' '}
                                          GB
                                      </p>
                                  </div>
                              </div>
                          )
                      })
                    : <></>}
                {equipment.physicalDrives
                    ? equipment.physicalDrives.map((item, index) => {
                          return (
                              <div key={index} className='flex justify-between'>
                                  <p>{t('drive')}</p>
                                  <div className='flex flex-col text-right'>
                                      <p>{item.Model}</p>
                                      <p className='text-sm'>
                                          {Math.round(+item.Size / 1073741824)}{' '}
                                          GB
                                      </p>
                                  </div>
                              </div>
                          )
                      })
                    : <></>}
            </div>
        </div>
    )
}
