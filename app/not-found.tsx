import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 dark:bg-gray-950">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>
        <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  )
} 