"use client";
import Area from "@/components/Area";
import logo1 from "../../../public/logo1.png";
import logo2 from "../../../public/logo2.png";
import Image from "next/image";
import MenuItem from "../MenuItem";
import { usePathname } from "next/navigation";
import DarkModeButton from "../DarkModeButton";
import MenuMobile from "../MenuMobile";
import { ThemeProvider, useTheme } from "@/contexts/themeProvider";
import { Suspense } from "react";

export default function Header() {
  const pathName = usePathname();
  const { theme } = useTheme();

  const listaMenu = [
    { path: "/", name: "Home" },
    { path: "/sobre", name: "Sobre" },
    { path: "/projetos", name: "Projetos" },
    { path: "/contatos", name: "Contato" },
  ];
  console.log(theme)
  return (
      <Area>
        <div className="">
          <div className=" fixed top-0 left-0 right-0 bg-slate-100 dark:bg-gray-900 dark:text-slate-100 text-blue-900  mx-auto flex justify-between items-center w-full  shadow-md z-50 p-2">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full">
              <Image
                src={theme === "dark" ? logo1 : logo2}
                alt="logo"
                className="w-16 h-16 md:w-18 md:h-18 rounded-lg md:rounded-xl border-4 dark:border-gray-400 border-blue-800"
              />
              <div className="md:hidden">
                <MenuMobile />
              </div>
              <div className="md:flex gap-6 items-center justify-center hidden">
                {listaMenu.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    isActive={pathName === item.path}
                  />
                ))}
                <DarkModeButton />
              </div>
            </div>
          </div>
        </div>
      </Area>
  );
}
