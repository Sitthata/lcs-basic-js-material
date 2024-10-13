export default function createTodoManager() {
  let todos = [];
  /**
   * Adds a new todo to the list.
   * @param {string} task - The task description.
   */
  function addTodo(task) {
    if (typeof task !== "string" || task.trim() === "") {
      throw new Error("Task must be a non-empty string.");
    }
    const idOfThisLength = todos.length + 1;
    const newTodo = {id: idOfThisLength, title: task , completed: false }
    todos.push(newTodo)
    return newTodo
  }

  /**
   * Removes a todo from the list by its id.
   * @param {number} id - The unique identifier of the todo to remove.
   */
  function removeTodo(id) {
    const idOfTodo = todos.find(task => task.id === id)
    if (!todos.includes(idOfTodo)) {
      throw new Error(`Todo with id ${id} not found.`)
    }

    // todos.forEach((task, index) => {if (task === idOfTodo) { todos.splice(index, 1)}})
    // return todos
    const allTodos = todos.filter(task => task.id !== id)
    return allTodos
  }
  
  /**
   * Marks a todo as completed by its id.
   * @param {number} id - The unique identifier of the todo to mark as completed.
   */
  function completeTodo(id) {
    const todoToComplete = todos.find(task => task.id === id)
    if (!todoToComplete) {
      throw new Error(`Todo with id ${id} not found.`)
    }
    todoToComplete.completed = true
    return todoToComplete
  }

  /**
   * Lists all todos, optionally filtering by completion status.
   * @param {boolean} [completed] - If provided, filters todos by their completion status.
   */
  function listTodos(boolean) {
    if (boolean === undefined) {
        return todos
    }
    const allTodos = todos.filter(task => task.completed === boolean)
    return allTodos
  }

  /**
   * Clears all completed todos from the list.
   */

  /**
   * Returns the total count of todos.
   * @returns {number} The number of todos.
   */
  function countTodos() {
    return todos.length;
  }

  /**
   * Returns the count of completed todos.
   * @returns {number} The number of completed todos.
   */
  function countCompleted() {
    const completedTodos = todos.filter(task => task.completed === true)
    return completedTodos.length
  }

  return { addTodo, removeTodo, completeTodo, listTodos, countTodos, countCompleted };
}

const todos = [
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Buy bread", completed: true },
  { id: 3, title: "Buy egg", completed: false },
  { id: 4, title: "Buy coffee", completed: false },
  { id: 5, title: "Buy tea", completed: false },
];