import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { markets } from "@/data/casinos";

export default function MarketGuides() {
  return (
    <section className="bg-secondary border-y border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground font-sans mb-2">
              Geo-Targeted Markets
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Explore by Market
            </h2>
            <p className="text-muted-foreground font-sans mt-2 text-sm">
              Jurisdiction-specific casino guides with local licensing, payment methods, and bonuses
            </p>
          </div>
          <Link
            to="/markets"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium font-sans text-primary hover:text-primary/80 transition-colors"
          >
            All markets <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Market grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {markets.map((market) => (
            <Link
              key={market.code}
              to={`/guide/${market.code.toLowerCase()}`}
              className="group bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{market.flag}</span>
                <span className="text-xs font-sans font-semibold text-muted-foreground bg-secondary rounded-full px-2 py-0.5">
                  {market.casinoCount}
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-foreground group-hover:text-primary transition-colors leading-tight">
                  {market.name}
                </h3>
                <p className="text-xs text-muted-foreground font-sans mt-1 line-clamp-2">
                  {market.description}
                </p>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-xs font-sans text-muted-foreground">Top bonus:</p>
                <p className="text-xs font-semibold font-sans text-foreground mt-0.5 line-clamp-1">
                  {market.topBonus}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold font-sans text-primary group-hover:gap-2 transition-all">
                View casinos <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
