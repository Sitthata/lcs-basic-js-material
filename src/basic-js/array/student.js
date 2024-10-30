// Security Code !!!
let students = ["Alice", "Bob", "Charlie", "Alex", "John", "Smith", "Ann"];

function addStudent(name) {
  if (!isValidName) {
    console.error("Invalid Name");
    return;
  }
  students.push(name);
  console.log(`${name}: added successfully!`);
}

function deleteStudent(name) {
  // Bob
  // const index = students.findIndex((element) => element === name)
  const index = students.indexOf(name);
  if (index === -1) {
    // Not Found
    console.warn("This Student is not exists");
    return;
  }
  students.splice(index, 1);
}

function updateStudent(index, newName) {
  if (!isValidName) {
    console.error("Invalid Name");
    return;
  }
  //   students[index] = newName;
  students.splice(index, 1, newName);
}

function sortStudents() {
    const studentCopy = Array.from(students)
    studentCopy.sort((a, b) => b.length - a.length)
    return studentCopy
}

function filterStudents(prefix) {
  // a A -> Alice, Alex
  const filter = students.filter((student) =>
    student.toLowerCase().startsWith(prefix.toLowerCase(), 0)
  );
  return filter;
}

function isValidName() {
  return typeof newName === "string" || newName.trim() !== "";
}

// Example usage (uncomment to test the functions)

// deleteStudent("Bob");
// updateStudent(1, "Alex")
// console.log(students);
// findStudent('Alice');
// const sorted = sortStudents();
// const filtered = filterStudents("a");
console.log(sortStudents())

// console.log(filtered);
// console.log('Current students array:', students);
