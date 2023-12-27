import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-service";

import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const fetchGenre = () => apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then((res) => res.data);

const UseGenreList = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenre,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genres.length, results: genres }
    });
}

export default UseGenreList;