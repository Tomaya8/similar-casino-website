import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  selectedMarket: string;
  onMarketChange: (market: string) => void;
  selectedBonus: string;
  onBonusChange: (bonus: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount: number;
}

const marketFilters = [
  { code: "ALL", label: "All Markets" },
  { code: "GB", label: "🇬🇧 UK" },
  { code: "CA", label: "🇨🇦 Canada" },
  { code: "AU", label: "🇦🇺 Australia" },
  { code: "DE", label: "🇩🇪 Germany" },
  { code: "SE", label: "🇸🇪 Sweden" },
  { code: "NZ", label: "🇳🇿 New Zealand" },
  { code: "IE", label: "🇮🇪 Ireland" },
  { code: "FI", label: "🇫🇮 Finland" },
];

const bonusFilters = [
  { code: "ALL", label: "All Bonuses" },
  { code: "nodeposit", label: "No Deposit" },
  { code: "freespins", label: "Free Spins" },
  { code: "welcome", label: "Welcome Bonus" },
  { code: "cashback", label: "Cashback" },
];

const sortOptions = [
  { code: "rating", label: "Highest Rated" },
  { code: "bonus", label: "Best Bonus" },
  { code: "payout", label: "Fastest Payout" },
  { code: "games", label: "Most Games" },
  { code: "new", label: "Newest" },
];

export default function FilterBar({
  selectedMarket,
  onMarketChange,
  selectedBonus,
  onBonusChange,
  sortBy,
  onSortChange,
  totalCount,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const hasActiveFilters = selectedMarket !== "ALL" || selectedBonus !== "ALL";

  const clearFilters = () => {
    onMarketChange("ALL");
    onBonusChange("ALL");
  };

  return (
    <div className="space-y-3">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-sans text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{totalCount}</span> casinos
        </p>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs font-sans text-muted-foreground h-8"
            >
              <X className="w-3.5 h-3.5 mr-1" />
              Clear filters
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "text-xs font-sans h-8 gap-1.5",
              showFilters && "bg-secondary"
            )}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </Button>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="h-8 text-xs font-sans border border-border rounded-md px-2 bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            {sortOptions.map((opt) => (
              <option key={opt.code} value={opt.code}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Market tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {marketFilters.map((f) => (
          <button
            key={f.code}
            onClick={() => onMarketChange(f.code)}
            className={cn(
              "shrink-0 text-xs font-sans font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150 whitespace-nowrap",
              selectedMarket === f.code
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Extended filters */}
      {showFilters && (
        <div className="p-4 bg-secondary rounded-xl border border-border animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-sans">Bonus Type</p>
              <div className="flex flex-wrap gap-2">
                {bonusFilters.map((f) => (
                  <button
                    key={f.code}
                    onClick={() => onBonusChange(f.code)}
                    className={cn(
                      "text-xs font-sans px-3 py-1.5 rounded-full border transition-all duration-150",
                      selectedBonus === f.code
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground border-border hover:border-primary/40"
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-sans">Quick Filters</p>
              <div className="flex flex-wrap gap-2">
                {["Fast Payout", "Live Chat", "Mobile App", "Crypto", "Low Deposit"].map((tag) => (
                  <button
                    key={tag}
                    className="text-xs font-sans px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all duration-150"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
