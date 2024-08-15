import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Template from "@/pages/Template";
import { ThemeProvider } from "@/contexts/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Rodolpho",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-32x32.png"
        />
      </head>
      <body className={`${inter.className} overflow-auto`}>
        <ThemeProvider>
          <Template>{children}</Template>
        </ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9FJTQ5ETEN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9FJTQ5ETEN');
          `}
        </Script>
      </body>
    </html>
  );
}