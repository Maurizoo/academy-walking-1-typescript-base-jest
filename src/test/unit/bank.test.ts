import {mock} from "jest-mock-extended";
import {Logger} from "../../main/logger";
import {Bank} from "../../main/bank";
import {Repository} from "../../main/repository";

describe('Bank Account', () => {
    describe('When deposit 1000', () => {
        it("should call the repository with 1000", () => {
            let logger = mock<Logger>();
            let repository = mock<Repository>();
            const bank = new Bank(logger, repository);

            bank.deposit(1000);
            expect(repository.save).toHaveBeenCalledWith(1000);
        })
    })
});