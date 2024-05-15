import MatkulCard from "../atoms/matkul-card";
import matkulData from "@/app/lib/data/matkul-data.json";
import Title from "../atoms/title";

export default function AboutMatkulSection() {
  return (
    <section className="lg:px-14 px-6">
      <Title title="Mata Kuliah Terafiliasi" />
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-4 mx-auto w-fit">
        {matkulData.map((matkul, index) => {
          return <MatkulCard key={index} img={matkul.img} name={matkul.name} />;
        })}
      </div>
    </section>
  );
}
