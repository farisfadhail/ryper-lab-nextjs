import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionList({ index, title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <button onClick={handleOnClick} className="rounded-2xl bg-primary-800 p-4 w-full">
      <div className={`flex items-center gap-3`}>
        <p className={`md:text-lg text-xs font-bold md:size-10 size-7 flex items-center justify-center rounded ${isOpen ? "text-white" : "text-primary underline bg-white"}`}>{index + 1}</p>
        <p className="font-medium md:text-lg text-base text-left w-fit">{title}</p>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p className="text-white md:text-sm text-xs md:ps-[3.25rem] ps-8 mt-6 text-left" initial="collapsed" animate="open" exit="collapsed" variants={variants} transition={{ duration: 0.3 }}>
            {desc}
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
}
