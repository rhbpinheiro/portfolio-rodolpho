import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface Stack {
  name: string;
  icon: StaticImageData;
}


export interface Projeto {
  imagem: StaticImageData;
  titulo: string;
  descricao: string;
  stacks: Stack[];
  repositorio: string | null;
  site: string | null;
}