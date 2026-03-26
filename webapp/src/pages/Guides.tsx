import { useSearchParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/casinos";
import { Badge } from "@/components/ui/badge";

export default function Guides() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  // Get unique categories
  const categories = Array.from(new Set(articles.map((a) => a.category))).sort();

  // Filter articles by category
  const filtered = category
    ? articles.filter((a) => a.category === category)
    : articles;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Casino Guides & Articles 2026 — SimilarCasino",
            description: "Expert guides and articles about online casinos, bonuses, market regulations, and responsible gambling.",
            url: "https://www.similarcasino.com/guides",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.similarcasino.com" },
                { "@type": "ListItem", position: 2, name: "Guides" },
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
              <span className="text-primary-foreground">Guides</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-1">
                Expert Content
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Casino Guides & Articles
              </h1>
              <p className="text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl">
                In-depth guides on choosing casinos, understanding bonuses, market regulations, and responsible gambling.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Content */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Category filter chips */}
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans mb-3">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/guides"
                className={`inline-flex items-center px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                  !category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-foreground border border-border hover:border-border/60 hover:bg-secondary/80"
                }`}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/guides?category=${encodeURIComponent(cat)}`}
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                    category === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-foreground border border-border hover:border-border/60 hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground font-sans">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> article{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Articles grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground font-sans">
              <p>No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-border/60 transition-all duration-200 flex flex-col group"
                >
                  {/* Image */}
                  <div className="overflow-hidden bg-secondary h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Category badge */}
                    <div className="mb-3">
                      <Badge variant="secondary" className="text-xs font-sans font-medium">
                        {article.category}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-lg text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4 flex-1 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-sans pt-3 border-t border-border">
                      <span>📖 {article.readTime} min read</span>
                      <span>•</span>
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
