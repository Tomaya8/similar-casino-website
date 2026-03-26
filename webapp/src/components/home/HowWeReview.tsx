import { Shield, Search, FileText, Star, Globe, Clock } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "We Test Every Casino",
    description: "Our team creates real accounts, deposits real money, and tests the complete player experience at every casino we review.",
  },
  {
    icon: FileText,
    title: "Transparent Scoring",
    description: "Ratings are based on 50+ criteria: licensing, game selection, bonus terms, payment speed, mobile experience, and support quality.",
  },
  {
    icon: Globe,
    title: "Geo-Targeted Results",
    description: "We verify that casinos accept players from your jurisdiction and display locally relevant payment methods, currencies, and bonuses.",
  },
  {
    icon: Clock,
    title: "Updated Daily",
    description: "Casino offerings change constantly. Our team monitors each operator and updates reviews, bonuses, and ratings in real time.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "We only list casinos with valid licences from reputable authorities (UKGC, MGA, Spelinspektionen). Unlicensed operators are excluded.",
  },
  {
    icon: Star,
    title: "Editorial Independence",
    description: "Affiliate commissions never influence rankings. Our ratings reflect genuine player experience — not commercial relationships.",
  },
];

export default function HowWeReview() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground font-sans mb-2">
          Our Methodology
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          How We Review Casinos
        </h2>
        <p className="text-muted-foreground font-sans mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Every casino on SimilarCasino has been personally tested and verified by our editorial team.
          Here's exactly how we evaluate them.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-muted-foreground">0{i + 1}</span>
                  <h3 className="font-serif font-bold text-base text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
