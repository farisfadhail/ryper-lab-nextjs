import Image from "next/image";

export default function StructureCard({ img, name, position }) {
  return (
    <div className="relative overflow-hidden rounded-2xl lg:w-60 w-48 lg:h-80 h-72">
      <div className="text-white lg:text-xl text-base absolute bottom-2 z-[2] text-center w-full">
        <p className="font-semibold line-clamp-1">{name}</p>
        <p className="line-clamp-2">{position}</p>
      </div>
      <div className="absolute w-full h-full z-[1] bg-gradient-to-b from-transparent to-black"></div>
      <Image src={`/${img}`} fill style={{ objectFit: "cover" }} alt="Foto Anggota Struktural" />
    </div>
  );
}
