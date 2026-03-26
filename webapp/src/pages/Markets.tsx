import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { markets } from "@/data/casinos";

export default function Markets() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Online Casino Markets & Guides 2026 — SimilarCasino",
            description: "Explore regulated online casino markets worldwide. Expert guides for the UK, Canada, Australia, and more.",
            url: "https://www.similarcasino.com/markets",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.similarcasino.com" },
                { "@type": "ListItem", position: 2, name: "Markets" },
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
              <span className="text-primary-foreground">Markets</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-1">
                Global Markets
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Online Casino Markets 2026
              </h1>
              <p className="text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl">
                Discover casinos regulated in your country. Expert guides to licensing, payment methods, and local regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Markets grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <Link
                key={market.code}
                to={`/guide/${market.code.toLowerCase()}`}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-border/60 transition-all duration-200 group"
              >
                {/* Market header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-4xl mb-2">{market.flag}</div>
                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {market.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-2xl font-serif font-bold text-primary">
                      {market.casinoCount}
                    </p>
                    <p className="text-xs text-muted-foreground font-sans">Casinos</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans mb-1">
                      Currency
                    </p>
                    <p className="text-sm text-foreground font-sans font-semibold">{market.currency}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans mb-1">
                      Top Bonus
                    </p>
                    <p className="text-sm text-foreground font-sans font-semibold">{market.topBonus}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans mb-1">
                      Regulator
                    </p>
                    <p className="text-sm text-foreground font-sans font-semibold">
                      {market.regulatorName.split("(")[0].trim()}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground font-sans leading-relaxed line-clamp-2">
                  {market.description}
                </p>

                {/* Link indicator */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-primary font-semibold font-sans group-hover:underline">
                    View Market Guide →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
