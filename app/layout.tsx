import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROVEN | Your Gateway to Exchange Ownership",
  description: "PROVEN enables individuals to participate in the revenue activity of major cryptocurrency trading platforms. Own shares of the world's leading crypto exchanges.",
  keywords: ["crypto", "dividend", "exchange", "USDT", "investment", "cryptocurrency", "PROVEN"],
  authors: [{ name: "PROVEN" }],
  openGraph: {
    title: "PROVEN | Your Gateway to Exchange Ownership",
    description: "Own shares of the world's leading crypto exchanges. Receive dividend-style returns linked to exchange activity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
