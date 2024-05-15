import Image from "next/image";

export default function NavLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="md:size-12 size-9 relative">
        <Image src={`/logo.png`} fill={true} alt="Ryper Lab Logo" />
      </div>
      <p className="text-2xl font-semibold md:block hidden">Ryper Lab</p>
    </div>
  );
}
