import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dongwook Kim",
  description: "Dongwook Kim's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
