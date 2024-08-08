'use client'
import { useState } from "react";
import Link from "next/link";
import { MaterialSymbolsMenuRounded } from "@/icons/MaterialSymbolsMenuRounded";

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
    <div className="dropdown">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow transform -translate-x-16"
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
