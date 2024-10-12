const student = {
    name: "John",
    age: 20,
    scores: {
        math: 85,
        science: 90,
        english: 78
    },
    friends: ["Alice", "Bob", "Charlie"]
}

const studentName = student.name
const studentScores = student.scores
const mathScore = studentScores.math


// simulate calculate gpa
const calcualteGpax = (scores) => {
    const totalScore = Object.values(scores).reduce((acc, curr) => acc + curr, 0)
    return totalScore / Object.keys(scores).length
}

// const { name: studentName, scores } = student


console.log(studentName, scores);
