import React, { useEffect } from 'react';
import {useState} from "react";
import styled from "styled-components";
import SideBar from './components/layout/SideBar';
import Content from './components/layout/Content';
import {GenresEnum, MovieProps} from "./helpers/interfaces";
import {fetchMoviesDataRequest} from "./helpers/apiCaller";
import MovieDetails from "./components/layout/MovieDetails";

const App = () => {
    const [selectedGenreName, setSelectedGenreName] = useState(GenresEnum.action);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [moviesFilter, setMoviesFilter] = useState<MovieProps[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentMovie, setCurrentMovie] = useState<MovieProps | null>(null)

    const toggleClose = () => {
      setIsOpen((prevState => !prevState))
    }
    useEffect(() => {
        fetchMoviesDataRequest().then((response) => {
            setMovies(response.data);
            setMoviesFilter(response.data);
        });
    }, []);

    useEffect(() => {
        const filterMovies = movies.reduce((acc: MovieProps[], movie: MovieProps) => {
            const movieGenre = movie.genre_ids
            const prepareGenre = isCheckGenre(movieGenre, GenresEnum.all) ? movieGenre : [...movieGenre, GenresEnum.all];
            if (isCheckGenre(prepareGenre, selectedGenreName)) {acc = [...acc, movie]}
            return acc
        }, [])
        setMoviesFilter(filterMovies)
    }, [selectedGenreName])

    useEffect(() => {
        setCurrentMovie(currentMovie)
    }, [currentMovie])

    const openDetailPopup = (movie: MovieProps) => {
        setCurrentMovie(movie)
        toggleClose()
    }
    const isCheckGenre = (array: string[], genre: GenresEnum) => {
        return array.some((el => el === genre))
    }
    const handleClickButton = (name: GenresEnum) => {
        setSelectedGenreName(name);
    }

    return (
      <Container>
          <SideBar
              handleClickButton={handleClickButton}
              selectedGenreName={selectedGenreName}
          />
          <WrapContent>
              <Content movies={moviesFilter} openDetailPopup={openDetailPopup} />
              {currentMovie ? (
                  <MovieDetails isOpen={isOpen} onClose={toggleClose} movie={currentMovie} />
              ) : null}
          </WrapContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1940px;
  margin: 0 auto;
`
const WrapContent = styled.div`
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
`

export default App;
