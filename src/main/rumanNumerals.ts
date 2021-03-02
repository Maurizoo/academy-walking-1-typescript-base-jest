export const romanNumeralConverter = (value: number): string => {
    if (value < 1)
        return '';

    let base = 'I';
    if (value < 5) {
        return base + romanNumeralConverter(value - 1)
    }

    if (value < 10) {
        const base = 'V'
        return base + romanNumeralConverter(value - 5)
    }

    if (value < 50) {
        const base = 'X';
        return base + romanNumeralConverter(value - 10)
    }


    if (value <= 100) {
        const base = ''
        return base + romanNumeralConverter(value - 5)
    }

    if (value <= 1000) {

    }

    const one = 'I';
    if (value < 4) return one + romanNumeralConverter(value - 1);
    if (value === 4) return 'IV'

    const ten = 'X';
    if (value >= 10 && value < 40) return ten + romanNumeralConverter(value - 10);
    if (value === 40) return ten + 'L'

    const hundred = 'C';
    if (value < 400) return hundred + romanNumeralConverter(value - 100);

    return one;
}