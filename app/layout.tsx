import type { Metadata } from "next";
import "@/app/ui/global.css";
import { open_sans } from "@/app/ui/fonts";
import Navi from "@/app/ui/navi";

export const metadata: Metadata = {
  title: "NR",
  description: "Nathalie Rosario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.className} antialiased min-h-screen bg-center bg-cover bg-no-repeat bg-bg-color text-white`}
      >
        <Navi />
        <main>{children}</main>
      </body>
    </html>
  );
}
