import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "./scroll-animation"

export function TeamHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            Meet Our Team
          </Badge>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-balance mb-6 animate-slide-up animate-stagger-1">
            The Visionaries Behind <span className="text-primary animate-glow">Tsidwi</span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto animate-fade-in animate-stagger-2">
            Four passionate innovators united by a shared vision: to prove that Africa doesn't need to catch up with the
            world—we're here to lead it. Meet the minds disrupting traditional systems across the continent.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}
