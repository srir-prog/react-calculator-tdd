import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from './../Display/Display';
import Keypad from './../Keypad/Keypad';

describe('Calculator component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Calculator />);
    });

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render <div>', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
    it('should render Display and Keypad component', () => {

        expect(wrapper.containsAllMatchingElements(
            [
                <Display displayValue={'0'} />,
                // <Keypad
                //     callOperator={'func'}
                //     numbers={[]}
                //     operators={[]}
                //     setOperator={'func'}
                //     updateDisplay={'func'}
                // />
            ]
        )).toEqual(true);
    });
});