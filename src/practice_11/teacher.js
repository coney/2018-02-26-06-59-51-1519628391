import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    getRoleDescription() {
        return ` I am a Teacher. I teach ${this.getClassName()}.`
    }

    getClassName() {
        if (this.klasses === undefined) {
            return "No Class";
        } else {
            return `Class ${this.klasses.map(klass => klass.number).join(", ")}`
        }
    }

    introduceWith(student) {
        return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I ${this.klasses.includes(student.klass) ? "": "don't "}teach Jerry.`
    }

    notifyJoinMember(student) {
        console.log(`I am ${this.name}. I know ${student.name} ${ student.isLeader()?"become Leader of":"has joined"} Class ${student.klass.number}.`)
    }
}

export default Teacher