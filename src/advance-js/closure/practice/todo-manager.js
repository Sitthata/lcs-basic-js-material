export default function createTodoManager() {
    /**
   * Adds a new todo to the list.
   * @param {string} task - The task description.
   */

    /**
   * Removes a todo from the list by its id.
   * @param {number} id - The unique identifier of the todo to remove.
   */

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

    /**
   * Returns the count of completed todos.
   * @returns {number} The number of completed todos.
   */
}

const todos = [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Buy bread", completed: true },
    { id: 3, title: "Buy egg", completed: false },
    { id: 4, title: "Buy coffee", completed: false },
    { id: 5, title: "Buy tea", completed: false },
]