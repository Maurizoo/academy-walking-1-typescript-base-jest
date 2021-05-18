import {mock} from 'jest-mock-extended';
import {Bank} from "../../main/bank";
import {Logger} from "../../main/logger";
import { Repository } from '../../main/repository';


describe('Bank Account Acceptance Test', () => {
    describe('when a customer makes a series of transactions', () => {
        const logger = mock<Logger>();
        const repository = mock<Repository>();
        const bank = new Bank(logger, repository);

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