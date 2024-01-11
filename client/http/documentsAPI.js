import {$autoHost, $host} from "./index";


export const createDocuments = async (documents) => {
    const {data} = await $autoHost.post('api/documents', documents)
    return data
}
export const fetchDocuments = async (page, limit) => {
    const {data} = await $host.get('api/documents/get', {params: {page, limit
        }})
    return data
}
export const deleteOneDocuments = async (id, fileName) => {
    const {data} = await $autoHost.post('api/documents/' + id, {fileName})
    return data
}

export const fetchOneDocuments = async (title, id) => {
    const {data} = await $host.get('api/documents/one/' + id, id)
    return data
}
export const editOneDocuments = async (id, dataEdit) => {
    const {data} = await $autoHost.post('api/documents/edit/' + id,{id, dataEdit})
    return data
}