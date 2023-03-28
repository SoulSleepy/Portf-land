import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IState {
    authUser: boolean | null
}

const initialState: IState = {
    authUser: null,
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<boolean>) => {
            state.authUser = action.payload
        },
    },
})

export const { setAuthUser } = user.actions

export default user.reducer