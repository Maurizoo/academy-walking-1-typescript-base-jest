import MarsRover, { MoveForward, RotateLeft, RotateRight } from "./marsRover";
export default class ControlPad {

    constructor(private marsRover = new MarsRover()) {
    }

    buildFrom(instructions: string[]) {
        return instructions.map(instruction => {
               switch (instruction) {
                case 'L':
                    return new RotateLeft(this.marsRover)
                case 'R':
                    return new RotateRight(this.marsRover)
                case 'M':
                    return new MoveForward(this.marsRover)
                default:
                    throw new Error("Invalid instruction");
            }  
        })
    }

    execute(instructions: any) {
        const instructionsArray = this.buildFrom(instructions.split(''))
        instructionsArray.forEach(instruction => instruction.execute())

        return this.marsRover.getPosition();
    }
}