// point 2
import { areYouWell } from "./arashUtil";
export const salam = () => "Salam";

// point 1
export const whatsUp = () => "What is up man?";

export const bodyFunction = (usedM) => {
    console.log("Line 1:", usedM());
    console.log("Line 2:", whatsUp());
    console.log("Are you well?", areYouWell(true));
    usedM();
};