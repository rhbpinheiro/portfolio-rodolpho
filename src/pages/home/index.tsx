"use client";
import Area from "@/components/Area";
import ImageAvatar from "../../../public/4.png";
import Image from "next/image";

import StacksDark from "../../components/Stacks";
import { motion } from "framer-motion";

export default function PageHome() {
  return (
    <Area>
    <div className="p-6 md:px-0 mb-6" >

      <div className="flex flex-col lg:flex-row items-center p-5 mb-8 md:mt-10 md:p-5 lg:mt-0 md:justify-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
        <div className="flex-grow">
          <motion.section
            id="home"
            className="relative bg-cover bg-center p-4  lg:p-10 rounded-lg "
            initial={{ opacity: 0, y: +100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
          >
            <div className="relative z-10 flex flex-col items-center lg:justify-center text-center text-white ">
              <div className="flex flex-col items-center lg:flex-row">
                <motion.div
                  className="mb-4 lg:mb-0 lg:mr-14"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={ImageAvatar}
                    alt="Rodolpho Pinheiro"
                    className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]  xl:w-[350px] xl:h-[350px] rounded-full bg-gray-400 border-8 border-blue-500 hover:border-blue-700 transition duration-300 shadow-lg"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col justify-center items-center dark:text-gray-300  text-blue-600"
                  initial={{ opacity: 0, x: +100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: +100 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4">
                    Olá, eu sou Rodolpho Pinheiro
                  </h1>
                  <h2 className="text-xl md:text-xl mb-6">
                    Desenvolvedor Frontend
                  </h2>
                  <p className="max-w-2xl mb-6 text-lg">
                    Eu crio soluções inovadoras para a web e mobile utilizando
                    as mais recentes tecnologias. Conheça mais sobre meu
                    trabalho e habilidades.
                  </p>

                  <a
                    target="blank"
                    href="https://drive.google.com/file/d/15kAF7DGpPmDhHRuHeBCe-hIHjPkQR-8K/view?usp=drive_link"
                    className="flex justify-center items-center font-semibold gap-1 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Download CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                      ></path>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8"></div>
          </motion.section>
        </div>
      </div>
    </div>
    </Area>
  );
}
