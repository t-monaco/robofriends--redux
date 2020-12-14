import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('expect to render ConuterButton component', () => {
    const mockColor = 'red';
    const clickSpi = jest.fn();
    expect.assertions(1);
    expect(
        shallow(<CounterButton color={mockColor} onclick={clickSpi} />)
    ).toMatchSnapshot();
});

it('Correctly increment the counter', () => {
    const clickSpi = jest.fn();
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} onclick={clickSpi} />);

    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count: 1});
    wrapper.find('[id="counter"]').simulate('click')
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count: 3});
    expect(wrapper.props().color).toEqual('red')
});
