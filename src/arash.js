export const salam = () => "Salam";

export const bodyFunction = (usedM) => {
    console.log("Line 1:", usedM());
    console.log("Line 2:", usedM());
    usedM();
};