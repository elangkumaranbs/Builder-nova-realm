import PromoBanner from "../components/PromoBanner";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import CategoryShowcase from "../components/CategoryShowcase";
import BestSelling from "../components/BestSelling";
import InstagramFeed from "../components/InstagramFeed";
import FeaturedArticle from "../components/FeaturedArticle";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      <HeroBanner />
      <CategoryShowcase />
      <BestSelling />
      <InstagramFeed />
      <FeaturedArticle />
      <Footer />
    </div>
  );
}
