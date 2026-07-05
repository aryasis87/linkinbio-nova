import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Nova Ardhana","jobTitle":"Creative Technologist","url":"https://nova.pintuweb.com","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://nova.pintuweb.com"),
  title: "Nova Ardhana — Links",
  description: "Link in bio creative technologist Nova Ardhana: semua karya, tulisan, dan kontak dalam satu tempat.",
  applicationName: "Nova Ardhana",
  keywords: ["link in bio", "creative technologist", "portfolio", "karya", "kontak"],
  authors: [{ name: "Nova Ardhana" }],
  creator: "Nova Ardhana",
  publisher: "Nova Ardhana",
  alternates: { canonical: "https://nova.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nova.pintuweb.com",
    siteName: "Nova Ardhana",
    title: "Nova Ardhana — Links",
    description: "Link in bio creative technologist Nova Ardhana: semua karya, tulisan, dan kontak dalam satu tempat.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Nova Ardhana — Links" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Ardhana — Links",
    description: "Link in bio creative technologist Nova Ardhana: semua karya, tulisan, dan kontak dalam satu tempat.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
