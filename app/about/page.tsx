import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"
import { ValuesSection } from "@/components/values-section"
import { StorySection } from "@/components/story-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <Footer />
    </main>
  )
}
