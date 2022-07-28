import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : "http://localhost:4545/"
    // baseURL : "https://api-siamsuits.herokuapp.com/"
})