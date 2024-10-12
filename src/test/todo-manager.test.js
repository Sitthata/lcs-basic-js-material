import { describe, it, expect, beforeEach } from 'bun:test';
import createTodoManager from '../advance-js/closure/practice/todo-manager';

const sampleTodos = [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Buy bread", completed: true },
    { id: 3, title: "Buy egg", completed: false },
    { id: 4, title: "Buy coffee", completed: false },
    { id: 5, title: "Buy tea", completed: false },
];

describe('TodoManager', () => {
    let todoManager;

    beforeEach(() => {
        todoManager = createTodoManager(sampleTodos);

        sampleTodos.forEach((todo) => {
            todoManager.addTodo(todo.title);
        })
    })

    it("should add a new todo", () => {
        const initialCount = todoManager.countTodos();
        const newTodo = todoManager.addTodo("Write tests");
        expect(todoManager.countTodos()).toBe(initialCount + 1);
        expect(newTodo.title).toBe("Write tests");
        expect(newTodo.completed).toBe(false);
    });

    it("should remove a todo by id", () => {
        // Add a todo to remove
        const todo = todoManager.addTodo("Temporary Task");
        const initialCount = todoManager.countTodos();
        const removedTodo = todoManager.removeTodo(todo.id);
        expect(todoManager.countTodos()).toBe(initialCount - 1);
        expect(removedTodo.id).toBe(todo.id);
        expect(removedTodo.title).toBe("Temporary Task");
    });

    it("should throw an error when removing a non-existent todo", () => {
        expect(() => todoManager.removeTodo(999)).toThrow("Todo with id 999 not found.");
    });

    it("should mark a todo as completed", () => {
        const todo = todoManager.addTodo("Complete this task");
        expect(todo.completed).toBe(false);
        const completedTodo = todoManager.completeTodo(todo.id);
        expect(completedTodo.completed).toBe(true);
        expect(todoManager.countCompleted()).toBe(1);
    });

    it("should throw an error when completing a non-existent todo", () => {
        expect(() => todoManager.completeTodo(999)).toThrow("Todo with id 999 not found.");
    });

    it("should list all todos", () => {
        const todos = todoManager.listTodos();
        expect(todos.length).toBe(sampleTodos.length);
        // Note: Since IDs are generated dynamically, we can't match IDs here
        // But we can check titles and completion status
        sampleTodos.forEach(sampleTodo => {
            const exists = todos.some(todo => todo.title === sampleTodo.title && todo.completed === sampleTodo.completed);
            expect(exists).toBe(true);
        });
    });

    it("should filter todos by completion status", () => {
        // Add a completed todo
        const todo = todoManager.addTodo("Another Completed Task");
        todoManager.completeTodo(todo.id);

        const completedTodos = todoManager.listTodos(true);
        expect(completedTodos.length).toBe(1);
        expect(completedTodos[0].completed).toBe(true);

        const incompleteTodos = todoManager.listTodos(false);
        expect(incompleteTodos.length).toBe(sampleTodos.length);
        incompleteTodos.forEach(todo => {
            expect(todo.completed).toBe(false);
        });
    });

    it("should clear all completed todos", () => {
        // Complete a todo
        const todo = todoManager.addTodo("Task to complete");
        todoManager.completeTodo(todo.id);

        const clearedCount = todoManager.clearCompleted();
        expect(clearedCount).toBe(1);
        expect(todoManager.countCompleted()).toBe(0);
    });

    it("should count total todos", () => {
        const initialCount = todoManager.countTodos();
        todoManager.addTodo("New Task 1");
        todoManager.addTodo("New Task 2");
        expect(todoManager.countTodos()).toBe(initialCount + 2);
    });

    it("should count completed todos", () => {
        // Add and complete two todos
        const todo1 = todoManager.addTodo("Complete Task 1");
        const todo2 = todoManager.addTodo("Complete Task 2");
        todoManager.completeTodo(todo1.id);
        todoManager.completeTodo(todo2.id);
        expect(todoManager.countCompleted()).toBe(2);
    });

    it("should throw an error when adding an empty todo", () => {
        expect(() => todoManager.addTodo("")).toThrow("Task must be a non-empty string.");
        expect(() => todoManager.addTodo("   ")).toThrow("Task must be a non-empty string.");
    });

    it("should throw an error when adding a non-string todo", () => {
        expect(() => todoManager.addTodo(123)).toThrow("Task must be a non-empty string.");
        expect(() => todoManager.addTodo(null)).toThrow("Task must be a non-empty string.");
        expect(() => todoManager.addTodo(undefined)).toThrow("Task must be a non-empty string.");
        expect(() => todoManager.addTodo({})).toThrow("Task must be a non-empty string.");
    });
})