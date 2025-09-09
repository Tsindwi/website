import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Target, Rocket } from "lucide-react"

export function StorySection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">
                Our Story Begins in Malawi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In the heart of Africa, four like-minded individuals came together with a shared frustration: watching
                brilliant minds and innovative ideas struggle against outdated systems that stifle progress.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We saw government processes that could be streamlined, private sector inefficiencies that technology
                could solve, and NGO operations that could reach more people with better tools. Most importantly, we saw
                an entire continent with untapped potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That's when Tsidwi was born—not just as a company, but as a movement to prove that Africa doesn't need
                to catch up with the West. We're here to set the pace.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Starting Point</h3>
                <p className="text-muted-foreground">Malawi, the warm heart of Africa</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Team Size</h3>
                <p className="text-muted-foreground">4 passionate innovators</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Focus Areas</h3>
                <p className="text-muted-foreground">Gov, Private & NGO sectors</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Vision</h3>
                <p className="text-muted-foreground">Continental expansion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
