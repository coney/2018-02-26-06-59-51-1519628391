// implements introduce using template method pattern, ref: https://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Template_method_pattern

class Class {
    constructor(number) {
        this.number = number;
    }

    assignLeader(student) {
        this.leader = student;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }
}

class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.${this.getRoleDescription()}`
    }

    // child class override this method to provide different description
    getRoleDescription() {
        return ""
    }
}

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
}

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    getRoleDescription() {
        return ` I am a Student. I am ${ this.isLeader() ? "Leader of" : "at"} Class ${this.klass.number}.`
    }

    isLeader() {
        return this.klass.leader === this;
    }
}

const class2 = new Class(2);
const class3 = new Class(3);
const person = new Person(1, "Butch", 22);
const student = new Student(2, "Jerry", 21, class2);
const teacher = new Teacher(3, "Tom", 21, [class2, class3]);
class2.assignLeader(student);
console.log(person.introduce());
console.log(student.introduce());
console.log(teacher.introduce());

