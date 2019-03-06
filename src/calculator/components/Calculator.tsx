import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Display from './Display';
import {simpleLayoutItems} from "./config";

const ContainerStyled = styled.div`
  width: 300px;
  height: 520px;
  position: relative;
`;
ContainerStyled.displayName = 'ContainerStyled';

const SubContainerStyled = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
SubContainerStyled.displayName = 'SubContainerStyled';

const KeypadsStyled = styled.div`
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
KeypadsStyled.displayName = 'KeypadsStyled';

class Calculator extends React.Component {
    render() {
        return (
            <ContainerStyled>
                <SubContainerStyled>
                    <Display operationResult={''}/>
                    <KeypadsStyled>
                        {
                            simpleLayoutItems.map(buttonItem => {
                                const {label, value, type} = buttonItem;
                                return <Button label={label} value={value} type={type} key={label} />
                            })
                        }
                    </KeypadsStyled>
                </SubContainerStyled>
            </ContainerStyled>
        )
    }
}

export default Calculator;