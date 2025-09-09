"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="text-6xl font-bold text-red-500 mb-4">💥</div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Critical Error</h1>
              <p className="text-xl text-slate-600 mb-8">
                A critical error occurred. Please refresh the page or contact support.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <button
                onClick={reset}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
