
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
    return useInfiniteQuery<FetchResponse<Games>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => ApiClient.getAll({
            params: {
                genres: gameQuery.genreID,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastpage, allpages) => {
            return lastpage.next ? allpages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000,

    })
}

export default useGames;