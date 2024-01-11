import {$autoHost, $host} from "./index";

export const createServices = async (service) => {
    const {data} = await $autoHost.post('api/service', service)
    return data
}
export const fetchServices = async (page, limit) => {
    const {data} = await $host.get('api/service/get', {params: {page, limit
        }})
    return data
}
export const deleteOneServices = async (id, fileName) => {
    const {data} = await $autoHost.post('api/service/' + id,{fileName})
    return data
}

export const fetchOneServices = async (id, title) => {
    const {data} = await $host.get('api/service/one/' + title + '/' + id, id)
    return data
}
export const editOneServices = async (id, dataEdit) => {
    const {data} = await $autoHost.post('api/service/edit/' + id,{id, dataEdit})
    return data
}



export const editOneServicesIMG = async (id, file) => {
    const {data} = await $autoHost.post('api/service/editIMG/' + id, file)
    return data
}