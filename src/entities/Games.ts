import { Platform } from "../hooks/useGames";


export interface Games {
    id: number;
    slug: string;
    name: string;
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;

}
