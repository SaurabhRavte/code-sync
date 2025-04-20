import axios, { AxiosInstance } from "axios"

const pistonBaseUrl = "https://code-sync-0xrz.onrender.com"

const instance: AxiosInstance = axios.create({
    baseURL: pistonBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
