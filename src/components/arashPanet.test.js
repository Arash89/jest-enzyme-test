import React from 'react';
import ArashPanel from './ArashPanel';
import {shallow} from 'enzyme';

it("Arash panel", () => {
    const wrapper = shallow(<ArashPanel />);
    console.log("Arash state():", wrapper.state());
    console.log("Arash state().made:", wrapper.state().made);
    console.log("Arash instance().state:", wrapper.instance().state);
    console.log("Arash instance().state.model:", wrapper.instance().state.model);
    console.log("Arash wrapper.debug()", wrapper.debug());
    console.log("Arash instance().memberMethod()", wrapper.instance().memberMethod());
    // console.log("Arash wrapper.memberMethod()", wrapper.memberMethod()); // throws error

    expect(wrapper).toMatchSnapshot();
});