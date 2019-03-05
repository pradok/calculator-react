import * as React from 'react';

interface Props {
    operationResult: string;
}

const Display = ({operationResult}: Props) => {
  return (
      <React.Fragment>
          {operationResult}
      </React.Fragment>
      )
};

export default Display;