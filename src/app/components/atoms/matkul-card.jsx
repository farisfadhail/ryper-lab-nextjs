import Image from "next/image";
import DropShadowIcon from "./drop-show-icon";

export default function MatkulCard({ img, name }) {
  return (
    <div className="lg:h-96 h-52 lg:w-80 w-36 relative rounded-2xl group matkul-card">
      <div className="bg-gradient-matkul-hover p-6 h-full w-full relative z-[2] rounded-2xl border border-black">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="relative lg:w-44 w-20 lg:h-44 h-20 mx-auto">
            <Image src={`/${img}`} fill style={{ objectFit: "contain" }} alt="Mata Kulian Icon" />
          </div>
          <div className="w-fit mx-auto">
            <DropShadowIcon />
          </div>
          <p className="text-white font-semibold lg:text-2xl text-base text-center mt-6 line-clamp-1">{name}</p>
        </div>
      </div>
      <div className="group-hover:bg-sky-500 bg-purple-900 blur-xl opacity-60 h-full w-full absolute top-0 rounded-2xl"></div>
    </div>
  );
}
