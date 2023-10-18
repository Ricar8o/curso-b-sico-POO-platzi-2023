export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === 'string' || nuevoNombrecito instanceof String) {
      nuevoNombrecito = nuevoNombrecito.trim();
      if (nuevoNombrecito.length > 0) {
        const capitalizedName = nuevoNombrecito.split(' ').map(
          (word) => word[0].toUpperCase() + word.slice(1)
        );
        this._name = capitalizedName.join(' ')
      }
    }
  }
}
const courseName = "curso de programación básica"
const nombreMayusculas = new Course({
  name: courseName,
})
console.log(nombreMayusculas.name);

const courseName2 = ""
const nombreMayusculas2 = new Course({
  name: courseName2,
})
console.log(nombreMayusculas2.name);