import { useEffect, useState } from "react";

import styled from "styled-components";
import { genresDataExample } from "../../helpers/exampleDatas";
import {GenreResponseProps, GenresEnum} from "../../helpers/interfaces";
import NavButton from "../common/NavButton";

interface SidebarProps {
    active: number;
    handleClickButton: (name: GenresEnum) => void;
}
const SideBar = ({ active, handleClickButton }: SidebarProps) => {
  const [filmGenres, setFilmGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
      setFilmGenres(genresDataExample)
  }, [active]);

  return (
    <SSidebar>
      <Span>
        filmer
      </Span>

      <ButtonsContainer>
        {filmGenres.map((genre, i) => (
          <NavButton
            key={String(genre.id)}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.name)}
            selected={i === active}
          />
        ))}
      </ButtonsContainer>
    </SSidebar>
  );
}

const SSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 384px;
  width: 100%;
  padding: 32px;
`

const Span = styled.span`
  color: var(--white);
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 60px;
  text-decoration: underline;
  text-transform: uppercase;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`
export default SideBar
