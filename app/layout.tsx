'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ChakraProvider } from "@chakra-ui/react";
import system from "@/theme"; // import the fixed system
import { TodoProvider } from "@/contexts/TodoContext";
import { Toaster, toaster } from "@/components/ui/toaster"

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta-sans',
});

// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body className={`${jakarta.variable} antialiased`}>
        <ChakraProvider value={system}>
          <TodoProvider>
            <Toaster />
            {children}

          </TodoProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
