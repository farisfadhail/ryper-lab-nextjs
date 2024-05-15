import MissionList from "../atoms/mission-list";

export default function LandingVisionMissionSection({ datas }) {
  return (
    <section className="text-white lg:px-14 px-6 space-y-6">
      <div>
        <p className="font-bold text-4xl text-center lg:mb-14 mb-5">Visi</p>
        <p className="font-medium lg:text-lg text-sm text-justify lg:w-[70%] w-4/5 mx-auto">
          Unggul dalam riset dan pengembangan di bidang Rekayasa Perangkat Lunak (RPL) maupun IPTEK yang berkompeten serta berdaya saing tinggi sehingga dapat menjadi pusat rujukan penelitian dan pengembangan di bidang Rekayasa Perangkat
          Lunak yang selaras dengan visi dan misi fakultas.
        </p>
      </div>
      <div>
        <p className="font-bold text-4xl text-center lg:mb-14 mb-5">Misi</p>
        <div className="lg:w-[65%] w-4/5 mx-auto space-y-6">
          {datas.map((mission, index) => {
            return <MissionList key={mission.id} index={index} title={mission.title} desc={mission.desc} />;
          })}
        </div>
      </div>
    </section>
  );
}
