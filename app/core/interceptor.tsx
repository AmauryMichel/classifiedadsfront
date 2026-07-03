import axios from "axios"
import { toast } from "react-toastify";

export const axiosInterceptor = axios.create()

// Adding JWT to requests
axiosInterceptor.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    
    return config
  }
)

// Handling errors
axiosInterceptor.interceptors.response.use(
  res => {
    return res
  },
  error => {
    toast.error(error.response.data.detail)
    return Promise.reject(error);
  }
)