import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, FileText, Users } from "lucide-react"

const nextSteps = [
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a free 30-minute consultation to discuss your needs.",
  },
  {
    icon: FileText,
    title: "Get a Proposal",
    description: "Receive a detailed project proposal within 48 hours.",
  },
  {
    icon: Users,
    title: "Start Building",
    description: "Begin your transformation journey with our expert team.",
  },
]

export function ContactCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">What Happens Next?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here's how we'll work together to transform your systems and achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {nextSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Ready to Walk the Talk?</h3>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty mb-6">
              Join the organizations across Africa that are already transforming their operations with Tsidwi. Let's
              build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
