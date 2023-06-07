import { translateObjRu, translateObjEn } from './consts'

export const toDate = (time: number) => {
    return new Date(time * 1000).toLocaleString('ru-RU', {
        timeStyle: 'short',
        dateStyle: 'short',
    })
}

export const toUnix = (date: string) => {
    return parseInt((new Date(date).getTime() / 1000).toFixed(0))
}

export const getNoun = (
    number: number,
    one: string,
    two: string,
    five: string
) => {
    let n = Math.abs(number)
    n %= 100
    if (n >= 5 && n <= 20) {
        return five
    }
    n %= 10
    if (n === 1) {
        return one
    }
    if (n >= 2 && n <= 4) {
        return two
    }
    return five
}

export const toCVSS3 = (item: string, locale: string) => {
    const itemArr = item.split('/').map((elem) => {
        const typeAndValue = elem.split(':')
        const type = typeAndValue[0]
        const value = typeAndValue[1]
        if (locale === 'ru') {
            const bm = translateObjRu[type]
            if (!bm) return `Нет данных о типе ${type} и значение ${value}`
            return `${bm.title} ${
                bm[value] ? bm[value] : `Нет данных о значение ${value}`
            }`
        } else {
            const bm = translateObjEn[type]
            if (!bm) return `No data on type ${type} and value ${value}`
            return `${bm.title} ${
                bm[value] ? bm[value] : `No value data ${value}`
            }`
        }
    })
    return itemArr
}
