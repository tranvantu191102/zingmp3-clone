import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_SEVER,
})



axiosClient.interceptors.response.use((response) => {
    return response.data.data
},
    function (error) {
        return Promise.reject(error)
    }
)

export default axiosClient