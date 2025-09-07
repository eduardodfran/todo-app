export default function Footer() {
  return (
    <footer className="w-full p-4 bg-gray-200 text-center text-sm text-gray-600">
      &copy; {new Date().getFullYear()} My Todo App. All rights reserved.
    </footer>
  )
}