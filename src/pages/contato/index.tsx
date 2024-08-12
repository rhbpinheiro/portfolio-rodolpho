"use client";
import Area from "@/components/Area";
import ContactForm from "@/components/ContactForm";
import { SkillIconsGithubDark } from "@/icons/SkillIconsGithubDark";
import { SkillIconsGmailDark } from "@/icons/SkillIconsGmailDark";
import { SkillIconsLinkedinDark } from "@/icons/SkillIconsLinkedin";
import { motion } from "framer-motion";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { Toaster } from "sonner";

export default function PageContato() {
  return (
    <Area>
      <Toaster position="top-center" richColors  />
      <div className="flex flex-col  items-center px-6 md:px-0 mb-12 md:mb-0">
        <h1 className="text-3xl font-bold mb-2 dark:text-slate-200 text-blue-500">
          Contato
        </h1>

        <div className="flex-grow">
          <motion.section
            id="projetos"
            className=" flex gap-5 w-full"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: +100 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" z-10 flex-1 flex flex-col items-center justify-center h-full text-center text-slate-600 ">
              <ContactForm />
            </div>
          </motion.section>
        </div>
      </div>
    </Area>
  );
}
