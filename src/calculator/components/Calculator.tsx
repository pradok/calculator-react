import React from 'react';
import styled from 'styled-components';

import {calculateOperations} from '../../utils';
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
    state = {
      operations: []
    };

    calculate = () => {
        const output = calculateOperations(this.state.operations);
        if (output) {
            this.setState({operations: output});
        }
    };

    handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const value = e.currentTarget.dataset.value;
        const type = e.currentTarget.dataset.type;
        switch (value) {
            case 'clear':
                this.setState({
                    operations: [],
                });
                break;
            case '=':
                this.calculate();
                break;
            default:
                if ((type === 'operator' || type === 'decimal') && !this.state.operations.length) {
                    return;
                }
                this.setState({operations: [...this.state.operations, value]});
                break;
        }
    };


    render() {
        return (
            <ContainerStyled>
                <SubContainerStyled>
                    <Display operationResult={this.state.operations}/>
                    <KeypadsStyled>
                        {
                            simpleLayoutItems.map((buttonItem, index) => {
                                const {label, value, type} = buttonItem;
                                if (buttonItem.type === 'null') {
                                    return <Button label={label} value={value} type={type} key={`${index}${label}`}/>
                                }
                                return <Button onClick={this.handleClick} label={label} value={value} type={type}
                                               key={`${index}${label}`}/>
                            })
                        }
                    </KeypadsStyled>
                </SubContainerStyled>
            </ContainerStyled>
        )
    }
}

export default Calculator;