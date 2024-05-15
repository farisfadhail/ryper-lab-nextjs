import Image from "next/image";
import Logo from "../atoms/logo";

export default function LandingAboutSection() {
  return (
    <section className="lg:px-14 px-6 text-white pt-36">
      <div className="flex lg:flex-row flex-col items-center lg:gap-14 gap-6">
        <Logo />
        <div className="w-fit">
          <p className="font-bold text-3xl lg:mb-7 mb-5 lg:text-left text-center">Ryper Lab</p>
          <p className="text-base text-justify">
            Ryper Lab merupakan salah satu laboratorium yang dimiliki oleh Fakultas Ilmu Komputer Universitas Jember yang berfokus pada analisis, pengembangan, desain dan implementasi perangkat lunak. Ryper Lab memiliki asisten laboratorium
            yang terbagi menjadi 3 bidang yang terdiri asisten praktikum (pendidikan), asisten penelitian dan asisten media kreatif.
          </p>
        </div>
      </div>
    </section>
  );
}
