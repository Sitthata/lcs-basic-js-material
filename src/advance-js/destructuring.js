const objectDemo = () => {
  const student = {
    name: "John Doe",
    age: 16,
    scores: {
      maths: 74,
      english: 63,
    },
  };

  let {
    name,
    age,
    scores: { maths, english },
  } = student;
};

const arrayDemo = () => {
  const numbers = [10, 20, 30, 40, 50];

  const classroom = {
    classNumber: 7,
    students: [
      {
        name: "John Doe",
        score: 90,
      },
      {
        name: "Jane Doe",
        score: 67,
      },
      {
        name: "Max Payne",
        score: 88,
      },
    ],
    teacher: "Professor Oak",
  };

  const {
    classNumber,
    students: [student1, _, { name, score }],
  } = classroom;
};

const spreadOperator = () => {
  const numbers = [1, 2, 3, 4, 5, 7, 8];

  const [first, second, ...rest] = numbers;

  const todo = {
    id: "abc",
    text: "Learn JavaScript",
    completed: false,
  };

  const newTodo = {
    id: "abc",
    text: "Learn React",
    completed: true,
  };

  const updatedTodo = {
    ...todo,
    ...newTodo,
  };

  console.log(updatedTodo);
};

spreadOperator();
