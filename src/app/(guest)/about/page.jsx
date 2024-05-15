import AboutHistorySection from "@/app/components/molecules/about-history-section";
import AboutLogoSection from "@/app/components/molecules/about-logo-section";
import AboutMatkulSection from "@/app/components/molecules/about-matkul-section";
import AboutStructureSection from "@/app/components/molecules/about-structure-section";
import AboutTitleSection from "@/app/components/molecules/about-title-section";

export default function AboutPage() {
  return (
    <div className="relative z-10">
      <AboutTitleSection />
      <div className="lg:space-y-48 space-y-32">
        <AboutLogoSection />
        <AboutHistorySection />
        <AboutStructureSection />
        <AboutMatkulSection />
      </div>
    </div>
  );
}
