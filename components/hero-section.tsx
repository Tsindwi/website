import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Zap, Users } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 animate-fade-in animate-stagger-1">
                <Zap className="w-4 h-4 mr-2 animate-pulse-subtle" />
                Disrupting Traditional Systems
              </div>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight animate-slide-up animate-stagger-2">
                Building Africa's
                <span className="text-primary animate-glow"> Digital Future</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed animate-fade-in animate-stagger-3">
                Tsidwi is transforming government, private, and NGO systems across Africa through innovative technology
                solutions. Starting in Malawi, expanding continent-wide.
              </p>
            </div>

            {/* Motto */}
            <div className="p-6 bg-card rounded-xl border border-border hover-lift animate-scale-in animate-stagger-4">
              <blockquote className="text-lg font-medium text-card-foreground">"Walk the talk"</blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">— Our Motto</cite>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-stagger-4">
              <Button size="lg" className="text-lg px-8 hover-scale group transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent hover-lift">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <ScrollAnimation delay={600}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center hover-scale cursor-default">
                  <div className="text-2xl font-heading font-bold text-primary animate-bounce-subtle">4</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center hover-scale cursor-default">
                  <div className="text-2xl font-heading font-bold text-primary animate-bounce-subtle animate-stagger-1">
                    1
                  </div>
                  <div className="text-sm text-muted-foreground">Country (Growing)</div>
                </div>
                <div className="text-center hover-scale cursor-default">
                  <div className="text-2xl font-heading font-bold text-primary animate-bounce-subtle animate-stagger-2">
                    ∞
                  </div>
                  <div className="text-sm text-muted-foreground">Possibilities</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 bg-card rounded-2xl border border-border p-8 shadow-xl hover-lift">
              <div className="space-y-6">
                <ScrollAnimation delay={200}>
                  <div className="flex items-center space-x-4 hover-scale">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center animate-float">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Continental Vision</h3>
                      <p className="text-muted-foreground">Expanding across Africa</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={400}>
                  <div className="flex items-center space-x-4 hover-scale">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center animate-float animate-stagger-2">
                      <Zap className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Innovation First</h3>
                      <p className="text-muted-foreground">Cutting-edge solutions</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={600}>
                  <div className="flex items-center space-x-4 hover-scale">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center animate-float animate-stagger-4">
                      <Users className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Community Impact</h3>
                      <p className="text-muted-foreground">Transforming systems</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle animate-stagger-3" />
          </div>
        </div>
      </div>
    </section>
  )
}
