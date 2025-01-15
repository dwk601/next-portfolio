import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/toggle";
import { WavyBackground } from "@/components/ui/wavy-background";

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
        <div className="fixed inset-0 z-[-1]">
          <WavyBackground
            className="w-full"
            containerClassName="fixed inset-0"
            blur={8}
            speed="slow"
            waveOpacity={0.3}
          />
        </div>
        <div className="relative z-10 min-h-screen">
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
