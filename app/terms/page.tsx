import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata = {
  title: "Terms of Service - Tsidwi",
  description: "Terms of Service for Tsidwi - Legal terms and conditions for using our technology services.",
}

export default function TermsOfService() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 py-16">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Terms of Service</h1>

              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                <div className="text-sm text-slate-600 mb-8">
                  <p>
                    <strong>Effective Date:</strong> January 1, 2025
                  </p>
                  <p>
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>
                </div>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-slate-700 leading-relaxed">
                    By accessing or using Tsidwi's website and services, you agree to be bound by these Terms of Service
                    and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. About Tsidwi</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Tsidwi is a technology company based in Malawi, dedicated to transforming government, private
                    sector, and NGO systems across Africa through innovative technology solutions. Our mission is to
                    bring African organizations to technological parity with global standards.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Services</h2>
                  <div className="space-y-4">
                    <p className="text-slate-700 leading-relaxed">We provide:</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-2">
                      <li>Custom software development and system integration</li>
                      <li>Digital transformation consulting</li>
                      <li>Government and enterprise technology solutions</li>
                      <li>NGO system optimization and modernization</li>
                      <li>Technical training and capacity building</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. User Responsibilities</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">When using our services, you agree to:</p>
                  <ul className="list-disc list-inside text-slate-700 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Maintain the confidentiality of any access credentials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Intellectual Property</h2>
                  <p className="text-slate-700 leading-relaxed">
                    All content, software, and materials provided by Tsidwi are protected by intellectual property laws.
                    Custom solutions developed for clients will be governed by separate project agreements that specify
                    ownership and licensing terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibent text-slate-900 mb-4">6. Service Availability</h2>
                  <p className="text-slate-700 leading-relaxed">
                    While we strive to provide reliable services, we do not guarantee uninterrupted availability. We
                    reserve the right to modify, suspend, or discontinue services with reasonable notice when possible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-slate-700 leading-relaxed">
                    To the maximum extent permitted by law, Tsidwi shall not be liable for any indirect, incidental,
                    special, or consequential damages arising from the use of our services. Our total liability shall
                    not exceed the amount paid for the specific service in question.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Governing Law</h2>
                  <p className="text-slate-700 leading-relaxed">
                    These terms are governed by the laws of Malawi. Any disputes will be resolved through appropriate
                    legal channels in Malawi, with preference for amicable resolution through mediation when possible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Contact Information</h2>
                  <p className="text-slate-700 leading-relaxed">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-slate-700">
                      <strong>Email:</strong> legal@tsidwi.com
                    </p>
                    <p className="text-slate-700">
                      <strong>Address:</strong> Lilongwe, Malawi
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Changes to Terms</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may update these terms periodically. Continued use of our services after changes constitutes
                    acceptance of the new terms. We will provide reasonable notice of significant changes.
                  </p>
                </section>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </main>
      <Footer />
    </>
  )
}
