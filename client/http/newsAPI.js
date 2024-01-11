import {$autoHost, $host} from "./index";


export const createNews = async (news) => {
    const {data} = await $autoHost.post('api/news', news)
    return data
}
export const fetchNews = async (page, limit) => {
    const {data} = await $host.get('api/news/get', {params: {page, limit
        }})
    return data
}
export const deleteOneNews = async (id, fileName) => {
    const {data} = await $autoHost.post('api/news/' + id, {fileName})
    return data
}

export const fetchOneNews = async (id, title) => {
    const {data} = await $host.get('api/news/one/' + title + '/' + id, id)
    return data
}
export const editOneNews = async (id, dataEdit) => {
    const {data} = await $autoHost.post('api/news/edit/' + id,{id, dataEdit})
    return data
}
export const editOneNewsIMG = async (id, file) => {
    const {data} = await $autoHost.post('api/news/editIMG/' + id, file)
    return data
}