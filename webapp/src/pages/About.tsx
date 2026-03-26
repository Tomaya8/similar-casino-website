import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SimilarCasino",
            description: "Independent online casino reviews and comparison",
            url: "https://www.similarcasino.com",
            logo: "https://www.similarcasino.com/logo.png",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              email: "contact@similarcasino.com",
            },
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
              <span className="text-primary-foreground">About</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">
                About Us
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight max-w-3xl">
                Independent Casino Reviews You Can Trust
              </h1>
              <p className="mt-4 text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl">
                SimilarCasino is your independent guide to the world's best online casinos, built on transparency and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 py-12 md:py-16 font-sans text-muted-foreground">
          {/* Mission */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed mb-4">
              At SimilarCasino, we believe players deserve honest, independent information when choosing an online casino. Since 2026, we've been dedicated to providing unbiased reviews, detailed comparisons, and educational guides that empower players to make informed decisions.
            </p>
            <p className="text-base leading-relaxed">
              We test every casino ourselves, evaluate games, bonuses, customer support, and safety features, then share our findings freely. Our reviews aren't influenced by affiliate commissions—we disclose our revenue model transparently because your trust matters more than quick profits.
            </p>
          </div>

          {/* How We Work */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Our review methodology is rigorous and standardized. We evaluate each casino across six core criteria: Safety & Licensing (40% weight), Game Library (20%), Bonus Value (15%), Payout Speed (10%), Mobile Experience (10%), and Customer Support (5%). We use multiple testing accounts, verify licences directly with regulators, and update our ratings quarterly as new information emerges.
            </p>
            <p className="text-base leading-relaxed">
              Every review undergoes peer review by our editorial team before publication. We document our findings transparently, explaining exactly why we awarded each rating and score. Our rating scale is consistent: 5 stars means excellent, 1 star means poor. No casino pays for a higher rating.
            </p>
          </div>

          {/* Team */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-base leading-relaxed mb-4">
              SimilarCasino is staffed by casino industry veterans, licensed affiliates, and professional reviewers who've spent years evaluating online gaming platforms. Our editors collectively have over 50 years of experience in casino compliance, player protection, and gaming regulation. We work with jurisdictional experts to ensure our guides reflect current laws and licensing standards.
            </p>
            <p className="text-base leading-relaxed">
              We also consult with independent player advocates, responsible gambling organizations, and legal experts to keep our content accurate and fair. Our mission attracts people who care about player safety first—not casino profits.
            </p>
          </div>

          {/* Values */}
          <div className="bg-secondary border-l-4 border-primary rounded-lg p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <ul className="space-y-3 text-base">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-foreground">Transparency:</strong> We disclose our affiliate relationships openly and explain our review methodology in detail.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-foreground">Independence:</strong> No casino pays us for reviews. Our ratings are based purely on testing and player feedback.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-foreground">Player Safety:</strong> We prioritize player protection above all else, flagging unlicensed operators and deceptive practices.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-foreground">Accuracy:</strong> Every claim we make is fact-checked, sourced, and updated regularly to reflect changes.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-foreground">Accessibility:</strong> We write for everyone, from casual players to high-rollers, in plain language without jargon.
                </div>
              </li>
            </ul>
          </div>

          {/* Age Disclaimer */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ Age Restriction Notice</p>
            <p className="text-sm text-amber-900">
              SimilarCasino is intended for adults aged 18 and over only. Online gambling may be illegal in your jurisdiction. It is your responsibility to verify the legality of online gambling in your location before visiting any casino. We do not condone problem gambling and encourage all players to gamble responsibly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
