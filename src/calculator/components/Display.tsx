import * as React from 'react';
import styled from 'styled-components';

interface Props {
    operationResult: string;
}
const StyledDisplay = styled.button`
  color: white;
  background: #1c191c;
  line-height: 120px;
  font-size: 6em;
  flex: 1;
`;
StyledDisplay.displayName = 'StyledDisplay';

const Display = ({operationResult}: Props) => {
  return (
      <StyledDisplay>
          {operationResult}
      </StyledDisplay>
      )
};

export default Display;