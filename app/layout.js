import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "Soar Studio | Graphiste et designer freelance",
  description: "Portfolio de Soar Studio : logos, sites web, flyers et motion design.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
