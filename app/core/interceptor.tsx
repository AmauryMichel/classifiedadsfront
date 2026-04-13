import axios from "axios"

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