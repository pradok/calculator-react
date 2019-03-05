import * as React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Display from '../Display';

describe ('<Display />', () => {
    it('renders the operation result', () => {
        const display = shallow(<Display operationResult='6320'  />)
        expect(display.text()).toEqual("6320");
    })
});
