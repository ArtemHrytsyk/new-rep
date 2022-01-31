import React from 'react';
import Statistic from './Statistic'
import FeedbackOptions from '../FeedbackOptions';
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new Adapter() })
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'

const setUp = () => shallow(<FeedbackOptions />);

describe("Statistic component", () => {
    let component;
    let instance;
    beforeEach(() => {
        component = setUp();
        instance = component.instance();
    });

    it("Should render Statistic component", () => {
        expect(component).toMatchSnapshot();
    });

    describe('Hendlers', () => {
        it('should change statistic', () => {
            const stats = component.find('.statistics');
            stats.simulate('click');
            const headerText = screen.getByText(/Statistics/i);
            expect(headerText).toBeInTheDocument();
            
        });
    });
});