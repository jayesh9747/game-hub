import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-service";
import { Trailer } from "../entities/Trailer";


const useTrailer = (gameId: number) => {

    const ApiClient = new apiClient<Trailer>(`/games/${gameId}/movies`);

    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: ApiClient.getAll
    })

};

export default useTrailer;