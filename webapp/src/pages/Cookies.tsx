import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cookie Policy — SimilarCasino",
            description: "SimilarCasino cookie policy explaining what cookies we use and how to manage them",
            url: "https://www.similarcasino.com/cookies",
          }),
        }}
      />

      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-sans mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary-foreground">Cookie Policy</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">
                Legal
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                Cookie Policy
              </h1>
              <p className="mt-4 text-primary-foreground/80 font-sans text-sm">
                Last updated: March 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="prose prose-invert max-w-none font-sans text-muted-foreground space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-base leading-relaxed">
                This Cookie Policy explains what cookies are, how SimilarCasino uses them, and how you can manage your cookie preferences. By using our site, you consent to our use of cookies as described in this policy.
              </p>
            </div>

            {/* What Are Cookies */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                What Are Cookies?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website. Cookies allow websites to remember your preferences, track your activity, and improve your experience. Each cookie typically contains:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>A name and value that identifies it</li>
                <li>The domain that set it</li>
                <li>An expiration date (when it expires and is deleted)</li>
                <li>A flag indicating whether it should only be sent over secure (HTTPS) connections</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Cookies are not executable files and cannot directly transmit viruses or malware. However, they can be used to track browsing behavior.
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Types of Cookies We Use
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Essential (Strictly Necessary) Cookies</h3>
                  <p className="text-base leading-relaxed">
                    These cookies are required for basic website functionality. They enable you to navigate the site, use forms, maintain your session, and access secure areas. Essential cookies do not require consent and cannot be disabled.
                  </p>
                  <div className="text-sm bg-secondary border border-border rounded p-3 mt-3">
                    <p><strong>Examples:</strong> Session ID, form inputs, CSRF token, user preferences</p>
                    <p className="mt-2"><strong>Retention:</strong> Until you close your browser or logout</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Analytics Cookies</h3>
                  <p className="text-base leading-relaxed">
                    We use analytics cookies to understand how visitors use our site: which pages are popular, how long users stay, bounce rates, etc. This helps us improve our content and user experience. We use Google Analytics to track this data. Analytics cookies are optional and require your consent.
                  </p>
                  <div className="text-sm bg-secondary border border-border rounded p-3 mt-3">
                    <p><strong>Provider:</strong> Google Analytics</p>
                    <p className="mt-2"><strong>Data Tracked:</strong> Pages visited, time on page, traffic sources, device type, browser, IP address (anonymized)</p>
                    <p className="mt-2"><strong>Retention:</strong> 26 months</p>
                    <p className="mt-2"><strong>Opt-out:</strong> Use <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a></p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Affiliate Tracking Cookies</h3>
                  <p className="text-base leading-relaxed">
                    When you click a casino link on our site, we place an affiliate tracking cookie in your browser. This allows us to attribute your signup or deposit to our referral and earn our affiliate commission. Affiliate cookies are optional and require your consent.
                  </p>
                  <div className="text-sm bg-secondary border border-border rounded p-3 mt-3">
                    <p><strong>Purpose:</strong> Track which casino signups came from our site</p>
                    <p className="mt-2"><strong>Data Tracked:</strong> Click date/time, casino ID, referral source</p>
                    <p className="mt-2"><strong>Providers:</strong> Individual casino affiliate programs</p>
                    <p className="mt-2"><strong>Retention:</strong> Typically 30-90 days</p>
                    <p className="mt-2"><strong>Note:</strong> These cookies are placed by the casino, not by SimilarCasino directly. Deleting our tracking cookie does not affect your casino account or gameplay.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Advertising & Marketing Cookies</h3>
                  <p className="text-base leading-relaxed">
                    We may use advertising cookies to show you relevant ads as you browse the web after leaving our site. These cookies help us understand which promotional content is effective. They are optional and require your consent.
                  </p>
                  <div className="text-sm bg-secondary border border-border rounded p-3 mt-3">
                    <p><strong>Purpose:</strong> Serve targeted advertising and measure campaign effectiveness</p>
                    <p className="mt-2"><strong>Providers:</strong> Google Ads, Facebook Ads, and other ad networks</p>
                    <p className="mt-2"><strong>Retention:</strong> Varies by provider (typically 30-365 days)</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Third-Party Cookies</h3>
                  <p className="text-base leading-relaxed">
                    Some third-party services (Google, Facebook, casino partners) may set their own cookies on our site. We do not control these cookies. Please review their privacy policies for information on how they use your data.
                  </p>
                  <div className="text-sm bg-secondary border border-border rounded p-3 mt-3">
                    <p><strong>Third Parties:</strong> Google Analytics, Facebook Pixel, Casino Affiliate Networks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Table */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Cookie Summary Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="px-4 py-2 text-left text-foreground font-semibold border-b border-border">Cookie Name</th>
                      <th className="px-4 py-2 text-left text-foreground font-semibold border-b border-border">Purpose</th>
                      <th className="px-4 py-2 text-left text-foreground font-semibold border-b border-border">Type</th>
                      <th className="px-4 py-2 text-left text-foreground font-semibold border-b border-border">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="font-sans">
                    <tr className="border-b border-border">
                      <td className="px-4 py-2 text-muted-foreground">_ga</td>
                      <td className="px-4 py-2 text-muted-foreground">Google Analytics tracking</td>
                      <td className="px-4 py-2 text-muted-foreground">Analytics</td>
                      <td className="px-4 py-2 text-muted-foreground">2 years</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2 text-muted-foreground">_gid</td>
                      <td className="px-4 py-2 text-muted-foreground">Google Analytics session ID</td>
                      <td className="px-4 py-2 text-muted-foreground">Analytics</td>
                      <td className="px-4 py-2 text-muted-foreground">24 hours</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2 text-muted-foreground">sim_affiliate</td>
                      <td className="px-4 py-2 text-muted-foreground">Affiliate tracking</td>
                      <td className="px-4 py-2 text-muted-foreground">Affiliate</td>
                      <td className="px-4 py-2 text-muted-foreground">90 days</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2 text-muted-foreground">session_id</td>
                      <td className="px-4 py-2 text-muted-foreground">User session</td>
                      <td className="px-4 py-2 text-muted-foreground">Essential</td>
                      <td className="px-4 py-2 text-muted-foreground">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-muted-foreground">fbp</td>
                      <td className="px-4 py-2 text-muted-foreground">Facebook Pixel tracking</td>
                      <td className="px-4 py-2 text-muted-foreground">Advertising</td>
                      <td className="px-4 py-2 text-muted-foreground">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* How to Manage Cookies */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                How to Manage Your Cookies
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Browser Settings</h3>
                  <p className="text-base leading-relaxed mb-2">
                    You can manage cookies directly in your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-base">
                    <li>Block all cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Allow only certain types of cookies</li>
                    <li>Delete cookies after you close the browser</li>
                    <li>Delete existing cookies</li>
                  </ul>
                  <p className="text-base leading-relaxed mt-3 text-sm">
                    Note: Disabling essential cookies may prevent parts of our site from functioning properly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cookie Banner</h3>
                  <p className="text-base leading-relaxed">
                    When you first visit SimilarCasino, you'll see a cookie consent banner. You can choose to accept or reject non-essential cookies. You can change your preferences at any time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Opt-Out Tools</h3>
                  <p className="text-base leading-relaxed mb-2">
                    Popular opt-out options:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base">
                    <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance Opt-Out</a> — Opt out of behavioral advertising</li>
                    <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-Out</a> — Prevent Google Analytics tracking</li>
                    <li>Facebook Privacy Settings — Control Facebook tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Do Not Track */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Do Not Track (DNT)
              </h2>
              <p className="text-base leading-relaxed">
                Some browsers include a "Do Not Track" feature. Currently, there is no industry standard for recognizing DNT signals, and we do not respond to DNT browser signals. However, you can use the methods above to control cookies and tracking.
              </p>
            </div>

            {/* International Regulations */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                GDPR and CCPA Compliance
              </h2>
              <p className="text-base leading-relaxed mb-4">
                For users in the European Union, we comply with the General Data Protection Regulation (GDPR) and the ePrivacy Directive. We:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base mb-4">
                <li>Only set non-essential cookies with your prior consent</li>
                <li>Provide clear information about our cookie use</li>
                <li>Allow you to withdraw consent at any time</li>
              </ul>
              <p className="text-base leading-relaxed">
                For California residents, we comply with the California Consumer Privacy Act (CCPA) and provide you with the right to know, delete, and opt-out of the sale of personal information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-base leading-relaxed">
                We may update this Cookie Policy periodically to reflect changes in our cookie practices or legal requirements. We will notify you of significant changes by posting the updated policy on our site and updating the "Last Updated" date. Your continued use of our site after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-base leading-relaxed mb-4">
                If you have questions about this Cookie Policy or our cookie practices, contact us:
              </p>
              <div className="bg-secondary border border-border rounded-lg p-4 text-base">
                <p className="mb-2"><strong>Email:</strong> privacy@similarcasino.com</p>
                <p className="mb-2"><strong>General Inquiries:</strong> contact@similarcasino.com</p>
                <p><strong>Website:</strong> similarcasino.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
