"use client";

import swiperData from "@/app/lib/data/swiper-data.json";
import missionData from "@/app/lib/data/mission-data.json";
import LandingSwiperSection from "../components/molecules/landing-swiper-section";
import LandingAboutSection from "../components/molecules/landing-about-section";
import LandingVisionMissionSection from "../components/molecules/landing-vision-mission-section";

export default function LandingPage() {
  console.log(swiperData);

  return (
    <main className="bg-gradient-background relative overflow-hidden pb-44">
      <img src="/vector/vector-home-1.png" alt="vector 1" className="w-[48rem] absolute lg:-left-24 -left-32 lg:top-32 top-[35rem]" />
      <img src="/vector/vector-home-2.png" alt="vector 2" className="w-[75rem] absolute lg:-right-80 -right-[10rem] lg:top-[35rem] top-[60rem]" />
      <img src="/vector/vector-home-3.png" alt="vector 3" className="w-[80rem] absolute lg:-left-60 left-0 lg:top-[20rem] top-[70rem]" />
      <img src="/vector/vector-home-4.png" alt="vector 4" className="w-[75rem] absolute lg:-right-[20rem] right-0 lg:-bottom-[40rem] bottom-[20rem]" />
      <img src="/vector/vector-home-5.png" alt="vector 5" className="w-[75rem] absolute lg:-left-96 -left-32 lg:-bottom-[35rem] bottom-10" />
      <div className="relative z-10">
        <LandingSwiperSection datas={swiperData} />
        <div className="lg:space-y-48 space-y-32">
          <LandingAboutSection />
          <LandingVisionMissionSection datas={missionData} />
        </div>
      </div>
    </main>
  );
}
