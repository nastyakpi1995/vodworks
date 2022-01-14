import styled from "styled-components";
import {MovieProps} from "../helpers/interfaces";
import MovieCard from "./MovieCard";

interface ContentProps {
  movies: MovieProps[]
}

const Content = ({ movies }: ContentProps) => {
  return (
    <Main>
      <MoviesList>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
          />
        ))}
      </MoviesList>
    </Main>
  );
}
const Main = styled.main`
  width: 100%;
  margin-top: 90px;
`

const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`
export default Content
