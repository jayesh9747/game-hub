import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import Games from "../entities/Games";
import apiClient, { FetchResponse } from "../services/api-service";
import UseGameQueryStore from "../store/useGamestore";

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