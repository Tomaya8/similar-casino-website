import { ChevronRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Disclosure() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Affiliate Disclosure — SimilarCasino",
            description: "SimilarCasino affiliate disclosure explaining how we earn commissions",
            url: "https://www.similarcasino.com/disclosure",
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
              <span className="text-primary-foreground">Affiliate Disclosure</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">
                Transparency
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                Affiliate Disclosure
              </h1>
              <p className="mt-4 text-primary-foreground/80 font-sans text-base">
                How SimilarCasino earns revenue and maintains editorial independence.
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
                At SimilarCasino, we believe in complete transparency about our business model. This disclosure explains how we earn revenue, how our affiliate relationships work, and most importantly, how we maintain editorial independence to ensure our reviews remain unbiased and serve your interests first.
              </p>
            </div>

            {/* How We Earn Revenue */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                How We Earn Revenue
              </h2>
              <p className="text-base leading-relaxed mb-4">
                SimilarCasino is primarily funded through affiliate commissions. When you click a casino link on our site and subsequently sign up for an account or make a deposit, we earn a commission from that casino. This is our main revenue source and allows us to maintain the site, pay our editorial team, and invest in better tools and content.
              </p>
              <p className="text-base leading-relaxed">
                We do not charge readers any fees or require subscriptions. Our reviews, guides, and comparison tools are free to use. Affiliate commissions are how we sustain our operations while keeping our content accessible to everyone.
              </p>
            </div>

            {/* How Affiliate Links Work */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                How Affiliate Links Work
              </h2>
              <p className="text-base leading-relaxed mb-4">
                When you click on a casino link or button on our site, you're directed to that casino's website via our affiliate link. This special link allows the casino to identify that you came from SimilarCasino. It does not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base mb-4">
                <li>Cost you any extra money (you pay the same as any other customer)</li>
                <li>Affect your gaming experience, bonuses, or account terms</li>
                <li>Require you to disclose that you came from SimilarCasino</li>
                <li>Track personal data beyond your casino signup</li>
              </ul>
              <p className="text-base leading-relaxed">
                Once you have an account with the casino, the commission is determined by your activity (usually based on deposits, losses, or time played). You remain in full control of your account and can withdraw or close it at any time.
              </p>
            </div>

            {/* Independence Statement */}
            <div className="bg-secondary border-l-4 border-primary rounded-lg p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Reviews Are Independent
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Although we earn affiliate commissions, our reviews and ratings are not influenced by commission amounts. Here's how we maintain independence:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Fixed Methodology:</strong> We use the same evaluation criteria for all casinos: Safety & Licensing (40%), Game Library (20%), Bonus Value (15%), Payout Speed (10%), Mobile Experience (10%), and Customer Support (5%).</li>
                <li><strong>No Pay-for-Rating:</strong> Casinos cannot pay for higher ratings or featured placement based on commission offers. Our ratings are based purely on our testing and independent evaluation.</li>
                <li><strong>Transparent Scoring:</strong> We publish our detailed scoring for each casino. You can see exactly why we gave a particular rating.</li>
                <li><strong>Honest About Trade-offs:</strong> If a casino offers a higher commission but performs poorly on our criteria, it receives a low rating. Conversely, excellent casinos with lower commissions get high ratings.</li>
                <li><strong>Regular Updates:</strong> We review our ratings quarterly, and we will downgrade casinos if their performance declines, regardless of affiliate impact.</li>
              </ul>
            </div>

            {/* Commission Tiers */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Commission Structure (General Overview)
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Affiliate commissions in the casino industry vary widely by operator and region. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base mb-4">
                <li><strong>Revenue Share Model:</strong> We receive a percentage of player losses (typically 25-50%) generated from our referrals.</li>
                <li><strong>Deposit Commission:</strong> Some casinos pay per deposit or per registered player rather than a revenue share.</li>
                <li><strong>Tiered Bonuses:</strong> Higher-performing affiliates may receive increased commission rates as they generate more player value.</li>
              </ul>
              <p className="text-base leading-relaxed">
                Commission amounts do not determine our review ratings. A casino that offers a 35% revenue share receives the same impartial evaluation as one offering 20%.
              </p>
            </div>

            {/* Editorial Independence Process */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                How We Maintain Editorial Independence
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We have strict internal processes to prevent affiliate relationships from biasing our reviews:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Separation of Duties</h3>
                  <p className="text-base leading-relaxed">
                    Our editorial team (writers and reviewers) is separate from our business/affiliate team. Editorial staff focus on rating quality; business staff handle partnerships and commissions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Conflict of Interest Guidelines</h3>
                  <p className="text-base leading-relaxed">
                    Staff involved in casino relationships recuse themselves from rating those casinos. Commission information is not shared with reviewers until after ratings are finalized.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Peer Review</h3>
                  <p className="text-base leading-relaxed">
                    Every review is checked by a second editor who verifies that ratings match our methodology and that no affiliate bias is present.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Flagging of Inaccuracies</h3>
                  <p className="text-base leading-relaxed">
                    Players can report inaccuracies in our reviews. If we find an error, we correct it immediately, regardless of affiliate impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Casinos We Don't Promote */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Casinos We Don't Promote
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We actively exclude certain casinos from our site entirely, even if they offer affiliate commissions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Unlicensed Operators:</strong> Casinos operating without valid licenses from recognized regulators</li>
                <li><strong>Poor Safety Records:</strong> Sites with excessive player complaints, unresolved disputes, or license suspensions</li>
                <li><strong>Deceptive Practices:</strong> Casinos with hidden terms, unfair bonus conditions, or predatory gameplay mechanics</li>
                <li><strong>Non-Responsive Support:</strong> Operators with documented issues responding to player complaints</li>
                <li><strong>Slow Payouts:</strong> Casinos with persistent withdrawal delays or payment failures</li>
              </ul>
            </div>

            {/* What We Review */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                What We Actually Review
              </h2>
              <p className="text-base leading-relaxed mb-4">
                For every casino on our site, we independently evaluate:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Licensing and regulatory status (verified with regulators)</li>
                <li>Security certifications and data protection measures</li>
                <li>Game library size, variety, and software providers</li>
                <li>Bonus terms, wagering requirements, and actual value</li>
                <li>Payment method diversity and processing speed</li>
                <li>Mobile app quality and user experience</li>
                <li>Customer support responsiveness (we test it ourselves)</li>
                <li>Player complaint history and resolution rates</li>
                <li>Payment history and withdrawal reliability</li>
              </ul>
            </div>

            {/* Your Rights as a Player */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Your Rights as a Player
              </h2>
              <p className="text-base leading-relaxed mb-4">
                When you click one of our affiliate links and create a casino account:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>You can use the casino freely under their terms (SimilarCasino is not involved in your account)</li>
                <li>You receive any advertised bonuses and promotions</li>
                <li>You are not obligated to reference or mention SimilarCasino</li>
                <li>You can access customer support directly from the casino</li>
                <li>You have the right to withdraw your account and funds at any time</li>
                <li>Our affiliate relationship does not affect your player protections or rights</li>
              </ul>
            </div>

            {/* Concerns and Corrections */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Report Inaccuracies or Concerns
              </h2>
              <p className="text-base leading-relaxed mb-4">
                If you believe one of our reviews is inaccurate, biased, or outdated, please contact us immediately. We take editorial integrity seriously and will investigate any concerns.
              </p>
              <div className="bg-secondary border border-border rounded-lg p-4 text-base mt-4">
                <p className="mb-2"><strong>Email:</strong> contact@similarcasino.com</p>
                <p><strong>Subject:</strong> "Review Accuracy Concern"</p>
              </div>
            </div>

            {/* Questions */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-900 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Questions about our disclosure?</strong> Feel free to reach out to our team at contact@similarcasino.com. We're happy to discuss our affiliate relationships, rating methodology, or any concerns about independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
