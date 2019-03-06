import * as React from 'react';
import styled from 'styled-components';

interface Props {
    operationResult: string[];
}
const StyledDisplay = styled.div`
  color: white;
  background: #1c191c;
  line-height: 120px;
  font-size: 6em;
  flex: 1;
  text-align: end;
  padding: 0 5px;
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