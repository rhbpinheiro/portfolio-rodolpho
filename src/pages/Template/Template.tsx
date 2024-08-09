import Pagina from "@/components/Pagina";
import React from "react";
import Header from "./Header";
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
