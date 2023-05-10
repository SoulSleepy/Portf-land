import { useAppDispatch, useAppSelector } from 'state/store'
import {
    setCrt,
    setDate,
    setDevice,
    setIsClosed,
    setDataFilter,
    resetFillter
} from 'state/slices/filter.slice'
import { IFilterDevice, IFilter } from 'types/types'

export const useFilter = () => {
    const dispatch = useAppDispatch()

    const { filter } = useAppSelector((store) => store.filter)

    const setFilterCrt = (data: number[]) => {
        dispatch(setCrt(data))
    }
    const setFilterDate = (data: number[]) => {
        dispatch(setDate(data))
    }
    const setFilterDevice = (data: IFilterDevice) => {
        dispatch(setDevice(data))
    }
    const setFilterIsClosed = (data: boolean) => {
        dispatch(setIsClosed(data))
    }
    const setFilterData = (data:IFilter) => {
        dispatch(setDataFilter(data))
    }
    const resetFilter = () => {
        dispatch(resetFillter())
    }

    return {
        setFilterCrt,
        setFilterDate,
        setFilterDevice,
        setFilterIsClosed,
        setFilterData,
        resetFilter,
        filter,
    }
}
