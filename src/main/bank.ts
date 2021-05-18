import {Logger} from "./logger";
import {Repository} from "./repository";

export class Bank {
    constructor(private logger: Logger, private repository: Repository) {

    }

    deposit(amount: number) {
        this.repository.save(amount);
    }
    
    withdraw(amount: number) {
        this.repository.save(-amount);
    }

    printStatement() {
        throw new Error('error')
    }
}