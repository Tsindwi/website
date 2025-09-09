import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const teamMembers = [
  {
    name: "Roy Chanunkha",
    role: "Co-Founder & CEO",
    expertise: "Strategic Leadership",
    description:
      "Visionary leader driving Tsidwi's mission to transform Africa's digital landscape. Leads strategic partnerships and oversees company growth across the continent.",
    skills: ["Strategic Planning", "Business Development", "Leadership", "Partnership Building"],
    linkedin: "https://linkedin.com/in/roy-chanunkha",
    twitter: "https://twitter.com/roy_chanunkha",
    github: "https://github.com/Tsindwi",
  },
  {
    name: "Kyton Thaundi",
    role: "Co-Founder & CTO",
    expertise: "Technical Innovation",
    description:
      "Technical architect behind Tsidwi's cutting-edge solutions. Leads engineering teams and ensures our technology stack remains at the forefront of innovation.",
    skills: ["Software Architecture", "Team Leadership", "Cloud Computing", "System Design"],
    linkedin: "https://linkedin.com/in/kyton-thaundi",
    twitter: "https://twitter.com/kyton_thaundi",
    github: "https://github.com/Tsindwi",
  },
  {
    name: "Chigonjetso Chimpweya",
    role: "Co-Founder & CPO",
    expertise: "Product Strategy",
    description:
      "Product visionary who transforms complex problems into elegant solutions. Ensures every product we build truly serves the needs of African organizations.",
    skills: ["Product Management", "UX Strategy", "Market Research", "Innovation"],
    linkedin: "https://linkedin.com/in/chigonjetso-chimpweya",
    twitter: "https://twitter.com/chigonjetso_chimpweya",
    github: "https://github.com/Tsindwi",
  },
  {
    name: "Mwatha Bwanali",
    role: "Co-Founder & COO",
    expertise: "Operations Excellence",
    description:
      "Operations expert who ensures seamless execution of our vision. Manages day-to-day operations and builds the systems that scale our impact across Africa.",
    skills: ["Operations Management", "Process Optimization", "Quality Assurance", "Scaling"],
    linkedin: "https://linkedin.com/in/mwatha-bwanali",
    twitter: "https://twitter.com/mwatha_bwanali",
    github: "https://github.com/Tsindwi",
  },
]

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
}

export function TeamGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">Our Founding Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Four visionary leaders united by a shared mission to bring Africa to technological parity with the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <Avatar className="w-24 h-24 sm:w-32 sm:h-32 group-hover:scale-105 transition-transform">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-bold text-lg sm:text-xl">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-2">{member.role}</p>
                      <Badge variant="secondary" className="text-xs">
                        {member.expertise}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">{member.description}</p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Core Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                        <Link
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Twitter profile`}
                        >
                          <Twitter className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                        <Link
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${member.name}'s work on Tsidwi GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
