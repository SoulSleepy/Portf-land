import { createSlice } from '@reduxjs/toolkit'

export interface IState {
    isOpenCreateUser: boolean
    isOpenDeleteUser: boolean
    isOpenUpdateUser: boolean
    isOpenResetRouter: boolean
    isOpenRebootRouter: boolean
    isOpenSetWifi24Settings: boolean
    isOpenSetWifi5Settings: boolean
    isOpenSetLanSettings: boolean
    isOpenSetProviderSettings: boolean
    isOpenAddWhiteIp: boolean
    isOpenGetTaskItem: boolean
    isOpenGetEventItem: boolean
    isOpenConnectServer: boolean
    isOpenDisconnectServer: boolean
    isOpenGenerateKeysVPN: boolean
}

const initialState: IState = {
    isOpenCreateUser: false,
    isOpenDeleteUser: false,
    isOpenUpdateUser: false,
    isOpenResetRouter: false,
    isOpenRebootRouter: false,
    isOpenSetWifi24Settings: false,
    isOpenSetWifi5Settings: false,
    isOpenSetLanSettings: false,
    isOpenSetProviderSettings: false,
    isOpenAddWhiteIp: false,
    isOpenGetTaskItem: false,
    isOpenGetEventItem: false,
    isOpenConnectServer: false,
    isOpenDisconnectServer: false,
    isOpenGenerateKeysVPN: false,
}

export const modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openCreateUserModal: (state) => {
            state.isOpenCreateUser = true
        },
        closeCreateUserModal: (state) => {
            state.isOpenCreateUser = false
        },
        openDeleteUserModal: (state) => {
            state.isOpenDeleteUser = true
        },
        closeDeleteUserModal: (state) => {
            state.isOpenDeleteUser = false
        },
        openUpdateUserModal: (state) => {
            state.isOpenUpdateUser = true
        },
        closeUpdateUserModal: (state) => {
            state.isOpenUpdateUser = false
        },
        openResetRouterModal: (state) => {
            state.isOpenResetRouter = true
        },
        closeResetRouterModal: (state) => {
            state.isOpenResetRouter = false
        },
        openRebootRouterModal: (state) => {
            state.isOpenRebootRouter = true
        },
        closeRebootRouterModal: (state) => {
            state.isOpenRebootRouter = false
        },
        openSetWifi24SettingsModal: (state) => {
            state.isOpenSetWifi24Settings = true
        },
        closeSetWifi24SettingsModal: (state) => {
            state.isOpenSetWifi24Settings = false
        },
        openSetWifi5SettingsModal: (state) => {
            state.isOpenSetWifi5Settings = true
        },
        closeSetWifi5SettingsModal: (state) => {
            state.isOpenSetWifi5Settings = false
        },
        openSetLanSettingsModal: (state) => {
            state.isOpenSetLanSettings = true
        },
        closeSetLanSettingsModal: (state) => {
            state.isOpenSetLanSettings = false
        },
        openSetProviderSettingsModal: (state) => {
            state.isOpenSetProviderSettings = true
        },
        closeSetProviderSettingsModal: (state) => {
            state.isOpenSetProviderSettings = false
        },
        openAddWhiteIpModal: (state) => {
            state.isOpenAddWhiteIp = true
        },
        closeAddWhiteIpModal: (state) => {
            state.isOpenAddWhiteIp = false
        },
        openGetTaskItemModal: (state) => {
            state.isOpenGetTaskItem = true
        },
        closeGetTaskItemModal: (state) => {
            state.isOpenGetTaskItem = false
        },
        openGetEventItemModal: (state) => {
            state.isOpenGetEventItem = true
        },
        closeGetEventItemModal: (state) => {
            state.isOpenGetEventItem = false
        },
        openConnectServerModal: (state) => {
            state.isOpenConnectServer = true
        },
        closeConnectServerModal: (state) => {
            state.isOpenConnectServer = false
        },
        openDisconnectServerModal: (state) => {
            state.isOpenDisconnectServer = true
        },
        closeDisconnectServerModal: (state) => {
            state.isOpenDisconnectServer = false
        },
        openGenerateKeysVPNModal: (state) => {
            state.isOpenGenerateKeysVPN = true
        },
        closeGenerateKeysVPNModal: (state) => {
            state.isOpenGenerateKeysVPN = false
        },
    },
})

export const {
    openCreateUserModal,
    closeCreateUserModal,
    openDeleteUserModal,
    closeDeleteUserModal,
    openUpdateUserModal,
    closeUpdateUserModal,
    openResetRouterModal,
    closeResetRouterModal,
    openRebootRouterModal,
    closeRebootRouterModal,
    openSetWifi24SettingsModal,
    closeSetWifi24SettingsModal,
    openSetWifi5SettingsModal,
    closeSetWifi5SettingsModal,
    openSetLanSettingsModal,
    closeSetLanSettingsModal,
    openSetProviderSettingsModal,
    closeSetProviderSettingsModal,
    openAddWhiteIpModal,
    closeAddWhiteIpModal,
    openGetTaskItemModal,
    closeGetTaskItemModal,
    openGetEventItemModal,
    closeGetEventItemModal,
    openConnectServerModal,
    closeConnectServerModal,
    openDisconnectServerModal,
    closeDisconnectServerModal,
    openGenerateKeysVPNModal,
    closeGenerateKeysVPNModal
} = modals.actions

export default modals.reducer
