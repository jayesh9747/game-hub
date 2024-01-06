import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-service";
import { Screenshots } from "../entities/Screenshots";

const useScreenshots = (gameId: number) => {

    const ApiClient = new apiClient<Screenshots>(`/games/${gameId}/screenshots`)

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: ApiClient.getAll
    })
}

export default useScreenshots;