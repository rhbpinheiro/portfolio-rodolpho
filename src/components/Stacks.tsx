'use client';
import React from "react";
import { Tooltip } from "react-tooltip";
import { SkillIconsDartDark } from "@/icons/SkillIconsDartDark";
import { SkillIconsFlutterDark } from "@/icons/SkillIconsFlutterDark";
import { SkillIconsGit } from "@/icons/SkillIconsGit";
import { SkillIconsJavascript } from "@/icons/SkillIconsJavascript";
import { SkillIconsNextjsDark } from "@/icons/SkillIconsNextjsDark";
import { SkillIconsNodejsDark } from "@/icons/SkillIconsNodejsDark";
import { SkillIconsPostgresqlDark } from "@/icons/SkillIconsPostgresqlDark";
import { SkillIconsPostman } from "@/icons/SkillIconsPostman";
import { SkillIconsReactDark } from "@/icons/SkillIconsReactDark";
import { SkillIconsTypescript } from "@/icons/SkillIconsTypescript";
import { SkillIconsTailwindcssDark } from "@/icons/SkillIconsTailwindcssDark";
import { SkillIconsStyledcomponents } from "@/icons/SkillIconsStyledcomponents";

export default function StacksDark() {
  const stacks = [
    { Component: SkillIconsFlutterDark, name: "Flutter" },
    { Component: SkillIconsDartDark, name: "Dart" },
    { Component: SkillIconsJavascript, name: "JavaScript" },
    { Component: SkillIconsTypescript, name: "TypeScript" },
    { Component: SkillIconsReactDark, name: "React.js" },
    { Component: SkillIconsNextjsDark, name: "Next.js" },
    { Component: SkillIconsTailwindcssDark, name: "Tailwind CSS" },
    { Component: SkillIconsStyledcomponents, name: "Styled-Components" },
    { Component: SkillIconsNodejsDark, name: "Node.js" },
    { Component: SkillIconsPostman, name: "Postman" },
    { Component: SkillIconsPostgresqlDark, name: "PostgreSQL" },
    { Component: SkillIconsGit, name: "Git" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center mb-6 mt-2 gap-4">
      {stacks.map(({ Component, name }) => (
        <div key={name} className="relative group">
          <Component
            className="w-8 h-8 md:w-10 md:h-10 transition-transform transform group-hover:scale-110 cursor-pointer"
            data-tooltip-id="stack-tooltip"
            data-tooltip-content={name}
          />
        </div>
      ))}
      <Tooltip id="stack-tooltip" />
    </div>
  );
}