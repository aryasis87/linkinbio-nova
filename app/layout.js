import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Nova Ardhana — Links",
  description: "Creative technologist. Semua karya, tulisan, dan kontak dalam satu tempat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
