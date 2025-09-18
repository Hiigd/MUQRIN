import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "اليوم الوطني السعودي - ثانوية الأمير مقرن بن عبدالعزيز",
  description: "موقع احتفالي باليوم الوطني السعودي المجيد",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">{children}</body>
    </html>
  )
}
