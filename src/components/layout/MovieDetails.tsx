import styled from "styled-components";
import React from "react";
import Drawer from "./Drawer";
import {formatDate} from "../../helpers/constants";
import Button from "../common/Button";
import {Play, PlusSquare} from "react-feather";
import {MovieProps} from "../../helpers/interfaces";

interface IMovieDetailsInner {
    isOpen: boolean;
    onClose: () => void;
    movie: MovieProps
}
const MovieDetailsInner = ({ movie, isOpen, onClose }: IMovieDetailsInner) => {
    const {poster_path, title, overview, release_date, genre_ids} = movie

    return (
        <div>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
            >
                <DrawerContent>
                    <div>
                        <Img
                            src={poster_path}
                            alt={title}
                        />
                        <Buttons>
                            <Button text={'Play'} isOrange={true}><Play /></Button>
                            <Button text={'Wish List'}><PlusSquare /></Button>
                        </Buttons>
                    </div>

                    <Information>
                        <Title>{title} ({formatDate(release_date)})</Title>
                        <Genres>
                            {genre_ids.map(el => (
                                <Genre>{el}</Genre>
                            ))}
                        </Genres>
                        <Overview>{overview}</Overview>
                    </Information>

                </DrawerContent>
            </Drawer>
        </div>
    );
}


const DrawerContent = styled.div`
  display: flex;
  padding: 30px;
`
const Img = styled.img`
  height: 500px;
  width: auto;
`

const Information = styled.div`
    color: var(--gray);
  
  padding-left: 50px;
  padding-right: 50px;
`
const Title = styled.div`
    margin-bottom: 30px;
  font-size: 22px;
`
const Overview = styled.div`
  font-size: 20px;
`
const Buttons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`
const Genres = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const Genre = styled.div`
  border-bottom: 1px solid var(--background-button2);
  padding-bottom: 10px;
  padding-right: 20px;
  font-size: 17px;
  text-transform: capitalize;
  
`
const MovieDetails = React.memo(MovieDetailsInner)

export default MovieDetails
