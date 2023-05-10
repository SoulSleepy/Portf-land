import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IState {
    authUser: boolean | null
    activeUser: boolean | null
}

const initialState: IState = {
    authUser: null,
    activeUser: null,
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<boolean>) => {
            state.authUser = action.payload
        },
        setActiveUser: (state, action: PayloadAction<boolean>) => {
            state.activeUser = action.payload
        },
    },
})

export const { setAuthUser, setActiveUser} = auth.actions

export default auth.reducer