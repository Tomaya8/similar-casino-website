import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms & Conditions — SimilarCasino",
            description: "SimilarCasino terms of use and conditions of service",
            url: "https://www.similarcasino.com/terms",
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
              <span className="text-primary-foreground">Terms & Conditions</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">
                Legal
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                Terms & Conditions
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
                These Terms & Conditions ("Terms") govern your use of the SimilarCasino website, including all content, features, and services offered (the "Site"). By accessing or using SimilarCasino, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our Site.
              </p>
            </div>

            {/* 1. Acceptance of Terms */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-base leading-relaxed">
                By using SimilarCasino, you accept and agree to be legally bound by these Terms. We reserve the right to modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes acceptance of the updated Terms. We recommend reviewing this page regularly to stay informed of any updates.
              </p>
            </div>

            {/* 2. Site Description and Use License */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Site Description and Use License
              </h2>
              <p className="text-base leading-relaxed mb-4">
                SimilarCasino is an informational and comparison website providing independent reviews, guides, and ratings of online casinos. We grant you a limited, non-exclusive, revocable license to access and use the Site for personal, non-commercial purposes only. This license grants you the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>View and read our casino reviews, guides, and articles</li>
                <li>Navigate our site and use its features</li>
                <li>Contact us via our contact form or email</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                You may not reproduce, distribute, transmit, modify, or use our content for commercial purposes without explicit written permission.
              </p>
            </div>

            {/* 3. Affiliate Disclaimer */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Affiliate Disclaimer
              </h2>
              <p className="text-base leading-relaxed">
                SimilarCasino operates as an affiliate marketing site. We earn commissions when users click our links and sign up for casino accounts. While affiliate relationships may influence which casinos we feature most prominently, our reviews and ratings are independent and not determined by commission amounts. We disclose our affiliate relationships transparently and recommend reviewing our <Link to="/disclosure" className="text-primary hover:underline">Affiliate Disclosure</Link> for full details on how we earn revenue and maintain editorial independence.
              </p>
            </div>

            {/* 4. No Gambling Services */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. No Gambling Services Provided
              </h2>
              <p className="text-base leading-relaxed">
                SimilarCasino does not provide gambling services, accept bets, hold funds, or offer casino games. We are an informational website only. All casino links on our site direct to third-party operators. When you click a casino link and create an account, you are entering a direct relationship with that casino, not with SimilarCasino. The casinos you access are independent operators with their own terms, privacy policies, and payment processing. We are not liable for your interactions with third-party casinos or any losses incurred while gambling.
              </p>
            </div>

            {/* 5. Age Restriction (18+) */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Age Restriction (18+)
              </h2>
              <p className="text-base leading-relaxed mb-4">
                SimilarCasino is intended for users aged 18 years and older only. By using our Site, you represent and warrant that you are at least 18 years of age and of legal age to gamble in your jurisdiction. We do not permit access to individuals under 18. If we become aware that a user is under 18, we will immediately suspend their access.
              </p>
              <p className="text-base leading-relaxed">
                Online gambling may be illegal or restricted in your location. It is your sole responsibility to verify the legality of online gambling in your jurisdiction before using our site or visiting any casino.
              </p>
            </div>

            {/* 6. Intellectual Property Rights */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Intellectual Property Rights
              </h2>
              <p className="text-base leading-relaxed">
                All content on SimilarCasino, including text, graphics, logos, images, articles, reviews, and software ("Content"), is the intellectual property of SimilarCasino or licensed third parties. This Content is protected by copyright laws and international treaties. You may not reproduce, distribute, display, or transmit any Content without our prior written permission. Unauthorized use of our Content may violate copyright, trademark, and other laws. Permitted use is limited to personal viewing only.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIMILARCASINO AND ITS OWNERS, OFFICERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE OUR SITE.
              </p>
              <p className="text-base leading-relaxed mb-4">
                This includes but is not limited to damages for loss of profits, loss of data, loss of business opportunity, or any gambling losses incurred at third-party casinos. Our total liability for any claim shall not exceed $100 USD.
              </p>
              <p className="text-base leading-relaxed">
                We provide information and reviews "as is" without any warranty. We make no warranty that our Site will be uninterrupted, error-free, or secure, or that defects will be corrected.
              </p>
            </div>

            {/* 8. Links to Third Parties */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                8. Links to Third Parties
              </h2>
              <p className="text-base leading-relaxed">
                Our Site contains links to third-party websites, including casino operators and gaming platforms. We do not control these external sites and are not responsible for their content, accuracy, policies, or practices. Links do not constitute an endorsement or recommendation. When you click a third-party link, you leave SimilarCasino and enter the third party's site on their terms and at your own risk. Always review a casino's terms, privacy policy, and licensing before depositing funds.
              </p>
            </div>

            {/* 9. User Conduct */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                9. User Conduct
              </h2>
              <p className="text-base leading-relaxed mb-4">
                When using SimilarCasino, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Violate any applicable laws or regulations</li>
                <li>Use the Site for unlawful purposes or to solicit illegal activity</li>
                <li>Infringe on any third-party intellectual property rights</li>
                <li>Harass, threaten, defame, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Spam, phish, or engage in abusive conduct</li>
              </ul>
            </div>

            {/* 10. Modifications to the Site */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                10. Modifications to the Site
              </h2>
              <p className="text-base leading-relaxed">
                We reserve the right to modify, suspend, or discontinue SimilarCasino or any features at any time without notice or liability. We may update our reviews, remove casinos, add new content, or change our Site's functionality without prior notification.
              </p>
            </div>

            {/* 11. Governing Law */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                11. Governing Law and Jurisdiction
              </h2>
              <p className="text-base leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the jurisdiction in which SimilarCasino is operated, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be exclusively brought in the courts of that jurisdiction, and you consent to the personal jurisdiction and venue of such courts.
              </p>
            </div>

            {/* 12. Severability */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                12. Severability
              </h2>
              <p className="text-base leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, that provision shall be severed, and the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            {/* 13. Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                13. Contact Information
              </h2>
              <p className="text-base leading-relaxed mb-4">
                For questions about these Terms & Conditions, contact us at:
              </p>
              <div className="bg-secondary border border-border rounded-lg p-4 text-base">
                <p className="mb-2"><strong>Email:</strong> contact@similarcasino.com</p>
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
