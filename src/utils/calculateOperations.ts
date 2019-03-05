import math from 'mathjs';

export const calculateOperations = (operators: string[]) => {
    const operatorsString = operators.join('');
    if (operatorsString) {
        return math.format(math.eval(operatorsString), {precision: 14});
    }
};
