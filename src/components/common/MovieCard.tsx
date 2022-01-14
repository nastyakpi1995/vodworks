import { Clock } from 'react-feather';

import styled from "styled-components";
import {IMovieProps} from '../../helpers/interfaces';
import {useEffect, useRef} from "react";

export interface IMovieCardProps {
    movie: IMovieProps;
    openDetailPopup: () => void;
    active: boolean;
}

const MovieCard = (props: IMovieCardProps) => {
    const {openDetailPopup, active, movie: {poster_path, title, release_date}} = props

    const ref = useRef<HTMLDivElement | any>()

    useEffect(() => {
        if (active) {
            if (!ref.current) return;
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest'
            })
        }
    }, [active])

    const onClick = () => {
        openDetailPopup()
    }

  return (
    <Container onClick={onClick} active={active} ref={ref}>
      <Img
        src={poster_path}
        alt={title}
      />
      <Wrap>
        <MovieInfo>
          <Span>{title}</Span>
          <Meta>
            <MetaItem>
              <Clock /> {release_date}
            </MetaItem>
          </Meta>
        </MovieInfo>
      </Wrap>
    </Container>
  )
}

const Container = styled.div<{ active: boolean }>`
  margin: 5px 5px;
  position: relative;
  cursor: pointer;
  border: 2px solid ${({active}) => active ? 'orange' : 'transparent'}
`
const Img = styled.img`
  width: 228.96px;
  height: 340px;
`
const Wrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;

  background: rgba(31, 34, 41, 0.5);
`

const MovieInfo = styled.div`
  max-width: 196.96px;
  width: 100%;

  display: flex;
  flex-direction: column;
`
const Span = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #fbfbfb;

  margin-top: auto;
  margin-bottom: 8px;
`
const Meta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 16px;
`
const MetaItem = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  color: var(--gray);
 
  & svg {
    color: #fae800;
    margin-right: 8px;
  }
`
export default MovieCard
