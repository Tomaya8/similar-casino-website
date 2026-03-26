import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CasinoComparison from "@/components/home/CasinoComparison";
import MarketGuides from "@/components/home/MarketGuides";
import ArticlesSection from "@/components/home/ArticlesSection";
import HowWeReview from "@/components/home/HowWeReview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CasinoComparison />
        <MarketGuides />
        <ArticlesSection />
        <HowWeReview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
