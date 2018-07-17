import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    getRoleDescription() {
        return ` I am a Teacher. I teach ${this.getClassName()}.`
    }

    getClassName() {
        if (this.klass === undefined) {
            return "No Class";
        } else {
            return `Class ${this.klass.number}`
        }
    }

    introduceWith(student) {
        return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I ${student.klass === this.klass ? "": "don't "}teach Jerry.`
    }
}

export default Teacher