class LearningPath {
    constructor({
        id,
        name,
        points,
        courses = []
    }) {
        this.id = id;
        this.name = name;
        this.points = points;
        this.courses = courses;
    }
}

module.exports = LearningPath;