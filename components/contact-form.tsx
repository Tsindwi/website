"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <Card className="bg-card border-border hover-lift animate-scale-in">
            <CardHeader className="animate-fade-in">
              <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
              <p className="text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <ScrollAnimation delay={100}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:scale-105"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:scale-105"
                        required
                      />
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={200}>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Your company or organization"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={300}>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                      <SelectTrigger className="transition-all duration-300 hover:scale-105">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="government">Government Digital Transformation</SelectItem>
                        <SelectItem value="private">Private Sector Solutions</SelectItem>
                        <SelectItem value="ngo">NGO System Optimization</SelectItem>
                        <SelectItem value="custom">Custom Software Development</SelectItem>
                        <SelectItem value="consulting">Technology Consulting</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={400}>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, challenges, or how we can help..."
                      rows={6}
                      className="transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={500}>
                  <div className="flex items-center space-x-2 hover-scale">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                      className="transition-all duration-300"
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for updates on African tech innovation
                    </Label>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={600}>
                  <Button type="submit" size="lg" className="w-full hover-scale group animate-glow">
                    Send Message
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </ScrollAnimation>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}
