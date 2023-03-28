import { instance } from "./api"

export const fetchLogoutUser = async (tokenId: number) => {
    const response = instance.delete(`ручка для удаления токена/${tokenId}`)
    const { data } = await response
    return data
}