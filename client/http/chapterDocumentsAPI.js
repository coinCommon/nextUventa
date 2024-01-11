import {$autoHost, $host} from "./index";


export const createChapterDocuments = async (name) => {
    const {data} = await $autoHost.post('api/chapter-documents', {name})
    return data
}
export const fetchChapterDocuments = async (page, limit) => {
    const {data} = await $host.get('api/chapter-documents/get', {params: {page, limit
        }})
    return data
}
export const deleteOneChapterDocuments = async (id) => {
    const {data} = await $autoHost.post('api/chapter-documents/' + id, id)
    return data
}

export const fetchOneChapterDocuments = async (title, id) => {
    const {data} = await $host.get('api/chapter-documents/one/' + id, id)
    return data
}
export const editOneChapterDocuments = async (id, dataEdit) => {
    const {data} = await $autoHost.post('api/chapter-documents/edit/' + id,{id, dataEdit})
    return data
}