import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platfroms";
import ms from 'ms';
import apiClient from "../services/api-service";
import Platform from "../entities/Platform";
const ApiClient = new apiClient<Platform>('/platforms/lists/parents');


const usePlatfroms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: ApiClient.getAll,
        staleTime: ms('24h'),
        initialData: platforms
    });
}

export default usePlatfroms;