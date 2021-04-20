import ControlPad from '../main/controlPad';

describe('Mars Rover', () => {
    it.each`instructions | expectedOrientation 
            ${'L'}       | ${'0:0:W'}
            ${'LL'}      | ${'0:0:S'}
            ${'LLL'}     | ${'0:0:E'}
            ${'LLLL'}    | ${'0:0:N'}
            ${'R'}       | ${'0:0:E'}
            ${'RR'}      | ${'0:0:S'}
            ${'RRR'}     | ${'0:0:W'}
            ${'RRRR'}    | ${'0:0:N'}
            ${'LRLRLRR'} | ${'0:0:E'}
    `('should be in position $expectedOrientation when given $instructions',
        ({instructions, expectedOrientation}) => {
            const controlPad = new ControlPad();

            expect(controlPad.execute(instructions)).toBe(expectedOrientation);
        });

    it('should be in position 0:1:N when given instruction M', () => {
        const controlPad = new ControlPad();

        expect(controlPad.execute('M')).toBe('0:1:N');
    })

    it('should be in position 1:0:N when given instruction RM', () => {
        const controlPad = new ControlPad();

        expect(controlPad.execute('RM')).toBe('1:0:E');
    })

    it('should be in position 2:1:E when given instruction MRMM', () => {
        const controlPad = new ControlPad();

        expect(controlPad.execute('MRMM')).toBe('2:1:E');
    })

    it('should be in position 0:0:N when given instruction MMMMMMMMMM', () => {
        const controlPad = new ControlPad();

        expect(controlPad.execute('MMMMMMMMMM')).toBe('0:0:N');
    })

    it('should be in position 0:0:E when given instruction RMMMMMMMMMM', () => {
        const controlPad = new ControlPad();

        expect(controlPad.execute('RMMMMMMMMMM')).toBe('0:0:E');
    })

    it('should be in position 0:9:S when given instruction RRM', () => {
        const controlPad = new ControlPad();

        expect(controlPad.execute('RRM')).toBe('0:9:S');
    })

    it('should be in position 9:0:W when given instruction LM', () => {
        const controlPad = new ControlPad();

        expect(controlPad.execute('LM')).toBe('9:0:W');
    })
})