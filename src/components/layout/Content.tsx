import styled from "styled-components";
import {IMovieProps, IState} from "../../helpers/interfaces";
import MovieCard from "../common/MovieCard";
import {useSelector} from "react-redux";

interface IContentProps {
  movies: IMovieProps[];
  openDetailPopup: (movie: IMovieProps) => void;
}


const Content = ({ movies, openDetailPopup }: IContentProps) => {
    const {activeMovieCard, isMenuActive} = useSelector((state: IState) => state.menu)

  return (
    <Main>
      <MoviesList>
        {movies.map((movie, i) => (
          <MovieCard
            active={i === activeMovieCard && !isMenuActive}
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
