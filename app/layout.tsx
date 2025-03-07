import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { FixedNavbar } from "@/components/fixed-navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "CodeMyVibes | Creative Developer Portfolio",
  description: "Explore my journey through code, creativity, and innovation. A showcase of web development projects and technical expertise.",
  keywords: ["web development", "portfolio", "React", "Next.js", "TypeScript", "developer"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codemyvibes.vercel.app",
    siteName: "CodeMyVibes",
    title: "CodeMyVibes | Creative Developer Portfolio",
    description: "Explore my journey through code, creativity, and innovation. A showcase of web development projects and technical expertise.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeMyVibes Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMyVibes | Creative Developer Portfolio",
    description: "Explore my journey through code, creativity, and innovation. A showcase of web development projects and technical expertise.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans pt-16 bg-background text-foreground antialiased transition-colors duration-300`}>
        <FixedNavbar />
        {children}
      </body>
    </html>
  )
}