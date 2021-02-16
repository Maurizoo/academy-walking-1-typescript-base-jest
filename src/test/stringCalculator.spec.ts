
const stringCalculator = (numbers: string) => {
    let delimeters = ",\n"
    if(numbers.startsWith("//")){
        delimeters += numbers[2];
    }
   return numbers.split(new RegExp(`[//${delimeters}]`, "g")).reduce((total: number, current: string) => (total + Number(current)), 0);
}

describe('stringCalculator', ()=>{
    it.each` input | result
    ${''} | ${0}
    ${'1'} | ${1}
    ${'2'} | ${2}
    ${'3'} | ${3}
    ${'1,2'} | ${3}
    ${'1,3'} | ${4}
    ${'1,4'} | ${5}
    ${'1,2,3'} | ${6}
    ${'1,2,3,4'} | ${10}
    ${'1,2,3,4,2'} | ${12}
    ${'1\n2,3'} | ${6}
    ${'1\n2,3\n5\n6'} | ${17}
    ${'//;\n1;2'} | ${3}
    ${'//;\n1;2\n3'} | ${6}
    ${'//|\n1|2\n3'} | ${6}
    ${'//@\n1@2\n3'} | ${6}
    ${'//&\n1&2\n3,4'} | ${10}
    `('should return $result for a string $input', ({input, result})=>{
        expect(stringCalculator(input)).toBe(result);
    })
})