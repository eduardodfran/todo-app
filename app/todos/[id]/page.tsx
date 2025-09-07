"use client";

import TodoItem from "@/components/TodoItem";

export default function TodoPage() {
    return (
        <div className="container mx-auto p-4 flex flex-col items-center gap-8 h-full justify-center">
            <h1 className="text-4xl font-bold">Todo</h1>
            <p>Welcome to your todo page!</p>

            <div className="todo">
                <h2 className="text-2xl font-bold">Your Todos</h2>
                <ul className="list-disc pl-5">
                    <TodoItem />
                </ul>
            </div>

            <div className="account">
                <h1 className="name" id="name"></h1>
                <h1 className="email" id="email"></h1>
                <button id="logout" className="bg-red-500 text-white py-2 px-4 rounded">Logout</button>
            </div>
        </div>
    );
}