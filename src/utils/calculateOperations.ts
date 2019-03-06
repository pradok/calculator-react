import math from 'mathjs';

export const calculateOperations = (operators: string[]) => {
    if (operators.length < 3) {
        return;
    }
    const invalidOperators = ['+', '-', '/', '*', '.'];
    const lastOperator = operators[operators.length - 1];
    if (invalidOperators.find(operator => operator === lastOperator)) {
        return null;
    }
    const operatorsString = operators.join('');
    if (operatorsString) {
        return math.format(math.eval(operatorsString), {precision: 14});
    }
};
