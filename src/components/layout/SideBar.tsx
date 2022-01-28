import { useEffect, useState } from "react";

import styled from "styled-components";
import {IGenreResponseProps, IState} from "../../helpers/interfaces";
import NavButton from "../common/NavButton";
import {useSelector} from "react-redux";

interface ISidebarProps {
    active: number;
    handleClickButton: (i: number) => void;
    moviesGenre: IGenreResponseProps[]
}
const SideBar = ({ active, handleClickButton, moviesGenre }: ISidebarProps) => {

    const {isMenuActive} = useSelector((state: IState) => state.menu)


  return (
    <SSidebar>
      <Span>
        filmer
      </Span>

      <ButtonsContainer>
        {moviesGenre.map((genre, i) => (
          <NavButton
            key={String(genre.id)}
            iconName={genre.name}
            onClick={() => handleClickButton(i)}
            selected={i === active && isMenuActive}
            selectMemo={i === active && !isMenuActive}
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
