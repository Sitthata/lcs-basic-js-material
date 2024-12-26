export default function createTodoManager() {
    let todos = []
    /**
   * Adds a new todo to the list.
   * @param {string} task - The task description.
   */
    function addTodo(task) {
        const newTodo = {
            id: todos.length + 1,
            title: task,
            completed: false
        }
        todos.push(newTodo)
        return newTodo
    }


    /**
   * Removes a todo from the list by its id.
   * @param {number} id - The unique identifier of the todo to remove.
   */
    function removeTodo(id) {
        const removedTodo = todos.find((todo) => todo.id === id)
        if (!removedTodo) {
            throw new Error(`Todo with id ${id} not found.`)
        }
        // Arrow Function 
        const removeIndex = todos.findIndex((todo) => todo.id === id)
        
        todos.splice(removeIndex, 1)
        return removedTodo
    }

    /**
   * Marks a todo as completed by its id.
   * @param {number} id - The unique identifier of the todo to mark as completed.
   */
    function completeTodo(id) {
        const todo = todos.find((todo) => todo.id === id)
        todo.completed = true
        return todo
    }

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
        return todos.length
    }

    /**
   * Returns the count of completed todos.
   * @returns {number} The number of completed todos.
   */
  function countCompleted() {
    const checkComplete = todos.filter((todo) => todo.completed === true)
    return checkComplete.length
  }


    return { todos, addTodo, countTodos, removeTodo, completeTodo, countCompleted }
}

const todos = [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Buy bread", completed: true },
    { id: 3, title: "Buy egg", completed: false },
    { id: 4, title: "Buy coffee", completed: false },
    { id: 5, title: "Buy tea", completed: false },
]

const todoManager = createTodoManager()

todoManager.addTodo("Finish Milestone 1")
todoManager.addTodo("Finish Milestone 2")

todoManager.completeTodo(2)
console.log(todoManager.todos)
