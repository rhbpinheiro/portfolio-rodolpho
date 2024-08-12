"use client";
import Area from "@/components/Area";
import ImageFamilia from "../../../public/familia.png";
import Image from "next/image";
import StacksDark from "../../components/Stacks";
import { motion } from "framer-motion";

export default function PageSobre() {
  return (
    <Area>
    <div className="p-6 md:px-0 mb-6 md:mb-0">

      <div className="flex flex-col lg:flex-row items-center p-5 mb-14  md:p-5 justify-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
        <div className="flex-grow">
          <motion.section
            id="sobre"
            className="relative bg-cover bg-center p-4  lg:p-10 rounded-lg "
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
          >
            <div className="relative z-10 flex  flex-col items-center justify-center h-full text-center text-white ">
              <div className="flex flex-col-reverse items-center lg:flex-row">
                <motion.div
                  className="flex flex-col justify-center items-center dark:text-gray-300  text-blue-600"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4">
                    Sobre mim
                  </h1>

                  <p className="max-w-2xl mb-4 text-justify text-lg">
                    Sou um profissional de 44 anos, casado e pai de duas filhas,
                    natural de Fortaleza, Ceará. Após muitos anos no comércio de
                    autopeças, migrei para a tecnologia em 2021.
                  </p>

                  <p className="max-w-2xl mb-4 text-justify text-lg">
                    Desde 2022, tenho atuado como desenvolvedor Frontend Web
                    utilizando Flutter, React e Next.js, além de trabalhar como
                    desenvolvedor Mobile com Flutter. Minha transição para a
                    tecnologia tem sido uma jornada gratificante, onde aplico
                    minha experiência para criar soluções inovadoras e
                    eficientes.
                  </p>

                  <p className="max-w-2xl mb-2 text-lg">Habilidades</p>
                  <StacksDark />
                </motion.div>
                <motion.div
                  className="mb-4 lg:mb-0 lg:ml-14"
                  initial={{ opacity: 0, x: +100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: +100 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={ImageFamilia}
                    alt="Rodolpho Pinheiro"
                    className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] rounded-xl bg-gray-400 border-8 border-blue-500 hover:border-blue-700 transition duration-300 mb-3"
                  />
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
