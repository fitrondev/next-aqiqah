import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    absolute: "Aqiqah Lombok",
    default: "Aqiqah Lombok",
    template: "%s - Aqiqah Lombok",
  },
  description:
    "Harga kambing di Aqiqah Lombok juga sangat terjangkau, mulai dari 3 juta saja Ayah & Bunda sudah bisa menunaikan ibadah aqiqah.",
  icons: {
    icon: [
      {
        url: "/images/logo3.png",
        href: "/images/logo3.png",
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
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
