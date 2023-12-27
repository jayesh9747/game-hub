import axios, { Axios, AxiosRequestConfig } from 'axios';


export interface FetchResponse<T> {
    count: number;
    results: T[];
}

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api',
//     params: {
//         key: '4b15f191431b4ca290439f94a6468007'
//     }
// });

const AxiosInstace = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4b15f191431b4ca290439f94a6468007'
    }
})

class apiClient<T> {
    endPoint: string;

    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    getAll = (config : AxiosRequestConfig) => {
        return AxiosInstace
            .get<FetchResponse<T>>(this.endPoint , config)
            .then((res) => res.data);
    }

    makePost = (data: T) => {
        return AxiosInstace
            .post(this.endPoint, data)
            .then((res) => res.data)
    }
}

export default apiClient;