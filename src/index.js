const Course = require('./models/course');
const LearningPath = require('./models/learningPath');
const Student = require('./models/student');

const computerCourse = new Course({
    id: 1,
    name: "Curso Básico de Computadores e Informática",
    teacher: "Ricardo Celis",
    points: 180
})

const githubCourse = new Course({
    id: 2,
    name: "Curso Profesional de Git y GitHub",
    teacher: "Freddy Vega",
    points: 250
})

const reactJSCourse = new Course({
    id: 3,
    name: "Curso Práctico de React.js",
    teacher: "Oscar Barajas Tavares",
    points: 200
})

const escuelaWeb = new LearningPath({
    id: 1,
    name: "Desarrollo Web",
    points: 1300,
    courses: [computerCourse, githubCourse, reactJSCourse]
});
const escuelaData = new LearningPath({
    id: 2,
    name: "Data Science e Inteligencia Artificial",
    points: 1500,
    courses: []
});

const nextJSCourse = new Course({
    id: 3,
    name: "Curso Práctico de Next.js",
    teacher: "Oscar Barajas Tavares",
    points: 200
})

let miguelon = new Student({
    name: "Miguel",
    username: "Miguelote",
    age: 20,
    points: 650,
    email: "miguelon.hermanodemiguelin@platzi.com",
    approvedCourses: [
        githubCourse,
        reactJSCourse,
        nextJSCourse
    ],
    learningPaths: [escuelaWeb]
})



console.log(miguelon);