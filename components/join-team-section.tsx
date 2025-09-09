import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Rocket, Heart } from "lucide-react"

export function JoinTeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're always looking for passionate individuals who share our vision of transforming Africa through
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Collaborative Culture</h3>
              <p className="text-muted-foreground text-sm">
                Work alongside passionate innovators in a supportive environment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground text-sm">Expand your skills while building solutions that matter.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Meaningful Impact</h3>
              <p className="text-muted-foreground text-sm">Contribute to Africa's technological transformation.</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Ready to Walk the Talk?</h3>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty mb-6">
              If you're passionate about technology and believe in Africa's potential, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Send Us Your CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
