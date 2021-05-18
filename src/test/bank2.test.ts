import { mock } from 'jest-mock-extended';

class Logger {
    log() {

    }
}

class Bank {
    constructor(private logger: Logger) {

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

describe('Bank Account Acceptance Test', () => {
    describe('when a customer makes a series of transactions', () => {
        const logger = mock<Logger>();
        const bank = new Bank(logger);

        it('should show the transactions in the bank statement', () => {
            bank.deposit(1000)
            bank.deposit(2000)
            bank.withdraw(500)
            
            bank.printStatement()

            expect(logger.log()).toHaveBeenCalledWith(expect.objectContaining(
                [
                    ["Date || Amount || Balance"],
                    ["14/01/2012 || 500 || 2500"],
                    ["13/01/2012 || 2000 || 3000"],
                    ["10/01/2012 || 1000 || 1000"]
                ]
                
            ))
        })
    })
})