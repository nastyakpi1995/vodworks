import React, {useContext, useEffect, useState} from 'react'
import {GenresEnum, MovieProps} from "../../helpers/interfaces";
import {fetchMoviesDataRequest} from "../../helpers/apiCaller";
import SideBar from "./SideBar";
import Content from "./Content";
import MovieDetails from "./MovieDetails";
import styled from "styled-components";
import useKey from "../../hooks/useKey";
import {genresDataExample} from "../../helpers/exampleDatas";

const Layout = () => {
    const [selectedGenreName, setSelectedGenreName] = useState(GenresEnum.action);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [moviesFilter, setMoviesFilter] = useState<MovieProps[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentMovie, setCurrentMovie] = useState<MovieProps | null>(null)

    const [activeMenuIndex, setActiveMenuIndex] = useState(0)
    const [isMenuActive, setIsMenuActive] = useState(true)

    useKey('ArrowDown', () => {
        if (activeMenuIndex !== genresDataExample.length - 1) {
            setActiveMenuIndex(prev => prev + 1)
        }
    })
    useKey('ArrowUp', () => {
        if (activeMenuIndex !== 0) {
            setActiveMenuIndex(prev => prev - 1)
        }
        console.log('up')
    })

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
    const isCheckGenre = (array: string[], genre: GenresEnum) => array.some((el => el === genre))

    const handleClickButton = (name: GenresEnum) => {
        setSelectedGenreName(name);
    }

    return (
        <Container>
            <SideBar
                handleClickButton={handleClickButton}
                active={activeMenuIndex}
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

export default Layout;
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