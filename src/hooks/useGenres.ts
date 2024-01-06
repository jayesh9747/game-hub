import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-service";
import ms from 'ms';
import  Genre  from "../entities/Genre";
const Apiservices = new apiClient<Genre>('/genres');

const UseGenreList = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: Apiservices.getAll,
        staleTime: ms('24h'),
        initialData: genres
    });
}

export default UseGenreList;