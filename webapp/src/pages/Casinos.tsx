import { useSearchParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CasinoCard from "@/components/casino/CasinoCard";
import { casinos } from "@/data/casinos";

export default function Casinos() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const filter = searchParams.get("filter");
  const bonus = searchParams.get("bonus");
  const query = searchParams.get("q")?.toLowerCase().trim();

  // Filter and sort logic
  let filtered = [...casinos];

  // Apply text search
  if (query) {
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.bonus.headline.toLowerCase().includes(query) ||
        c.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        c.markets.some((m) => m.toLowerCase().includes(query)) ||
        c.license.toLowerCase().includes(query)
    );
  }

  // Apply filters
  if (filter === "new") {
    filtered = filtered.filter((c) => c.founded >= 2020);
  } else if (filter === "fastpayout") {
    filtered = filtered.filter((c) =>
      c.payout.toLowerCase().includes("instant") ||
      c.payout.toLowerCase().includes("24") ||
      c.payout.toLowerCase().includes("within")
    );
  } else if (filter === "live") {
    filtered = filtered.filter((c) => c.games.liveCasino >= 100);
  } else if (filter === "mobile") {
    filtered = filtered.filter((c) => c.mobileApp === true);
  } else if (filter === "crypto") {
    filtered = filtered.filter(
      (c) =>
        c.currencies.some((curr) =>
          curr.toUpperCase().includes("BTC") ||
          curr.toUpperCase().includes("ETH") ||
          curr.toUpperCase().includes("CRYPTO")
        ) || c.tags.some((tag) => tag.toLowerCase().includes("crypto"))
    );
  } else if (filter === "lowdeposit") {
    filtered = filtered.filter((c) => {
      const minStr = c.minDeposit.toLowerCase().replace(/[^0-9]/g, "");
      const minNum = minStr ? parseInt(minStr) : 999;
      return minNum < 20;
    });
  } else if (filter === "vip") {
    filtered = filtered.filter(
      (c) =>
        c.tags.some((tag) => tag.toLowerCase().includes("vip")) ||
        c.tags.some((tag) => tag.toLowerCase().includes("high roller"))
    );
  }

  // Apply bonus filters
  if (bonus === "nodeposit") {
    filtered = filtered.filter((c) =>
      c.bonus.headline.toLowerCase().includes("no deposit") ||
      c.bonus.headline.toLowerCase().includes("free")
    );
  } else if (bonus === "freespins") {
    filtered = filtered.filter((c) => c.bonus.freeSpins && c.bonus.freeSpins > 0);
  }

  // Apply sorting
  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
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
            name: "Best Online Casinos 2026 — SimilarCasino",
            description: "Compare and find the best online casinos with expert reviews, ratings, and bonus offers.",
            url: "https://www.similarcasino.com/casinos",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.similarcasino.com" },
                { "@type": "ListItem", position: 2, name: "Casinos" },
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
              <span className="text-primary-foreground">Casinos</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-1">
                Complete Casino Comparison
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Best Online Casinos 2026
              </h1>
              <p className="text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl">
                Discover, compare, and find the perfect online casino. Expert reviews, real player ratings, and tested bonuses.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Content */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Filter chips */}
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans mb-3">
              Quick Filters
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All", href: "/casinos", active: !sort && !filter && !bonus },
                { label: "Top Rated", href: "/casinos?sort=rating", active: sort === "rating" },
                { label: "New", href: "/casinos?filter=new", active: filter === "new" },
                { label: "No Deposit", href: "/casinos?bonus=nodeposit", active: bonus === "nodeposit" },
                { label: "Fast Payout", href: "/casinos?filter=fastpayout", active: filter === "fastpayout" },
                { label: "Live Dealer", href: "/casinos?filter=live", active: filter === "live" },
                { label: "Mobile", href: "/casinos?filter=mobile", active: filter === "mobile" },
                { label: "Crypto", href: "/casinos?filter=crypto", active: filter === "crypto" },
                { label: "Low Deposit", href: "/casinos?filter=lowdeposit", active: filter === "lowdeposit" },
                { label: "VIP", href: "/casinos?filter=vip", active: filter === "vip" },
                { label: "Free Spins", href: "/casinos?bonus=freespins", active: bonus === "freespins" },
              ].map((chip) => (
                <Link
                  key={chip.label}
                  to={chip.href}
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                    chip.active
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

          {/* Casino list */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground font-sans">
              <p>No casinos match your filters. Try adjusting your selection.</p>
              <Link to="/casinos" className="text-primary hover:underline text-sm mt-2 inline-block">
                ← Clear filters
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((casino, i) => (
                <CasinoCard
                  key={casino.id}
                  casino={casino}
                  rank={i + 1}
                  featured={casino.featured && i < 2}
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
