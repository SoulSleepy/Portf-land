import { IFilter, IFilterDevice } from 'types/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface initState {
    filter: IFilter
}

const initialState: initState = {
    filter: {
    isClosed: false,
    }
}

export const filter = createSlice({
    name: 'filterDanger',
    initialState,
    reducers: {
        setIsClosed: (state, {payload}) => {
            state.filter.isClosed = payload
        },
        setCrt: (state, {payload}) => {
            state.filter.crt = payload
        },
        setDate: (state, {payload}) => {
            state.filter.date = payload
        },
        setDevice: (state, {payload}: PayloadAction<IFilterDevice>) => {
            state.filter.device = payload
        },
        setDataFilter: (state, {payload}:PayloadAction<IFilter>) => {
              state.filter = payload
        },
        resetFillter: (state) => {
            state.filter = initialState.filter
        }
    },
})

export const {setIsClosed, setCrt, setDevice, setDate, setDataFilter, resetFillter} = filter.actions

export default filter.reducer
