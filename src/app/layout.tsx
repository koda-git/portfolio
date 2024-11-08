import type { Metadata } from "next";
import { Rubik, Inter, Fira_Code } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


import "./globals.css";


export const metadata: Metadata = {
  title: "My portfolio",
  description: "Created using react and next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
