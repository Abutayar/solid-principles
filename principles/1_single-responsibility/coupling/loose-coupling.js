

class Student {
    #studentId

    save() {

        new StudentRespository().save(this);
    }

    getStudentId() {
        return this.#studentId
    }

    setStudentId(id) {
        this.#studentId = id;
    }
}


class StudentRespository {
    save(student) {
        // some database operation
    }
}