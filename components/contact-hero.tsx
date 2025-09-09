import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "./scroll-animation"

export function ContactHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            Get In Touch
          </Badge>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-balance mb-6 animate-slide-up animate-stagger-1">
            Let's <span className="text-primary animate-glow">Transform</span> Your Systems Together
          </h1>

          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto animate-fade-in animate-stagger-2">
            Ready to disrupt outdated processes and embrace the future? We're here to help you navigate your digital
            transformation journey. Reach out and let's start building something extraordinary.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}
