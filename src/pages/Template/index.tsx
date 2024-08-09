"use client";
import Pagina from "@/components/Pagina";
import React, { Suspense } from "react";
import Header from "../../components/Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/contexts/themeProvider";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Pagina>
        <Header />
        {children}
        <Footer />
      </Pagina>
    </ThemeProvider>
  );
}
