import { useParams, Link } from "react-router-dom";
import { ExternalLink, ChevronRight, CheckCircle2, XCircle, Clock, Gamepad2, Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StarRating from "@/components/casino/StarRating";
import { getCasinoBySlug } from "@/data/casinos";
import { Badge } from "@/components/ui/badge";
import { useCanonical } from "@/hooks/useCanonical";

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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: casino.name,
              url: casino.affiliateUrl,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: casino.rating,
              bestRating: 5,
              worstRating: 1,
            },
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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-sans mb-5">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/casinos" className="hover:text-primary-foreground transition-colors">Casinos</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary-foreground">{casino.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Logo */}
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center text-white font-serif font-bold text-2xl shrink-0 border-2 border-primary-foreground/20"
                style={{ backgroundColor: casino.logoColor }}
              >
                {casino.name.slice(0, 2).toUpperCase()}
              </div>
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
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-bold text-base px-6 py-3 rounded-xl transition-all hover:shadow-lg mb-2"
                >
                  Visit Casino <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-primary-foreground/50 font-sans">T&Cs Apply · 18+ · Gamble Responsibly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Review body */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bonus box */}
              <div className="bg-card border border-accent/40 rounded-xl p-5 ring-1 ring-accent/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">Current Welcome Offer</p>
                <h2 className="font-serif text-xl font-bold text-foreground mb-1">{casino.bonus.headline}</h2>
                <p className="text-sm text-muted-foreground font-sans">
                  Wagering: {casino.bonus.wagering} · Min. deposit: {casino.minDeposit}
                  {casino.bonus.code !== undefined && casino.bonus.code.length > 0 ? (
                    <> · Bonus code: <span className="font-mono font-bold text-foreground">{casino.bonus.code}</span></>
                  ) : null}
                </p>
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 mt-3 bg-primary text-primary-foreground font-sans font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Claim Bonus <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Expert review */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Expert Review: {casino.name}
                </h2>
                <p className="text-sm font-sans text-foreground/80 leading-relaxed">
                  {casino.review.summary}
                </p>
              </div>

              {/* Full review sections */}
              {casino.review.fullReview ? (
                <div className="space-y-6">
                  {casino.review.fullReview.map((section) => (
                    <div key={section.heading}>
                      <h3 className="font-serif font-bold text-lg text-foreground mb-3">
                        {section.heading}
                      </h3>
                      <p className="text-sm font-sans text-foreground/80 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Pros & cons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-serif font-bold text-base text-foreground mb-3">Pros</h3>
                  <ul className="space-y-2">
                    {casino.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm font-sans text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-serif font-bold text-base text-foreground mb-3">Cons</h3>
                  <ul className="space-y-2">
                    {casino.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm font-sans text-foreground">
                        <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verdict */}
              <div className="bg-secondary border border-border rounded-xl p-5">
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">Our Verdict</h3>
                <p className="text-sm font-sans text-foreground/80 leading-relaxed italic">
                  "{casino.review.verdict}"
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border">
                  <StarRating rating={casino.rating} size="md" />
                  <span className="text-sm font-sans text-muted-foreground">{casino.reviewCount.toLocaleString()} verified reviews</span>
                </div>
              </div>

              {/* Responsible gambling notice */}
              <div className="flex items-start gap-3 p-4 bg-secondary rounded-xl border border-border text-xs font-sans text-muted-foreground">
                <Shield className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Responsible Gambling:</strong> Gambling should be entertainment, not a financial strategy. Set deposit and time limits before you play. If gambling is causing harm, visit <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BeGambleAware.org</a> or call 0808 8020 133 (UK). 18+ only. T&Cs apply.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick stats */}
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-serif font-bold text-base text-foreground mb-4">Quick Facts</h3>
                <dl className="space-y-3">
                  {[
                    { label: "Rating", value: `${casino.rating}/5 (${casino.reviewCount.toLocaleString()} reviews)` },
                    { label: "Licence", value: casino.license },
                    { label: "Founded", value: casino.founded.toString() },
                    { label: "Min Deposit", value: casino.minDeposit },
                    { label: "Payout Speed", value: casino.payout },
                    { label: "Total Games", value: casino.games.total.toLocaleString() },
                    { label: "Slots", value: casino.games.slots.toLocaleString() },
                    { label: "Live Casino", value: casino.games.liveCasino.toString() + " tables" },
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
                    <span key={s} className="text-xs font-sans px-2 py-1 bg-secondary rounded-md border border-border text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Markets */}
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-serif font-bold text-base text-foreground mb-3">Accepted Markets</h3>
                <div className="flex flex-wrap gap-1.5">
                  {casino.markets.map((m) => (
                    <Link
                      key={m}
                      to={`/guide/${m.toLowerCase()}`}
                      className="text-xs font-sans px-2.5 py-1 bg-secondary rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    >
                      {m}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground rounded-xl p-5 text-center">
                <p className="font-serif font-bold text-lg mb-1">{casino.bonus.amount}</p>
                <p className="text-xs text-primary-foreground/70 font-sans mb-4">{casino.bonus.headline}</p>
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-bold text-sm py-3 rounded-lg transition-colors"
                >
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
