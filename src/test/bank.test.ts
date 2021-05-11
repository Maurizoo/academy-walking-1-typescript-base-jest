import {mock, MockProxy} from "jest-mock-extended";

interface AccountService {
    printStatement(): void;

    deposit(amount: number): void
}

class Logger {
    log(dateAmountBalance: string) {

    }
}

interface Transaction {
    date: string;
    amount: number;
    balance: number;
}

interface IDatabase {
    store: (deposit: number) => void;

    fetch: () => Transaction[];
}

class Database implements IDatabase {
    private transactions: Transaction[] = [{date: "", amount: 0, balance: 0}];


    store(deposit: number) {
        const {balance} = this.transactions.slice(-1)[0];

        this.transactions.push({date: new Date().toString(), amount: deposit, balance: balance + deposit});

    }

    fetch() {
        return this.transactions
    }
}

class Bank implements AccountService {
    private logger: Logger;
    private database: IDatabase;

    constructor(logger: Logger, database: IDatabase) {
        this.logger = logger;
        this.database = database;
    }


    printStatement(): void {
        const transactions = this.database.fetch();
        const printedTransactions = transactions.map(({date, amount, balance}) => {
                return date + " || " +
                    amount + " || " +
                    balance;
            }
            )
        ;
        console.log(printedTransactions)
        this.logger.log("Date || Amount || Balance");
    }


    deposit(deposit: number) {
        this.database.store(deposit);
    }
}

describe('Bank', () => {

    it('it should print only the header when there are not deposits and withdrawals', () => {
        let logger: Logger = mock<Logger>();
        let database = mock<Database>();
        const bank: Bank = new Bank(logger, database);

        database.fetch.mockReturnValue([]);
        bank.printStatement();

        expect(logger.log).toHaveBeenCalledWith("Date || Amount || Balance")
    })

    it('it should print the header and amount 1000 and balance 1000', () => {
        let logger: Logger = mock<Logger>();
        let database: IDatabase = mock<IDatabase>();
        const bank: Bank = new Bank(logger, database);

        

        bank.deposit(1000);
        bank.printStatement();

        // expect(database.store).toHaveBeenCalledWith(1000);
        // expect(logger.log).toHaveBeenCalledWith([["Date || Amount || Balance"], ["10/01/2012 || 1000 || 1000"]])
    })
})