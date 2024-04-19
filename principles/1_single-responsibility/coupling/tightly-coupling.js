class Student {
    #studentId

    save() {
        // some database operation
    }

    getStudentId() {
        return this.#studentId
    }

    setStudentId(id) {
        this.#studentId = id;
    }
}