import { Logable } from "./logable";

export class Logger{
    info(value: Logable) {
        console.log(`info: ${value.toString()}`);
    }

    error(value: Logable) {
        console.log(`error: ${value.toString()}`);
    }
}
