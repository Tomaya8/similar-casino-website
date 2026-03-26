import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy — SimilarCasino",
            description: "SimilarCasino privacy policy explaining how we collect, use, and protect your data",
            url: "https://www.similarcasino.com/privacy",
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
              <span className="text-primary-foreground">Privacy Policy</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">
                Legal
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                Privacy Policy
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
                SimilarCasino ("we," "us," or "our") operates the similarcasino.com website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our site. Please read this policy carefully. If you do not agree with our policies and practices, please do not use our site.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Information You Provide Directly</h3>
                  <p className="text-base leading-relaxed">
                    When you use our contact form, newsletter signup, or communicate with us via email, we collect your name, email address, subject line, and message content. This information is used only to respond to your inquiry or manage your newsletter subscription.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                  <p className="text-base leading-relaxed">
                    We automatically collect certain information about your device when you access our site, including IP address, browser type and version, operating system, pages visited, time and date of visits, duration of visits, and referring website. This data is collected via cookies and similar tracking technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We use collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
                <li>To improve our website's functionality, user experience, and content</li>
                <li>To monitor and analyze trends, usage, and activities for marketing purposes</li>
                <li>To detect and prevent fraudulent transactions and other illegal activity</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
            </div>

            {/* 3. Cookies and Tracking Technologies */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Cookies and Tracking Technologies
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We use cookies and similar technologies (pixels, web beacons) to track your activity on our site. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. We use:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base mb-4">
                <li><strong>Essential Cookies:</strong> Required for site functionality (e.g., login, navigation)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand user behavior via Google Analytics</li>
                <li><strong>Advertising/Affiliate Cookies:</strong> Track casino referrals and affiliate commissions</li>
              </ul>
              <p className="text-base leading-relaxed">
                Most browsers allow you to refuse cookies or alert you when cookies are being sent. See our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link> for more details on managing your cookie preferences.
              </p>
            </div>

            {/* 4. Third-Party Links and Affiliate Relationships */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Third-Party Links and Affiliate Relationships
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Our site contains links to third-party casinos and gaming platforms. We earn affiliate commissions when you click our links and sign up for accounts. These third-party sites have their own privacy policies, and we are not responsible for their data practices. When you click an affiliate link, we may place a tracking cookie to attribute your signup or deposit to our referral.
              </p>
              <p className="text-base leading-relaxed">
                We recommend reviewing the privacy policy of any casino before providing personal or financial information. See our <Link to="/disclosure" className="text-primary hover:underline">Affiliate Disclosure</Link> for more information on how we earn revenue.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-base leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption for data in transit, secure servers, and restricted access to personal data. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information, and you use our site at your own risk.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Right to Access:</strong> Request a copy of the data we hold about you</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@similarcasino.com with your request and sufficient information to identify you.
              </p>
            </div>

            {/* 7. Data Retention */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Data Retention
              </h2>
              <p className="text-base leading-relaxed">
                We retain personal data only as long as necessary for the purposes stated in this policy or as required by law. Analytics data is typically retained for 26 months. Contact form submissions are retained for 12 months unless you request deletion. You may request deletion of your data at any time by contacting us.
              </p>
            </div>

            {/* 8. Children's Privacy */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-base leading-relaxed">
                SimilarCasino is not intended for individuals under 18 years of age. We do not knowingly collect personal data from children. If we become aware that we've collected data from a child, we will delete it immediately. If you believe we've collected data from a minor, contact us at privacy@similarcasino.com.
              </p>
            </div>

            {/* 9. Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                9. Contact Information
              </h2>
              <p className="text-base leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, contact us:
              </p>
              <div className="mt-4 bg-secondary border border-border rounded-lg p-4 text-base">
                <p className="mb-2"><strong>Email:</strong> privacy@similarcasino.com</p>
                <p className="mb-2"><strong>General Inquiries:</strong> contact@similarcasino.com</p>
                <p><strong>Website:</strong> similarcasino.com</p>
              </div>
            </div>

            {/* 10. Policy Changes */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes by posting the updated policy on our site and updating the "Last Updated" date. Your continued use of our site after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
