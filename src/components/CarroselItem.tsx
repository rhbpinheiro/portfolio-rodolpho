// components/CarouselItem.js
import { Projeto } from "@/interfaces/interface";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
interface CarouselItemProps {
  projeto: Projeto;
}

const CarouselItem = ({ projeto }: CarouselItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-6 px-8 mb-10 w-full rounded-lg shadow-md md:space-x-4 ">
      <Image
        src={projeto.imagem}
        alt={projeto.titulo}
        className="flex-2 rounded-lg border-spacing-3 border-4 w-[300px] h-[200px] md:w-[450px] md:h-[350px] lg:w-[450px] lg:h-[350px] xl:w-[550px] xl:h-[400px] dark:border-gray-300 border-blue-500 mb-4 md:mb-0 "
      />
      <div className="flex flex-col justify-evenly w-[300px] h-[300px] md:W-[200px] md:h-[350px] xl:h-[400px]  lg:h-[350px] dark:bg-zinc-600 bg-gray-200 rounded-lg p-4 border-4 dark:text-gray-300  text-blue-600  border-blue-500 dark:border-gray-300 ">
        <p className="mb-2 md:my-2 text-md xl:text-lg font-bold">{projeto.titulo}</p>
        <p className=" mb-2 md:mb-2 text-justify text-[14px] md:text-base">{projeto.descricao}</p>
        <p className=" ">Stacks utilizadas:</p>

        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
          {projeto.stacks.map((stack, stackIndex) => (
            <li
              key={stackIndex}
              data-tooltip-id="stack-tooltip"
              data-tooltip-content={stack.name}
              data-tooltip-place="top"
              className="flex items-center  text-sm  rounded cursor-pointer"
            >
              {stack.icon}
            </li>
          ))}
          <Tooltip id="stack-tooltip" />
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href={projeto.repositorio ?? ""}
            target="_blank"
            rel="noopener noreferrer"
            className={`${projeto.repositorio ? "block" : "hidden"} flex justify-center items-center text-sm font-semibold gap-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition duration-300`}
          >
            Repositório
          </a>
          <a
            href={projeto.site ?? ""}
            target="_blank"
            rel="noopener noreferrer"
            className={`${projeto.site ? "block" : "hidden"} flex justify-center items-center text-sm font-semibold gap-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition duration-300`}
            
          >
            Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
