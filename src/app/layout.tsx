import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Template from "@/pages/Template";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protfolio Rodolpho",
  description: "Fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-auto `}>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-32x32.png"
        />
          <Template>{children}</Template>
      </body>
    </html>
  );
}
