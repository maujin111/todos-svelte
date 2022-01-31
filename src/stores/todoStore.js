import { writable } from "svelte/store";

export const todos  = writable([]);

export const addTodo = (text) => {
    todos.update(items => {
        return [...items, {
        id: items.length,
        text,
        completed: false
        }];
    });
}

export const deleteTodo = (id) => {
    todos.update(items => {
        return items.filter(item => item.id !== id);
    });
}

export const toggleTodo = (id) => {
    todos.update(items => {
        return items.map(item => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
    });
}