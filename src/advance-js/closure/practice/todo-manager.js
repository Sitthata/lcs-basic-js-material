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
    return todos.push({ id: idOfThisLength, title: task, complete: false });
  }

  /**
   * Removes a todo from the list by its id.
   * @param {number} id - The unique identifier of the todo to remove.
   */
  // function removeTodo() {
  

  /**
   * Marks a todo as completed by its id.
   * @param {number} id - The unique identifier of the todo to mark as completed.
   */

  /**
   * Lists all todos, optionally filtering by completion status.
   * @param {boolean} [completed] - If provided, filters todos by their completion status.
   */

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

  return { addTodo, countTodos };
}

const todos = [
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Buy bread", completed: true },
  { id: 3, title: "Buy egg", completed: false },
  { id: 4, title: "Buy coffee", completed: false },
  { id: 5, title: "Buy tea", completed: false },
];
