import { Link } from "react-router-dom";
import { ExternalLink, Clock, Gamepad2, CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import type { Casino } from "@/data/casinos";
import { cn } from "@/lib/utils";

interface CasinoCardProps {
  casino: Casino;
  rank: number;
  featured?: boolean;
}

export default function CasinoCard({ casino, rank, featured }: CasinoCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "bg-card border rounded-xl overflow-hidden transition-all duration-200",
        featured
          ? "border-accent/40 shadow-md ring-1 ring-accent/20"
          : "border-border hover:border-border/80 hover:shadow-sm"
      )}
    >
      {featured && (
        <div className="bg-accent text-accent-foreground text-xs font-semibold font-sans text-center py-1 px-3 tracking-wide">
          EDITOR'S PICK
        </div>
      )}

      <div className="p-4 md:p-5">
        {/* Main row */}
        <div className="flex items-start gap-4">
          {/* Rank + logo */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xl font-serif font-bold text-muted-foreground/40 w-6 text-center hidden md:block">
              {rank}
            </span>
            {casino.logoUrl ? (
              <img
                src={casino.logoUrl}
                alt={`${casino.name} logo`}
                className="w-14 h-14 rounded-lg border border-border object-cover shrink-0"
              />
            ) : (
              <div
                className="w-14 h-14 rounded-lg border border-border flex items-center justify-center shrink-0 text-white font-serif font-bold text-lg"
                style={{ backgroundColor: casino.logoColor }}
              >
                {casino.name.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>

          {/* Casino info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <Link
                  to={`/casino/${casino.slug}`}
                  className="font-serif font-bold text-lg text-foreground hover:text-primary transition-colors leading-tight"
                >
                  {casino.name}
                </Link>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <StarRating rating={casino.rating} reviewCount={casino.reviewCount} size="sm" />
                  <span className="text-xs text-muted-foreground font-sans">{casino.license}</span>
                  <span className="text-xs text-muted-foreground font-sans">Est. {casino.founded}</span>
                </div>
              </div>

              {/* CTA - desktop */}
              <div className="hidden md:flex flex-col items-end gap-2 shrink-0">
                <div className="flex items-center gap-2">
                  <Link
                    to={`/casino/${casino.slug}`}
                    className="inline-flex items-center justify-center font-sans font-medium text-sm px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors whitespace-nowrap"
                  >
                    Review
                  </Link>
                  <a
                    href={casino.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md whitespace-nowrap"
                  >
                    Visit Casino
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <span className="text-xs text-muted-foreground font-sans">T&Cs Apply · 18+</span>
              </div>
            </div>

            {/* Bonus highlight */}
            <div className="mt-3 p-3 bg-secondary rounded-lg border border-border/60">
              <p className="text-sm font-semibold text-foreground font-sans">{casino.bonus.headline}</p>
              <p className="text-xs text-muted-foreground font-sans mt-0.5">
                {casino.bonus.wagering} wagering · Min. deposit {casino.minDeposit}
                {casino.bonus.code && <> · Code: <span className="font-mono font-bold text-foreground">{casino.bonus.code}</span></>}
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <span className="text-xs text-muted-foreground font-sans">
                  <span className="font-semibold text-foreground">{casino.games.total.toLocaleString()}</span> games
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <span className="text-xs text-muted-foreground font-sans">
                  Payout: <span className="font-semibold text-foreground">{casino.payout}</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {casino.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-sans font-medium py-0 h-5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="flex md:hidden mt-4 gap-3">
          <a
            href={casino.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-200"
          >
            Visit Casino <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <Link
            to={`/casino/${casino.slug}`}
            className="px-4 py-2.5 text-sm font-medium font-sans border border-border rounded-lg text-foreground hover:bg-secondary transition-colors"
          >
            Review
          </Link>
        </div>

        {/* Expand/collapse details */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={expanded ? `Hide details for ${casino.name}` : `Show pros and cons for ${casino.name}`}
          className="flex items-center gap-1 mt-3 text-xs text-muted-foreground hover:text-foreground font-sans transition-colors w-full"
        >
          {expanded ? (
            <>Hide details <ChevronUp className="w-3.5 h-3.5" /></>
          ) : (
            <>Show pros & cons <ChevronDown className="w-3.5 h-3.5" /></>
          )}
        </button>

        {/* Expanded details */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-border grid md:grid-cols-3 gap-4 animate-fade-in">
            {/* Pros */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-sans">Pros</p>
              <ul className="space-y-1.5">
                {casino.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-1.5 text-xs font-sans text-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-sans">Cons</p>
              <ul className="space-y-1.5">
                {casino.cons.map((con) => (
                  <li key={con} className="flex items-start gap-1.5 text-xs font-sans text-foreground">
                    <XCircle className="w-3.5 h-3.5 text-destructive shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech details */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-sans">Details</p>
              <dl className="space-y-1.5">
                <div className="flex justify-between text-xs font-sans">
                  <dt className="text-muted-foreground">Software:</dt>
                  <dd className="text-foreground font-medium text-right max-w-[120px] truncate">{casino.software.slice(0, 3).join(", ")}</dd>
                </div>
                <div className="flex justify-between text-xs font-sans">
                  <dt className="text-muted-foreground">Currencies:</dt>
                  <dd className="text-foreground font-medium">{casino.currencies.slice(0, 4).join(", ")}</dd>
                </div>
                <div className="flex justify-between text-xs font-sans">
                  <dt className="text-muted-foreground">Live Chat:</dt>
                  <dd className={cn("font-medium", casino.liveChat ? "text-green-600" : "text-destructive")}>
                    {casino.liveChat ? "24/7" : "No"}
                  </dd>
                </div>
                <div className="flex justify-between text-xs font-sans">
                  <dt className="text-muted-foreground">Mobile App:</dt>
                  <dd className={cn("font-medium", casino.mobileApp ? "text-green-600" : "text-muted-foreground")}>
                    {casino.mobileApp ? "iOS & Android" : "Mobile Web"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
