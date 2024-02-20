import { Logger } from './logger';
import { Logable } from './logable';
import { Employee } from './Employee';
import { Customer } from './Customer';

let employee = new Employee('Ben', new Date(), '1234');
let customer = new Customer('Ben', new Date(), 'ABCD');

let logger = new Logger();
logger.info(employee);
logger.info(customer);

let logable: Logable = {
    toString() {
        return 'It Worked';
    },
}

let user = {
    name: 'Ben',
    birthdate:new Date()
}

logger.info(logable);

for (let i = 0; i < 1000; i++) {
    console.log(i);
}