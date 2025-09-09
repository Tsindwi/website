import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Code2, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We dive deep into your current systems to identify inefficiencies and opportunities for improvement.",
    step: "01",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Design",
    description: "Our team crafts a comprehensive solution strategy tailored to your specific needs and goals.",
    step: "02",
  },
  {
    icon: Code2,
    title: "Development & Testing",
    description: "We build robust, scalable solutions using cutting-edge technologies and rigorous testing protocols.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description: "We ensure smooth implementation and provide ongoing support to maximize your solution's impact.",
    step: "04",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">Our Proven Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We follow a systematic approach to ensure every project delivers maximum value and lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="bg-card border-border text-center relative">
                <CardContent className="p-6">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="font-heading font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Ready to Transform Your Systems?</h3>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty mb-6">
              Let's discuss how we can help you disrupt outdated processes and build the future of your organization.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
