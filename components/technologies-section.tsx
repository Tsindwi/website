import { Badge } from "@/components/ui/badge"

const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  Backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  "AI & Analytics": ["Machine Learning", "Data Science", "Business Intelligence", "Predictive Analytics"],
  Integration: ["REST APIs", "GraphQL", "Microservices", "Third-party Integrations"],
}

export function TechnologiesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">Technologies We Master</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We leverage cutting-edge technologies to build solutions that are scalable, secure, and future-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-heading font-semibold text-lg text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-heading font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-primary mb-2">∞</div>
            <div className="text-muted-foreground">Innovation Potential</div>
          </div>
        </div>
      </div>
    </section>
  )
}
