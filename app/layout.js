import "./globals.css";
import { Inter } from "next/font/google";
import Headers from "./_components/Headers";
import Footer from "./_components/Footer";
import { LanguageProvider } from "./_context/LanguageContext"; // <-- import context

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Locanda",
  description: "La Locanda - Authentic Italian restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        <LanguageProvider>
          <Headers />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
