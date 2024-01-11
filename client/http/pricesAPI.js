import {$autoHost, $host} from "./index";


export const createPrices = async (title, description, price) => {
    const {data} = await $autoHost.post('api/price', {title, description, price})
    return data
}
export const fetchPrices = async (page, limit) => {
    const {data} = await $host.get('api/price/get', {params: {page, limit
        }})
    return data
}
export const deleteOnePrices = async (id) => {
    const {data} = await $autoHost.post('api/price/' + id, id)
    return data
}


export const fetchOnePrices = async (title, id) => {
    const {data} = await $host.get('api/price/one/' + id, id)
    return data
}
export const editOnePrices = async (id, dataEdit) => {
    const {data} = await $autoHost.post('api/price/edit/' + id,{id, dataEdit})
    return data
}