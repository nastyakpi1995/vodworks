import {GenresEnum, IMovieProps} from "./interfaces";

export const formatDate = (date:string) => {
   const array = date.split('-');
    return array[0]
}

export const getGenderMovies = (movies: IMovieProps[]) => {
    let index:number = 0;

    return movies.reduce((acc: any, movie, movies) => {
        movie.genre_ids.forEach(genre => {
            const include = acc.some((el: {name: string}) => el.name === genre)


            if (!include) {
                const item = {
                    id: index,
                    name: genre
                }
                acc = [...acc, item]
                index++
            }
        })

        return acc
    }, [])
}


export const createPortalRoot = () => {
    const drawerRoot = document.createElement("div");
    drawerRoot.setAttribute("id", "drawer-root");

    return drawerRoot;
}

export const isCheckGenre = (array: string[], genre: GenresEnum) => array.some((el => el === genre))

export const getFilterMovies = (movies: IMovieProps[], activeMenuIndex: number, moviesGenre: any) => {

    return movies.reduce((acc: IMovieProps[], movie: IMovieProps) => {
        const movieGenre = movie.genre_ids
        const prepareGenre = isCheckGenre(movieGenre, GenresEnum.all) ? movieGenre : [...movieGenre, GenresEnum.all];

        if (isCheckGenre(prepareGenre, moviesGenre[activeMenuIndex].name)) {acc = [...acc, movie]}

        return acc
    }, [])
}

