import Person from "./person.js";

class Student extends Person {
    constructor(name, age, klazz) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.klazz = klazz;
    }

    getRoleDescription() {
        return `I am a Student. I am at Class ${this.klazz}.`
    }
}

export default Student


