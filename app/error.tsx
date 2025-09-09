"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to Sentry when it's configured
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-6xl font-bold text-red-500 mb-4">⚠️</div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Something went wrong</h1>
          <p className="text-xl text-slate-600 mb-8">
            We encountered an unexpected error. Our team has been notified and is working to fix it.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">What can you do?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={reset}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-xl font-medium transition-colors block text-center"
            >
              Go Home
            </Link>
          </div>
        </div>

        <div className="text-slate-500">
          <p>If the problem persists, please contact us:</p>
          <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium mt-2 inline-block">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
