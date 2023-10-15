import MainNavigation from "@/components/Layout/MainNavigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "REST Countries API",
  description: "Information about countries all over the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-800`}>
        <MainNavigation />
        <main className="px-12 bg-slate-50 dark:bg-gray-800">{children}</main>
      </body>
    </html>
  );
}
