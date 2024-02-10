import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import {Provider} from "@/components/Provider/provider";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keywarts.com - Inspire Your Midjourney Art",
  description: "Unlock the full potential of AI art creation with Keywarts.com, the ultimate Midjourney prompt helper. Discover inspiring prompts for your Midjourney projects and elevate your AI artwork.",
  keywords: [
    "Midjourney Prompt Helper",
    "AI Art Generator",
    "Creative Prompts for AI",
    "Midjourney Prompt Ideas",
    "AI Image Generator Inspiration",
    "Illustration and Painting Prompts",
    "AI Artwork Inspiration",
    "Generate Art with AI",
    "Digital Art Generator Prompts",
    "Explore AI Art Styles"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/icons/logo.png"/>
      <GoogleAnalytics gaId="G-QKS6PM99ZD"></GoogleAnalytics>
    </head>
    <body className={`${inter.className} dark`}>
    <Provider>
          <Nav/>
          <main className="app">
            {children}
            <Analytics/>
          </main>
        </Provider>
      </body>
    </html>
  );
}
