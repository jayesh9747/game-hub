import axios, { Axios, AxiosRequestConfig } from 'axios';


export interface FetchResponse<T> {
    count: number;
    next?: string | null;
    results: T[];
}


const AxiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4b15f191431b4ca290439f94a6468007'
    }
})

class apiClient<T>{
    endPoint: string;

    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return AxiosInstance
            .get<FetchResponse<T>>(this.endPoint, config)
            .then((res) => res.data);
    }

    get = (id: number | string) => {
        return AxiosInstance.get<T>(this.endPoint + '/' + id)
            .then(res => res.data);
    }
}

export default apiClient;