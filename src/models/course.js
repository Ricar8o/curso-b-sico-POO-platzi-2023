class Course {
    constructor({
        id,
        name,
        teacher,
        points,
        lessons = [],
    }) {
        this.id = id;
        this._name = name;
        this.teacher = teacher;
        this.lessons = lessons;
        this.points = points;
    }
}

module.exports = Course;