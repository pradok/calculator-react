import React, { Component } from 'react';
import styled from 'styled-components';

import Calculator from './calculator';

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
AppStyled.displayName = 'AppStyled';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <Calculator/>
      </AppStyled>
    );
  }
}

export default App;
