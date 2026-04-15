import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beyaz Yaka Fizyo - Sağlıklı Çalışma Rehberi",
  description: "Masa başı çalışanlar için fizyoterapi ve ergonomi rehberi. Karpal tünel, boyun düzleşmesi ve postür bozukluklarına karşı çözümler.",
  keywords: "ergonomi, fizyoterapi, ofis sağlığı, yazılımcı sağlığı, postür, karpal tünel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
