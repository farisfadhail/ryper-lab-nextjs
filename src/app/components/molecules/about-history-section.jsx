import HistoryList from "../atoms/history-list";
import historyData from "@/app/lib/data/history-data.json";
import Title from "../atoms/title";

export default function AboutHistorySection() {
  console.log(historyData);

  return (
    <section className="lg:px-14 px-6">
      <Title title="Sejarah Ryper Lab" />
      <div className="flex flex-col gap-y-20">
        {historyData.map((history, index) => {
          const position = index % 2 === 0 ? "right" : "left";
          return <HistoryList key={index} position={position} img={history.img} year={history.year} desc={history.desc} />;
        })}
      </div>
    </section>
  );
}
