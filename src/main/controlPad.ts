import MarsRover from "./marsRover";

export default class ControlPad {

    constructor(private marsRover = new MarsRover()) {
    }

    execute(instructions: any) {

        const instructionsArray = CommandBuilder.buildFrom(instructions)//instructions.split('').map() //Command implementations
        instructions.each(instruction => instruction.execute())
        instructionsArray.forEach(instruction => {
            switch (instruction) {
                case 'L':
                    this.rotateLeft();
                    break
                case 'R':
                    this.rotateRight();
                    break
                case 'M':
                    this.moveForward();
                    break
                default:
                    break;
            }
        })

        return `${this.coordinates.x}:${this.coordinates.y}:${this.orientation}`;
    }
}