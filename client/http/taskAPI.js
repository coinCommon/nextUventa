import {$autoHost, $host} from "./index";

export const createTask = async (userId, topic, message, status) => {
    const {data} = await $autoHost.post('api/task', {userId, topic, message, status})
    return data
}
export const fetchTask = async (page, limit) => {
    const {data} = await $host.get('api/task/get', {params: {page, limit
        }})
    return data
}
export const deleteOneTask = async (id) => {
    const {data} = await $autoHost.post('api/task/' + id, id)
    return data
}
export const fetchOneTask = async (id) => {
    const {data} = await $host.get('api/task/one/' + id, id)
    return data
}





