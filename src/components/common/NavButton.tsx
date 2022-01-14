import styled from "styled-components";
import Icon from '../other/Icon';
import {GenresEnum} from "../../helpers/interfaces";

interface ButtonProps {
    iconName: GenresEnum;
    selected: boolean;
    onClick: () => void;
}
const NavButton = ({ iconName, selected, onClick }: ButtonProps) => {
  return (
    <SButton type="button" {...(selected && { className: 'selected' })} onClick={onClick}>
      <ButtonContent>
        <Icon name={iconName} selected={selected} />
        <Title>
          {iconName}
        </Title>
      </ButtonContent>
      <Icon selected={selected} />
    </SButton>
  );
}

const SButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 320px;
  width: 100%;
  border: 1px solid var(--background);
  background: var(----transparent);
  padding: 20px 15px;
  border-radius: 10px;
  font-size: 20px;
  color: var(--background-button2);
  transition: background 200ms;

  &:hover {
    border: 1px solid var(--orange);
  }
  & + button {
    border: 1px solid var(--background);
    margin-top: 4px;
  }

  &:first-child {
    margin-top: 0;
  }

  &.selected {
    border: 1px solid;
    color: var(--orange);
  }
`
const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
`
const Title = styled.div`
  margin-left: 12px;
  text-transform: capitalize;
`

export default NavButton
