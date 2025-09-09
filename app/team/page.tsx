import { Navigation } from "@/components/navigation"
import { TeamHero } from "@/components/team-hero"
import { TeamGrid } from "@/components/team-grid"
import { TeamValues } from "@/components/team-values"
import { JoinTeamSection } from "@/components/join-team-section"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TeamHero />
      <TeamGrid />
      <TeamValues />
      <JoinTeamSection />
      <Footer />
    </main>
  )
}
