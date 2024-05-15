import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative md:size-64 size-32">
      <Image src={"/logo.png"} fill={true} style={{ objectFit: "contain" }} alt="Ryper Lab Logo" />
    </div>
  );
}
