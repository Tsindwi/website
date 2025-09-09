import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CareersPage() {
  const benefits = [
    {
      icon: "🚀",
      title: "Impact-Driven Work",
      description: "Work on projects that directly improve lives across Africa",
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Access to courses, conferences, and skill development programs",
    },
    {
      icon: "🌍",
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and work-life balance",
    },
    {
      icon: "💰",
      title: "Competitive Package",
      description: "Fair compensation with equity options and performance bonuses",
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: "🤝",
      title: "Collaborative Team",
      description: "Work with passionate, like-minded individuals who care about impact",
    },
  ]

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Lilongwe/Remote",
      description:
        "Lead development of scalable web applications for government and NGO clients. Experience with React, Node.js, and cloud platforms required.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote",
      description:
        "Design intuitive user experiences for complex systems. Experience with government or NGO projects preferred.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "DevOps Engineer",
      type: "Contract",
      location: "Remote",
      description: "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability.",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Monitoring"],
    },
  ]

  const culturePoints = [
    "Walk the talk - we practice what we preach",
    "Continuous learning and growth mindset",
    "Transparency in all our communications",
    "Respect for diverse perspectives",
    "Focus on sustainable impact",
    "Work-life balance and mental health",
    "Innovation through collaboration",
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Join Our Mission</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Help us transform Africa's technology landscape. We're looking for passionate individuals who want to make
              a real impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Work at Tsidwi?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-600 text-lg">{benefit.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Open Positions</h2>
                {openPositions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{position.title}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              position.type === "Full-time"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {position.type}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-3">{position.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-emerald-600 font-semibold">{position.location}</span>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-medium transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Culture</h3>
                <div className="space-y-4">
                  {culturePoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Don't See Your Role?</h3>
                <p className="text-emerald-100 mb-4">
                  We're always looking for talented individuals who share our vision. Send us your resume and tell us
                  how you'd like to contribute.
                </p>
                <button className="bg-white text-emerald-600 px-6 py-2 rounded-xl font-medium hover:bg-emerald-50 transition-colors">
                  Send Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
