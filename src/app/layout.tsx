import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Aqiqah Lombok",
  description:
    "Catering Aqiqah Siap Saji Yang Membantu 2.250+ Keluarga Tunaikan Aqiqah Tanpa Ribet",
  icons: {
    icon: [
      {
        url: "/logo3.png",
        href: "/logo3.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={montserrat.variable}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
