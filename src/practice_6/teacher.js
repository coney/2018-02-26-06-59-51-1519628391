import Person from "./person.js";

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    getRoleDescription() {
        return ` I am a Teacher. I teach ${this.getClassName()}.`
    }

    getClassName() {
        if (this.klass === undefined) {
            return "No Class";
        } else {
            return `Class ${this.klass}`
        }
    }
}

export default Teacher