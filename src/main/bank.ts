import {Logger} from "./logger";
import {Repository} from "./repository";

export class Bank {
    constructor(private logger: Logger, private repository: Repository) {

    }

    deposit(amount: number) {
        throw new Error('error')
    }

    withdraw(amount: number) {
        throw new Error('error')
    }

    printStatement() {
        throw new Error('error')
    }
}