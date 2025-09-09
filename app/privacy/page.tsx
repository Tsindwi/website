import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata = {
  title: "Privacy Policy - Tsidwi",
  description: "Privacy Policy for Tsidwi - How we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 py-16">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Privacy Policy</h1>

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
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Tsidwi ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                    how we collect, use, disclose, and safeguard your information when you visit our website or use our
                    services. We are based in Malawi and operate across Africa, helping organizations transform through
                    technology.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2">Personal Information</h3>
                      <ul className="list-disc list-inside text-slate-700 space-y-1">
                        <li>Name and contact information (email, phone number)</li>
                        <li>Company or organization details</li>
                        <li>Project requirements and business needs</li>
                        <li>Communication preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2">Technical Information</h3>
                      <ul className="list-disc list-inside text-slate-700 space-y-1">
                        <li>IP address and browser information</li>
                        <li>Website usage patterns and analytics</li>
                        <li>Device and operating system information</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-slate-700 space-y-2">
                    <li>Provide and improve our technology services</li>
                    <li>Respond to inquiries and support requests</li>
                    <li>Send relevant updates about our services and industry insights</li>
                    <li>Analyze website performance and user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Information Sharing</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information. We may share information in these limited
                    circumstances:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 space-y-2">
                    <li>With trusted service providers who assist in our operations</li>
                    <li>When required by law or to protect our legal rights</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Security</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. However, no internet
                    transmission is completely secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-slate-700 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>File a complaint with relevant data protection authorities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact Us</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-slate-700">
                      <strong>Email:</strong> privacy@tsidwi.com
                    </p>
                    <p className="text-slate-700">
                      <strong>Address:</strong> Lilongwe, Malawi
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Changes to This Policy</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may update this Privacy Policy periodically. We will notify you of significant changes by posting
                    the new policy on our website with an updated effective date.
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
