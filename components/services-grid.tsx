import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Briefcase, Heart, Code, Database, Cloud } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

const services = [
  {
    icon: Building2,
    title: "Government Digital Transformation",
    description:
      "Modernize public services with secure, efficient digital solutions that improve citizen experience and government operations.",
    features: [
      "Digital Identity Systems",
      "E-Government Platforms",
      "Public Service Portals",
      "Data Management Systems",
    ],
    color: "bg-primary",
  },
  {
    icon: Briefcase,
    title: "Private Sector Solutions",
    description:
      "Streamline business operations with custom software that drives efficiency, reduces costs, and accelerates growth.",
    features: ["Business Process Automation", "CRM & ERP Systems", "E-Commerce Platforms", "Financial Technology"],
    color: "bg-secondary",
  },
  {
    icon: Heart,
    title: "NGO System Optimization",
    description:
      "Amplify social impact with technology solutions that improve program delivery and organizational effectiveness.",
    features: [
      "Donor Management Systems",
      "Impact Tracking Platforms",
      "Volunteer Coordination",
      "Resource Management",
    ],
    color: "bg-accent",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Build tailored applications that solve your unique challenges with modern, scalable technology stacks.",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    color: "bg-primary",
  },
  {
    icon: Database,
    title: "Data & Analytics Solutions",
    description:
      "Transform raw data into actionable insights with advanced analytics and business intelligence platforms.",
    features: ["Data Warehousing", "Business Intelligence", "Predictive Analytics", "Real-time Dashboards"],
    color: "bg-secondary",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Migrate to secure, scalable cloud solutions that reduce costs and improve system reliability.",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps Implementation", "Security Configuration"],
    color: "bg-accent",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From concept to deployment, we deliver end-to-end solutions that transform how organizations operate.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group hover-lift h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 animate-float`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center group/item">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0 animate-pulse-subtle group-hover/item:animate-bounce-subtle" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full mt-4 bg-transparent hover-scale group/btn">
                      Learn More
                      <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
