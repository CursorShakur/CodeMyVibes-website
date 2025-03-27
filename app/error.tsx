'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 dark:bg-gray-950">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Oops!
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Something went wrong
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          Don't worry, it's not you - it's us. We're working on fixing this issue.
        </p>
        <Button 
          onClick={reset}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          Try again
        </Button>
      </div>
    </div>
  )
} 