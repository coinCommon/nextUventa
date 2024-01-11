import axios from "axios";

export async function downloadFile(fileName) {
    const response = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_URL + 'api/documents/download/' + fileName)

        if (response.status === 200) {
                let blob = await response.blob()
                const downloadUrl = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = downloadUrl
                link.download = fileName
                document.body.appendChild(link)
                link.click()
                link.remove()
        }

}
export async function fetchWeather(lat, lon) {

    let apiKey = "178cbd1ba04b1f71d7928ae9f060bcaa";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${apiKey}`;
    try {
        let data = []
        const response = await axios.get(url).then(res => {
            if (res.status === 200) {
                data = res.data
            }
            else {
                data = 'error'
            }
        })
        return data;
    } catch (e) {
        return null
    }

}
