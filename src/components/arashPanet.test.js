import React from 'react';
import ArashPanel from './ArashPanel';
import {shallow} from 'enzyme';

it("Arash panel", () => {
    const wrapper = shallow(<ArashPanel />);

    expect(wrapper).toMatchSnapshot();
});