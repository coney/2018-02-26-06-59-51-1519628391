// listener is the variation of observer pattern, ref: https://en.wikipedia.org/wiki/Observer_pattern
class Class {
    constructor(number) {
        this.number = number;
    }

    assignLeader(student) {
        if (student.klass == this) {
            this.leader = student;
            if (this.joinLeaderListener !== undefined) {
                this.joinLeaderListener(student);
            }
        } else {
            console.log("It is not one of us.")
        }
    }

    // class only knows that listener is a function and accepts student as the only one parameter
    registerAssignLeaderListener(joinLeaderListener) {
        this.joinLeaderListener = joinLeaderListener;
    }

}

class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    notifyJoinMember(student) {
        console.log(`I am ${this.name}. I know ${student.name} ${ student.isLeader() ? "become Leader of" : "has joined"} Class ${student.klass.number}.`)
    }
}

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
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
const student = new Student(1, "Jerry", 21, class2);
const teacher = new Teacher(2, "Tom", 21, [class2, class3]);

// pass teacher.notifyJoinMember as a function
// class should no nothing about the behavior of listener callback
class2.registerAssignLeaderListener((student) => teacher.notifyJoinMember(student));
class2.assignLeader(student);
