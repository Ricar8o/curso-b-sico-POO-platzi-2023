import { Comment } from "./Comment.mjs";
import { Student } from "./Student.mjs";

export class TeacherStudent extends Student {

  constructor(props, skills = []) {
    super(props);
    this.skills = skills;
  }

  publicarComentario(commentContent) {
    const teacherRoleText = 'profesor de ' + this.skills.join(', ')
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: teacherRoleText,
    });
    return comment.publicar();
  }

}

const skills = ["js", "python", "mongodb"]
const props = {
  name: "Erik Ochoa",
  username: "elyager"
}

const profesor = new TeacherStudent(props, skills)
const res = profesor.publicarComentario('Mi primer comentario')
console.log(res);