import { Search, Shield, Award, TrendingUp } from "lucide-react";
import { useState } from "react";

const trustStats = [
  { icon: Award, value: "182", label: "Casinos Reviewed" },
  { icon: Shield, value: "100%", label: "Independent Ratings" },
  { icon: TrendingUp, value: "40+", label: "Markets Covered" },
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-background hero-pattern">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold font-sans uppercase tracking-widest text-accent mb-6 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Updated Daily · March 2026
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Find Your Perfect{" "}
            <span className="relative">
              <span className="text-primary">Online Casino</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 10C50 4 100 2 150 4C200 6 250 8 298 6"
                  stroke="hsl(43, 62%, 48%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8 max-w-xl">
            Expert reviews of 182 online casinos across 40+ markets. Compare bonuses, game libraries,
            payout speeds, and licensing — all in one place.
          </p>

          {/* Search */}
          <div className="flex gap-2 max-w-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by casino name, bonus or market..."
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent shadow-sm"
              />
            </div>
            <button className="px-5 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold font-sans hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Popular searches */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs text-muted-foreground font-sans">Popular:</span>
            {["No Deposit Bonus", "UK Casinos", "Fast Payout", "Free Spins", "Live Casino"].map((term) => (
              <button
                key={term}
                className="text-xs font-sans px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Trust stats */}
        <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border">
          {trustStats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <p className="font-serif font-bold text-xl text-foreground leading-tight">{value}</p>
                <p className="text-xs text-muted-foreground font-sans">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
