import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MapPin, Mail, Phone, Linkedin, Twitter, Github, ArrowRight } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <ScrollAnimation>
            <div className="lg:col-span-1 space-y-4">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-primary-foreground font-heading font-bold text-lg">T</span>
                </div>
                <span className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  Tsidwi
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed">
                Building Africa's digital future through innovative technology solutions. From Malawi to the continent.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover-scale" asChild>
                  <Link
                    href="https://linkedin.com/company/tsidwi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Tsidwi on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover-scale animate-stagger-1" asChild>
                  <Link
                    href="https://twitter.com/tsidwi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Tsidwi on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover-scale animate-stagger-2" asChild>
                  <Link
                    href="https://github.com/Tsindwi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Tsidwi on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Quick Links - Added blog, case studies, careers, team links moved from navigation */}
          <ScrollAnimation delay={100}>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Company</h3>
              <nav className="space-y-3">
                <Link
                  href="/about"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Our Team
                </Link>
                <Link
                  href="/services"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Services
                </Link>
                <Link
                  href="/careers"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </ScrollAnimation>

          {/* Resources - Added new section for blog and case studies */}
          <ScrollAnimation delay={200}>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Resources</h3>
              <nav className="space-y-3">
                <Link
                  href="/blog"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Blog & Insights
                </Link>
                <Link
                  href="/case-studies"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Case Studies
                </Link>
                <Link
                  href="/services"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Government Solutions
                </Link>
                <Link
                  href="/services"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Private Sector
                </Link>
                <Link
                  href="/services"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  NGO Optimization
                </Link>
              </nav>
            </div>
          </ScrollAnimation>

          {/* Contact & Newsletter */}
          <ScrollAnimation delay={300}>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Stay Connected</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground hover-scale group cursor-default">
                  <MapPin className="h-4 w-4 flex-shrink-0 animate-bounce-subtle" />
                  <span>Lilongwe, Malawi</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground hover-scale group cursor-default">
                  <Mail className="h-4 w-4 flex-shrink-0 animate-bounce-subtle animate-stagger-1" />
                  <span>hello@tsidwi.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground hover-scale group cursor-default">
                  <Phone className="h-4 w-4 flex-shrink-0 animate-bounce-subtle animate-stagger-2" />
                  <span>+265 (0) 123 456 789</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Subscribe to our newsletter</p>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter your email"
                    className="text-sm transition-all duration-300 focus:scale-105"
                  />
                  <Button size="sm" className="px-3 hover-scale group">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <ScrollAnimation delay={400}>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <p>&copy; 2025 Tsidwi. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-primary animate-glow">"Walk the talk"</span> - Made with ❤️ in Africa
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}

export default Footer
