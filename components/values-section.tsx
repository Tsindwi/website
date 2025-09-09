import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Globe, Zap, Shield, Rocket } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We challenge the status quo and create solutions that didn't exist before.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Every solution we build serves the people and communities of Africa.",
    color: "bg-secondary",
  },
  {
    icon: Globe,
    title: "Continental Vision",
    description: "We think beyond borders, building for all of Africa's diverse nations.",
    color: "bg-accent",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "We move fast, iterate quickly, and deliver results that matter.",
    color: "bg-primary",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We build trust through honest communication and ethical practices.",
    color: "bg-secondary",
  },
  {
    icon: Rocket,
    title: "Ambitious Goals",
    description: "We set audacious targets and work relentlessly to achieve them.",
    color: "bg-accent",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These principles guide every decision we make and every solution we build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Why Tsidwi Section */}
        <div className="mt-20 bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-card-foreground">Why "Tsidwi"?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In Chichewa, "Tsidwi" means "roof"—the protective covering that shelters what matters most. Just as a roof
              provides security and foundation for everything beneath it, we aim to be the technological foundation that
              supports and protects Africa's digital transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just building software; we're constructing the infrastructure for Africa's technological
              renaissance. Every line of code, every system we optimize, every process we streamline adds another beam
              to the roof that will shelter Africa's bright digital future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
