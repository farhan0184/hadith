import axios from "axios";

export const api =  axios.create({baseURL: 'http://localhost:5000'})
api.interceptors.request.use((request)=>{
    request.headers.Authorization=`bearer ${localStorage.getItem('_auth')}`
    return request
})