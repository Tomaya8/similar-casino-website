import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { casinos, markets, articles } from "@/data/casinos";

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sitemap — SimilarCasino",
            description: "HTML sitemap for SimilarCasino with links to all pages, casinos, and guides",
            url: "https://www.similarcasino.com/sitemap",
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
              <span className="text-primary-foreground">Sitemap</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">
                Navigation
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                Sitemap
              </h1>
              <p className="mt-4 text-primary-foreground/80 font-sans text-base">
                Complete index of all pages and content on SimilarCasino
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="space-y-12">
            {/* Main Pages */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Main Pages
              </h2>
              <div className="grid md:grid-cols-2 gap-2">
                <Link to="/" className="text-primary hover:underline text-sm font-sans">
                  Home
                </Link>
                <Link to="/" className="text-primary hover:underline text-sm font-sans">
                  Casinos
                </Link>
                <Link to="/bonuses" className="text-primary hover:underline text-sm font-sans">
                  Bonuses
                </Link>
                <Link to="/markets" className="text-primary hover:underline text-sm font-sans">
                  Markets
                </Link>
                <Link to="/reviews" className="text-primary hover:underline text-sm font-sans">
                  Reviews
                </Link>
                <Link to="/guides" className="text-primary hover:underline text-sm font-sans">
                  Guides
                </Link>
              </div>
            </div>

            {/* Market Guides */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Market Guides ({markets.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {markets.map((market) => (
                  <Link
                    key={market.code}
                    to={`/guide/${market.code.toLowerCase()}`}
                    className="text-primary hover:underline text-sm font-sans flex items-center gap-2"
                  >
                    <span className="text-lg">{market.flag}</span>
                    {market.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Casino Reviews */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Casino Reviews ({casinos.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {casinos.map((casino) => (
                  <Link
                    key={casino.id}
                    to={`/casino/${casino.slug}`}
                    className="text-primary hover:underline text-sm font-sans"
                  >
                    {casino.name} Review
                  </Link>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Articles ({articles.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.slug}`}
                    className="text-primary hover:underline text-sm font-sans"
                  >
                    {article.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Information Pages */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Information
              </h2>
              <div className="grid md:grid-cols-2 gap-2">
                <Link to="/about" className="text-primary hover:underline text-sm font-sans">
                  About SimilarCasino
                </Link>
                <Link to="/methodology" className="text-primary hover:underline text-sm font-sans">
                  How We Review
                </Link>
                <Link to="/disclosure" className="text-primary hover:underline text-sm font-sans">
                  Affiliate Disclosure
                </Link>
                <Link to="/contact" className="text-primary hover:underline text-sm font-sans">
                  Contact Us
                </Link>
                <Link to="/privacy" className="text-primary hover:underline text-sm font-sans">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-primary hover:underline text-sm font-sans">
                  Terms & Conditions
                </Link>
                <Link to="/cookies" className="text-primary hover:underline text-sm font-sans">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="text-primary hover:underline text-sm font-sans">
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-secondary border border-border rounded-lg p-6 font-sans text-muted-foreground">
              <p className="text-sm">
                This HTML sitemap provides manual navigation to all major sections of SimilarCasino. For automated indexing, please see our XML sitemap at <code className="bg-background px-2 py-1 rounded text-xs font-mono">/sitemap.xml</code>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
