import {$autoHost, $host} from "./index";


export const createTechnologies = async (technology) => {
    const {data} = await $autoHost.post('api/technology', technology)
    return data
}
export const fetchTechnologies = async (page, limit) => {
    const {data} = await $host.get('api/technology/get', {params: {page, limit
        }})
    return data
}
export const deleteOneTechnologies = async (id, fileName) => {
    const {data} = await $autoHost.post('api/technology/' + id, {fileName})
    return data
}
export const fetchOneTechnologies = async (title, id) => {
    const {data} = await $host.get('api/technology/one/' + title + '/' + id, id)
    return data
}
export const editOneTechnologies = async (id, dataEdit) => {
    const {data} = await $autoHost.post('api/technology/edit/' + id,{id, dataEdit})
    return data
}

export const editOneTechnologiesIMG = async (id, file) => {
    const {data} = await $autoHost.post('api/technology/editIMG/' + id, file)
    return data
}