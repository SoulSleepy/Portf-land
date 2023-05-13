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

const translateObj: any = {
    AV: {
        title: 'Вектор атаки (AV):',
        N: 'Сетевой (N)',
        A: 'Смежная сеть (A)',
        L: 'Локальный (L)',
        P: 'Физический (P)',
    },
    AC: {
        title: 'Сложность атаки (AC):',
        H: 'Высокая (H)',
        L: 'Низкая (L)',
        M: 'Средняя (M)',
    },
    PR: {
        title: 'Уровень привилегий (PR):',
        H: 'Высокая (H)',
        L: 'Низкая (L)',
        N: 'Не требуется (N)',
    },
    UI: {
        title: 'Взаимодействие с пользователем (UI):',
        R: 'Требуется (R)',
        N: 'Не требуется (N)',
    },
    S: {
        title: 'Влияние на другие компоненты системы (S):',
        U: 'Не оказывает (U)',
        C: 'Оказывает (C)',
    },
    C: {
        title: 'Влияние на конфиденциальность (С):',
        N: 'Не оказывает (N)',
        L: 'Низкие (L)',
        H: 'Высокая (H)',
        P: 'Частичное (P)',
        C: 'Полное (С)',
    },
    I: {
        title: 'Влияние на целостность (I):',
        N: 'Не оказывает (N)',
        L: 'Низкие (L)',
        H: 'Высокая (H)',
        P: 'Частичное (P)',
        C: 'Полное (С)',
    },
    A: {
        title: 'Влияние на доступность (A):',
        N: 'Не оказывает (N)',
        L: 'Низкие (L)',
        H: 'Высокая (H)',
        P: 'Частичное (P)',
        C: 'Полное (С)',
    },
    AU: {
        title: 'Аутентификация (Au):',
        M: 'Множественная (M)',
        S: 'Единственная (S)',
        N: 'Не требуется (N)',
    },
}

export const toCVSS3 = (item: string) => {
    const itemArr = item.split('/').map((elem) => {
        const typeAndValue = elem.split(':')
        const type = typeAndValue[0];
        const value = typeAndValue[1];
        const bm = translateObj[typeAndValue[0]]
        if(!bm) return `Нет данных о типе ${type} и значение ${value}`;
        return `${bm.title} ${
            bm[value] ? bm[value] : `Нет данных о значение ${value}`
        }`
    })
    return itemArr
}

toCVSS3('AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H')
