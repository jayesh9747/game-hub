import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-service";
import { Games } from "./useGames";

const ApiClient = new apiClient<Games>('/games');

const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => ApiClient.get(slug)
})

export default useGame;