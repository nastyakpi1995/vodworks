import styled from "styled-components";
import {ReactChild} from "react";

interface IPlayButtonProps {
    text: string,
    isOrange?: boolean,
    children: ReactChild
}
const Button = ({text, isOrange, children}: IPlayButtonProps) => {
    return (
        <SButton isOrange={isOrange} type="button">
            {children}
            <Text>
                {text}
            </Text>
        </SButton>
    );
}

const SButton = styled.button<{isOrange?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 320px;
  border: 1px solid var(--background);
  background: ${(props) =>{
      if (props.isOrange) {
          return 'var(--orange)'
      } else {
          return 'var(--gray)'
      }
  }};
  padding: 17px 39px;
  border-radius: 10px;
  font-size: 17px;
  color: var(--background-button2);
  transition: background 200ms;

  &:hover {
    border: 1px solid var(--orange);
  }
`
const Text = styled.div`
    margin-left: 10px;
`

export default Button
