import * as React from 'react';
import styled from 'styled-components';

interface Props {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    label: string;
    value: string;
}

const StyledButton = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  user-select: none;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;
StyledButton.displayName = 'StyledButton';

const Button = ({onClick, label, value}: Props) => {
    return (
        <StyledButton
            onClick={onClick}
            data-value={value}
        >
            {label}
        </StyledButton>
    )
};

export default Button;