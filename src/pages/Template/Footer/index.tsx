"use client";
import Area from "@/components/Area";
import logo from "../../../../public/logo1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuItem from "../Header/MenuItem";

export default function Footer() {
  return (
    <Area>
      <div className="text-sm fixed bottom-0 left-0 right-0 bg-slate-100 dark:bg-gray-900 dark:text-slate-100 text-blue-900  border-t-2 dark:border-gray-700 border-slate-300 mx-auto flex justify-between items-center w-full  shadow-md z-50 p-2">
        <div className="flex flex-col max-w-[1200px] mx-auto justify-center items-center w-full">
          <span className="font-semibold">Desenvolvido por Rodolpho Pinheiro </span>
          <span>
     
            ® {new Date().getFullYear()} - Todos os direitos reservados
          </span>
        </div>
      </div>
    </Area>
  );
}
