import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from './../Calculator/Calculator';

describe('App component', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
    it('should render a <div/>', () => { //TDD -> Red,Green,Refactor
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the Calculator component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toBe(true);
    });
});