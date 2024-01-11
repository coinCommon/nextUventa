import {$autoHost} from "./index";


export const createSitemap = async (object) => {
    const {data} = await $autoHost.post('api/other/sitemap', {object})
    return data
}
export const createTokens = async (access, refresh) => {
    const {data} = await $autoHost.post('api/other/token', {access, refresh})
    return data
}


export const fetchAmoCRMToken = async (token) => {
    const {data} = await $autoHost.post('api/other/amo_crm_token', {token})
    return data
}
export const fetchAmoCRMData = async (message, type) => {
    const {data} = await $autoHost.post('api/other/amo_crm_data', {message, type})
    return data
}
export const sendTelegram = async (message, type) => {
    const {data} = await $autoHost.post('api/other/telegram', {message, type})
    return data
}