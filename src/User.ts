import { Logable } from "./logable";
import { Payable } from "./payable";

export abstract class User implements Logable{

	name: string;
	birthdate: Date;

	constructor(name: string, birthdate: Date) {
		this.name = name;
		this.birthdate = birthdate;
	}

	greet(value: string) {
		console.log(`${value} ${this.name}`);
	}

	abstract getType(): string;
}