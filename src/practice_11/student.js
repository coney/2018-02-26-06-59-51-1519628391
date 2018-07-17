import Person from "./person.js";

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    getRoleDescription() {
        return ` I am a Student. I am ${ this.isLeader()? "Leader of" : "at"} Class ${this.klass.number}.`
    }

    isLeader() {
        return this.klass.leader === this;
    }
}

export default Student


