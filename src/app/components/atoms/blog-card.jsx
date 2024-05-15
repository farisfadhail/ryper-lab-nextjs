import { formatDate } from "@/app/lib/script/formatDate";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ id, img, title, date, desc }) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="relative overflow-hidden rounded-2xl w-full lg:h-52 h-24">
        <Image src={`/${img}`} fill style={{ objectFit: "cover" }} alt="Foto Anggota Struktural" />
      </div>
      <h1 className="lg:text-2xl text-lg lg:line-clamp-3 line-clamp-2 font-bold">{title}</h1>
      <p className="text-xs">{formatDate(date)} WIB</p>
      <p className="lg:line-clamp-5 line-clamp-3 mt-2 lg:text-base text-sm">{desc}</p>
    </Link>
  );
}
