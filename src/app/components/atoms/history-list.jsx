import Image from "next/image";

export default function HistoryList({ img, desc, year, position }) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-4 lg:gap-x-32 gap-x-6 items-center">
      <div className={`col-span-1 ${position == "right" ? "order-1" : "order-2"}`}>
        <p className={`font-semibold lg:text-4xl text-2xl text-white ${position == "right" ? "text-right" : "text-left"}`}>{year}</p>
      </div>
      <div className={`lg:col-span-1 col-span-3 grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-x-5 gap-x-0 ${position == "right" ? "order-2" : "order-1"}`}>
        <Image src={`/${img}`} width={300} height={152} alt={`Foto Sejarah Ryper Lab`} className={`rounded-3xl ${position == "right" ? "lg:order-1" : "lg:order-2"}`} />
        <p className={`text-white lg:text-xl text-sm lg:mt-0 mt-4 ${position == "right" ? "text-left lg:order-2" : "text-right lg:order-1"}`}>{desc}</p>
      </div>
    </div>
  );
}
