import React from "react";
import ArashPanel from "../components/ArashPanel";
import {shallow} from "enzyme";

it("Spy and test the props.customAler", () => {

    const customAlerSpy = jest.fn();
    const props = {
        customAlert: customAlerSpy
    }

    const wrapper = shallow(<ArashPanel {...props}/>);
    wrapper.find(".salam").simulate("click");
    expect(customAlerSpy).toBeCalled();


});

