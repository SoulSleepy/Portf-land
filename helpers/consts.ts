export const channels5 = [
    '34',
    '36',
    '38',
    '40',
    '42',
    '44',
    '46',
    '48',
    '50',
    '52',
    '54',
    '56',
    '58',
    '60',
    '62',
    '64',
    '100',
    '104',
    '108',
    '112',
    '116',
    '120',
    '124',
    '128',
    '132',
    '136',
    '140',
    '147',
    '149',
    '150',
    '152',
    '153',
    '155',
    '157',
    '159',
    '160',
    '161',
    '163',
    '165',
    '167',
    '171',
    '173',
    '177',
    '180',
]

export const widthChannel5 = [
    { name: '20 Mhz', value: '20' },
    { name: '40 Mhz', value: '40' },
    { name: '80 Mhz', value: '80' },
]

export const channels24 = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
]

export const widthChannel24 = [
    { name: '20 Mhz', value: '20' },
    { name: '40 Mhz', value: '40' },
]

export const dangerLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const providerOptions = [
    { name: 'DHCP client', value: 'dhcp' },
    { name: 'Unmanaged', value: 'um' },
    { name: 'PPPoE', value: 'pppoe' },
    { name: 'Static address', value: 'static' },
]



export const timeOptions = [
    { name: '6:00 - 7:00', value: '6,7' },
    { name: '12:00 - 13:00', value: '12,13' },
    { name: '18:00 - 19:00', value: '18,19' },
    { name: '00:00 - 01:00', value: '0,1' },
]

export const translateObjRu: any = {
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
    Au: {
        title: 'Аутентификация (Au):',
        M: 'Множественная (M)',
        S: 'Единственная (S)',
        N: 'Не требуется (N)',
    },
}

export const translateObjEn: any = {
    AV: {
        title: 'Attack Vector (AV):',
        N: 'Network (N)',
        A: 'Adjacent Network (A)',
        L: 'Local (L)',
        P: 'Physical (P)',
    },
    AC: {
        title: 'Attack Complexity (AC):',
        H: 'High (H)',
        L: 'Low (L)',
        M: 'Medium (M)',
    },
    PR: {
        title: 'Privileges Required (PR):',
        H: 'High (H)',
        L: 'Low (L)',
        N: 'None (N)',
    },
    UI: {
        title: 'User Interaction (UI):',
        R: 'Required (R)',
        N: 'None (N)',
    },
    S: {
        title: 'Scope (S):',
        U: 'Unchanged (U)',
        C: 'Changed (C)',
    },
    C: {
        title: 'Confidentiality Impact (С):',
        N: 'None (N)',
        L: 'Low (L)',
        H: 'High (H)',
        P: 'Partial (P)',
        C: 'Complete (C)',
    },
    I: {
        title: 'Integrity Impact (I):',
        N: 'None (N)',
        L: 'Low (L)',
        H: 'High (H)',
        P: 'Partial (P)',
        C: 'Complete (C)',
    },
    A: {
        title: 'Availability Impact (A):',
        N: 'None (N)',
        L: 'Low (L)',
        H: 'High (H)',
        P: 'Partial (P)',
        C: 'Complete (C)',
    },
    Au: {
        title: 'Authentication (Au):',
        M: 'Multiple (M)',
        S: 'Single (S)',
        N: 'None (N)',
    },
}
