import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />

      <ServicesGrid />

      <ScrollAnimation>
        <section className="py-24 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance animate-slide-up">
              Ready to Transform Your Systems?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty animate-fade-in animate-stagger-2">
              Join the digital revolution in Africa. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in animate-stagger-3">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-scale transition-all duration-300">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-medium hover-lift transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </main>
  )
}
