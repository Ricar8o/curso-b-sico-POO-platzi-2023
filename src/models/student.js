class Student {
    constructor({
        name,
        age,
        email,
        username,
        twitter,
        instagram,
        facebook,
        approvedCourses = [],
        learningPaths = [],
        points = 0
    }) {
        this.name = name;
        this.age = age;
        this.username = username;
        this.email = email;
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
        this.points = points;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
    }

    approveCourse(course) {
        this.approvedCourses.push(course);
    }

    addPoints(newPoints) {
        this.points += newPoints
    }

}

class ExpertStudent extends Student {
    constructor(props) {
        super(props)
    }
}


module.exports = Student, ExpertStudent;