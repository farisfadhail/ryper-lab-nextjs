import Link from "next/link";

export default function NavLink({ href, name }) {
  return (
    <li className="text-lg font-semibold">
      <Link href={href}>{name}</Link>
    </li>
  );
}
