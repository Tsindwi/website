import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-8xl font-bold text-emerald-600 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-slate-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">What would you like to do?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors block"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-xl font-medium transition-colors block"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="text-slate-500">
          <p>Or explore our main sections:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/about" className="text-emerald-600 hover:text-emerald-700 font-medium">
              About
            </Link>
            <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Services
            </Link>
            <Link href="/team" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Team
            </Link>
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Blog
            </Link>
            <Link href="/case-studies" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
