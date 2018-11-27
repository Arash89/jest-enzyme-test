import {salam, bodyFunction} from "./arash";
console.log("Arash inam yeh testeh 22");
it("This is for the the test", () => {

    expect(salam()).toBe("Salam");
});

it("Body is going to be tested", () => {
    const myMock = jest.fn();
    const salamMock = jest.fn(salam);
    salamMock.mockReturnValue("Chakeram");

    for (let i = 0; i < 2; i++) {
        if (i === 1) {
            salamMock.mockReturnValueOnce(100);
        } else {
            salamMock.mockReturnValueOnce(salam());
        }
    }

    bodyFunction(salamMock);
    expect(salamMock.mock.calls.length).toBe(3);
    expect(salamMock).toHaveBeenCalledTimes(3);
    expect(salamMock.mock.calls[2][0]).toBeUndefined();
    expect(salamMock.mock.results[0].value).toBe("Salam");
});


