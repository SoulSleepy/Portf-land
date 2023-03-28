import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

// создается 1 раз!
export const instance = axios.create({
    baseURL: 'http://путь к роутеру/',
})

// создается каждый раз! до начала запроса
instance.interceptors.request.use((config) => {
    console.log('config', config)
    // const tokenData = JSON.parse(localStorage.getItem('accessToken') || '[]')
    // if (tokenData) {
    //     config.headers.set('Authorization', `Basic ${btoa(tokenData.token + ':')}`)
    // }
    return config
})

// после выполнения запроса неважно с ошибкой или нет 
instance.interceptors.response.use(
    (response) => response,
    async (err: AxiosError) => {
        console.log('config', err.config)
        // if (err.response?.status === 401) {
        //     // повторный запрос на обновленеи токена
        //     const body = {
        //         token: localStorage.getItem('refrechToken'),
        //     }
        //     const { data } = (await axios
        //         .post('http://наш роутер/refreshToken', body)
        //         .catch((e) => (window.location.href = '/login'))) as any
        //     localStorage.setItem('accessToken', data.token)
        //     const config = err.config as InternalAxiosRequestConfig<any>
        //     config.headers.set('Authorization', `Basic btoa ${data.token} :`)
        //     return instance.request(config)
        // }
        console.log('err', err)
    }
)

// получили дату из формы
// отправили запрос с логином и паролем без токена для авторизации
// получили ответ с 2мя токенами и записали их в локал сторейдж
// отправили автоматически 2ой запрос с аутентификацей с ассетс токеном
// если ассетс токен протух пришла ошибка 401
// происходит автоматический запрос с рефреш токеном
//  получаем ответ с ассетс токеном для обновления ассетс токена
// записывается обновленый ассетс токен
// если протух ревреш токен выкидывает на страницу логина
