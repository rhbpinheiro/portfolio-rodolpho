import { Projeto } from "@/interfaces/interface";
import ImgAppIdagro from "../../public/projetos/app.png";
import ImgSiteIdagrov2 from "../../public/projetos/sitev2.png";
import ImgSiteIdagrov1 from "../../public/projetos/sitev1.png";
import ImgModulos from "../../public/projetos/renagro.png";
import ImgBitcent from "../../public/projetos/bitcent.png";
import ImgVamosCozinhar from "../../public/projetos/cozinhar.png";
import ImgDespesas from "../../public/projetos/despesas.png";
import ImgMotorStore from "../../public/projetos/moto.png";
import ImgPortfolio from "../../public/projetos/portfolio.png";
import ImgNotes from "../../public/projetos/notes.png";
import ImgDevstravel from "../../public/projetos/devstravel.png";
import { SkillIconsReactDark } from "@/icons/SkillIconsReactDark";
import { SkillIconsDartDark } from "@/icons/SkillIconsDartDark";
import { SkillIconsNextjsDark } from "@/icons/SkillIconsNextjsDark";
import { SkillIconsTypescript } from "@/icons/SkillIconsTypescript";
import { SkillIconsStyledcomponents } from "@/icons/SkillIconsStyledcomponents";
import { DeviconFirebase } from "@/icons/DeviconFirebase";
import { SkillIconsTailwindcssDark } from "@/icons/SkillIconsTailwindcssDark";
import { SkillIconsFlutterDark } from "@/icons/SkillIconsFlutterDark";

export const projetos: Projeto[] = [
  {
    imagem: ImgPortfolio,
    titulo: "Portfólio",
    descricao:
      "Desenvolvido para mostrar os meus projetos e meus conhecimentos.",
    stacks: [
      { name: "React.js", icon: <SkillIconsReactDark className="w-8 h-8" /> },
      { name: "Next.js", icon: <SkillIconsNextjsDark className="w-8 h-8" /> },
      { name: "Next.js", icon: <SkillIconsTailwindcssDark className="w-8 h-8" /> },
      {
        name: "TypeScript",
        icon: <SkillIconsTypescript className="w-8 h-8" />,
      },
    ],
    repositorio: 'https://github.com/rhbpinheiro/portfolio-rodolpho',
    site: "https://play.google.com/store/apps/details?id=br.com.idagromaquinas.app&pli=1",
  },
  {
    imagem: ImgAppIdagro,
    titulo: "Aplicativo ID Agro Máquinas",
    descricao:
      "Nesse projeto fui responsável por desenvolver o front-end da nova verão do aplicativo ID Agro Máquinas e também atuo na manutenção e desenvolvimento de novas funcionalidades.",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: null,
    site: "https://play.google.com/store/apps/details?id=br.com.idagromaquinas.app&pli=1",
  },
  {
    imagem: ImgModulos,
    titulo: "Módulos Renagro",
    descricao:
      "Nesse projeto atuo na sustentação e desenvolvimento de novas funcionalidades relacionado ao front-end.",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: null,
    site: null,
  },
  {
    imagem: ImgSiteIdagrov2,
    titulo: "Site ID Agro Máquinas versão 2.0",
    descricao:
      "Nesse projeto fui responsável por desenvolver o front-end da nova vesão do site ID Agro Máquinas, no site você encontra todas as informações relevantes ao projeto.",
    stacks: [
      { name: "React.js", icon: <SkillIconsReactDark className="w-8 h-8" /> },
      { name: "Next.js", icon: <SkillIconsNextjsDark className="w-8 h-8" /> },
      { name: "Next.js", icon: <SkillIconsTailwindcssDark className="w-8 h-8" /> },
      {
        name: "TypeScript",
        icon: <SkillIconsTypescript className="w-8 h-8" />,
      },
    ],
    repositorio: null,
    site: "https://www.idagro.com.br/",
  },
  {
    imagem: ImgSiteIdagrov1,
    titulo: "Site ID Agro Máquinas versão 1.0",
    descricao:
      "A Primeira vesão já existia mas em Wordpress, meu trabalho foi migrar a tecnogia o site para Flutter Web.",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: null,
    site: null,
  },
  {
    imagem: ImgMotorStore,
    titulo: "MotorStore",
    descricao:
      "Projeto desenvolvido durante meus estudos de programação. Neste projeto eu fiz o desenvolvimento do front-end e o back-end.",
    stacks: [
      { name: "React.js", icon: <SkillIconsReactDark className="w-8 h-8" /> },

      {
        name: "Styled-Components",
        icon: <SkillIconsStyledcomponents className="w-8 h-8" />,
      },
      {
        name: "TypeScript",
        icon: <SkillIconsTypescript className="w-8 h-8" />,
      },
      {
        name: "Firebase",
        icon: <DeviconFirebase className="w-8 h-8" />,
      },
    ],
    repositorio: 'https://github.com/rhbpinheiro/motostore',
    site: null,
  },
  {
    imagem: ImgDevstravel,
    titulo: "DevsTravel",
    descricao:
      "Projeto desenvolvido durante meus estudos de programação. ",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: 'https://github.com/rhbpinheiro/devstravel',
    site: null,
  },
  {
    imagem: ImgBitcent,
    titulo: "Bitcent",
    descricao:
      "Projeto desenvolvido durante meus estudos de programação.",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: 'https://github.com/rhbpinheiro/bitcent',
    site: null,
  },
  {
    imagem: ImgVamosCozinhar,
    titulo: "Vamos Cozinhar",
    descricao:
      "Projeto desenvolvido durante meus estudos de programação.",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: 'https://github.com/rhbpinheiro/vamos_cozinhar',
    site: null,
  },
  {
    imagem: ImgVamosCozinhar,
    titulo: "Vamos Cozinhar",
    descricao:
      "Projeto desenvolvido durante meus estudos de programação.",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: 'https://github.com/rhbpinheiro/vamos_cozinhar',
    site: null,
  },
  {
    imagem: ImgDespesas,
    titulo: "Despesas Pessoais",
    descricao:
      "Projeto desenvolvido durante meus estudos de programação. ",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: 'https://github.com/rhbpinheiro/-personal_expenses',
    site: null,
  },
  {
    imagem: ImgDespesas,
    titulo: "Despesas Pessoais",
    descricao:
      "Projeto desenvolvido durante meus estudos de programação. ",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: 'https://github.com/rhbpinheiro/-personal_expenses',
    site: null,
  },
  {
    imagem: ImgNotes,
    titulo: "Notes",
    descricao:
      "Projeto desenvolvido durante meus estudos de programação. ",
    stacks: [
      { name: "Flutter", icon: <SkillIconsFlutterDark className="w-8 h-8" /> },
      { name: "Dart", icon: <SkillIconsDartDark className="w-8 h-8" /> },
    ],
    repositorio: 'https://github.com/rhbpinheiro/notes',
    site: null,
  },
];
