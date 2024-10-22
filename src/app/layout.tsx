import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["900", "700", "500", "400", "300", "200"]
});

export const metadata: Metadata = {
  title: "Bsfay Studio",
  description: "BSFAY Studio",
  icons: "/monogram.svg"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
