import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import MarketGuide from "./pages/MarketGuide";
import CasinoReview from "./pages/CasinoReview";
import Casinos from "./pages/Casinos";
import Bonuses from "./pages/Bonuses";
import Markets from "./pages/Markets";
import Guides from "./pages/Guides";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Disclosure from "./pages/Disclosure";
import Methodology from "./pages/Methodology";
import SitemapPage from "./pages/SitemapPage";
import Cookies from "./pages/Cookies";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/casinos" element={<Casinos />} />
          <Route path="/bonuses" element={<Bonuses />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/guide/:market" element={<MarketGuide />} />
          <Route path="/casino/:slug" element={<CasinoReview />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
