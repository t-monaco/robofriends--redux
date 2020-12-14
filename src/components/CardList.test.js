import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('renders without crashing', () => {
    const robots = [
        {
            id: 1,
            name: 'Tom Rider',
            email: 'tomrider@mail.com'
        }
    ]
    expect(shallow(<CardList robots={robots}/>)).toMatchSnapshot();
});
