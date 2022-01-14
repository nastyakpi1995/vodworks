import axios from "axios";
import { IMovieProps } from "./interfaces";

export const api = axios.create({
   baseURL: 'https://raw.githubusercontent.com/bdiadiun/technical-assignments',
});

export const fetchMoviesDataRequest = async () => {
    return api
     .get<IMovieProps[]>(`/main/movieDataCollection.json`)
     .then((response) => response).catch(error => {
         const prepareProps = {
             data: [],
             error
         }
           console.log(error)
           return prepareProps
       });
}

