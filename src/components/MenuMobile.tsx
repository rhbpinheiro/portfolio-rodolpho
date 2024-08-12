"use client";
import { useState } from "react";
import Link from "next/link";
import { MaterialSymbolsMenuRounded } from "@/icons/MaterialSymbolsMenuRounded";
import DarkModeButton from "./DarkModeButton";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const listaMenu = [
    { path: "/", name: "Home" },
    { path: "/sobre", name: "Sobre" },
    { path: "/projetos", name: "Projetos" },
    { path: "/contatos", name: "Contato" },
  ];

  return (
    <div className="dropdown flex">
         <div className="mt-3">
        <DarkModeButton />
      </div>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        onClick={toggleMenu}
      >
        <MaterialSymbolsMenuRounded width="2em" height="2em" />
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content dark:bg-base-100 rounded-box z-[1] mt-12 w-52 p-2 shadow transform -translate-x-16 bg-slate-100"
        >
          {listaMenu.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <span onClick={closeMenu} className="p-2 hover:text-blue-500">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
   
    </div>
  );
}
