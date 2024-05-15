import Logo from "../atoms/logo";
import LogoMean1 from "../atoms/logo-mean-1";
import LogoMean2 from "../atoms/logo-mean-2";
import LogoMean3 from "../atoms/logo-mean-3";
import LogoMeanMobile1 from "../atoms/logo-mean-mobile-1";
import LogoMeanMobile2 from "../atoms/logo-mean-mobile-2";
import LogoMeanMobile3 from "../atoms/logo-mean-mobile-3";
import Title from "../atoms/title";

export default function AboutLogoSection() {
  return (
    <section className="lg:px-14 px-6">
      <Title title="Arti Logo Ryper Lab" />
      <div className="relative lg:mb-[24rem] mb-60">
        <div className="lg:pl-8 pl-6">
          <Logo />
        </div>
        <div className="lg:hidden block">
          <LogoMeanMobile1 />
          <LogoMeanMobile2 />
          <LogoMeanMobile3 />
        </div>
        <div className="lg:block hidden">
          <LogoMean1 />
          <LogoMean2 />
          <LogoMean3 />
        </div>
      </div>
    </section>
  );
}
