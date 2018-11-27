import {salam, bodyFunction} from "./arash";
console.log("Arash inam yeh testeh 22");
it("This is for the the test", () => {

    expect(salam()).toBe("Salam");
});

it("Body is going to be tested", () => {
    const myMock = jest.fn();
    const slamMock = jest.fn(salam);
    bodyFunction(slamMock);
    expect(slamMock.mock.calls.length).toBe(3);
    expect(slamMock).toHaveBeenCalledTimes(3);
    expect(slamMock.mock.calls[2][0]).toBeUndefined();
});


