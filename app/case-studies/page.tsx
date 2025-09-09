import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Success Stories</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Real transformations we've delivered across government, private sector, and NGO organizations
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${study.color}`}>
                        <span className="text-2xl">{study.icon}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{study.title}</h2>
                        <p className="text-emerald-600 font-medium">{study.client}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 text-pretty leading-relaxed">{study.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">{metric.value}</div>
                          <div className="text-sm text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors group">
                      View Full Case Study
                      <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-emerald-100">Before</span>
                          <span className="text-emerald-100">After</span>
                        </div>
                        {study.improvements.map((improvement, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="text-sm font-medium">{improvement.metric}</div>
                            <div className="flex items-center gap-4">
                              <div className="flex-1 bg-emerald-400/30 rounded-full h-2">
                                <div
                                  className="bg-red-400 h-2 rounded-full"
                                  style={{ width: `${improvement.before}%` }}
                                ></div>
                              </div>
                              <div className="flex-1 bg-emerald-400/30 rounded-full h-2">
                                <div
                                  className="bg-emerald-200 h-2 rounded-full"
                                  style={{ width: `${improvement.after}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Transform Your Organization?</h3>
              <p className="text-slate-600 mb-6">
                Let's discuss how we can help you achieve similar results with modern technology solutions.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const caseStudies = [
  {
    id: 1,
    title: "Digital Citizen Services Platform",
    client: "Ministry of Local Government",
    description:
      "Transformed how citizens access government services by building a comprehensive digital platform that reduced processing times and improved transparency across all municipal services.",
    icon: "🏛️",
    color: "bg-blue-100",
    metrics: [
      { value: "75%", label: "Faster Processing" },
      { value: "90%", label: "User Satisfaction" },
      { value: "50K+", label: "Citizens Served" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    improvements: [
      { metric: "Service Processing Time", before: 80, after: 20 },
      { metric: "Citizen Satisfaction", before: 45, after: 90 },
      { metric: "Digital Adoption", before: 15, after: 85 },
    ],
  },
  {
    id: 2,
    title: "Supply Chain Management System",
    client: "Healthcare NGO Network",
    description:
      "Developed an integrated supply chain management system that tracks medical supplies from procurement to distribution, ensuring transparency and reducing waste across multiple health facilities.",
    icon: "🏥",
    color: "bg-green-100",
    metrics: [
      { value: "60%", label: "Waste Reduction" },
      { value: "40%", label: "Cost Savings" },
      { value: "25", label: "Facilities Connected" },
    ],
    technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
    improvements: [
      { metric: "Supply Visibility", before: 30, after: 95 },
      { metric: "Inventory Accuracy", before: 60, after: 98 },
      { metric: "Procurement Efficiency", before: 40, after: 85 },
    ],
  },
  {
    id: 3,
    title: "Financial Management Platform",
    client: "Regional Banking Cooperative",
    description:
      "Built a comprehensive financial management platform that digitized loan processing, member management, and financial reporting for rural banking cooperatives across three districts.",
    icon: "🏦",
    color: "bg-purple-100",
    metrics: [
      { value: "85%", label: "Faster Loans" },
      { value: "99.9%", label: "Uptime" },
      { value: "15K+", label: "Members" },
    ],
    technologies: ["Angular", "Java", "MySQL", "Kubernetes"],
    improvements: [
      { metric: "Loan Processing Speed", before: 25, after: 90 },
      { metric: "Data Accuracy", before: 70, after: 99 },
      { metric: "Member Satisfaction", before: 55, after: 92 },
    ],
  },
]
