import React, {useEffect, useState} from 'react'
import {IGenreResponseProps, IMovieProps, IState} from "../../helpers/interfaces";
import {fetchMoviesDataRequest} from "../../helpers/apiCaller";
import SideBar from "./SideBar";
import Content from "./Content";
import MovieDetails from "./MovieDetails";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import useKey from "@rooks/use-key";
import {setActiveMenuIndex, setActiveMovieCard, setIsMenuActive} from "../../redux/reducers/menuReducer";
import { getFilterMovies, getGenderMovies} from '../../helpers/constants';

const Layout = () => {
    const [movies, setMovies] = useState<IMovieProps[]>([]);
    const [moviesGenre, setMoviesGenre] = useState<IGenreResponseProps[]>([]);
    const [moviesFilter, setMoviesFilter] = useState<IMovieProps[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentMovie, setCurrentMovie] = useState<IMovieProps | null>(null)

    const dispatch = useDispatch();
    const {activeMenuIndex, isMenuActive, activeMovieCard} = useSelector((state: IState) => state.menu)


    useKey('ArrowDown', (e) => {
        e.preventDefault()
        if (isOpen) return;
        if (isMenuActive) {
            if (activeMenuIndex === moviesGenre.length - 1) {
                dispatch(setActiveMenuIndex(0))
            } else {
                dispatch(setActiveMenuIndex(activeMenuIndex + 1))
            }
        } else {
            if (moviesFilter.length - 1 - activeMovieCard >= 5) {
                dispatch(setActiveMovieCard(activeMovieCard + 5))
            }
        }
    })
    useKey('ArrowUp', (e) => {
        e.preventDefault()
        if (isOpen) return;
        if (isMenuActive) {
            if (activeMenuIndex === 0) {
                dispatch(setActiveMenuIndex(moviesGenre.length - 1))
            } else {
                dispatch(setActiveMenuIndex(activeMenuIndex - 1))
            }
        } else {
            if (activeMovieCard >= 5) {
                dispatch(setActiveMovieCard(activeMovieCard - 5))
            }
        }
    })
    useKey('ArrowLeft', () => {
        if (isOpen) return;
        if (!isMenuActive && activeMovieCard === 0) {
            dispatch(setIsMenuActive(true))
        } else {
            dispatch(setActiveMovieCard(activeMovieCard - 1))
        }
    })
    useKey('ArrowRight', () => {
        if (isOpen) return;
        if (!moviesFilter.length) return;

        if (isMenuActive) {
            dispatch(setIsMenuActive(false))
            dispatch(setActiveMovieCard(0))
        } else {
            dispatch(setActiveMovieCard(activeMovieCard + 1))
        }
    })

    useKey('Enter', () => {
        if (isMenuActive) return;
        openDetailPopup(moviesFilter[activeMovieCard])
    })

    useKey('b', () => {
        setIsOpen(false)
    })

    const toggleClose = () => {
        setIsOpen((prevState => !prevState))
    }
    useEffect(() => {
        fetchMoviesDataRequest().then((response) => {
            setMovies(response.data);
            setMoviesGenre(getGenderMovies(response.data))
            setMoviesFilter(response.data);
        });
    }, []);

    useEffect(() => {
        const filterMovies = getFilterMovies(movies, activeMenuIndex, moviesGenre)

        setMoviesFilter(filterMovies)
    }, [activeMenuIndex])

    useEffect(() => {
        setCurrentMovie(currentMovie)
    }, [currentMovie])

    const openDetailPopup = (movie: IMovieProps) => {
        setCurrentMovie(movie)
        toggleClose()
    }

    const handleClickButton = (index: number) => {
        dispatch(setActiveMenuIndex(index))
    }

    return (
        <Container>
            <SideBar
                handleClickButton={handleClickButton}
                active={activeMenuIndex}
                moviesGenre={moviesGenre}
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