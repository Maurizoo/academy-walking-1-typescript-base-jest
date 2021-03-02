import {romanNumeralConverter} from '../main/rumanNumerals';

describe('Roman Numerals', () => {
    [
        {value: 0, result: ''},
        {value: 1, result: 'I'},
        {value: 2, result: 'II'},
        {value: 3, result: 'III'},
        {value: 10, result: 'X'},
        {value: 20, result: 'XX'},
        {value: 30, result: 'XXX'},
        {value: 100, result: 'C'},
        {value: 200, result: 'CC'},
        {value: 300, result: 'CCC'},
        {value: 4, result: 'IV'},
        {value: 5, result: 'V'},
        {value: 6, result: 'VI'},
        {value: 7, result: 'VII'},
        {value: 8, result: 'VIII'},
        {value: 11, result: 'XI'},
        {value: 9, result: 'IX'},
        {value: 40, result: 'XL'}
    ].forEach(({value, result}) => {
        it(`should return ${result} when given ${value}`, () => {
            expect(romanNumeralConverter(value)).toBe(result);
        });
    })
})