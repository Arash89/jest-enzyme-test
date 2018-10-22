import React from "react";
import ArashPanel from "../components/ArashPanel";
import {shallow} from "enzyme";

it("Spy and test the props.customAler", () => {

    // const customAlerSpy = jest.fn();
    // const props = {
    //     customAlert: customAlerSpy
    // }

    const props = {
        customAlert: jest.fn()
    }

    const wrapper = shallow(<ArashPanel {...props}/>);
    wrapper.find("Button").simulate("click");
    expect(props.customAlert).toBeCalled();


});

