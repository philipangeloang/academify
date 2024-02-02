import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Academify",
  description: "Your friend in the Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
