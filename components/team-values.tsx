import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Globe } from "lucide-react"

const teamValues = [
  {
    icon: Users,
    title: "Collaborative Leadership",
    description: "We believe in collective decision-making and shared responsibility for our success.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every action we take is measured against our impact on Africa's technological advancement.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "We constantly challenge ourselves to find better ways to solve complex problems.",
  },
  {
    icon: Globe,
    title: "Pan-African Vision",
    description: "Our decisions are guided by what's best for the entire African continent.",
  },
]

export function TeamValues() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">How We Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our team operates on shared principles that drive everything we do, from daily decisions to long-term
            strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamValues.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Team Quote */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium mb-4 text-pretty">
              "We're not just building a company—we're building the foundation for Africa's technological renaissance.
              Every line of code, every system we optimize, every process we streamline brings us closer to that
              vision."
            </blockquote>
            <cite className="text-lg opacity-90">— The Tsidwi Founding Team</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
