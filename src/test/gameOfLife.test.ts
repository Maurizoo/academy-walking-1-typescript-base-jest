class GameOfLife {

    getResult(grid: any, livingNeighbours: number) {
        if (grid[1][1] === 0 && livingNeighbours !== 3) return false;

        return livingNeighbours === 2 || livingNeighbours === 3 ? true : false;
    }
    
    countAliveNeighbours(grid: any) {
        let numberOfLivingCells = 0;
    
        for (let i = 0; i < grid.length; i++) {
            let gridRow = grid[i];

            for (let j = 0; j < gridRow.length; j++) {
                if (i == 1 && j == 1) continue;
                if (gridRow[j] === 1) {
                    numberOfLivingCells++;
                }
            }
        }

        return numberOfLivingCells;
    }

    willLive(grid: number[][]) {
        const livingNeighbours = this.countAliveNeighbours(grid)

        return this.getResult(grid, livingNeighbours)
    }
}


describe('Game of life', () => {
    it('should return false when all cells in the grid are dead', () => {
        const grid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        const gameOfLife = new GameOfLife();
        expect(gameOfLife.willLive(grid)).toBe(false);
    })

    it('should return false when a living cell has fewer than two neighbours', () => {
        const grid = [
            [0, 0, 0],
            [0, 1, 1],
            [0, 0, 0]
        ];

        const gameOfLife = new GameOfLife();
        expect(gameOfLife.willLive(grid)).toBe(false);
    })

    it('should return true when a living cell has two neighbours', () => {
        const grid = [
            [0, 0, 1],
            [0, 1, 1],
            [0, 0, 0]
        ];

        const gameOfLife = new GameOfLife();
        expect(gameOfLife.willLive(grid)).toBe(true);
    })

    it('should return true when a living cell has 3 neighbours', () => {
        const grid = [
            [0, 0, 1],
            [0, 1, 1],
            [1, 0, 0]
        ];

        const gameOfLife = new GameOfLife();
        expect(gameOfLife.willLive(grid)).toBe(true);
    })

    it('should return false when a living cell has 4 neighbours', () => {
        const grid = [
            [1, 0, 1],
            [0, 1, 1],
            [1, 0, 0]
        ];

        const gameOfLife = new GameOfLife();
        expect(gameOfLife.willLive(grid)).toBe(false);
    })

    it('should return false when a dead cell has 2 neighbours', () => {
        const grid = [
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 0]
        ];

        const gameOfLife = new GameOfLife();
        expect(gameOfLife.willLive(grid)).toBe(false);
    })

    it('should return true when a dead cell has exactly three neighbours', () => {
        const grid = [
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 1]
        ];

        const gameOfLife = new GameOfLife();
        expect(gameOfLife.willLive(grid)).toBe(true);
    })
})