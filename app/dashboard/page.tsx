"use client";

export default function DashboardPage() {
    return (
        <div className="container mx-auto p-4 flex flex-col items-center gap-8 h-full justify-center">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p>Welcome to your dashboard!</p>

            <div className="account">
                <h1 className="name" id="name"></h1>
                <h1 className="email" id="email"></h1>
                <button id="logout" className="bg-red-500 text-white py-2 px-4 rounded">Logout</button>
            </div>
        </div>
    );
}