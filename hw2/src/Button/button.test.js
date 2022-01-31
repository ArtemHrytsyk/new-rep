import react from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'
import React from 'react';
import FeedbackOptions from '../FeedbackOptions';

import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new Adapter() })
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'

import '@testing-library/jest-dom'

describe('the OK button tests', () => {
    it('renders correctly', () => {
        const wrapper = renderer.create(<Button text='OK' />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('renders with props text: OK', () => {
        const wrapper = renderer.create(<Button text='OK' />);
        const testInstance = wrapper.root;
        expect(testInstance.findByProps({ text: 'OK' })).toBeTruthy();
    });
});

