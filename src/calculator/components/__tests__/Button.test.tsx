import * as React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Button from '../Button';

describe ('<Button />', () => {
    it('renders with correct label and value', () => {
        const mockClickHandler = jest.fn();
        const button = shallow(<Button onClick={mockClickHandler} label='2' value='2' type="number" />)
        expect(button.text()).toEqual('2');
        expect(button.find('[data-value="2"]')).toHaveLength(1);
        expect(button.find('[className="number"]')).toHaveLength(1);
        button.find('StyledButton').simulate('click', {
            target: {dataset: {value: '2'}}
        });
        expect(mockClickHandler.mock.calls.length).toEqual(1);
    })
});
