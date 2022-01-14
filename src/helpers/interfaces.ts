import {ButtonHTMLAttributes} from "react";

export enum GenresEnum {
    action = "action",
    comedy = "comedy",
    documentary = "documentary",
    drama = "drama",
    family = "family",
    thriller = "thriller",
    all = "all movies",
}

export interface GenreResponseProps {
    id: number;
    name: GenresEnum;
}

export interface MovieProps {
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
    genre_ids: string[];
}


