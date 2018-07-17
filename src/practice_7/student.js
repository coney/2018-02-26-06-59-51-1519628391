import Person from "./person.js";

class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    getRoleDescription() {
        return ` I am a Student. I am at Class ${this.klass.number}.`
    }
}

export default Student


