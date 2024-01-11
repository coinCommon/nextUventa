import axios from "axios";

const $host = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL
})

const $autoHost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$autoHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $autoHost
}
















