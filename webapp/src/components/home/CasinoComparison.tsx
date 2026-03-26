import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CasinoCard from "@/components/casino/CasinoCard";
import FilterBar from "@/components/casino/FilterBar";
import { casinos } from "@/data/casinos";

export default function CasinoComparison() {
  const [selectedMarket, setSelectedMarket] = useState("ALL");
  const [selectedBonus, setSelectedBonus] = useState("ALL");
  const [sortBy, setSortBy] = useState("rating");

  const filtered = useMemo(() => {
    let list = [...casinos];

    if (selectedMarket !== "ALL") {
      list = list.filter((c) => c.markets.includes(selectedMarket));
    }

    if (selectedBonus === "nodeposit") {
      list = list.filter((c) => c.bonus.amount === "No Deposit");
    } else if (selectedBonus === "freespins") {
      list = list.filter((c) => (c.bonus.freeSpins ?? 0) > 0);
    }

    list.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "games") return b.games.total - a.games.total;
      if (sortBy === "new") return b.founded - a.founded;
      return 0;
    });

    return list;
  }, [selectedMarket, selectedBonus, sortBy]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground font-sans mb-2">
            Casino Comparison
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Top Rated Online Casinos
          </h2>
          <p className="text-muted-foreground font-sans mt-2 text-sm">
            Ranked by expert review · Updated March 2026
          </p>
        </div>
        <Link
          to="/casinos"
          className="hidden md:flex items-center gap-1.5 text-sm font-medium font-sans text-primary hover:text-primary/80 transition-colors"
        >
          View all 182 casinos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Filter bar */}
      <div className="mb-6">
        <FilterBar
          selectedMarket={selectedMarket}
          onMarketChange={setSelectedMarket}
          selectedBonus={selectedBonus}
          onBonusChange={setSelectedBonus}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={filtered.length}
        />
      </div>

      {/* Casino list */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground font-sans">
            <p className="text-lg font-medium mb-2">No casinos match your filters</p>
            <p className="text-sm">Try adjusting your market or bonus preferences</p>
          </div>
        ) : (
          filtered.map((casino, index) => (
            <CasinoCard
              key={casino.id}
              casino={casino}
              rank={index + 1}
              featured={casino.featured && index < 3}
            />
          ))
        )}
      </div>

      {/* View all CTA */}
      <div className="mt-8 text-center">
        <Link
          to="/casinos"
          className="inline-flex items-center gap-2 font-sans font-semibold text-sm bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-lg border border-border transition-colors"
        >
          View all 182 casinos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
