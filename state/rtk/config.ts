import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const BASE_URL = 'http://192.168.1.253:8080/'

const headers = new Headers()
headers.set('Content-Type', 'application/json')
headers.set('Accept', '/')
headers.set('Cache-Control', 'no-cache')

export const fetchTimeout: RequestInit = {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: '{"path":"auth/timeout","args":{},"token":"DEBUG"}',
}

export const fetchStatus: RequestInit = {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: '{"path":"auth/status","args":{},"token":"DEBUG"}',
}

const fetchIndex: RequestInit = {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: '{"path":"main/index","args":{},"token":"DEBUG"}',
}
//используемые константы для настройки запросов

export const authFetch = async () => {
    return Promise.all([
        // fetch(`${BASE_URL}auth-timeout`, fetchTimeout),
        fetch(`${BASE_URL}auth-status`, fetchStatus),
        // fetch(`${BASE_URL}auth-index`, fetchIndex),
    ])
}

export const timeoutFetch = async () => {
    return Promise.all([
        fetch(`${BASE_URL}auth-timeout`, fetchTimeout),
        fetch(`${BASE_URL}auth-status`, fetchStatus),
    ])
}
// собранные промисы для вызова сразу нескольких предварительных запросов

export const fetchBaseAuth = () =>
    fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: async (headers) => {
            await authFetch()
            return headers
        },
        credentials: 'include',
    })

export const fetchBase = () =>
    fetchBaseQuery({
        baseUrl: BASE_URL,
        headers: headers,
        credentials: 'include',
    })
//константы с не вызванной функцией-настройкой, для ее передачи и вызове в запросах
