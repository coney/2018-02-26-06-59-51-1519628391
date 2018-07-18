// implements introduce using strategy pattern, ref: https://en.wikipedia.org/wiki/Strategy_pattern
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

class Role {
    getDescription() {
        return "";
    }
}

class Person {
    constructor(id, name, age, roleType = Role) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = new roleType(this);
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.${this.role.getDescription()}`
    }
}

class TeacherRole extends Role {
    constructor(teacher) {
        super();
        this.teacher = teacher;
    }

    getDescription() {
        return ` I am a Teacher. I teach ${this.teacher.getClassName()}.`
    }
}


class Teacher extends Person {
    constructor(id, name, age, klasses) {
        // can't pass new TeacherRole(this) here
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(id, name, age, TeacherRole);
        this.klasses = klasses;
    }

    getRoleDescription() {
    }

    getClassName() {
        if (this.klasses === undefined) {
            return "No Class";
        } else {
            return `Class ${this.klasses.map(klass => klass.number).join(", ")}`
        }
    }
}

class StudentRole extends Role {
    constructor(student) {
        super();
        this.student = student;
    }

    getDescription() {
        return ` I am a Student. I am ${ this.student.isLeader() ? "Leader of" : "at"} Class ${this.student.klass.number}.`
    }
}

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age, StudentRole);
        this.name = name;
        this.age = age;
        this.klass = klass;
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
