import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiService, { FetchResponse } from "../services/api-service";
import apiClient from "../services/api-service";
import ms from 'ms';
import UseGameQueryStore from "../store/useGamestore";
import { Games } from "../entities/Games";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

const ApiClient = new apiClient<Games>('/games');


const useGames = () => {
    const gameQuery = UseGameQueryStore((s) => s.gameQuery);
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
        staleTime: ms('24h'),
    })
}

export default useGames;