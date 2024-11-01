const student = {
  name: {
    firstname: "Panawat",
    lastname: "Panthong",
  },
  university: "KMUTT",
  age: 18,
  grade: "A",
  skills: ["Python", "Javascript"],
};

/* 
    key : value
*/
console.log(student.age);

// Panawat Panthong
console.log(student.name.firstname + " " + student.name.lastname);
console.log(student.skills[1])

// undefind
console.log(student.dasdasd)