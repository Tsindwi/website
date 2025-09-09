import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "./scroll-animation"

export function AboutHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            About Tsidwi
          </Badge>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-balance mb-6 animate-slide-up animate-stagger-1">
            We Are the <span className="text-primary animate-glow">Roof</span> of Innovation
          </h1>

          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto animate-fade-in animate-stagger-2">
            Tsidwi, meaning "Roof" in Chichewa, represents our commitment to providing shelter and foundation for
            Africa's technological transformation. We are four visionaries united by a shared belief that Africa
            deserves to lead, not follow, in the global tech revolution.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}
