export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { NavigationHeader } from "@/components/global/header";
import { cn } from "@/utils/cn";
import { Providers } from "@/utils/providers";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="w-full flex pt-4 pb-10 justify-center">
            <NavigationHeader />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
