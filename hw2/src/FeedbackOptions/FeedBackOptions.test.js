import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new Adapter() })
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'

const setUp = () => shallow(<FeedbackOptions />);

describe("FeedbackOptions (Buttons) component", () => {
    let component;
    let instance;
    beforeEach(() => {
        component = setUp();
        instance = component.instance();
    });

    it("Should render FeedbackOptions (Buttons) component", () => {
        expect(component).toMatchSnapshot();
    });

    describe('Test Button component', () => {
        it('Test click event', () => {
          const mockCallBack = jest.fn();
      
          const button = shallow((<FeedbackOptions onClick={mockCallBack}></FeedbackOptions>));
          button.find('.button-good').simulate('click');
          expect(mockCallBack.mock.calls.length).toEqual(1);
        });
      });

      
});