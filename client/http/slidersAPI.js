import {$autoHost, $host} from "./index";


export const createSliders = async (slider) => {
    const {data} = await $autoHost.post('api/slider', slider)
    return data
}
export const fetchSliders = async (page, limit) => {
    const {data} = await $host.get('api/slider/get', {params: {page, limit
        }})
    return data
}
export const deleteOneSliders = async (id, fileName) => {
    const {data} = await $autoHost.post('api/slider/' + id, {fileName})
    return data
}

export const fetchOneSliders = async (title, id) => {
    const {data} = await $autoHost.get('api/slider/one/' + id, id)
    return data
}
export const editOneSliders = async (id, dataEdit) => {
    const {data} = await $autoHost.post('api/slider/edit/' + id,{id, dataEdit})
    return data
}
export const editOneSlidersIMG = async (id, file) => {
    const {data} = await $autoHost.post('api/slider/editIMG/' + id, file)
    return data
}

// // preview картики
// function previewFile(file) {
//     let reader = new FileReader()
//     if (file && file.type.match('image.*')) {
//         reader.readAsDataURL(file)
//         reader.onloadend = function() {
//             setFilePreview(reader.result)
//         }
//     }
//     else {
//         setFilePreview(null)
//     }
// }
// function previewFileIcon(fileIcon) {
//     let reader = new FileReader()
//     if (fileIcon && fileIcon.type.match('image.*')) {
//         reader.readAsDataURL(fileIcon)
//         reader.onloadend = function() {
//             setFilePreviewIcon(reader.result)
//         }
//     }
//     else {
//         setFilePreviewIcon(null)
//     }
// }