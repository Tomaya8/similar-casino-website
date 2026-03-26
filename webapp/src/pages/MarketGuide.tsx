import { useParams, Link } from "react-router-dom";
import { ArrowRight, Shield, ExternalLink, ChevronRight, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CasinoCard from "@/components/casino/CasinoCard";
import { getCasinosByMarket, getMarketByCode } from "@/data/casinos";
import { useCanonical } from "@/hooks/useCanonical";
import { useState } from "react";

function ReadMoreText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = text.length > 250;

  if (!needsTruncation) {
    return <p className="text-sm font-sans text-muted-foreground leading-relaxed">{text}</p>;
  }

  return (
    <div>
      <p className="text-sm font-sans text-muted-foreground leading-relaxed">
        {expanded ? text : `${text.slice(0, 250).trimEnd()}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 mt-2 text-xs font-semibold font-sans text-primary hover:text-primary/80 transition-colors"
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}

export default function MarketGuide() {
  const { market } = useParams<{ market: string }>();
  useCanonical(`/guide/${market}`);
  const marketData = getMarketByCode(market ?? "");
  const marketCasinos = getCasinosByMarket(market?.toUpperCase() ?? "");

  if (!marketData) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-foreground mb-2">Market Not Found</h1>
            <Link to="/" className="text-primary text-sm font-sans hover:underline">← Back to all casinos</Link>
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: `Best Online Casinos in ${marketData.name} 2026 — SimilarCasino`,
              description: `Expert guide to online casinos in ${marketData.name}. ${marketData.guide.intro.slice(0, 150)}`,
              url: `https://www.similarcasino.com/guide/${market}`,
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.similarcasino.com" },
                  { "@type": "ListItem", position: 2, name: "Markets", item: "https://www.similarcasino.com/markets" },
                  { "@type": "ListItem", position: 3, name: marketData.name, item: `https://www.similarcasino.com/guide/${market}` },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: marketData.guide.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]),
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
              <Link to="/markets" className="hover:text-primary-foreground transition-colors">Markets</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary-foreground">{marketData.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{marketData.flag}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-1">
                      Market Guide
                    </p>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                      Best Online Casinos in {marketData.name}
                    </h1>
                  </div>
                </div>
                <p className="text-primary-foreground/80 font-sans text-base leading-relaxed max-w-2xl">
                  {marketData.guide.intro}
                </p>
              </div>
              <div className="shrink-0 bg-primary-foreground/10 rounded-xl p-4 min-w-[200px]">
                <dl className="space-y-2">
                  <div className="flex justify-between gap-4 text-sm font-sans">
                    <dt className="text-primary-foreground/60">Licensed casinos:</dt>
                    <dd className="font-semibold text-primary-foreground">{marketData.casinoCount}</dd>
                  </div>
                  <div className="flex justify-between gap-4 text-sm font-sans">
                    <dt className="text-primary-foreground/60">Currency:</dt>
                    <dd className="font-semibold text-primary-foreground">{marketData.currency}</dd>
                  </div>
                  <div className="flex justify-between gap-4 text-sm font-sans">
                    <dt className="text-primary-foreground/60">Regulator:</dt>
                    <dd className="font-semibold text-primary-foreground text-right max-w-[140px] leading-tight">{marketData.regulatorName.split("(")[0].trim()}</dd>
                  </div>
                  <div className="pt-2 border-t border-primary-foreground/20">
                    <p className="text-xs text-primary-foreground/60 font-sans mb-1">Top bonus:</p>
                    <p className="text-sm font-semibold font-sans text-primary-foreground">{marketData.topBonus}</p>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Casino list */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans mb-1">
                Ranked by Expert Score
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Top {marketCasinos.length} Casinos in {marketData.name}
              </h2>
            </div>
            <span className="text-sm text-muted-foreground font-sans hidden md:block">Updated March 2026</span>
          </div>

          {marketCasinos.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground font-sans">
              <p>No casinos listed for this market yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {marketCasinos.map((casino, i) => (
                <CasinoCard key={casino.id} casino={casino} rank={i + 1} featured={casino.featured && i < 2} />
              ))}
            </div>
          )}
        </section>

        {/* Market guide content */}
        <section className="bg-secondary border-y border-border py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Is Online Gambling Legal in {marketData.name}?
                </h2>
                <ReadMoreText text={marketData.guide.legalStatus} />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  How Are {marketData.name} Casinos Licensed?
                </h2>
                <ReadMoreText text={marketData.guide.licensing} />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Payment Methods in {marketData.name}
                </h2>
                <ReadMoreText text={marketData.guide.paymentMethods} />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Tax on Casino Winnings
                </h2>
                <ReadMoreText text={marketData.guide.taxInfo} />
              </div>
            </div>

            {/* Responsible gambling */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-base text-foreground mb-1">
                    Responsible Gambling in {marketData.name}
                  </h3>
                  <ReadMoreText text={marketData.guide.responsibleGambling} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Frequently Asked Questions — Online Casinos in {marketData.name}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {marketData.guide.faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-sans font-semibold text-sm text-foreground hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans text-muted-foreground leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  );
}
