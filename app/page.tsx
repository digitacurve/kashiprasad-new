import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/hero/Hero";
import SiteFooter from "@/components/SiteFooter";
import SpiritualQuiz from "@/components/SpiritualQuiz";
import FloatingQuizButton from "@/components/FloatingQuizButton";
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