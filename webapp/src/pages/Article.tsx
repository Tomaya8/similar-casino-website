import { useParams, Link } from "react-router-dom";
import { ChevronRight, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getArticleBySlug } from "@/data/casinos";
import { Badge } from "@/components/ui/badge";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug ?? "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-foreground mb-2">Article Not Found</h1>
            <Link to="/guides" className="text-primary text-sm font-sans hover:underline">
              ← Browse all guides
            </Link>
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
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: article.image,
            datePublished: article.publishedAt,
            dateModified: article.publishedAt,
            author: { "@type": "Organization", name: "SimilarCasino" },
            publisher: {
              "@type": "Organization",
              name: "SimilarCasino",
              url: "https://www.similarcasino.com",
            },
            url: `https://www.similarcasino.com/article/${article.slug}`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.similarcasino.com" },
                { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.similarcasino.com/guides" },
                { "@type": "ListItem", position: 3, name: article.title },
              ],
            },
          }),
        }}
      />

      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-sans mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/guides" className="hover:text-primary-foreground transition-colors">Guides</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary-foreground line-clamp-1">{article.title}</span>
            </nav>

            <Badge variant="secondary" className="text-xs font-sans font-medium mb-4">
              {article.category}
            </Badge>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-primary-foreground/70 font-sans">
              <time>{formatDate(article.publishedAt)}</time>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} min read
              </span>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section className="max-w-4xl mx-auto px-4 -mt-2">
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </section>

        {/* Article content */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <div className="prose prose-lg font-sans text-muted-foreground leading-relaxed">
            <p className="text-lg font-medium text-foreground">{article.excerpt}</p>
            <p className="mt-6">
              This article is part of our expert guide series at SimilarCasino. Our editorial team
              independently researches and verifies all information to help you make informed
              decisions about online casinos.
            </p>
            <p>
              For the latest casino reviews and comparisons across all markets, visit our{" "}
              <Link to="/casinos" className="text-primary hover:underline">casino listings</Link> or
              explore our{" "}
              <Link to="/markets" className="text-primary hover:underline">market guides</Link>.
            </p>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 text-sm font-semibold font-sans text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all guides
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
