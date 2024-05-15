"use client";

import footerData from "@/app/lib/data/footer-data.json";
import FooterSocial from "../atoms/footer-social";
import Image from "next/image";

export default function Footer() {
  console.log(footerData);

  return (
    <footer className="bg-primary lg:h-72 h-full grid lg:grid-cols-2 grid-cols-1 items-center lg:p-14 p-6 text-white relative">
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-8">
        <div>
          <p className="font-semibold lg:text-xl text-lg mb-2">Contact Us</p>
          <p className="lg:text-xl text-base">{footerData.email}</p>
        </div>
        <div>
          <p className="font-semibold lg:text-xl text-lg mb-2">Social Media</p>
          <ul className="space-y-2">
            <FooterSocial icon="youtube" name={footerData.youtube} />
            <FooterSocial icon="instagram" name={footerData.instagram} />
            <FooterSocial icon="linkedin" name={footerData.linkedin} />
            <FooterSocial icon="github" name={footerData.github} />
          </ul>
        </div>
      </div>
      <Image src={"/vector/footer-vector-1.png"} width={178} height={72} className="absolute left-32 bottom-2 lg:block hidden" alt="vector" />
      <Image src={"/vector/footer-vector-2.png"} width={372} height={70} className="absolute top-2 right-40 lg:block hidden" alt="vector" />
      <Image src={"/vector/footer-vector-3.png"} width={141} height={57} className="absolute bottom-4 right-72 lg:block hidden" alt="vector" />
      <Image src={"/vector/footer-vector-4.png"} width={52} height={199} className="absolute right-5 flex items-center" alt="vector" />
    </footer>
  );
}
