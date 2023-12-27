
import { useQuery } from "@tanstack/react-query";
import { Gamequery } from "../App";
import apiService, { FetchResponse } from "../services/api-service";
import apiClient from "../services/api-service";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;

}

const ApiClient = new apiClient<Games>('/games');


const useGames = (gameQuery: Gamequery) => {
    return useQuery<FetchResponse<Games>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => ApiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }),
    })
}

export default useGames;