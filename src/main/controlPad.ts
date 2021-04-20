import MarsRover, { MoveForward, RotateLeft, RotateRight } from "./marsRover";
export default class ControlPad {

    constructor(private marsRover = new MarsRover(), private instructionHistory: Command[] = []) {
    }

    buildFrom(instructions: string[]) {
        return instructions.map(instruction => {
               switch (instruction) {
                case 'L':
                    const rotateLeftCommand = new RotateLeft(this.marsRover);
                    this.instructionHistory.push(rotateLeftCommand)
                    return rotateLeftCommand
                case 'R':
                    const rotateRightCommand = new RotateRight(this.marsRover);
                    this.instructionHistory.push(rotateRightCommand)
                    return rotateRightCommand
                case 'M':
                    const moveCommand = new MoveForward(this.marsRover);
                    this.instructionHistory.push(moveCommand)
                    return moveCommand
               case 'U':
                   const lastCommand = this.instructionHistory.pop();
                    if( lastCommand instanceof RotateRight){
                        return new RotateLeft(this.marsRover);
                    }
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