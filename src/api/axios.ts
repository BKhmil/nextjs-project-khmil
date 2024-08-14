// import axios, {AxiosInstance, CreateAxiosDefaults} from "axios";
// import {API_BASE_URL} from "@/constants/urls";
//
// const axiosOptions: CreateAxiosDefaults = {
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
//
// const axiosInstance: AxiosInstance = axios.create(axiosOptions);
//
// axiosInstance.interceptors.request.use(config => {
//     config.headers.Authorization = 'Bearer ' + process.env.TMDB_API_TOKEN;
//
//     return config;
// });
//
// const fetchWithAxios = async (url: string, init: RequestInit)=> {
//     const axiosConfig = axiosInstance.getUri();
//
//     const res = await fetch(axiosConfig, init);
//
//     return await res.json();
// }
//
// export {
//     fetchWithAxios
// }