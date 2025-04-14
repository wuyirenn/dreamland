import type { Metadata } from "next";
import { NunitoSans, AvantGarde } from "@/utils/customFonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dreamland",
  description: "Personal website of Christian Yi-Renn Wu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="h-full">
      <body className={cn(
        "relative h-full antialiased",
        NunitoSans.variable,
        AvantGarde.variable
      )}>
        <main className="relative flex min-h-screen cursor-crosshair">
          <div className="flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
