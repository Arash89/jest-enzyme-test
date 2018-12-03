import {salam, bodyFunction} from "./arash";
const carModule = require("./utils/commonjsUtil");
console.log("Arash inam yeh testeh 22");

it("This is for the the test", () => {
    expect(salam()).toBe("Salam");
});

it("Body is going to be tested", () => {
    const myMock = jest.fn();
    const salamMock = jest.fn(salam);
    salamMock.mockReturnValue("Chakeram");

    for (let i = 0; i < 4; i++) {
        console.log("i:", i);
        if (i === 1) {
            salamMock.mockReturnValueOnce(100);
        } else {
            salamMock.mockReturnValueOnce(salam());
        }
    }

    bodyFunction(salamMock);
    expect(salamMock.mock.calls.length).toBe(2);
    expect(salamMock).toHaveBeenCalledTimes(2);
    expect(salamMock.mock.calls[1][0]).toBeUndefined();
    console.log("Result Array:", salamMock.mock.results);
    expect(salamMock.mock.results[0].value).toBe("Salam");
});

it ("The car Module", () => {
    expect(carModule.getName()).toBe("Car");
    carModule.setName("Toyota")
    expect(carModule.getName()).toBe("Toyota");
    expect(carModule.name).toBe("Toyota");
}); 
