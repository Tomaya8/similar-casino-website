import { useParams, Link } from "react-router-dom";
import { ExternalLink, ChevronRight, CheckCircle2, XCircle, Clock, Gamepad2, Shield, Star, CreditCard, Smartphone, MessageCircle, Trophy, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StarRating from "@/components/casino/StarRating";
import { getCasinoBySlug } from "@/data/casinos";
import { Badge } from "@/components/ui/badge";
import { useCanonical } from "@/hooks/useCanonical";

// Section images keyed by heading keyword
const sectionImages: Record<string, string> = {
  "Bonus": "https://images.unsplash.com/photo-1518893883800-45cd0954574b?w=800&h=400&fit=crop&auto=format",
  "Game": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop&auto=format",
  "Live": "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=400&fit=crop&auto=format",
  "Banking": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&auto=format",
  "Mobile": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&auto=format",
  "Security": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop&auto=format",
  "VIP": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop&auto=format",
};

function getSectionImage(heading: string): string | undefined {
  for (const [key, url] of Object.entries(sectionImages)) {
    if (heading.includes(key)) return url;
  }
  return undefined;
}

function RatingBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm font-sans">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold text-foreground">{value}/{max}</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function CasinoReview() {
  const { slug } = useParams<{ slug: string }>();
  const casino = getCasinoBySlug(slug ?? "");
  useCanonical(`/casino/${slug}`);

  if (!casino) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-foreground mb-2">Casino Not Found</h1>
            <Link to="/casinos" className="text-primary text-sm font-sans hover:underline">← Browse all casinos</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate sub-ratings from data
  const gameScore = Math.min(5, Math.round((casino.games.total / 1000) * 10) / 10 + 2.5);
  const bonusScore = casino.rating >= 4.5 ? 4.6 : casino.rating >= 4.0 ? 4.2 : 3.8;
  const payoutScore = casino.payout.toLowerCase().includes("instant") ? 4.9 : casino.payout.includes("24") ? 4.5 : 4.0;
  const mobileScore = casino.mobileApp ? 4.7 : 4.2;
  const supportScore = casino.liveChat ? 4.5 : 3.5;

  const gameBreakdown = [
    { label: "Slots", count: casino.games.slots, color: "bg-primary" },
    { label: "Table Games", count: casino.games.tableGames, color: "bg-accent" },
    { label: "Live Casino", count: casino.games.liveCasino, color: "bg-green-600" },
  ];
  const totalGames = casino.games.total;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: { "@type": "Organization", name: casino.name, url: casino.affiliateUrl },
            reviewRating: { "@type": "Rating", ratingValue: casino.rating, bestRating: 5, worstRating: 1 },
            author: { "@type": "Organization", name: "SimilarCasino" },
            reviewBody: casino.review.summary,
            datePublished: "2026-03-01",
            dateModified: "2026-03-26",
          }),
        }}
      />

      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
            <nav className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-sans mb-5">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/casinos" className="hover:text-primary-foreground transition-colors">Casinos</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary-foreground">{casino.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {casino.logoUrl ? (
                <img src={casino.logoUrl} alt={`${casino.name} logo`} className="w-20 h-20 rounded-xl object-cover shrink-0 border-2 border-primary-foreground/20" />
              ) : (
                <div className="w-20 h-20 rounded-xl flex items-center justify-center text-white font-serif font-bold text-2xl shrink-0 border-2 border-primary-foreground/20" style={{ backgroundColor: casino.logoColor }}>
                  {casino.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                    {casino.name} Review
                  </h1>
                  {casino.featured && (
                    <span className="text-xs font-semibold font-sans bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                      Editor's Pick
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <StarRating rating={casino.rating} reviewCount={casino.reviewCount} size="lg" />
                  <span className="text-primary-foreground/70 font-sans text-sm">{casino.license}</span>
                  <span className="text-primary-foreground/70 font-sans text-sm">Est. {casino.founded}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {casino.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-sans bg-primary-foreground/10 text-primary-foreground/80 border-primary-foreground/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="md:text-right shrink-0">
                <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-bold text-base px-6 py-3 rounded-xl transition-all hover:shadow-lg mb-2">
                  Visit Casino <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-primary-foreground/50 font-sans">T&Cs Apply · 18+ · Gamble Responsibly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="border-b border-border bg-card">
          <div className="max-w-5xl mx-auto px-4 py-5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: Gamepad2, label: "Games", value: casino.games.total.toLocaleString() },
                { icon: Zap, label: "Payout", value: casino.payout },
                { icon: CreditCard, label: "Min Deposit", value: casino.minDeposit },
                { icon: Smartphone, label: "Mobile", value: casino.mobileApp ? "App Available" : "Mobile Web" },
                { icon: MessageCircle, label: "Support", value: casino.liveChat ? "24/7 Live Chat" : "Email Only" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-sans">{label}</p>
                    <p className="text-sm font-semibold text-foreground font-sans leading-tight">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Review body */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bonus box */}
              <div className="bg-card border-2 border-accent/40 rounded-xl p-6 ring-1 ring-accent/10">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">Current Welcome Offer</p>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-1">{casino.bonus.headline}</h2>
                    <p className="text-sm text-muted-foreground font-sans">
                      Wagering: {casino.bonus.wagering} · Min. deposit: {casino.minDeposit}
                      {casino.bonus.code !== undefined && casino.bonus.code.length > 0 ? (
                        <> · Code: <span className="font-mono font-bold text-foreground">{casino.bonus.code}</span></>
                      ) : null}
                    </p>
                  </div>
                  <div className="text-center shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mb-1">
                      <Trophy className="w-7 h-7 text-accent" />
                    </div>
                    <p className="text-xs font-bold font-sans text-accent">{casino.bonus.amount}</p>
                  </div>
                </div>
                <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-1.5 mt-4 bg-primary text-primary-foreground font-sans font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
                  Claim Bonus <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Rating Breakdown */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" /> Rating Breakdown
                </h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  <RatingBar label="Game Selection" value={Math.min(5, parseFloat(gameScore.toFixed(1)))} />
                  <RatingBar label="Bonus Value" value={bonusScore} />
                  <RatingBar label="Payout Speed" value={payoutScore} />
                  <RatingBar label="Mobile Experience" value={mobileScore} />
                  <RatingBar label="Customer Support" value={supportScore} />
                  <RatingBar label="Overall" value={casino.rating} />
                </div>
              </div>

              {/* Game Library Breakdown */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-primary" /> Game Library — {totalGames.toLocaleString()} Titles
                </h2>
                <div className="space-y-3 mb-5">
                  {gameBreakdown.map(({ label, count, color }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm font-sans mb-1">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold text-foreground">{count.toLocaleString()}</span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full ${color} rounded-full`} style={{ width: `${(count / totalGames) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {gameBreakdown.map(({ label, count }) => (
                    <div key={label} className="text-center bg-secondary rounded-lg p-3">
                      <p className="text-lg font-bold font-serif text-foreground">{count.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground font-sans">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expert review summary */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Expert Review: {casino.name}
                </h2>
                <p className="text-sm font-sans text-foreground/80 leading-relaxed">
                  {casino.review.summary}
                </p>
              </div>

              {/* Full review sections with images */}
              {casino.review.fullReview ? (
                <div className="space-y-10">
                  {casino.review.fullReview.map((section, i) => {
                    const img = getSectionImage(section.heading);
                    return (
                      <div key={section.heading} className="scroll-mt-20" id={`section-${i}`}>
                        {img ? (
                          <div className="rounded-xl overflow-hidden mb-5 border border-border">
                            <img src={img} alt={section.heading} className="w-full h-48 md:h-56 object-cover" loading="lazy" />
                          </div>
                        ) : null}
                        <h3 className="font-serif font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                            {i + 1}
                          </span>
                          {section.heading}
                        </h3>
                        <p className="text-sm font-sans text-foreground/80 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              {/* Pros & cons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h3 className="font-serif font-bold text-base text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> What We Like
                  </h3>
                  <ul className="space-y-2.5">
                    {casino.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm font-sans text-green-900">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h3 className="font-serif font-bold text-base text-red-800 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> What Could Improve
                  </h3>
                  <ul className="space-y-2.5">
                    {casino.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm font-sans text-red-900">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verdict */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6">
                <h3 className="font-serif font-bold text-xl mb-3">Our Verdict</h3>
                <p className="text-sm font-sans text-primary-foreground/85 leading-relaxed italic mb-4">
                  "{casino.review.verdict}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-primary-foreground/20">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <span className="text-2xl font-bold font-serif text-primary-foreground">{casino.rating}</span>
                    </div>
                    <div>
                      <StarRating rating={casino.rating} size="md" />
                      <p className="text-xs text-primary-foreground/60 font-sans mt-1">{casino.reviewCount.toLocaleString()} verified reviews</p>
                    </div>
                  </div>
                  <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-bold text-sm px-6 py-3 rounded-lg transition-colors">
                    Visit {casino.name} <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Responsible gambling */}
              <div className="flex items-start gap-3 p-4 bg-secondary rounded-xl border border-border text-xs font-sans text-muted-foreground">
                <Shield className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Responsible Gambling:</strong> Gambling should be entertainment, not a financial strategy. Set deposit and time limits before you play. If gambling is causing harm, visit <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BeGambleAware.org</a> or call 0808 8020 133 (UK). 18+ only. T&Cs apply.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Table of Contents */}
              {casino.review.fullReview ? (
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-serif font-bold text-base text-foreground mb-3">In This Review</h3>
                  <nav className="space-y-1.5">
                    {casino.review.fullReview.map((section, i) => (
                      <a key={i} href={`#section-${i}`} className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors py-1">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">{i + 1}</span>
                        {section.heading}
                      </a>
                    ))}
                  </nav>
                </div>
              ) : null}

              {/* Quick stats */}
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-serif font-bold text-base text-foreground mb-4">Quick Facts</h3>
                <dl className="space-y-3">
                  {[
                    { label: "Rating", value: `${casino.rating}/5` },
                    { label: "Licence", value: casino.license },
                    { label: "Founded", value: casino.founded.toString() },
                    { label: "Min Deposit", value: casino.minDeposit },
                    { label: "Payout Speed", value: casino.payout },
                    { label: "Total Games", value: casino.games.total.toLocaleString() },
                    { label: "Mobile App", value: casino.mobileApp ? "iOS & Android" : "Mobile Web Only" },
                    { label: "Live Chat", value: casino.liveChat ? "24/7 Available" : "Email/Ticket Only" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-3 text-sm font-sans">
                      <dt className="text-muted-foreground shrink-0">{label}:</dt>
                      <dd className="text-foreground font-medium text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Software */}
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-serif font-bold text-base text-foreground mb-3">Software Providers</h3>
                <div className="flex flex-wrap gap-1.5">
                  {casino.software.map((s) => (
                    <span key={s} className="text-xs font-sans px-2 py-1 bg-secondary rounded-md border border-border text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>

              {/* Markets */}
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-serif font-bold text-base text-foreground mb-3">Accepted Markets</h3>
                <div className="flex flex-wrap gap-1.5">
                  {casino.markets.map((m) => (
                    <Link key={m} to={`/guide/${m.toLowerCase()}`} className="text-xs font-sans px-2.5 py-1 bg-secondary rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">{m}</Link>
                  ))}
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="bg-primary text-primary-foreground rounded-xl p-5 text-center sticky top-4">
                <p className="font-serif font-bold text-lg mb-1">{casino.bonus.amount}</p>
                <p className="text-xs text-primary-foreground/70 font-sans mb-4">{casino.bonus.headline}</p>
                <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-bold text-sm py-3 rounded-lg transition-colors">
                  Play Now <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-primary-foreground/50 font-sans mt-2">T&Cs Apply · 18+</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
