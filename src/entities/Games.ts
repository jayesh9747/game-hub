import { Platform } from "../hooks/useGames";
import Genre from "./Genre";
import Publishers from "./Publishers";


export default interface Games {
    id: number;
    slug: string;
    name: string;
    genres: Genre[];
    Publishers: Publishers[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;

}
