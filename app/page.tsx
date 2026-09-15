import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/hero/Hero";
import SiteFooter from "@/components/SiteFooter";
import SpiritualQuiz from "@/components/SpiritualQuiz";
import FloatingQuizButton from "@/components/FloatingQuizButton";
import FlipkartSearchBar from "@/components/FlipkartSearchBar";
import CategoryNavigation from "@/components/CategoryNavigation";
import {
  CustomerExperience,
  FeaturedCollection,
  ReviewsAndPhotos,
  ShopByCategory,
} from "@/components/StorefrontSections";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#06080c] text-[#f5f5f7]">
        <Hero />
        {/* Post-Hero Quick Discovery Bar (Mobile & Tablet) */}
        <div className="lg:hidden px-3.5 pt-6 pb-2 max-w-7xl mx-auto space-y-3">
          <FlipkartSearchBar />
          <CategoryNavigation isMobile />
        </div>
        <FeaturedCollection />
        <ShopByCategory />
        <SpiritualQuiz />
        <CustomerExperience />
        <ReviewsAndPhotos />
        <SiteFooter />
        <FloatingQuizButton />
      </main>
    </SmoothScroll>
  );
}