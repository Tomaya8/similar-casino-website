import { useSearchParams, Link } from "react-router-dom";
import { ChevronRight, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { casinos } from "@/data/casinos";
import { Badge } from "@/components/ui/badge";

export default function Bonuses() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "all";

  // Filter casinos by bonus type
  let filtered = [...casinos];

  if (type === "nodeposit") {
    filtered = filtered.filter((c) =>
      c.bonus.headline.toLowerCase().includes("no deposit")
    );
  } else if (type === "freespins") {
    filtered = filtered.filter((c) => c.bonus.freeSpins && c.bonus.freeSpins > 0);
  } else if (type === "cashback") {
    filtered = filtered.filter(
      (c) =>
        c.bonus.headline.toLowerCase().includes("cashback") ||
        c.tags.some((tag) => tag.toLowerCase().includes("cashback"))
    );
  } else if (type === "reload") {
    filtered = filtered.filter((c) =>
      c.tags.some((tag) => tag.toLowerCase().includes("reload"))
    );
  } else if (type === "referral") {
    filtered = filtered.filter((c) =>
      c.tags.some((tag) => tag.toLowerCase().includes("referral"))
    );
  } else if (type === "highroller") {
    filtered = filtered.filter((c) =>
      c.tags.some((tag) => tag.toLowerCase().includes("high roller"))
    );
  } else if (type === "loyalty") {
    filtered = filtered.filter((c) =>
      c.tags.some((tag) => tag.toLowerCase().includes("loyalty"))
    );
  } else if (type === "tournament") {
    filtered = filtered.filter((c) =>
      c.tags.some((tag) => tag.toLowerCase().includes("tournament"))
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
            "@type": "WebPage",
            name: "Casino Bonus Comparison 2026 — SimilarCasino",
            description: "Compare casino bonuses and promotional offers. Find the best welcome bonuses, free spins, no deposit offers, and more.",
            url: "https://www.similarcasino.com/bonuses",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.similarcasino.com" },
                { "@type": "ListItem", position: 2, name: "Bonuses" },
              ],
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
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary-foreground">Bonuses</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-1">
                Casino Promotions
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Casino Bonuses & Offers
              </h1>
              <p className="text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl">
                Compare welcome bonuses, free spins, no deposit offers, and exclusive promotions from top online casinos.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Content */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Bonus type filter chips */}
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans mb-3">
              Bonus Type
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All", value: "all" },
                { label: "Welcome", value: "welcome" },
                { label: "No Deposit", value: "nodeposit" },
                { label: "Free Spins", value: "freespins" },
                { label: "Cashback", value: "cashback" },
                { label: "Reload", value: "reload" },
                { label: "Referral", value: "referral" },
                { label: "High Roller", value: "highroller" },
                { label: "Loyalty", value: "loyalty" },
                { label: "Tournament", value: "tournament" },
              ].map((chip) => (
                <Link
                  key={chip.value}
                  to={chip.value === "all" ? "/bonuses" : `/bonuses?type=${chip.value}`}
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                    type === chip.value || (chip.value === "all" && type === "all")
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-foreground border border-border hover:border-border/60 hover:bg-secondary/80"
                  }`}
                >
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground font-sans">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> casinos
            </p>
          </div>

          {/* Bonus cards grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground font-sans">
              <p>No bonuses found for this type. Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((casino) => (
                <div
                  key={casino.id}
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  {/* Casino header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-white font-serif font-bold text-sm"
                        style={{ backgroundColor: casino.logoColor }}
                      >
                        {casino.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground text-sm leading-tight">
                          {casino.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-sans mt-0.5">
                          ⭐ {casino.rating.toFixed(1)} ({casino.reviewCount} reviews)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bonus info */}
                  <div className="space-y-3 mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-sm font-semibold text-foreground font-sans mb-1">
                        {casino.bonus.headline}
                      </p>
                      <p className="text-xs text-muted-foreground font-sans">
                        {casino.bonus.amount}
                      </p>
                    </div>

                    {casino.bonus.freeSpins && casino.bonus.freeSpins > 0 && (
                      <div className="text-xs font-sans">
                        <span className="font-semibold text-foreground">{casino.bonus.freeSpins}</span>
                        <span className="text-muted-foreground"> Free Spins</span>
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground font-sans">
                      <span className="font-semibold text-foreground">{casino.bonus.wagering}</span> wagering
                    </div>

                    <div className="text-xs text-muted-foreground font-sans">
                      Min. deposit: <span className="font-semibold text-foreground">{casino.minDeposit}</span>
                    </div>

                    {casino.bonus.code && (
                      <div className="text-xs font-sans">
                        Code: <span className="font-mono font-bold text-foreground bg-secondary px-2 py-0.5 rounded">{casino.bonus.code}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-2">
                    <a
                      href={casino.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold text-xs px-3 py-2 rounded-lg transition-all duration-200"
                    >
                      Claim <ExternalLink className="w-3 h-3" />
                    </a>
                    <Link
                      to={`/casino/${casino.slug}`}
                      className="flex-1 px-3 py-2 text-xs font-medium font-sans border border-border rounded-lg text-foreground hover:bg-secondary transition-colors text-center"
                    >
                      Review
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
