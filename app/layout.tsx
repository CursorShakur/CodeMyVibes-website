import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { FixedNavbar } from "@/components/fixed-navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "CodeMyVibe - Bringing Your Visions to Life with Code",
  description: "Creating vibrant, innovative projects with a unique coding style.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans pt-16`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FixedNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}