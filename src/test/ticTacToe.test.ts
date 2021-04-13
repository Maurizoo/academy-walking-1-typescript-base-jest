const initTicTacToe = () => {
    let lastPlayer = "";
    let grid = [['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']];
    return (player: string, xAxis: number, yAxis: number) => {
        if (lastPlayer === player) throw new Error(`${player} has already moved`);
        if (lastPlayer === "" && player != 'X') throw new Error("X always goes first");
        if (grid[xAxis][yAxis] != '-') throw new Error("position already played");
        grid[xAxis][yAxis] = player;
        lastPlayer = player;

        // let winningRow;
        // for (let i = 0; i<grid.length; i++) {
        //     winningRow = grid[i].some((item) => item == player) && new Set(grid[i]).size == 1;
        // }

        const wonFirstRow = grid[0].some((item) => item == 'X') && new Set(grid[0]).size == 1;
        const wonSecondRow = grid[1].some((item) => item == 'O') && new Set(grid[1]).size == 1;
        if(wonFirstRow || wonSecondRow) return `${player} wins\n[${grid[0]}],\n[${grid[1]}],\n[${grid[2]}]`;

        return `${player} played ${xAxis} ${yAxis}\n[${grid[0]}],\n[${grid[1]}],\n[${grid[2]}]`;
    }
}

describe('Tic Tac Toe', () => {
    let ticTacToe: any;
    beforeEach(() => {
        ticTacToe = initTicTacToe();
    })

    it("should throw an error when O goes first", () => {
        expect(() => ticTacToe("0", 0, 0)).toThrow("X always goes first");
    })

    it("should return grid with a message when X goes first", () => {
        expect(ticTacToe("X", 0, 0)).toBe(`X played 0 0\n[X,-,-],\n[-,-,-],\n[-,-,-]`);
    })

    it("should return grid with a message when O goes second", () => {
        ticTacToe("X", 0, 0);
        expect(ticTacToe("O", 1, 0)).toBe(`O played 1 0\n[X,-,-],\n[O,-,-],\n[-,-,-]`);
    })

    it("should return X wins when 3 X's in the first row horizontally", () => {
        ticTacToe("X", 0, 0);
        ticTacToe("O", 1, 0);
        ticTacToe("X", 0, 1);
        ticTacToe("O", 2, 0)
        expect(ticTacToe("X", 0, 2)).toBe(`X wins\n[X,X,X],\n[O,-,-],\n[O,-,-]`);
    })

    it("should return O wins when 3 O's in the second row horizontally", () => {
        ticTacToe("X", 0, 0);
        ticTacToe("O", 1, 0);
        ticTacToe("X", 0, 1);
        ticTacToe("O", 1, 1)
        ticTacToe("X", 2, 2)
        expect(ticTacToe("O", 1, 2)).toBe(`O wins\n[X,X,-],\n[O,O,O],\n[-,-,X]`);
    })

    it("should throw an error if X goes twice", () => {
        ticTacToe("X", 0, 0);
        expect(() => ticTacToe("X", 0, 0)).toThrow("X has already moved");
    })

    it("should throw an error if O goes twice", () => {
        ticTacToe("X", 0, 0);
        ticTacToe("O", 1, 0);
        expect(() => ticTacToe("O", 2, 0)).toThrow("O has already moved");
    })

    it("should throw an error if O tries to play a position that has already been played", () => {
        ticTacToe("X", 0, 0);
        expect(() => ticTacToe("O", 0, 0)).toThrow("position already played");
    })
})