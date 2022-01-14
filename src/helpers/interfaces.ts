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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    iconName: GenresEnum;
    selected: boolean;
}
export interface SidebarProps {
    selectedGenreName: GenresEnum;
    handleClickButton: (name: GenresEnum) => void;
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

export interface MovieCardProps {
    movie: {
        title: string;
        poster_path: string;
        overview: string;
        release_date: string;
    }
}
