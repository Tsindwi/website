import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in African Governments",
    excerpt: "How modern technology can revolutionize public service delivery across the continent.",
    author: "Roy Chanunkha",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Government Tech",
  },
  {
    id: 2,
    title: "Building Scalable Systems for NGOs",
    excerpt: "Best practices for creating technology solutions that grow with your organization's impact.",
    author: "Kyton Thaundi",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "NGO Solutions",
  },
  {
    id: 3,
    title: "The Future of Fintech in Malawi",
    excerpt: "Exploring opportunities for financial technology innovation in emerging markets.",
    author: "Chigonjetso Chimpweya",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Fintech",
  },
  {
    id: 4,
    title: "Cloud Infrastructure for African Businesses",
    excerpt: "Why cloud-first approaches are essential for competitive advantage in modern business.",
    author: "Mwatha Bwanali",
    date: "2024-12-28",
    readTime: "8 min read",
    category: "Cloud Tech",
  },
  {
    id: 5,
    title: "Data Security in the Digital Age",
    excerpt: "Protecting sensitive information while enabling innovation and growth.",
    author: "Roy Chanunkha",
    date: "2024-12-20",
    readTime: "4 min read",
    category: "Security",
  },
  {
    id: 6,
    title: "Mobile-First Development Strategies",
    excerpt: "Creating applications that work seamlessly across all devices and network conditions.",
    author: "Kyton Thaundi",
    date: "2024-12-15",
    readTime: "6 min read",
    category: "Mobile Dev",
  },
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Insights & Innovation</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Exploring the future of technology in Africa and sharing insights on digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4 text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold text-sm">{post.author.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-slate-700">{post.author}</span>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
