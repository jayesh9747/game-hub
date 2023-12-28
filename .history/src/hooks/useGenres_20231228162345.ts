import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-service";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const Apiservices = new apiClient<Genre>('/genres');

const UseGenreList = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: Apiservices.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: 
    });


export default UseGenreList;