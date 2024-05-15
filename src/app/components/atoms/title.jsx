export default function Title({ title = "", align = "center" }) {
  return <p className={`text-${align} text-white font-bold md:text-5xl text-2xl lg:mb-28 mb-14 capitalize`}>{title}</p>;
}
