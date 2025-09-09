import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@tsidwi.com",
    description: "Send us an email anytime",
    action: "mailto:hello@tsidwi.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+265 (0) 123 456 789",
    description: "Mon-Fri 8AM-6PM CAT",
    action: "tel:+2651234567890",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Lilongwe, Malawi",
    description: "Central Region, Malawi",
    action: "#",
  },
]

export function ContactInfo() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="font-heading font-bold text-3xl mb-4">Get In Touch</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're here to help you transform your organization. Choose the best way to reach us, and we'll respond
              promptly.
            </p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg mb-1">{method.title}</h3>
                        <p className="text-foreground font-medium mb-1">{method.details}</p>
                        <p className="text-muted-foreground text-sm">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Office Hours */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Office Hours</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">Monday - Friday: 8:00 AM - 6:00 PM CAT</p>
                    <p className="text-foreground">Saturday: 9:00 AM - 2:00 PM CAT</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Follow Our Journey</h3>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="bg-transparent" asChild>
                <Link href="https://linkedin.com/company/tsidwi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent" asChild>
                <Link href="https://twitter.com/tsidwi" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent" asChild>
                <Link href="https://github.com/Tsindwi" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Response Promise */}
          <div className="bg-primary rounded-xl p-6 text-primary-foreground">
            <h3 className="font-heading font-semibold text-lg mb-2">Our Promise</h3>
            <p className="text-sm opacity-90">
              We respond to all inquiries within 24 hours. For urgent matters, call us directly during business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
