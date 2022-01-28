export enum GenresEnum {
    action = "action",
    comedy = "comedy",
    documentary = "documentary",
    drama = "drama",
    family = "family",
    thriller = "thriller",
    all = "all movies",
}

export interface IGenreResponseProps {
    id: number;
    name: GenresEnum;
}

export interface IMovieProps {
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
    genre_ids: string[];
}

export interface IState {
    menu: {
        activeMovieCard: number,
        isMenuActive: boolean,
        activeMenuIndex: number
    }
}
