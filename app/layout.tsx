import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Akdeniz Yapı Market & Çilingir - Konyaaltı Antalya",
  description: "Konyaaltı'nın güvenilir yapı marketi ve çilingir hizmeti. 24/7 acil kapı açma, kilit değiştirme, anahtar kopyalama ve yapı malzemeleri. 0543 234 1401",
  keywords: "Konyaaltı çilingir, Antalya yapı market, anahtar kopyalama, kilit değiştirme, kapı açma, yapı malzemeleri, hırdavat, Konyaaltı anahtar",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Akdeniz Yapı Market & Çilingir - Konyaaltı",
    description: "24/7 çilingir hizmeti ve yapı malzemeleri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
