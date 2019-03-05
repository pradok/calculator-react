import {calculateOperations} from "./calculateOperations";

describe('returns correct result from calculateOperations()', ()=> {
    it('Multiply', () => {
        expect(calculateOperations(['8', '*', '8'])).toEqual('64');
    });
    it('Division', () => {
        expect(calculateOperations(['64', '/', '8'])).toEqual('8');
    });
    it('Addition', () => {
        expect(calculateOperations(['9', '+', '8'])).toEqual('17');
    });
    it('Subtraction', () => {
        expect(calculateOperations(['12', '-', '8'])).toEqual('4');
    });
});
