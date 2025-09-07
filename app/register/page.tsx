"use client";


export default function LoginPage() {
    return (
        <div className="container mx-auto p-4 flex flex-col items-center gap-8 h-full justify-center">
            <h1 className="text-4xl font-bold">Register Page</h1>
            <form action="/api/register" method="POST" className="flex flex-col gap-4 w-full max-w-sm  ">
                <input type="text" name="name" placeholder="Name" required className="border border-gray-300 p-2 rounded" />
                <input className="border border-gray-300 p-2 rounded" type="email" name="email" placeholder="Email" required />
                <input className="border border-gray-300 p-2 rounded" type="password" name="password" placeholder="Password" required />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
                <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
            </form>
        </div>

        
    );
}
