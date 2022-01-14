import styled from "styled-components";
import Icon from '../other/Icon';
import {GenresEnum} from "../../helpers/interfaces";

interface IButtonProps {
    iconName: GenresEnum;
    selected: boolean;
    onClick: () => void;
    selectMemo: boolean;
}
const NavButton = ({ iconName, selected, onClick, selectMemo }: IButtonProps) => {
  return (
    <SButton type="button" {...(selected && { className: 'selected' })} onClick={onClick} selectMemo={selectMemo}>
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

const SButton = styled.button<{ selectMemo: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 320px;
  width: 100%;
  border: 1px solid var(--background);
  background: ${props => props.selectMemo ? 'var(--blue)' : 'var(----transparent)'};
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
