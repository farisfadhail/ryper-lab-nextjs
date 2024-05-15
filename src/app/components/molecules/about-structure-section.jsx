"use client";

import StructureCard from "@/app/components/atoms/structure-card";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import structureData from "@/app/lib/data/structure-data.json";
import Title from "../atoms/title";

export default function AboutStructureSection() {
  const pembinaLab = structureData.find((structure) => structure.position == "Pembina Lab");
  const structureWithoutPembina = structureData.filter((structure) => structure.position != "Pembina Lab");
  const midPoint = Math.ceil(structureWithoutPembina.length / 2);
  const firstStructure = structureWithoutPembina.slice(0, midPoint);
  const secondStructure = structureWithoutPembina.slice(midPoint);

  let [ref, { width }] = useMeasure();
  let [ref2, { width2 }] = useMeasure();

  const xTranslation = useMotionValue(0);
  const xTranslation2 = useMotionValue(0);

  //   Sini
  useEffect(() => {
    let controls;
    let controls2;
    let finalPosition = -width / 2 - 16;
    let finalPosition2 = width / 2.5 + 16;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    controls2 = animate(xTranslation2, [0, finalPosition2], {
      ease: "linear",
      duration: 40,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      controls.stop();
      controls2.stop();
    };
  }, [xTranslation, xTranslation2, width, width2]);

  return (
    <section>
      <Title title="Struktur Lab" />
      <div className="lg:space-y-24 space-y-12">
        <div className="mx-auto w-fit">
          <StructureCard img={pembinaLab.img} name={pembinaLab.name} position={pembinaLab.position} />
        </div>
        {/* Scroll 1 */}
        <div className="relative h-80 overflow-x-hidden">
          <motion.div className="absolute left-0 flex gap-8" ref={ref} style={{ x: xTranslation }} animate={{ width: "max-content" }}>
            {[
              [...firstStructure, ...firstStructure].map((structure, index) => {
                return <StructureCard key={index} img={structure.img} name={structure.name} position={structure.position} />;
              }),
            ]}
          </motion.div>
        </div>
        {/* Scroll 2 */}
        <div className="relative h-80 overflow-x-hidden">
          <motion.div className="absolute right-0 flex gap-8" ref={ref2} style={{ x: xTranslation2 }}>
            {[
              [...secondStructure, ...secondStructure].map((structure, index) => {
                return <StructureCard key={index} img={structure.img} name={structure.name} position={structure.position} />;
              }),
            ]}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
