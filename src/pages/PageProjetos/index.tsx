"use client";
import Area from "@/components/Area";
import ImageAvatar from "../../../public/4.png";
import Image from "next/image";

import { motion } from "framer-motion";
import Carousel from "@/components/Carrossel";
import  projetos  from "../../components/projetos";

export default function PageProjetos() {
  return (
    <Area>
      <div className="flex flex-col  items-center  justify-center ">
        <div className="flex-grow">
          <motion.section
            id="projetos"
            className=" "
            initial={{ opacity: 0, y: +100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
          >
            <div className=" z-10 flex flex-col items-center justify-center h-full text-center text-white ">
              <div className="flex flex-col items-center lg:flex-row">
              <Carousel projetos={projetos}  />
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Area>
  );
}
