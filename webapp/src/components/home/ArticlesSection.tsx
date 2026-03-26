import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/casinos";

const categoryColors: Record<string, string> = {
  "Market Guide": "bg-blue-50 text-blue-700 border-blue-200",
  "Bonus Guide": "bg-green-50 text-green-700 border-green-200",
  "Research": "bg-purple-50 text-purple-700 border-purple-200",
  "Regulation": "bg-amber-50 text-amber-700 border-amber-200",
  "Strategy": "bg-rose-50 text-rose-700 border-rose-200",
  "Mobile": "bg-cyan-50 text-cyan-700 border-cyan-200",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticlesSection() {
  const [featured, ...rest] = articles;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground font-sans mb-2">
            Expert Knowledge
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Reviews & Guides
          </h2>
        </div>
        <Link
          to="/guides"
          className="hidden md:flex items-center gap-1.5 text-sm font-medium font-sans text-primary hover:text-primary/80 transition-colors"
        >
          All articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Featured article - large */}
        <Link
          to={`/article/${featured.slug}`}
          className="lg:col-span-3 group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-semibold font-sans px-2.5 py-1 rounded-full border ${categoryColors[featured.category] ?? "bg-secondary text-muted-foreground border-border"}`}>
                {featured.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground font-sans">
                <Clock className="w-3 h-3" />
                {featured.readTime} min read
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
              {featured.title}
            </h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed line-clamp-2 mb-4">
              {featured.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <time className="text-xs text-muted-foreground font-sans">{formatDate(featured.publishedAt)}</time>
              <span className="flex items-center gap-1 text-xs font-semibold font-sans text-primary group-hover:gap-2 transition-all">
                Read article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Link>

        {/* Secondary articles */}
        <div className="lg:col-span-2 space-y-4">
          {rest.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.slug}`}
              className="group flex gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-xs font-semibold font-sans px-2 py-0.5 rounded-full border ${categoryColors[article.category] ?? "bg-secondary text-muted-foreground border-border"}`}>
                    {article.category}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-1.5">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                  <Clock className="w-3 h-3" />
                  {article.readTime} min
                  <span>·</span>
                  <time>{formatDate(article.publishedAt)}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile "view all" */}
      <div className="mt-6 text-center md:hidden">
        <Link
          to="/guides"
          className="inline-flex items-center gap-2 text-sm font-semibold font-sans text-primary"
        >
          View all articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
