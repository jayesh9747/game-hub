import apiClient, { FetchResponse } from "../services/api-service";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platfroms";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}


const fetchPlatfrom = () => apiClient
    .get<FetchResponse<Platform>>('/platforms/lists/parents')
    .then((res) => res.data);

const usePlatfroms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: fetchPlatfrom,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: platforms.length, results: platforms }
    });
}

export default usePlatfroms;