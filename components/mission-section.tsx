import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Heart } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">Our Mission & Vision</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We exist to disrupt stagnant systems and accelerate Africa's journey to technological leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="font-heading text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To disrupt traditional government, private, and NGO systems across Africa through innovative technology
                solutions that drive efficiency, transparency, and progress.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <CardTitle className="font-heading text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                An Africa that leads the global technology landscape, where every system is optimized, every process is
                efficient, and every citizen benefits from technological advancement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="font-heading text-xl">Our Purpose</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To prove that Africa doesn't need to catch up—we're here to set the pace and show the world what true
                innovation looks like when passion meets purpose.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Walk the Talk Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">"Walk the Talk"</h3>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty">
              Our motto isn't just words—it's our commitment. We don't just promise change; we deliver it. We don't just
              envision the future; we build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
