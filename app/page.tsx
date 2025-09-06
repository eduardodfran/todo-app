import Link from 'next/dist/client/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-red-500">Welcome to ToDo App</h1>
      <div className="buttons flex items-center gap-8">
        <Link
          href="/login"
          className="flex flex-col items-center gap-4 text-blue-500 text-2xl hover:underline"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="flex flex-col items-center gap-4 text-blue-500 text-2xl hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  )
}
