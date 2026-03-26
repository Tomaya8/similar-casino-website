import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CasinoCard from "@/components/casino/CasinoCard";
import { casinos } from "@/data/casinos";

export default function Reviews() {
  // Featured casinos first, then all others
  const featured = casinos.filter((c) => c.featured).slice(0, 3);
  const allCasinos = casinos.sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Expert Casino Reviews 2026 — SimilarCasino",
            description: "Read our expert casino reviews. In-depth analysis of the best online casinos with verified player ratings and tested bonuses.",
            url: "https://www.similarcasino.com/reviews",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.similarcasino.com" },
                { "@type": "ListItem", position: 2, name: "Reviews" },
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
              <span className="text-primary-foreground">Reviews</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-1">
                Expert Reviews
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Casino Reviews 2026
              </h1>
              <p className="text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl">
                Comprehensive expert reviews of the best online casinos. We test every aspect: bonuses, payouts, games, and customer support.
              </p>
            </div>
          </div>
        </section>

        {/* Featured casinos section */}
        {featured.length > 0 && (
          <section className="bg-secondary border-b border-border py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans mb-1">
                    Recommended
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    Our Top Picks
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {featured.map((casino, i) => (
                  <CasinoCard
                    key={casino.id}
                    casino={casino}
                    rank={i + 1}
                    featured={true}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All reviews section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans mb-1">
                Complete Casino Rankings
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                All Casino Reviews
              </h2>
            </div>
            <span className="text-sm text-muted-foreground font-sans hidden md:block">
              {allCasinos.length} Casinos • Sorted by Rating
            </span>
          </div>

          <div className="space-y-4">
            {allCasinos.map((casino, i) => (
              <CasinoCard
                key={casino.id}
                casino={casino}
                rank={i + 1}
                featured={casino.featured && i < 2}
              />
            ))}
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-secondary border-t border-border py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              Not sure which casino is right for you?
            </h2>
            <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
              Use our comparison tool to filter casinos by bonus type, payout speed, games selection, and more.
            </p>
            <Link
              to="/casinos"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              Compare Casinos →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
