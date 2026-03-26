import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Casinos",
    href: "/casinos",
    children: [
      { label: "All Casinos", href: "/casinos" },
      { label: "Top Rated", href: "/casinos?sort=rating" },
      { label: "New Casinos", href: "/casinos?filter=new" },
      { label: "No Deposit", href: "/casinos?bonus=nodeposit" },
      { label: "Fast Payout", href: "/casinos?filter=fastpayout" },
    ],
  },
  {
    label: "Bonuses",
    href: "/bonuses",
    children: [
      { label: "Welcome Bonuses", href: "/bonuses?type=welcome" },
      { label: "No Deposit Bonuses", href: "/bonuses?type=nodeposit" },
      { label: "Free Spins", href: "/bonuses?type=freespins" },
      { label: "Cashback Offers", href: "/bonuses?type=cashback" },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "United Kingdom", href: "/guide/gb" },
      { label: "Canada", href: "/guide/ca" },
      { label: "Australia", href: "/guide/au" },
      { label: "Germany", href: "/guide/de" },
      { label: "Sweden", href: "/guide/se" },
      { label: "New Zealand", href: "/guide/nz" },
    ],
  },
  { label: "Reviews", href: "/reviews" },
  { label: "Guides", href: "/guides" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs font-sans py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Globe className="w-3 h-3" />
            Reviewing 182 Casinos Across 40+ Markets — All Ratings Are Independent
          </span>
          <span className="hidden md:block text-primary-foreground/70">
            18+ · Gamble Responsibly · BeGambleAware.org
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-sm">SC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-lg text-foreground tracking-tight">Similar</span>
              <span className="font-serif-sc text-xs text-gold tracking-widest -mt-1">CASINO</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-secondary"
                      : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-card border border-border rounded-lg shadow-xl py-1 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-center px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-sans">Updated daily</span>
            <Button variant="outline" size="sm" className="text-xs font-sans border-border">
              Submit a Casino
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary rounded transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
