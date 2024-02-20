import { User } from './User';

export class Employee extends User {
	employeeCode: string;

	constructor(name: string, birthdate: Date, employeeCode: string) {
		super(name, birthdate);
		this.employeeCode = employeeCode;
	}

	override greet(value: string) {
		super.greet(`Employee: ${value}`);
	}

	 override getType(): string {
		return 'Employee';
	}
	override toString(): string {
		return `${this.getType()} - ${this.name}`;
	}
}