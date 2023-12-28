import { FetchResponse } from "../services/api-service";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platfroms";
import apiClient from "../services/api-service";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const ApiClient = new apiClient<Platform>('/platforms/lists/parents');


const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: ApiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: platforms.length, results: platforms }
    });
}

export default usePlatforms;