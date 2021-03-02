export const romanNumeralConverter = (value: number): string => {
    if (value < 1)
        return '';

    const one = 'I';
    if (value < 4) return one + romanNumeralConverter(value - 1);

    if (value === 4) return 'IV'

    const five = 'V';
    if (value === 5) return five
    if (value < 9) return five + romanNumeralConverter(value - 5)

    if(value === 9) return "IX";

    const ten = 'X';
    if (value < 40) return ten + romanNumeralConverter(value - 10);

    const hundred = 'C';
    if (value < 400) return hundred + romanNumeralConverter(value - 100);

    return one;
}