import { Link } from "react-router-dom";
import { Shield, ExternalLink } from "lucide-react";

const footerLinks = {
  "Top Markets": [
    { label: "UK Online Casinos", href: "/guide/gb" },
    { label: "Canadian Casinos", href: "/guide/ca" },
    { label: "Australian Casinos", href: "/guide/au" },
    { label: "German Casinos", href: "/guide/de" },
    { label: "Swedish Casinos", href: "/guide/se" },
    { label: "NZ Casinos", href: "/guide/nz" },
    { label: "Irish Casinos", href: "/guide/ie" },
    { label: "Finnish Casinos", href: "/guide/fi" },
  ],
  "Casino Types": [
    { label: "New Casinos 2026", href: "/casinos?filter=new" },
    { label: "No Deposit Casinos", href: "/casinos?bonus=nodeposit" },
    { label: "Fast Payout Casinos", href: "/casinos?filter=fastpayout" },
    { label: "Live Dealer Casinos", href: "/casinos?filter=live" },
    { label: "Mobile Casinos", href: "/casinos?filter=mobile" },
    { label: "Crypto Casinos", href: "/casinos?filter=crypto" },
    { label: "Low Deposit Casinos", href: "/casinos?filter=lowdeposit" },
    { label: "VIP Casinos", href: "/casinos?filter=vip" },
  ],
  "Bonus Types": [
    { label: "Welcome Bonuses", href: "/bonuses?type=welcome" },
    { label: "Free Spins No Deposit", href: "/bonuses?type=freespins-nd" },
    { label: "Cashback Bonuses", href: "/bonuses?type=cashback" },
    { label: "Reload Bonuses", href: "/bonuses?type=reload" },
    { label: "Refer a Friend", href: "/bonuses?type=referral" },
    { label: "High Roller Bonuses", href: "/bonuses?type=highroller" },
    { label: "Loyalty Programs", href: "/bonuses?type=loyalty" },
    { label: "Tournament Bonuses", href: "/bonuses?type=tournament" },
  ],
  "Information": [
    { label: "About SimilarCasino", href: "/about" },
    { label: "How We Review", href: "/methodology" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Affiliate Disclosure", href: "/disclosure" },
    { label: "Contact Us", href: "/contact" },
    { label: "Sitemap", href: "/sitemap" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const responsibleLinks = [
  { label: "BeGambleAware", href: "https://www.begambleaware.org" },
  { label: "GamCare", href: "https://www.gamcare.org.uk" },
  { label: "GamStop", href: "https://www.gamstop.co.uk" },
  { label: "Gambling Therapy", href: "https://www.gamblingtherapy.org" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      {/* Responsible gambling bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-semibold font-sans">Responsible Gambling:</span>
            </div>
            {responsibleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans font-semibold text-sm text-primary-foreground/50 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand + disclaimer */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Logo */}
            <div className="shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-sm">SC</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-serif font-bold text-lg text-primary-foreground tracking-tight">Similar</span>
                  <span className="font-serif-sc text-xs text-accent tracking-widest -mt-1">CASINO</span>
                </div>
              </div>
              <p className="text-xs text-primary-foreground/50 font-sans">similarcasino.com</p>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-primary-foreground/50 font-sans leading-relaxed">
              <p className="mb-2">
                <strong className="text-primary-foreground/70">Affiliate Disclosure:</strong> SimilarCasino.com contains affiliate links. When you click a link and sign up at a casino, we may receive a commission at no additional cost to you. Our reviews and rankings are based on independent editorial assessment and are not influenced by commercial relationships.
              </p>
              <p className="mb-2">
                <strong className="text-primary-foreground/70">Age Restriction:</strong> You must be 18 years of age or older to use any online gambling services. Gambling may not be legal in your jurisdiction — check local laws before playing.
              </p>
              <p>
                <strong className="text-primary-foreground/70">Responsible Gambling:</strong> Gambling should be entertaining, not a way to make money. If you feel you have a gambling problem, please contact BeGambleAware.org or call the National Gambling Helpline: 0808 8020 133.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-primary-foreground/10 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/40 font-sans">
            <p>© {new Date().getFullYear()} SimilarCasino.com · All Rights Reserved</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-primary-foreground/70 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary-foreground/70 transition-colors">Terms</Link>
              <Link to="/disclosure" className="hover:text-primary-foreground/70 transition-colors">Affiliate Disclosure</Link>
              <Link to="/cookies" className="hover:text-primary-foreground/70 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
