export const salam = () => "Salam";

export const whatsUp = () => "What is up man?";

export const bodyFunction = (usedM) => {
    console.log("Line 1:", usedM());
    console.log("Line 2:", whatsUp());
    usedM();
};