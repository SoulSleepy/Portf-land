export const toDate = (time: number) => {
    return new Date(time * 1000).toLocaleString('ru-RU', {
        timeStyle: 'short',
        dateStyle: 'short',
    })
}

export const toUnix = (date: string) => {
    return parseInt((new Date(date).getTime() / 1000).toFixed(0))
}