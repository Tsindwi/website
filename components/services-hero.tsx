import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function ServicesHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            Our Services
          </Badge>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-balance mb-6 animate-slide-up animate-stagger-1">
            Transforming <span className="text-primary animate-glow">Systems</span> Across Africa
          </h1>

          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in animate-stagger-2">
            We specialize in disrupting outdated processes and building cutting-edge solutions for government agencies,
            private enterprises, and NGOs across the continent.
          </p>

          <Button size="lg" className="text-lg px-8 hover-scale animate-scale-in animate-stagger-3">
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
