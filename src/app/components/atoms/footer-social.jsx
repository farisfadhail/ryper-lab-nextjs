import { Icon } from "@iconify/react";

export default function FooterSocial({ icon, name }) {
  return (
    <li className="flex items-center gap-3">
      <Icon icon={`bi:${icon}`} width={"1.8rem"} />
      <p className="md:text-xl text-base">{name}</p>
    </li>
  );
}
