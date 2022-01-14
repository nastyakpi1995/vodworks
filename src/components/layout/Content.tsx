import styled from "styled-components";
import {MovieProps} from "../../helpers/interfaces";
import MovieCard from "../common/MovieCard";

interface ContentProps {
  movies: MovieProps[];
  openDetailPopup: (movie: MovieProps) => void;
}

const Content = ({ movies, openDetailPopup }: ContentProps) => {
  return (
    <Main>
      <MoviesList>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            openDetailPopup={() => openDetailPopup(movie)}
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
