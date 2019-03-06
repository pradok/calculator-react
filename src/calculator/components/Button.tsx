import * as React from 'react';
import styled from 'styled-components';

interface Props {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    label: string;
    value: string;
    type: string;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 20%;
  min-width: 25%;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
  background: linear-gradient(45deg, #cad2c5 0%, #abb5aa 100%);
  border-top: 1px solid #9a9a9a;
  border-right: 1px solid #9a9a9a;
  padding: 0;
  font-family: inherit;
  user-select: none;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  &.operator {
    background: linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%);
    color: white;
    font-size: 2rem;
  }
`;
StyledButton.displayName = 'StyledButton';

const Button = ({onClick, label, value, type}: Props) => {
    return (
        <StyledButton
            onClick={onClick}
            data-value={value}
            className={type}
        >
            {label}
        </StyledButton>
    )
};

export default Button;