import Person from "./person.js";

class Worker extends Person {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }

    getRoleDescription() {
        return ` I am a Teacher. I have a job.`
    }
}

export default Worker



