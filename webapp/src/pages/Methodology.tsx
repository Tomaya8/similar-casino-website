import { ChevronRight, Star, Shield, Gamepad2, Gift, Zap, Smartphone, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Methodology() {
  const criteria = [
    {
      name: "Safety & Licensing",
      icon: Shield,
      weight: "40%",
      description: "We verify licensing with regulatory bodies (UKGC, MGA, etc.). We check for eCOGRA certification, SSL encryption, responsible gambling tools, and player protection history.",
    },
    {
      name: "Game Library",
      icon: Gamepad2,
      weight: "20%",
      description: "We evaluate the breadth and depth of games: number of slots, table games, live casino games, and software providers. Quality over quantity—diverse game selection from reputable providers scores higher.",
    },
    {
      name: "Bonus Value",
      icon: Gift,
      weight: "15%",
      description: "We analyze welcome bonuses, ongoing promotions, and VIP programs. We assess actual value by calculating effective return after wagering requirements, not just headline amounts.",
    },
    {
      name: "Payout Speed",
      icon: Zap,
      weight: "10%",
      description: "We test withdrawal processing times across multiple payment methods. Fast, reliable payouts earn top marks. We flag casinos with documented withdrawal delays.",
    },
    {
      name: "Mobile Experience",
      icon: Smartphone,
      weight: "10%",
      description: "We evaluate the mobile app and responsive design. We test game performance, navigation, and usability on iOS and Android devices.",
    },
    {
      name: "Customer Support",
      icon: Headphones,
      weight: "5%",
      description: "We test support responsiveness, availability (24/7 vs. limited hours), and language support. We assess quality of answers and ability to resolve issues.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "How We Review Casinos — SimilarCasino",
            description: "Learn about SimilarCasino's casino review methodology and rating criteria",
            url: "https://www.similarcasino.com/methodology",
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
              <span className="text-primary-foreground">How We Review</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">
                Review Methodology
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight max-w-2xl">
                How We Rate Online Casinos
              </h1>
              <p className="mt-4 text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl">
                Our transparent, standardized methodology ensures fair and unbiased casino ratings.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          {/* Introduction */}
          <div className="mb-12 font-sans text-muted-foreground">
            <p className="text-base leading-relaxed">
              At SimilarCasino, we don't rely on hearsay or marketing claims. We test every casino ourselves, evaluate them against standardized criteria, and publish transparent ratings. Our methodology is designed to help you find casinos that offer the best combination of safety, games, bonuses, and support.
            </p>
          </div>

          {/* Criteria Overview */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Our Six Rating Criteria
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {criteria.map((criterion, index) => {
                const Icon = criterion.icon;
                return (
                  <div key={index} className="bg-secondary border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-primary/10 rounded-lg p-2.5 shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground text-lg">
                          {criterion.name}
                        </h3>
                        <p className="text-sm font-sans font-semibold text-primary mt-0.5">
                          {criterion.weight}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rating Scale */}
          <div className="bg-secondary border border-border rounded-xl p-8 mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Our 5-Star Rating Scale
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-serif">Excellent (5 Stars)</h3>
                  <p className="text-sm font-sans text-muted-foreground mt-1">
                    Top-tier casino excelling across all criteria. Licensed, secure, great games, good bonuses, fast payouts, excellent support. Highly recommended.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-5 h-5 text-border" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-serif">Very Good (4 Stars)</h3>
                  <p className="text-sm font-sans text-muted-foreground mt-1">
                    Strong casino with solid performance across most areas. Minor shortcomings in one or two categories. Still recommended for most players.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  {[4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-border" />
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-serif">Good (3 Stars)</h3>
                  <p className="text-sm font-sans text-muted-foreground mt-1">
                    Acceptable casino with mixed performance. Some strengths balanced by notable weaknesses. Worth trying but consider alternatives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex gap-0.5">
                  {[1, 2].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  {[3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-border" />
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-serif">Poor (2 Stars)</h3>
                  <p className="text-sm font-sans text-muted-foreground mt-1">
                    Below-average casino with multiple issues: weak security, limited games, poor support. Not recommended unless desperate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex gap-0.5">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  {[2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-border" />
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-serif">Avoid (1 Star)</h3>
                  <p className="text-sm font-sans text-muted-foreground mt-1">
                    Serious concerns: unlicensed, unsafe, unresponsive support, documented scams, or significant player complaints. Do not use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Our Testing Process
            </h2>
            <div className="space-y-4 font-sans text-muted-foreground">
              <div className="bg-secondary border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">License Verification</h3>
                    <p className="text-sm">We verify casino licenses directly with regulators (UKGC, MGA, etc.) to confirm legitimacy and active status.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Security Testing</h3>
                    <p className="text-sm">We check for SSL encryption, test account security, verify responsible gambling tools, and assess data protection measures.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Game Library Audit</h3>
                    <p className="text-sm">We evaluate game selection, count slots vs. table games vs. live casino, and verify software provider diversity.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Bonus Analysis</h3>
                    <p className="text-sm">We calculate true bonus value after wagering requirements and compare to industry standards for fairness.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Support Testing</h3>
                    <p className="text-sm">We contact customer support with test questions, measure response times, and evaluate answer quality and helpfulness.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Player Research</h3>
                    <p className="text-sm">We analyze player reviews and complaints on third-party sites to identify recurring issues or red flags.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    7
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Peer Review</h3>
                    <p className="text-sm">A second editor reviews our findings to ensure consistency with methodology and catch any biases or errors.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                    8
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Publication</h3>
                    <p className="text-sm">We publish our detailed review with scores for each criterion and explain our rating and recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-secondary border border-border rounded-xl p-8 mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              How Often We Update Reviews
            </h2>
            <p className="font-sans text-muted-foreground text-base leading-relaxed">
              We review our ratings quarterly and update them if casinos change significantly. If we discover new issues (license suspension, security breach, player complaints), we update immediately. We also verify that bonus offers and payment methods remain current.
            </p>
          </div>

          {/* Independence */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h2 className="font-serif text-2xl font-bold text-amber-900 mb-4">
              Our Independence Promise
            </h2>
            <p className="font-sans text-amber-900 text-base leading-relaxed">
              Our reviews are independent and unbiased. No casino can buy a higher rating, pay for featured placement, or influence our evaluation. We disclose our affiliate relationships transparently because we believe honest reviews serve you better than hidden conflicts of interest. Learn more in our <Link to="/disclosure" className="text-primary hover:underline">Affiliate Disclosure</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
