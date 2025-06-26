import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const geistRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const geistMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ir Softwares",
  description: "Sistemas e aplicativos sob medida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>IR SOFTWARES | Desenvolvimento de Sistemas e Apps Sob Medida</title>
        <meta name="description" content="Soluções personalizadas em desenvolvimento de sistemas e aplicativos para pequenas e médias empresas. Tire sua ideia do papel com a IR SOFTWARES." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="IR SOFTWARES" />
        <meta name="keywords" content="desenvolvimento de software, aplicativos, sistemas, IR SOFTWARES, sistemas sob medida, apps, desenvolvimento" />

        {/* Open Graph para redes sociais */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IR SOFTWARES | Desenvolvimento de Sistemas e Apps Sob Medida" />
        <meta property="og:description" content="Soluções personalizadas em desenvolvimento de sistemas e aplicativos." />
        <meta property="og:url" content="https://irsoftwares.com.br" />
        <meta property="og:image" content="https://irsoftwares.com.br/caminho-da-imagem-de-preview.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IR SOFTWARES | Desenvolvimento de Sistemas e Apps Sob Medida" />
        <meta name="twitter:description" content="Soluções personalizadas em desenvolvimento de sistemas e aplicativos." />
        <meta name="twitter:image" content="https://irsoftwares.com.br/caminho-da-imagem-de-preview.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistRoboto.variable} ${geistMontserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
