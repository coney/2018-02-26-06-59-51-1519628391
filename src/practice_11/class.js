class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student.klass == this) {
            this.leader = student;
            if (this.joinLeaderLister !== undefined) {
                this.joinLeaderLister(student);
            }
        } else {
            console.log("It is not one of us.")
        }
    }

    appendMember(student) {
        student.klass = this;
        if (this.joinLister !== undefined) {
            this.joinLister(student);
        }
    }

    registerJoinListener(teacher) {
        this.joinLister = student => teacher.notifyJoinMember(student);
    }

    registerAssignLeaderListener(teacher) {
        this.joinLeaderLister = student => teacher.notifyJoinMember(student);
    }
}

export default Class