import { instance } from "./api"

export const fetchUser = async (body: FormData) => {
    const response = instance.post(`ручка для токена`, body)
    const { data }  = await response
    return data
}

