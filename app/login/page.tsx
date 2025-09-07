"use client";


export default function LoginPage() {
    return (
        <div className="container mx-auto p-4 flex flex-col items-center gap-8 h-full justify-center">
            <h1 className="text-4xl font-bold">Login Page</h1>
            <form action="/api/login" method="POST" className="flex flex-col gap-4 w-full max-w-sm  ">
                <input className="border border-gray-300 p-2 rounded" type="email" name="email" placeholder="Email" required />
                <input className="border border-gray-300 p-2 rounded" type="password" name="password" placeholder="Password" required />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
                <p>Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
            </form>
        </div>
    );
}
