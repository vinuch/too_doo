'use client'

import { Todo } from "@/components/CreateTodoDialog";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


type TodoContextType = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (index: string) => void;
    updateTodo: (todo: Todo) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    // const [todos, setTodos] = useState<Todo[]>(() => {
    //     const saved = localStorage.getItem("todos");
    //     return saved ? JSON.parse(saved) : []
    // })

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("todos");
        if (saved) {
            setTodos(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo: Todo) => setTodos(prev => [...prev, todo]);
    const updateTodo = (todo: Todo) =>
        setTodos(prev => prev.map(t => (t.id === todo.id ? todo : t)));

    const removeTodo = (index: string) => setTodos(prev => prev.filter(todo => todo.id !== index));
    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) throw new Error("useTodos must be used within a TodoProvider");
    return context;
}